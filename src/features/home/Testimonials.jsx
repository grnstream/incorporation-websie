import TestimonialCard from "@/src/components/custom/TestimonialCard";
import { Marquee } from "@/src/components/magicui/marquee";
import cpBandara from "@/src/assets/images/chathura-yapa-bandara.jpg";
import devinda from "@/src/assets/images/devinda-matharage.jpg";
import gihan from "@/src/assets/images/gihan-nadeera-de-silva.jpg";
import serendibFragrance from "@/src/assets/images/serendib-fragrance.jpg";
import offrampcolombo from "@/src/assets/images/off-ramp-colombo.jpg";

const testimonialData = [
  {
    name: "Chathura Yapa Bandara",
    designation: "CEO, Aptinex (PVT) Limited.",
    quote:
      "I highly recommend KRC for corporate secretarial services to any entrepreneur starting in Sri Lanka. I also wish KRC the best with their new digital platform, incorporation.lk",
    image: cpBandara,
    rating: "5.0",
  },
  {
    name: "Devinda Matharage",
    designation: "Director, Lankatronics",
    quote:
      "I wholeheartedly recommend KRC Corporate Services to any business seeking top-notch secretarial and accountancy services. Their dedication to client satisfaction and the breadth of their knowledge make them a valuable asset to any organization.",
    image: devinda,
    rating: "5.0",
  },
  {
    name: "Gihan Nadeera De Silva",
    designation: "Director, Ceylon Milky Way Pvt Ltd",
    quote:
      "KRC’s support has been invaluable for us. Their team goes above and beyond, providing the guidance and resources we need to stay compliant and succeed. Their commitment to client satisfaction is unmatched.",
    image: gihan,
    rating: "4.5",
  },
  {
    name: "Serendib Fragrance",
    designation: "",
    quote:
      "Our company registration was handled very quickly and with great efficiency. The entire process was smooth, professional, and hassle-free. The team guided us step by step, making sure all our documents and requirements were completed on time without any delays.Their service is highly reliable, transparent, and customer-friendly. We are truly impressed with their professionalism and commitment to delivering results. We would highly recommend Incorporation.lk to anyone looking for fast and trustworthy company registration services in Sri Lanka.",
    image: serendibFragrance,
    rating: "4.5",
  },
  {
    name: "Off Ramp Colombo",
    designation: "",
    quote:
      "Truly impressed with the quality of service! Your professionalism, attention to detail, and dedication made all the difference. Thank you for going above and beyond. Much appreciated!. congratulations incorporation.lk",
    image: offrampcolombo,
    rating: "4.5",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      data-header-style="transparent"
      className="relative overflow-hidden mt-25"
    >
      <div className="flex flex-col text-center mt-5 items-center transition-all duration-200">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          Success Stories
          <br /> That Inspire Our Journey
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
      <div className="relative flex h-[640px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[--duration:39s]">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:41s] hidden md:flex">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:40s] hidden lg:flex"
        >
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>{" "}
      </div>
    </section>
  );
}

export default Testimonials;
