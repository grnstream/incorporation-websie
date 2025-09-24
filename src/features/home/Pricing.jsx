import { Button } from "@/src/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function Pricing() {
  const plans = [
    {
      name: "Kickstart",
      price: "LKR 29,900",
      description:
        "Get your business legally registered and recognized with all the essentials",
      buttonText: "Get Started",
      isHighlighted: false,
      features: [
        "Name approval",
        "Form 1, Form 18 & Form 19",
        "Articles of association",
        "Incorporation certificate (printed copy)",
        "TIN registration",
        "Online client portal access",
        "Company secretary for registration purpose - no upfront charges",
      ],
    },
    {
      name: "Momentum",
      price: "LKR 39,900",
      description:
        "Perfect for entrepreneurs who want a smooth and affordable start to their business journey",
      buttonText: "Get Started Now",
      isHighlighted: true,
      features: [
        "Includes everything in Starter",
        "Pre-ink company seal",
        "Pre-ink director seal",
        "Resolution for corporate bank account opening",
        "TIN registration",
        "Free Accounting & Bookkeeping consultation - Free for 1st year",
        "Free Tax consultation - Free for 1st year",
        "VAT and SSCL related consultations - Free for 1st year",
        "Free IT consultation - Free for 1st year",
      ],
    },
    {
      name: "Elevate",
      price: "LKR 79,900",
      description:
        "Perfect for entrepreneurs ready to launch with impact, you can start operations quickly and grow with confidence",
      buttonText: "Get Started",
      isHighlighted: false,
      features: [
        "Includes everything in Growth",
        "Logo, letterhead, visiting card design",
        "Name board design",
        "Single page web design (T&C applies)",
        "Free social media account creation (FB, IG, LinkedIn)",
        "Free Google My Business Setup",
        "10% Discount on any additional graphic designs",
        "10% Discount on social media content creation and management",
        "10% Discount on POS System/Software",
        "Free hosting and maintaining the website for 3 months - Domain name not included",
        "Free basic SEO",
      ],
    },
  ];

  const additionalContent = [
    {
      name: "Kickstart",
      additional: "kickstart blaallal gglffa ngsk falknd gkdglk",
    },
    {
      name: "Momentum",
      additional: "momentum ngsk falknd gkdglk",
    },
    {
      name: "Elevate",
      additional: "elevate gglffa ngsk falknd gkdglk",
    },
  ];
  const timeoutRef = useRef();
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const activeContent =
    additionalContent.find((c) => c.name === hoveredPlan)?.additional ??
    "In addition to the above services, our clients also receive reliable IT support from branding and website development to POS, ERP and custom software solutions, all at affordable rates designed to make their business journey smooth and successful.";
  const handleMouseEnter = (name) => {
    clearTimeout(timeoutRef.current);
    setHoveredPlan(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredPlan(null), 100);
  };
  return (
    <section
      id="pricing"
      data-header-style="transparent"
      className="container/fluid relative mt-25 mb-10"
    >
      <div className="flex flex-col text-center mt-5 transition-all duration-200 max-w-5xl mx-auto cursor-default">
        <p className="text-5xl lg:text-5xl font-semibold text-center ">
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
          <div className="min-h-[100vh] py-10 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Pricing Cards */}
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="group relative transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => handleMouseEnter(plan.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Main Card */}
                    <div
                      className={`rounded-2xl p-8 relative z-0 h-full flex flex-col ${
                        plan.isHighlighted
                          ? "bg-gradient-to-b from-primary-400 to-primary-500 text-white shadow-2xl"
                          : "bg-white text-gray-900 shadow-lg"
                      } transition-all duration-300 hover:shadow-xl `}
                    >
                      {/* Plan Header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                        <div className="h-12 lg:h-20 overflow-hidden">
                          <p
                            className={`text-xs sm:text-sm mb-4 text-start ${
                              plan.isHighlighted
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
                            className={`text-sm ml-1 ${
                              plan.isHighlighted
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
                        onClick={() =>
                          window.open(
                            "https://platform.incorporation.lk/",
                            "_blank"
                          )
                        }
                        className={`w-full py-6 px-6 rounded-full font-medium mb-8 transition-all duration-300 ${
                          plan.isHighlighted
                            ? "bg-white text-blue-500 hover:bg-gray-100"
                            : "bg-gradient-to-b from-primary-400 to-primary-500 text-white hover:bg-gradient-to-t transition-colors duration-300"
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
                                plan.isHighlighted ? "bg-white" : "bg-blue-500"
                              }`}
                            >
                              <Check
                                size={12}
                                className={`${
                                  plan.isHighlighted
                                    ? "text-blue-500"
                                    : "text-white"
                                }`}
                              />
                            </div>
                            <span
                              className={`text-sm leading-relaxed ${
                                plan.isHighlighted
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
                ))}
              </div>
            </div>
          </div>

          <div className="flex px-4 pb-24 w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -110,
                  filter: "blur(3px)",
                },
                visible: {
                  opacity: 1,
                  y: 20,
                  filter: "blur(0px)",
                },
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 py-10 rounded-2xl shadow-xl w-full max-w-6xl mx-auto"
            >
              <p className="text-md text-center leading-relaxed">
                {activeContent}
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex px-4 pb-24"></div>
      </div>
    </section>
  );
}

export default Pricing;
