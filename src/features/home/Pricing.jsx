import PricingCard from "@/src/components/custom/PricingCard";

function Pricing() {
  const plans = [
    {
      name: "Basic Plan",
      price: "LKR 50000.00",
      description:
        "Ideal for individuals who need quick access to basic features.",
      buttonText: "Get Started",
      isHighlighted: false,
      features: [
        "Company name reservation",
        "Company registration document preparation",
        "Director rubber seal (one) and company rubber seal",
        "Preparing documents for opening a bank account (one)",
        "TIN registration",
        "Online client portal access",
        "Any additional directors: 3000 LKR each",
        "On request embossed seal: 3500 LKR",
        "On request share certificate book: 5000 LKR",
      ],
    },
    {
      name: "Advanced Options",
      price: "LKR 50000.00",
      description:
        "Ideal for individuals who need advanced features and tools for client work.",
      buttonText: "Get Started Now",
      isHighlighted: true,
      features: [
        "Company name reservation",
        "Company registration document preparation",
        "Director rubber seal (one) and company rubber seal",
        "Preparing documents for opening a bank account (one)",
        "TIN registration",
        "Online client portal access",
        "Any additional directors: 3000 LKR each",
        "On request embossed seal: 3500 LKR",
        "On request share certificate book: 5000 LKR",
      ],
    },
    {
      name: "Other",
      price: "LKR 50000.00",
      description:
        "Ideal for businesses who need personalized services and security for large teams.",
      buttonText: "Get Started",
      isHighlighted: false,
      features: [
        "Company name reservation",
        "Company registration document preparation",
        "Director rubber seal (one) and company rubber seal",
        "Preparing documents for opening a bank account (one)",
        "TIN registration",
        "Online client portal access",
        "Any additional directors: 3000 LKR each",
        "On request embossed seal: 3500 LKR",
        "On request share certificate book: 5000 LKR",
      ],
    },
  ];
  return (
    <section
      id="pricing"
      data-header-style="transparent"
      className="relative overflow-hidden mt-25"
    >
      <div className="flex flex-col text-center mt-5 transition-all duration-200 max-w-5xl mx-auto">
        <p className="text-5xl lg:text-5xl font-semibold text-center ">
          Straightforward and Customised Pricing Options
        </p>
        {/* Sub description */}
        <div className="flex mx-auto">
          <p className="text-neutral-500 mt-5">
            To receive a quote, please email us at contact@incorporation.lk or book a meeting.
          </p>
        </div>
      </div>
      <div className="relative mt-16 flex w-full flex-col items-center justify-center overflow-hidden">
        <PricingCard plans={plans}/>
      </div>
    </section>
  );
}

export default Pricing;
