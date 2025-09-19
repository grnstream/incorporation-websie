import { FileText, Phone, Star } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

function PricingPage() {
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

  const services = [
    { name: "Any additional directors", price: "3,000 LKR each" },
    { name: "On request embossed seal", price: "3,500 LKR" },
    { name: "On request share certificate book", price: "5,000 LKR" },
    { name: "Export, import registration", price: "10,000 LKR" },
    { name: "Trademark registration", price: "15,000 LKR" },
  ];

  const terms = [
    "All free services included in the packages must be claimed within one (1) year from the date of company registration.",
    "Domain registration is not included in the Elevate Package.",
    "Additional services (extra directors, embossed seal, share certificate book, export/import registration, trademark registration) are chargeable separately.",
  ];
//   return (
//     // <div
//     //   className="min-h-screen p-6"
//     // >
//     //   <div className="max-w-4xl mx-auto space-y-8">
//     //     {/* Header */}
//     //     <div className="text-center space-y-4">
          
//     //       <h1
//     //         className="text-4xl font-bold tracking-tight"
//     //         style={{ color: "var(--color-primary-900)" }}
//     //       >
//     //         Other Services & Support
//     //       </h1>
//     //       <p
//     //         className="text-lg max-w-2xl mx-auto"
//     //         style={{ color: "var(--color-primary-700)" }}
//     //       >
//     //         Comprehensive business services to support your company's growth and
//     //         compliance needs
//     //       </p>
//     //     </div>

//     //     {/* Services Grid */}
//     //     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//     //       {services.map((service, index) => (
//     //         <Card
//     //           key={index}
//     //           className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
//     //         >
//     //           <CardContent className="p-6">
//     //             <div className="flex items-start justify-between">
//     //               <div className="space-y-2">
//     //                 <h3
//     //                   className="font-semibold text-lg leading-tight"
//     //                   style={{ color: "var(--color-primary-800)" }}
//     //                 >
//     //                   {service.name}
//     //                 </h3>
//     //                 <Badge
//     //                   variant="secondary"
//     //                   className="text-white font-medium"
//     //                   style={{ backgroundColor: "var(--color-primary-500)" }}
//     //                 >
//     //                   {service.price}
//     //                 </Badge>
//     //               </div>
//     //               <FileText
//     //                 className="w-6 h-6 flex-shrink-0 mt-1"
//     //                 style={{ color: "var(--color-primary-400)" }}
//     //               />
//     //             </div>
//     //           </CardContent>
//     //         </Card>
//     //       ))}
//     //     </div>

//     //     {/* Support Message */}
//     //     <Card
//     //       className="border-0 shadow-lg"
//     //       style={{ backgroundColor: "var(--color-primary-100)" }}
//     //     >
//     //       <CardContent className="p-8 text-center">
//     //         <h2
//     //           className="text-2xl font-bold mb-4"
//     //           style={{ color: "var(--color-primary-900)" }}
//     //         >
//     //           Comprehensive Business Support
//     //         </h2>
//     //         <p
//     //           className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
//     //           style={{ color: "var(--color-primary-700)" }}
//     //         >
//     //           Not limited to the packages above, we also support you in a wide
//     //           range of business and technological needs, ensuring you have
//     //           everything required to operate smoothly.
//     //         </p>
//     //         <Button
//     //           size="lg"
//     //           className="text-white font-medium px-8 py-3 hover:opacity-90 transition-opacity"
//     //           style={{ backgroundColor: "var(--color-primary-600)" }}
//     //         >
//     //           <Phone className="w-4 h-4 mr-2" />
//     //           Get a Quote Today
//     //         </Button>
//     //       </CardContent>
//     //     </Card>

//     //     {/* Terms & Conditions */}
//     //     <Card className="border-0 shadow-lg">
//     //       <CardHeader
//     //         className="pb-4"
//     //         style={{ backgroundColor: "var(--color-primary-200)" }}
//     //       >
//     //         <CardTitle
//     //           className="text-2xl font-bold flex items-center gap-3"
//     //           style={{ color: "var(--color-primary-900)" }}
//     //         >
//     //           Terms & Conditions
//     //         </CardTitle>
//     //       </CardHeader>
//     //       <CardContent className="p-6">
//     //         <div className="space-y-4">
//     //           {terms.map((term, index) => (
//     //             <div key={index} className="flex items-start gap-3">
//     //               <div
//     //                 className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
//     //                 style={{ backgroundColor: "var(--color-primary-500)" }}
//     //               />
//     //               <p
//     //                 className="text-base leading-relaxed"
//     //                 style={{ color: "var(--color-primary-800)" }}
//     //               >
//     //                 {term}
//     //               </p>
//     //             </div>
//     //           ))}
//     //         </div>
//     //       </CardContent>
//     //     </Card>

//     //     {/* Footer */}
//     //     <div className="text-center py-4">
//     //       <p className="text-sm" style={{ color: "var(--color-primary-600)" }}>
//     //         Contact us for more information about our services and pricing
//     //       </p>
//     //     </div>
//     //   </div>
//     // </div>
//   );
}

export default PricingPage;
