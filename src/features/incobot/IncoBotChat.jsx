import React, { useEffect, useRef, useState } from "react";
import {
  Send,
  Volume2,
  Copy,
  ThumbsUp,
  ThumbsDown,
  ArrowUp,
} from "lucide-react";
import bot from "@/src/assets/bot.png";
import botHead from "@/src/assets/bot-head.png";
export default function IncoBotChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTo({
        top: messagesEndRef.current.scrollHeight,
        behavior: "smooth", // makes it animated
      });
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          type: "user",
          text: input,
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
        },
      ]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Thank you for your question. I'm processing your request...",
            time: new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }),
          },
        ]);
      }, 1000);
    }
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
        <div className="flex-1 bg-transparent rounded-3xl overflow-hidden flex flex-col max-h-[700px]" >
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
              className="flex-1 overflow-y-auto p-6 space-y-6 " style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
                      <div className="flex items-center gap-2 mb-2">
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
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                        <p className="text-gray-800 mb-4">{msg.text}</p>
                        <div className="flex gap-3">
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                            <Volume2 className="w-5 h-5 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                            <Copy className="w-5 h-5 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                            <ThumbsUp className="w-5 h-5 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                            <ThumbsDown className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="sticky bottom-0 p-6 border-t border-gray-200">
            <div className="flex gap-3 items-center bg-gray-50 rounded-2xl p-4 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition">
              <textarea
                rows={1}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Write a question..."
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 resize-none"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-b from-primary-500 to-primary-600 hover:bg-blue-700 text-white p-3 rounded-xl transition "
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
