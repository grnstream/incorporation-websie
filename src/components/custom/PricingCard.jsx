import { Check } from "lucide-react";
import { Button } from "../ui/button";

function PricingCard({ plans }) {
  return (
    <div className="min-h-[100vh] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group relative transition-all duration-300 hover:scale-105"
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
                        plan.isHighlighted ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span
                      className={`text-sm ml-1 ${
                        plan.isHighlighted ? "text-blue-200" : "text-gray-500"
                      }`}
                    >
                      / T&C apply
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  size={'lg'}
                  onClick={() =>
                    window.open("https://platform.incorporation.lk/", "_blank")
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
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`rounded-full p-1 mt-0.5 flex-shrink-0 ${
                          plan.isHighlighted ? "bg-white" : "bg-blue-500"
                        }`}
                      >
                        <Check
                          size={12}
                          className={`${
                            plan.isHighlighted ? "text-blue-500" : "text-white"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
                          plan.isHighlighted ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Container */}
              <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-b-2xl transform -translate-y-full opacity-0 invisible group-hover:-translate-y-3 group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out shadow-xl -z-10">
                <p className="text-sm text-center leading-relaxed">
                  In addition to the above services, our clients also receive reliable IT support 
                  from branding and website development to POS, ERP and custom software solutions, 
                  all at affordable rates designed to make their business journey smooth and successful.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
