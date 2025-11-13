import { SparklesText } from "@/src/components/magicui/sparkles-text";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Plane } from "lucide-react";
import gsLogo from "@/src/assets/logos/gs-logo.png";
import mensugLogo from "@/src/assets/logos/mensug-logo.png";
import cameralkLogo from "@/src/assets/logos/cameralk-logo.png";
import gsmbTechnicalLogo from "@/src/assets/logos/gsmb-technical.png";
import heritageHotel from "@/src/assets/logos/heritage-hotel.png";
import newUniverse from "@/src/assets/logos/new-universe.png";
import slVlog from "@/src/assets/logos/sl-vlog.png";
import thriposha from "@/src/assets/logos/thriposha.png";
import trendySolutions from "@/src/assets/logos/trendy-solutions.png";
import serendibFragrance from "@/src/assets/logos/serendib-fragrance.png";
import offrampcolombo from "@/src/assets/images/off-ramp-colombo.jpg";

import herobanner1 from "@/src/assets/images/hero-banner1.png";
import herobanner2 from "@/src/assets/images/hero-banner2.png";
import herobanner3 from "@/src/assets/images/hero-banner3.png";
import herobanner4 from "@/src/assets/images/hero-banner4.png";
import herobanner5 from "@/src/assets/images/hero-banner5.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import { Marquee } from "@/src/components/magicui/marquee";

const customers = [
  {
    customer: "Mensug",
    logo: mensugLogo,
  },
  {
    customer: "Thriposha",
    logo: thriposha,
  },
  {
    customer: "Trendy Solutions",
    logo: trendySolutions,
  },
  {
    customer: "New Universe",
    logo: newUniverse,
  },
  {
    customer: "GreenStream",
    logo: gsLogo,
  },
  {
    customer: "SL Vlog",
    logo: slVlog,
  },
  {
    customer: "CameraLk",
    logo: cameralkLogo,
  },
  {
    customer: "Heritage Hotel",
    logo: heritageHotel,
  },

  {
    customer: "GSMB Technical",
    logo: gsmbTechnicalLogo,
  },
  {
    customer: "Serendib Fragrance",
    logo: serendibFragrance,
  },
  {
    customer: "Offramp Colombo",
    logo: offrampcolombo,
  },
];

const TRANSITION_DURATION = 800;
const SLIDE_INTERVAL = 6000;

function Hero() {
  const navigate = useNavigate();
  const heroImages = [
    herobanner1,
    herobanner2,
    herobanner3,
    herobanner4,
    herobanner5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="hero"
      data-header-style="transparent"
      className="relative overflow-hidden mt-10"
    >
      {/* Background Image */}
      <div className="fixed inset-0 -z-10 flex items-center justify-center p-4">
        <div className="relative h-[92%] lg:w-[91vw] xl:w-[98vw] rounded-lg overflow-hidden">
          {/* Background image */}
          <img
            src="/Pattern.png"
            className="w-full h-full object-cover rounded-lg"
            alt="Incorporation.lk - We provide complete solutions for your business"
          />

          {/* Radial gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,1) 0%,  rgba(0,0,0,0.0) 100%)",
              mixBlendMode: "normal",
            }}
          />
        </div>
      </div>
      <div className="container/fluid flex flex-col items-center justify-center">
        {/* Vison, Growth, Impact */}
        <div className="relative flex justify-center lg:justify-start mt-5 cursor-default">
          <Badge
            variant="outline"
            className="text-xs bg-gray-100 text-primary-foreground rounded-full border-gray-300 antialiased "
          >
            <p className="flex items-center gap-2 ">
              <Plane className="w-5 h-5 text-primary-500" />
              <span className="text-sm text-neutral-700">
                Vision. Growth. Impact.
              </span>
            </p>
          </Badge>
        </div>
        {/* Hero Main Title */}
        <div className="flex flex-col text-center mt-6 items-center transition-all duration-200 cursor-default">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center px-6 leading-tight lg:leading-snug max-w-4xl">
            Empowering Your Business,
            <br className="hidden lg:block" /> Every Step of the Way
          </p>
          {/* Sub description */}
          <div className="flex max-w-[75%]">
            <p className="text-neutral-500 mt-5">
              We provide complete solutions for your business, from company
              registration, secretarial services, accounting, tax, and
              compliance to cutting-edge technology support that fuels your
              growth. With our expertise, your business runs seamlessly and
              stays ahead.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-x-2 mt-6 ">
          <Button
            variant={"default"}
            className={"rounded-full min-w-[120px]"}
            size={"lg"}
            onClick={() => navigate("/incobot")}
          >
            <SparklesText sparklesCount={3} className={"text-primary-50"}>
              IncoBot
            </SparklesText>
          </Button>
          <Button
            onClick={() =>
              window.open("https://platform.incorporation.lk/", "_blank")
            }
            size={"lg"}
            variant={"outline"}
            className={
              "rounded-full border-neutral-200 bg-neutral-100 min-w-[120px] hover:bg-white"
            }
          >
            Get Started
          </Button>
        </div>

        {/* Banner Image/Video */}
        <div className="hidden relative md:flex w-[85%] aspect-[16/8] mt-6 items-center justify-center overflow-hidden rounded-lg shadow-lg ">
          {heroImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Hero Banner"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Customers */}
        <div className="flex flex-col bg-white mt-10 rounded-4xl items-center justify-center text-neutral-900">
          <p className="py-5">Trusted by Over 1,000 Clients Islandwide</p>
          <div className="relative flex w-[55%] flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:35s]">
              {customers.map((c, index) => (
                <img
                  key={index}
                  src={c.logo}
                  alt={c.customer}
                  className="h-8 w-auto object-contain hover:grayscale-0 transition mr-10"
                />
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
          </div>
          {/* <div className="flex flex-wrap items-center justify-center gap-8 my-5">
            {customers.map((c, index) => (
              <img
                key={index}
                src={c.logo}
                alt={c.customer}
                className="h-8 w-auto object-contain hover:grayscale-0 transition"
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
