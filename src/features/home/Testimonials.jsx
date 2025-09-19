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
          <p className="text-neutral-500 mt-5 mb-5">
            We provide complete solutions for your business, from company
            registration, secretarial services, accounting, tax, and compliance
            to cutting-edge technology support that fuels your growth. With our
            expertise, your business runs seamlessly and stays ahead.
          </p>
        </div>
      </div>
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical  className="[--duration:39s]">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>

        <Marquee pauseOnHover vertical  className="[--duration:41s]">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>

        <Marquee pauseOnHover vertical  className="[--duration:40s] hidden lg:flex">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>

       <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div> </div>
    </section>
  );
}

export default Testimonials;
