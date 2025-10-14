import StatsBanner from "../components/custom/StatsBanner";
import aboutImage from "@/src/assets/images/about-page-image.png";

export default function AboutUsPage() {
  return (
    <div className="flex-col ">
      <section className="bg-white pt-16 pb-0 overflow-hidden relative min-h-screen -z-10">
        <div className="max-w-7xl xl:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Who We Are
              </h2>

              <div className="space-y-6 text-start">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  Incorporation.lk is a trusted online platform for establishing
                  and managing businesses in Sri Lanka. The system is powered by{" "}
                  <strong>K R C Corporate Services (Private) Ltd</strong>, a
                  registered entity with a holding certificate to practice
                  issued by the Registrar General of Companies.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  KRC was founded with a vision to simplify company registration
                  and compliance for entrepreneurs. We ensure that our clients'
                  businesses meet all legal obligations, file the necessary
                  documents, and adhere to the regulations and standards set by
                  governing authorities. This covers business operations,
                  taxation, auditing, reporting, and other compliance
                  requirements.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  We are also in collaboration with{" "}
                  <strong>
                    Green Stream Systems & Solutions (Private) Ltd
                  </strong>{" "}
                  to empower entrepreneurs by delivering complete IT solutions
                  for businesses registered under our platform.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  Together, <strong>KRC</strong> and{" "}
                  <strong>GreenStream</strong> provide a seamless blend of
                  business compliance expertise and cutting-edge IT solutions,
                  making Incorporation.lk the complete platform for modern
                  entrepreneurs. Our mission is to not only register businesses
                  but also to nurture and empower them with the right support,
                  resources, and technology to achieve lasting success.
                </p>
              </div>
            </div>

            {/* Right Side - Image Container */}
            <div className="relative lg:h-full">
        

              {/* Desktop Image */}
              <div className="hidden lg:block relative">
                <div className="absolute top-22 xl:right-[-90px] flex items-center justify-center rounded-2xl">
                  <img
                    src={aboutImage}
                    alt="about-page-image"
                    className=" w-full h-[900px] object-cover relative z-20 rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Large Blue Background - positioned absolutely to extend beyond container */}
          <div className="hidden lg:block absolute top-[60px] right-[-150px] xl:right-[-200px] w-[55%] xl:w-[50%] h-[1000px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl"></div>
        </div>
      </section>

      <StatsBanner />
    </div>
  );
}
