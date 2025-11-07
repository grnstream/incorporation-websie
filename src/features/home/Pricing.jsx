import useIsMobile from "@/src/hooks/useIsMobile";
import PricingMobile from "./PricingMobile";
import PricingDesktop from "./PricingDesktop";

function Pricing() {
  const isMobile = useIsMobile(1023);

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
        "Online client portal access",
        "Company secretary for registration purpose",
        "Any services not listed above will be charged separately",
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
        "One Pre-ink director seal",
        "Resolution for corporate bank account opening",
        "TIN registration",
        "1st Year Corporate Secretarial Services — FREE!",
        "Free Accounting & Bookkeeping consultation - Free for 1st year",
        "Free Tax consultation - Free for 1st year",
        "VAT and SSCL related consultations - Free for 1st year",
        "Free IT consultation - Free for 1st year",
      ],
    },
    {
      name: "Elevate",
      price: "LKR 89,900",
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
      additional: (
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center md:flex-row gap-y-4 md:gap-x-5 py-6 px-2 md:px-8 text-white md:divide-x divide-white/20 items-center text-center md:text-left">
            <div className="md:pr-5 text-sm lg:text-base font-semibold border-b md:border-b-0 border-white/20 pb-4 md:pb-0">
              <div className="block mb-2 text-sm">Additional Directors</div>
              <div className="text-xs md:text-sm opacity-80">
                3,000 LKR each
              </div>
            </div>
            <div className="flex flex-col md:px-5 border-b md:border-b-0 border-white/20 pb-4 md:pb-0">
              <div className="text-sm font-semibold mb-2">
                On Request Services
              </div>
              <div className="text-xs md:text-sm  opacity-80 mb-1">
                Embossed seal: 3,500 LKR
              </div>
              <div className="text-xs md:text-sm  opacity-80">
                Share certificate book: 5,000 LKR
              </div>
            </div>
            <div className="flex flex-col md:px-5 border-b md:border-b-0 border-white/20 pb-4 md:pb-0">
              <div className="text-sm font-semibold mb-2">Registrations</div>
              <div className="text-xs md:text-sm  opacity-80 mb-1">
                Export, import: 10,000 LKR
              </div>
              <div className="text-xs md:text-sm  opacity-80">
                Trademark: 15,000 LKR
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="text-sm">* Conditions Applied</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Momentum",
      additional: (
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center md:flex-row gap-y-4 md:gap-x-5 py-6 px-2 md:px-8 text-white md:divide-x divide-white/20 items-center  text-center md:text-left">
            <div className="md:pr-5 text-sm lg:text-base font-semibold border-b md:border-b-0 border-white/20 pb-4 md:pb-0">
              <div className="block mb-2 text-sm">Additional Directors</div>
              <div className="text-xs md:text-sm opacity-80">
                3,000 LKR each
              </div>
            </div>
            <div className="flex flex-col md:px-5 border-b md:border-b-0 border-white/20 pb-4 md:pb-0">
              <div className="text-sm font-semibold mb-2">
                On Request Services
              </div>
              <div className="text-xs md:text-sm  opacity-80 mb-1">
                Embossed seal: 3,500 LKR
              </div>
              <div className="text-xs md:text-sm  opacity-80">
                Share certificate book: 5,000 LKR
              </div>
            </div>
            <div className="flex flex-col md:px-5 border-b md:border-b-0 border-white/20 pb-4 md:pb-0">
              <div className="text-sm font-semibold mb-2">Registrations</div>
              <div className="text-xs md:text-sm  opacity-80 mb-1">
                Export, import: 10,000 LKR
              </div>
              <div className="text-xs md:text-sm  opacity-80">
                Trademark: 15,000 LKR
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="text-sm">* Conditions Applied</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Elevate",
      additional: (
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center md:flex-row gap-y-4 md:gap-x-5 py-6 px-2 md:px-8 text-white md:divide-x divide-white/20 items-center  text-center md:text-left">
            <div className="md:pr-5 text-sm lg:text-base font-semibold border-b md:border-b-0 border-white/20 pb-4 md:pb-0">
              <div className="block mb-2 text-sm">Additional Directors</div>
              <div className="text-xs md:text-sm opacity-80">
                3,000 LKR each
              </div>
            </div>
            <div className="flex flex-col md:px-5 border-b md:border-b-0 border-white/20 pb-4 md:pb-0">
              <div className="text-sm font-semibold mb-2">
                On Request Services
              </div>
              <div className="text-xs md:text-sm  opacity-80 mb-1">
                Embossed seal: 3,500 LKR
              </div>
              <div className="text-xs md:text-sm  opacity-80">
                Share certificate book: 5,000 LKR
              </div>
            </div>
            <div className="flex flex-col md:px-5 border-b md:border-b-0 border-white/20 pb-4 md:pb-0">
              <div className="text-sm font-semibold mb-2">Registrations</div>
              <div className="text-xs md:text-sm  opacity-80 mb-1">
                Export, import: 10,000 LKR
              </div>
              <div className="text-xs md:text-sm  opacity-80">
                Trademark: 15,000 LKR
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="text-sm">* Conditions Applied</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="pricing">
      {isMobile ? (
        <PricingMobile plans={plans} additionalContent={additionalContent} />
      ) : (
        <PricingDesktop plans={plans} additionalContent={additionalContent} />
      )}
    </section>
  );
}

export default Pricing;
