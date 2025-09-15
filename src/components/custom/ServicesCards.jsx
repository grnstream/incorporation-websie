import registrationdoc from "@/src/assets/icons/document.png";
import guarantee from "@/src/assets/icons/trust.png";
import corporate from "@/src/assets/icons/corporate.png";
import bookkeeping from "@/src/assets/icons/bookkeeping.png";
import taxes from "@/src/assets/icons/taxes.png";
import vat from "@/src/assets/icons/vat.png";
import erp from "@/src/assets/icons/erp.png";
import ServiceCard from "./ServiceCard";

function ServicesCards() {
    const features = [
  {
    title: "Registration of Companies",
    logo: registrationdoc,
    description: "We help you register the limited liability companies according to current rules and regulations.",
    isHighlighted: true
  },
  {
    title: "Companies Limited by Guarantee",
    logo: guarantee, 
    description: "We help you register Companies Limited by Guarantee."
  },
  {
    title: "Corporate Secretarial services",
    logo: corporate, 
    description: "We offer comprehensive Corporate Secretarial services, compliance with regulatory obligations."
  },
  {
    title: "Accounting and Bookkeeping",
    logo: bookkeeping, 
    description: "Our expert team provides accounting and bookkeeping services."
  },
  {
    title: "Income Tax consultation",
    logo: taxes,     
    description: "We provide expert consultation on income tax matters."
  },
  {
    title: "VAT, SSCL related consolations",
    logo: vat, 
    description: "You can get assistance with VAT and SSCL computation and filing of returns via the RAMIS system."
  },
  {
    title: "HR Services",
    logo: erp, 
    description: "We handle EPF/ETF matters, filing R and C Forms, and assist with B Card registration."
  },
  {
    title: "TIN Registration",
    logo: registrationdoc, 
    description: "We can assist you in obtaining a TIN number online."
  }
];

  return (
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
  );
}
export default ServicesCards;
