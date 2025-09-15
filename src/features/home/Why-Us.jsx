import { SparklesText } from "@/src/components/magicui/sparkles-text";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Plane, PlayIcon } from "lucide-react";
import gsLogo from "@/public/gs-logo.png";
import ServiceCard from "@/src/components/custom/ServiceCard";
import StatsBanner from "@/src/components/custom/StatsBanner";
const features = [
  {
    title: "Registration of Companies",
    logo: gsLogo, 
    description: "We help you register the limited liability companies according to current rules and regulations.",
    isHighlighted: true
  },
  {
    title: "Companies Limited by Guarantee",
    logo: gsLogo, 
    description: "We help you register Companies Limited by Guarantee."
  },
  {
    title: "Corporate Secretarial services",
    logo: gsLogo, 
    description: "We offer comprehensive Corporate Secretarial services, compliance with regulatory obligations."
  },
  {
    title: "Accounting and Bookkeeping",
    logo: gsLogo, 
    description: "Our expert team provides accounting and bookkeeping services."
  },
  {
    title: "Income Tax consultation",
    logo: gsLogo, 
    description: "We provide expert consultation on income tax matters."
  },
  {
    title: "VAT, SSCL related consolations",
    logo: gsLogo, 
    description: "You can get assistance with VAT and SSCL computation and filing of returns via the RAMIS system."
  },
  {
    title: "HR Services",
    logo: gsLogo, 
    description: "We handle EPF/ETF matters, filing R and C Forms, and assist with B Card registration."
  },
  {
    title: "TIN Registration",
    logo: gsLogo, 
    description: "We can assist you in obtaining a TIN number online."
  }
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      data-header-style="transparent"
      className="relative overflow-hidden mt-25"
    >
      <div className="container/fluid flex flex-col items-center justify-center">
        {/* Main Title */}
        <div className="flex flex-col text-center mt-5 items-center transition-all duration-200">
          <p className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center ">
            Start & Run Your Business<br/> With Confidence
          </p>
          {/* Sub description */}
          <div className="flex max-w-[75%]">
            <p className="text-neutral-500 mt-5">
              We take care of company registration, secretarial tasks,
              accounting, tax, and compliance . so you can focus on growing your
              dream.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl w-full">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              title={feature.title}
              description={feature.description}
              logo={feature.logo}
              
            />
          ))}
        </div>
        {/* Find More Button */}
        <div className="my-12">
          <Button 
            size="lg" 
            className="text-white px-8 py-3 rounded-full"
          >
            Find more
          </Button>
        </div>
        
      </div>
      <div className="">
            <StatsBanner/>
        </div>
    </section>
  );
}

export default WhyChooseUs;
