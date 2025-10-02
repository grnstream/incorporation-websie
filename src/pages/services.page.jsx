import ServicesCards from "../components/custom/ServicesCards";
import logoletter from "@/src/assets/icons/logo-letter.png";
import webdevelopment from "@/src/assets/icons/webdevelopment.png";
import onlinestore from "@/src/assets/icons/online-store.png";
import contentcreator from "@/src/assets/icons/content-creator.png";
import pointofsale from "@/src/assets/icons/point-of-sale.png";
import erp from "@/src/assets/icons/erp.png";
import expenses from "@/src/assets/icons/expenses.png";
import custom from "@/src/assets/icons/custom.png";
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
      title: "Logo, Letterhead, Visiting Card Designs",
      logo: logoletter,
      description:
        "Create a strong brand identity with professional designs that leave a lasting impression.",
      isHighlighted: true,
    },
    {
      title: "Website Design",
      logo: webdevelopment,
      description: "Engaging, modern websites tailored to your business needs",
    },
    {
      title: "E-commerce Integration",
      logo: onlinestore,
      description:
        "Seamlessly sell online with secure and scalable e-commerce",
    },
    {
      title: "Content Creation",
      logo: contentcreator,
      description:
        "Compelling content that connects with your audience and builds trust.",
    },
    {
      title: "POS Systems",
      logo: pointofsale,
      description: "Smart point-of-sale systems to simplify sales and manage inventory.",
    },
    {
      title: "ERP Systems",
      logo: erp,
      description:
        "All-in-one business management with powerful ERP solutions",
    },
    {
      title: "Accounting Software",
      logo: expenses,
      description:
        "Easy-to-use software to manage your accounts and finances effortlessly.",
    },
    {
      title: "Custom Software",
      logo: custom,
      description: "Tailor-made software built to match your unique business processes",
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
      {/* Banner Image/Video */}  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl w-full">
        {additionalfeatures.map((feature, index) => (
          <ServiceCard
            key={index}
            title={feature.title}
            description={feature.description}
            logo={feature.logo}
            className="hover:from-green-400 hover:to-green-800"
            secondaryIconClassName={"group-hover:bg-green-700"}
            secondaryIconBgClassName={"bg-gradient-to-b from-green-500 to-green-700 group-hover:bg-white group-hover:bg-none"}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20 items-start">
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
