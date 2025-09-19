import { Button } from "@/src/components/ui/button";
import StatsBanner from "@/src/components/custom/StatsBanner";
import ServicesCards from "@/src/components/custom/ServicesCards";
import { useNavigate } from "react-router";

function WhyChooseUs() {
  const navigate = useNavigate();
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
            Start & Run Your Business
            <br /> With Confidence
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
        <ServicesCards />
        {/* Find More Button */}
        <div className="my-12">
          <Button
            onClick={() => navigate("/services")}
            size="lg"
            className="text-white px-8 py-3 rounded-full"
          >
            Find more
          </Button>
        </div>
      </div>
      <div className="">
        <StatsBanner />
      </div>
    </section>
  );
}

export default WhyChooseUs;
