import { SparklesText } from "@/src/components/magicui/sparkles-text";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Plane, PlayIcon } from "lucide-react";
import gsLogo from "@/public/gs-logo.png";
import InteractiveSelector from "@/src/components/ui/interactive-selector";
const customers = [
  {
    customer: "GreenStream",
    logo: gsLogo,
  },
  {
    customer: "GreenStream",
    logo: gsLogo,
  },
  {
    customer: "GreenStream",
    logo: gsLogo,
  },
  {
    customer: "GreenStream",
    logo: gsLogo,
  },
];

function Hero() {
  return (
    <section
      id="hero"
      data-header-style="transparent"
      className="relative overflow-hidden mt-10"
    >
      {/* Background Image */}
      <div className="fixed inset-0 -z-10 flex items-center justify-center p-4 mt-10">
        <img
          src="/Pattern.png"
          className="h-[92%] w-[93%] rounded-lg object-cover text-transparent"
          alt="CandySmart AI-powered hiring platform dashboard showing CV shortlisting features"
          style={
            {
              // filter: "blur(20px)",
              // animation: "unblur 1s ease-out 0.5s forwards",
            }
          }
        />
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
        <div className="flex flex-col text-center mt-5 items-center transition-all duration-200 cursor-default">
          <p className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center ">
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
        <div className="flex justify-center gap-x-2 mt-5 ">
          <Button variant={"default"} className={"rounded-full min-w-[120px]"}>
            <SparklesText sparklesCount={3} className={"text-primary-50"}>
              Incorp Al
            </SparklesText>
          </Button>
          <Button
            variant={"outline"}
            className={
              "rounded-full border-neutral-200 bg-neutral-100 min-w-[120px]"
            }
          >
            Learn More
          </Button>
        </div>
        <div className="w-full">
          <InteractiveSelector />
        </div>
        {/* Banner Image/Video */}
        {/* <div className="flex bg-neutral w-[720px] h-[400px] mt-10 rounded-4xl items-center justify-center">
          
        </div> */}
        {/* Customers */}
        <div className="flex flex-col bg-white mt-10 rounded-4xl items-center justify-center text-neutral-900">
          <p>Trusted by Over 1,000 Clients Worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-6 my-5">
            {customers.map((c, index) => (
              <img
                key={index}
                src={c.logo}
                alt={c.customer}
                className="h-12 w-auto object-contain hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
