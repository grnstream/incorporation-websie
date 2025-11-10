import { Button } from "@/src/components/ui/button";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function PricingMobile({ plans, additionalContent }) {
  const [clickedPlan, setClickedPlan] = useState(null);

  const isPlanActive = (plan) => {
    if (clickedPlan) return clickedPlan === plan.name;
    return plan.isHighlighted; // Default to highlighted state
  };

  const cardsContainerRef = useRef(null);
  const defaultContainerRef = useRef(null);

  const handleCardClick = (planName) => {
    setClickedPlan(clickedPlan === planName ? null : planName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the cards container
      if (
        cardsContainerRef.current &&
        !cardsContainerRef.current.contains(event.target)
      ) {
        setClickedPlan(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!defaultContainerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClickedPlan(null);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(defaultContainerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-2">
      <div className="w-full px-2 py-2 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8" ref={cardsContainerRef}>
          {plans.map((plan, index) => {
            const isActive = clickedPlan === plan.name;
            return (
              <div key={index} className="relative">
                {plan.isHighlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 border-3 border-primary-400 rounded-full">
                          <span className="inline-block bg-white text-blue-500 text-xs font-semibold px-4 py-2 rounded-full  whitespace-nowrap">
                            Most Popular
                          </span>
                        </div>
                      )}
                <div
                  onClick={() => handleCardClick(plan.name)}
                  className={`rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300
                ${
                  isPlanActive(plan)
                    ? "bg-gradient-to-b from-primary-400 to-primary-500 text-white"
                    : "bg-white text-gray-900"
                }
                `}
                >
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">
                      {plan.name}

                      {/* <span className="ml-2 inline-block bg-white text-blue-500 text-xs font-semibold px-2 py-1 rounded-full">
                                Most Popular
                              </span> */}
                    </h3>
                    <div className="h-12 lg:h-20 overflow-hidden">
                      <p
                        className={`text-xs sm:text-sm mb-4 text-start ${
                          isPlanActive(plan) ? "text-blue-100" : "text-gray-600"
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>
                    <div className="mb-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span
                        className={`text-sm ml-1 ${
                          isPlanActive(plan) ? "text-blue-200" : "text-gray-500"
                        }`}
                      >
                        / T&C apply
                      </span>
                    </div>
                  </div>

                  <Button
                    size={"lg"}
                    onClick={() =>
                      window.open(
                        "https://platform.incorporation.lk/",
                        "_blank"
                      )
                    }
                    className={`w-full py-6 px-6 rounded-full font-medium mb-8 transition-all duration-300 ${
                      isPlanActive(plan)
                        ? "bg-white text-blue-500 hover:bg-gray-100"
                        : "bg-gradient-to-b from-primary-400 to-primary-500 text-white hover:bg-gradient-to-t"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>

                  {/* Features List */}
                  <div className="space-y-4 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`rounded-full p-1 mt-0.5 flex-shrink-0 ${
                            isPlanActive(plan) ? "bg-white" : "bg-blue-500"
                          }`}
                        >
                          <Check
                            size={12}
                            className={
                              isPlanActive(plan) ? "text-blue-500" : "text-white"
                            }
                          />
                        </div>
                        <span
                          className={`text-sm leading-relaxed ${
                            isPlanActive(plan) ? "text-white" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl text-sm leading-relaxed">
                        {
                          additionalContent.find((c) => c.name === plan.name)
                            ?.additional
                        }
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      {/* if any card is in clicked state this div should be hidden */}
      {!clickedPlan && (
        <div
          ref={defaultContainerRef}
          className={`justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-10 rounded-2xl shadow-xl w-full mt-6 text-center text-sm leading-relaxed`}
        >
          <p>
            In addition to the above services, our clients also receive reliable
            IT support from branding and website development to POS, ERP and
            custom software solutions, all at affordable rates designed to make
            their business journey smooth and successful.
          </p>
        </div>
      )}
    </div>
  );
}

export default PricingMobile;
