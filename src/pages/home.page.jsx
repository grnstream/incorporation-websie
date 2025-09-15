import ITSupport from "../components/custom/ItSupport";
import BusinessBanner from "../features/home/Banner";
import FAQ from "../features/home/FAQ";
import Hero from "../features/home/Hero";
import Pricing from "../features/home/Pricing";
import Testimonials from "../features/home/Testimonials";
import WhyChooseUs from "../features/home/Why-Us";


function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs/>
      <Testimonials/>
      <Pricing/>
      <ITSupport/>
      <FAQ />
      <BusinessBanner/>
    </>
  );
}

export default HomePage;
