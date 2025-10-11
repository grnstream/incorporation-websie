import React, { useEffect, useRef, useState } from "react";
import { Copy, ArrowUp, Square } from "lucide-react";

import bot from "@/src/assets/bot.png";
import botHead from "@/src/assets/bot-head.png";

export default function IncoBotChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  // const streamingMessageIndexRef = useRef(null);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTo({
        top: messagesEndRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const askQuestion = async (question) => {
    if (!question.trim() || isStreaming) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: question,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");
    setIsStreaming(true);
    abortControllerRef.current = new AbortController();

    setMessages((prev) => [
      ...prev,
      {
        type: "bot",
        text: "",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isStreaming: true,
      },
    ]);

    try {
      const API_URL = "http://127.0.0.1:8000";
      const response = await fetch(`${API_URL}/ask/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, k: 3 }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) throw new Error("HTTP error " + response.status);

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              setMessages((prev) => {
                const newMessages = [...prev];
                const lastMsg = newMessages[newMessages.length - 1];
                newMessages[newMessages.length - 1] = {
                  ...lastMsg,
                  text: (lastMsg.text || "") + data.chunk,
                };
                return newMessages;
              });
            } catch (e) {
              console.error("Error parsing chunk:", e);
            }
          }
        }
      }

      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].isStreaming = false;
        return newMessages;
      });
    } catch (error) {
      if (error.name === "AbortError") {
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          newMessages[lastIndex] = {
            ...newMessages[lastIndex],
            text: "Error processing your request.",
            isStreaming: false,
          };
          return newMessages;
        });
      } else {
        console.error("Error:", error);
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          newMessages[lastIndex] = {
            ...newMessages[lastIndex],
            text: "Sorry, there was an error processing your request.",
            isStreaming: false,
          };
          return newMessages;
        });
      }
    } finally {
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const formatMarkdownToHTML = (text) => {
    let html = text;

    // Escape HTML to prevent XSS
    html = html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Headers
    html = html.replace(
      /^### (.+)$/gm,
      '<h3 class="text-lg font-bold mt-4 mb-2 text-gray-900">$1</h3>'
    );
    html = html.replace(
      /^## (.+)$/gm,
      '<h2 class="text-xl font-bold mt-5 mb-3 text-gray-900">$1</h2>'
    );
    html = html.replace(
      /^# (.+)$/gm,
      '<h1 class="text-2xl font-bold mt-6 mb-4 text-gray-900">$1</h1>'
    );

    // Bold: **text**
    html = html.replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="font-semibold text-gray-900">$1</strong>'
    );

    // Inline code: `code`
    html = html.replace(
      /`(.+?)`/g,
      '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">$1</code>'
    );

    // Links: [text](url)
    html = html.replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>'
    );

    return html;
  };

  return (
    <div className="min-h-screen   flex items-center justify-center p-8">
      <div className="max-w-6xl w-full flex gap-8">
        {/* Robot Character */}
        <div className="hidden md:flex flex-shrink-0">
          <img
            src={bot}
            alt="IncoBot"
            className="w-60 h-auto object-contain"
            style={{ animation: "float 5s ease-in-out infinite" }}
          />
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-transparent rounded-3xl overflow-hidden flex flex-col max-h-[700px]">
          {messages.length === 0 ? (
            /* Welcome Screen */
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-5xl font-bold text-gray-900">
                  Start talking to
                </h1>
                <div className="flex-shrink-0">
                  <img
                    src={botHead}
                    alt="IncoBot"
                    className="w-25 h-auto object-contain"
                  />
                </div>
                <h1 className="text-5xl font-bold text-blue-600">IncoBot</h1>
              </div>

              <div className="space-y-2 text-gray-600 max-w-2xl">
                <p className="text-lg">Starting a business in Sri Lanka?</p>
                <p className="text-lg">
                  Need quick guidance on registration, compliance, or documents?
                </p>
                <p className="text-lg">
                  IncoBot is here to support you in every step of the way.
                </p>
              </div>
            </div>
          ) : (
            /* Chat Messages */
            <div
              className="flex-1 overflow-y-auto p-6 space-y-6 "
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              ref={messagesEndRef}
            >
              {messages.map((msg, idx) => (
                <div key={idx}>
                  {msg.type === "user" ? (
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                        <span className="font-semibold text-gray-900">You</span>
                        <span className="text-sm text-gray-500">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-gray-800">{msg.text}</p>
                    </div>
                  ) : (
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        </div>
                        <span className="font-semibold text-gray-900">
                          Results
                        </span>
                        <span className="text-sm text-gray-500">
                          {msg.time}
                        </span>
                      </div>
                      <div className=" rounded-2xl  border-0">
                        <div
                          className="text-gray-800 leading-relaxed"
                          style={{ whiteSpace: "pre-wrap" }}
                          dangerouslySetInnerHTML={{
                            __html: formatMarkdownToHTML(
                              msg.text || "🤖 Thinking..."
                            ),
                          }}
                        ></div>

                        {!msg.isStreaming && msg.text && (
                          <div className="flex gap-2 mt-4">
                            <button
                              onClick={() => handleCopy(msg.text, idx)}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                              title={
                                copiedIndex === idx
                                  ? "Copied!"
                                  : "Copy to clipboard"
                              }
                            >
                              {copiedIndex === idx ? (
                                <div className="flex items-center gap-1.5 text-green-600">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span className="text-sm font-medium">
                                    Copied
                                  </span>
                                </div>
                              ) : (
                                <Copy className="w-5 h-5 text-gray-600" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="sticky bottom-0 p-1 border-t border-gray-200">
            <div className="flex gap-3 items-center bg-gray-50 rounded-2xl p-4 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition">
              <textarea
                rows={2}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    askQuestion(input);
                  }
                }}
                disabled={isStreaming}
                style={{ minHeight: "24px" }}
                placeholder="Write a question..."
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 resize-none"
              />
              {isStreaming ? (
                <button
                  onClick={() => abortControllerRef.current?.abort()}
                  className="bg-gradient-to-b from-red-500 to-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition"
                  title="Stop generating"
                >
                  <Square className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => askQuestion(input)}
                  disabled={!input.trim()}
                  className="bg-gradient-to-b from-blue-500 to-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
