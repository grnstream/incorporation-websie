import { Check } from "lucide-react";

function PricingCard({ plans }) {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.isHighlighted
                  ? "bg-gradient-to-b from-primary-400 to-primary-500 text-white shadow-2xl relative"
                  : "bg-white text-gray-900 shadow-lg"
              } transition-all duration-300 hover:shadow-xl hover:scale-105`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.isHighlighted ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
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
              <button
                className={`w-full py-3 px-6 rounded-full font-medium mb-8 transition-all duration-300 ${
                  plan.isHighlighted
                    ? "bg-white text-blue-500 hover:bg-gray-100"
                    : "bg-gradient-to-b from-primary-400 to-primary-500 text-white hover:bg-gradient-to-t transition-colors duration-300"
                }`}
              >
                {plan.buttonText}
              </button>

              {/* Features List */}
              <div className="space-y-4">
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
