import ServicesCards from "../components/custom/ServicesCards";
import registrationdoc from "@/src/assets/icons/document.png";
import guarantee from "@/src/assets/icons/trust.png";
import corporate from "@/src/assets/icons/corporate.png";
import bookkeeping from "@/src/assets/icons/bookkeeping.png";
import taxes from "@/src/assets/icons/taxes.png";
import vat from "@/src/assets/icons/vat.png";
import erp from "@/src/assets/icons/erp.png";
import ServiceCard from "../components/custom/ServiceCard";

function ServicesPage() {
  const services = [
    {
      title: "Seamless Registration & Compliance",
      description:
        "Quick, stress-free registration and compliance support to launch and protect your business with confidence.",
    },
    {
      title: "Expert Accounting & Tax Support",
      description:
        "Accurate accounting and tax solutions that ensure compliance, reduce risks, and optimize your financial growth.",
    },
    {
      title: "Innovative Tech Solutions",
      description:
        "From branding and websites to POS, ERP, and custom software, we deliver smart solutions to empower your business.",
    },
    {
      title: "Reliable Ongoing Guidance",
      description:
        "Dedicated long-term support and expert advice to help you adapt, evolve, and scale successfully.",
    },
  ];

  const additionalfeatures = [
    {
      title: "Registration of Companies",
      logo: registrationdoc,
      description:
        "We help you register the limited liability companies according to current rules and regulations.",
      isHighlighted: true,
    },
    {
      title: "Companies Limited by Guarantee",
      logo: guarantee,
      description: "We help you register Companies Limited by Guarantee.",
    },
    {
      title: "Corporate Secretarial services",
      logo: corporate,
      description:
        "We offer comprehensive Corporate Secretarial services, compliance with regulatory obligations.",
    },
    {
      title: "Accounting and Bookkeeping",
      logo: bookkeeping,
      description:
        "Our expert team provides accounting and bookkeeping services.",
    },
    {
      title: "Income Tax consultation",
      logo: taxes,
      description: "We provide expert consultation on income tax matters.",
    },
    {
      title: "VAT, SSCL related consolations",
      logo: vat,
      description:
        "You can get assistance with VAT and SSCL computation and filing of returns via the RAMIS system.",
    },
    {
      title: "HR Services",
      logo: erp,
      description:
        "We handle EPF/ETF matters, filing R and C Forms, and assist with B Card registration.",
    },
    {
      title: "TIN Registration",
      logo: registrationdoc,
      description: "We can assist you in obtaining a TIN number online.",
    },
  ];
  return (
    <div className="container/fluid flex flex-col items-center justify-center  mt-10">
      <div className="flex flex-col text-center mt-5 items-center transition-all duration-200">
        <p className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center ">
          Start & Run Your Business
          <br /> With Confidence
        </p>
        {/* Sub description */}
        <div className="flex max-w-[75%]">
          <p className="text-neutral-500 mt-5">
            We take care of company registration, secretarial tasks, accounting,
            tax, and compliance . so you can focus on growing your dream.
          </p>
        </div>
      </div>
      <ServicesCards />
      <div className="flex flex-col text-center items-center transition-all duration-200 py-12 mt-10">
        <p className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center ">
          Smart Tech That Powers
          <br /> Your Growth
        </p>
        {/* Sub description */}
        <div className="flex max-w-[75%]">
          <p className="text-neutral-500 mt-5">
            We deliver end-to-end tech solutions that grow with your business.
          </p>
        </div>
      </div>
      {/* Banner Image/Video */}
      <div className="flex bg-neutral w-[1024px] h-[480px] mt-10 rounded-4xl items-center justify-center mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl w-full">
        {additionalfeatures.map((feature, index) => (
          <ServiceCard
            key={index}
            title={feature.title}
            description={feature.description}
            logo={feature.logo}
          />
        ))}
      </div>
      <div className="flex flex-col text-center items-center transition-all duration-200 py-12 mt-10">
        <p className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center ">
          Your Trusted Partner for
          <br /> Business & Technology
        </p>
        {/* Sub description */}
        <div className="flex max-w-[75%]">
          <p className="text-neutral-500 mt-5">
            With expert guidance, reliable compliance, and innovative tech
            solutions, we make it simple for you to start, run, and scale your
            business with confidence.
          </p>
        </div>
      </div>
      <div className="w-full max-w-6xl rounded-3xl bg-gradient-to-b from-primary-500 to-primary-600 py-4 mb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-center py-6 px-8 text-white"
              >
                {/* Title + Subtitle */}
                <div className="flex flex-col text-left">
                  <span className="text-sm lg:text-base font-semibold">
                    {service.title}
                  </span>
                  <span className="text-xs md:text-sm opacity-80">
                    {service.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
