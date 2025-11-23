import useIsMobile from "@/src/hooks/useIsMobile";
import PricingMobile from "./PricingMobile";
import PricingDesktop from "./PricingDesktop";

function Pricing() {
  const isMobile = useIsMobile(1023);

  const plans = [
    {
      name: "Kickstart",
      price: "LKR 39,900",
      description:
        "Best for growing businesses looking for tools & compliance support",
      buttonText: "Get Started Now",
      isHighlighted: false,
      features: [
        "Name approval",
        "Form 1, Form 18 & Form 19, Articles of association",
        "Incorporation certificate (printed copy)",
        "Online client portal access",
        "1st Year Corporate Secretarial Services — FREE!",
        "One Pre-ink director seal",
        "Resolution for corporate bank account opening",
        "TIN Registration",
        "Free Accounting & Bookkeeping Consultation - Free for 1st year",
        "Free Tax Consultation - Free for 1st year",
        "VAT and SSCL related Consultations - Free for 1st year",
        "Free Information & Technology Consultation - Free for 1st year"
      ],
    },
    {
      name: "Momentum",
      price: "LKR 129,900",
      description:
        "All-in-one, complete compliance & growth package, Includes everything in Kickstart, plus:",
      buttonText: "Get Started Now",
      isHighlighted: true,
      features: [
        "Logo, Letterhead, visiting card design",
        "Name board design",
        "Single page professional website design",
        "Free basic SEO",
        "Free social media account creation (FB, IG, LinkedIn)",
        "Free Google My Business Setup",
        "10% Discount on any additional graphic designs",
        "10% Discount on social media content creation",
        "10% Discount on POS System/Software",
        "20% Discount on any other software development",
        "Free hosting and maintaining the website for 6 months – Domain registration not included"
      ],
    },
    {
      name: "Infinity",
      price: "From: LKR 1.5M",
      description:
        "Premium ongoing IT, web & creative support for established businesses",
      buttonText: "Contact Us",
      isHighlighted: false,
      features: [
        "Dedicated project manager",
        "Day-to-day IT support for web, email-related guidance, basic tools",
        "Ongoing website maintenance, updates & security checks",
        "Web development support – new sections, pages, and small web applications",
        "System development support (subject to agreed scope)",
        "Continuous graphic design support (social media posts, flyers, banners, etc.)",
        "Content creation support",
        "Monthly work summary & activity report",
        "Quarterly strategy meeting to plan IT, web & digital marketing priorities",
        "Priority handling for urgent issues and support requests",
        "Discounted rates for large new systems, mobile apps & special projects",
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
      name: "Infinity",
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
