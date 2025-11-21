import { Button } from "@/src/components/ui/button";
import { Check } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function PricingDesktop({ plans, additionalContent }) {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const isPlanActive = (plan) => {
    if (hoveredPlan) return hoveredPlan === plan.name;
    return plan.isHighlighted; // otherwise fallback to recommended
  };

  const activeContent = additionalContent.find(
    (c) => c.name === (hoveredPlan)
  )?.additional ?? (
      <p>
        In addition to the above services, our clients also receive reliable IT
        support from branding and website development to POS, ERP and custom
        software solutions, all at affordable rates designed to make their
        business journey smooth and successful.
      </p>
    );


  return (
    <section
      id="pricing"
      data-header-style="transparent"
      className="container/fluid relative mt-25 mb-10"
    >
      <div className="flex flex-col text-center mt-5 transition-all duration-200 max-w-5xl mx-auto cursor-default">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center ">
          Straightforward and Customized Pricing Options
        </p>
        {/* Sub description */}
        <div className="flex mx-auto">
          <p className="text-neutral-500 mt-5">
            To receive a quote, please email us at{" "}
            <a
              href="mailto:contact@incorporation.lk"
              className="text-primary-600"
            >
              contact@incorporation.lk
            </a>{" "}
            or book a meeting.
          </p>
        </div>
      </div>

      <div>
        <div className="relative mt-12 flex w-full flex-col items-center justify-center">
          <div className="min-h-[80vh] py-10 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Pricing Cards */}
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                {plans.map((plan, index) => (
                  <div key={index} className="flex flex-col items-stretch">
                    <div
                      className="group relative transition-all duration-300 hover:scale-105 cursor-pointer h-full"
                      onMouseEnter={() => setHoveredPlan(plan.name)}
                      onMouseLeave={() => setHoveredPlan(null)}

                    >
                      {plan.isHighlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 border-3 border-primary-400 rounded-full">
                          <span className="inline-block bg-white text-blue-500 text-xs font-semibold px-4 py-2 rounded-full  whitespace-nowrap">
                            Best Value
                          </span>
                        </div>
                      )}
                      {/* Main Card */}
                      <div
                        className={`rounded-2xl p-8 relative z-0 h-full flex flex-col  ${isPlanActive(plan)
                            ? "bg-gradient-to-b from-primary-400 to-primary-500 text-white shadow-2xl"
                            : "bg-white text-gray-900 shadow-lg"
                          } transition-all duration-500 hover:shadow-xl`}
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
                              className={`text-xs sm:text-sm mb-4 text-start ${isPlanActive(plan)
                                  ? "text-blue-100"
                                  : "text-gray-600"
                                }`}
                            >
                              {plan.description}
                            </p>
                          </div>
                          <div className="mb-2">
                            <span className="text-3xl font-bold">
                              {plan.price}
                            </span>
                            <span
                              className={`text-sm ml-1 ${isPlanActive(plan)
                                  ? "text-blue-200"
                                  : "text-gray-500"
                                }`}
                            >
                              / T&C apply
                            </span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                          size={"lg"}
                          onClick={() => {
                            if (plan.buttonText === "Contact Us") {
                              window.location.href = "/contact";
                            } else {
                              window.open(
                                "https://platform.incorporation.lk/",
                                "_blank"
                              );
                            }
                          }}
                          className={`w-full py-6 px-6 rounded-full font-medium mb-8 transition-all duration-300 ${isPlanActive(plan)
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
                                className={`rounded-full p-1 mt-0.5 flex-shrink-0 ${isPlanActive(plan)
                                    ? "bg-white"
                                    : "bg-blue-500"
                                  }`}
                              >
                                <Check
                                  size={12}
                                  className={
                                    isPlanActive(plan)
                                      ? "text-blue-500"
                                      : "text-white"
                                  }
                                />
                              </div>
                              <span
                                className={`text-sm leading-relaxed ${isPlanActive(plan)
                                    ? "text-white"
                                    : "text-gray-700"
                                  }`}
                              >
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex px-2 pb-4 w-full justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -300,
                  filter: "blur(3px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                },
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 py-12 rounded-2xl shadow-xl w-full max-w-6xl mx-auto"
            >
              <div className="flex  w-full items-center justify-center mb-3">
                Additional Services
              </div>
              <div className="flex flex-col w-full items-center justify-center text-center text-sm leading-relaxed h-[280px] md:h-[250px] lg:h-[150px] mx-auto">
                {activeContent}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingDesktop;
