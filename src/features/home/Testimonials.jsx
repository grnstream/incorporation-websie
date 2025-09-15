import testimonialData from "@/public/data/testimonials.json";
import TestimonialCard from "@/src/components/custom/TestimonialCard";
import { Marquee } from "@/src/components/magicui/marquee";

function Testimonials() {
  return (
    <section
      id="testimonials"
      data-header-style="transparent"
      className="relative overflow-hidden mt-25"
    >
      <div className="flex flex-col text-center mt-5 items-center transition-all duration-200">
        <p className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center">
         Success Stories<br/> That Inspire Our Journey
        </p>
        {/* Sub description */}
        <div className="flex max-w-[75%]">
          <p className="text-neutral-500 mt-5">
            We provide complete solutions for your business, from company
            registration, secretarial services, accounting, tax, and compliance
            to cutting-edge technology support that fuels your growth. With our
            expertise, your business runs seamlessly and stays ahead.
          </p>
        </div>
      </div>
      <div className="relative mt-16 flex w-full flex-col items-center justify-center overflow-hidden">
        {/* <div className="relative flex w-full flex-col items-center justify-center overflow-hidden"> */}
        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l"></div>
      </div>
    </section>
  );
}

export default Testimonials;
