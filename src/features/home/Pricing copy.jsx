import PricingCard from "@/src/components/custom/PricingCard";

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
            To receive a quote, please email us at <a href="mailto:contact@incorporation.lk" className="text-primary-600">contact@incorporation.lk</a> or
            book a meeting.
          </p>
        </div>
      </div>

      <div>
        <div className="relative mt-12 flex w-full flex-col items-center justify-center group">
          <PricingCard plans={plans} />
          <div className="absolute top-full left-0 right-0 justify-self-center bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 py-10 rounded-2xl transform -translate-y-full opacity-0 invisible group-hover:-translate-y-3 group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out shadow-xl -z-10 max-w-6xl">
            <p className="text-md text-center leading-relaxed">
              In addition to the above services, our clients also receive
              reliable IT support from branding and website development to POS,
              ERP and custom software solutions, all at affordable rates
              designed to make their business journey smooth and successful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
