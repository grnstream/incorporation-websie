import StatsBanner from "../components/custom/StatsBanner";

export default function AboutUsPage() {
  return (
    <div className="flex-col">
      <section className="bg-white pt-16 overflow-hidden relative">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="mb-5 mx-15 text-justify">
            <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-normal mb-6 text-xs md:text-sm lg:text-sm xl:text-sm">
              Incorporation.lk is a trusted online platform for establishing and
              managing businesses in Sri Lanka. The system is powered by{" "}
              <strong> K R C Corporate Services (Private) Ltd</strong>, a
              registered entity with a holding certificate to practice issued by
              the Registrar General of Companies.
            </p>
            <p className="text-gray-700 leading-normal mb-6 text-xs md:text-sm lg:text-sm xl:text-sm">
              KRC was founded with a vision to simplify company registration and
              compliance for entrepreneurs. We ensure that our clients’
              businesses meet all legal obligations, file the necessary
              documents, and adhere to the regulations and standards set by
              governing authorities. This covers business operations, taxation,
              auditing, reporting, and other compliance requirements.
            </p>
            <p className="text-gray-700 leading-normal mb-6 text-xs md:text-sm lg:text-sm xl:text-sm">
              We are also in collaboration with{" "}
              <strong>Green Stream Systems & Solutions (Private) Ltd</strong> to
              empower entrepreneurs by delivering complete IT solutions for
              businesses registered under our platform.
            </p>
            <p className="text-gray-700 leading-normal mb-6 text-xs md:text-sm lg:text-sm xl:text-sm">
              Together, <strong>KRC</strong> and
              <strong> GreenStream</strong> provide a seamless blend of business
              compliance expertise and cutting-edge IT solutions, making
              Incorporation.lk the complete platform for modern entrepreneurs.
              Our mission is to not only register businesses but also to nurture
              and empower them with the right support, resources, and technology
              to achieve lasting success.
            </p>
          </div>

          {/* Right Image & Blue Background */}
          <div className="hidden lg:block absolute bottom-0 right-0 z-0">
            {/* Blue Background */}
            <div className="absolute bottom-0 right-[-20px] lg:w-[60vh] lg:h-[68vh] xl:w-[65vh] xl:h-[72vh] bg-blue-500 rounded-3xl -z-10"></div>

            {/* Image */}
            <img
              src="/images/handshake.png"
              alt="Handshake"
              className="rounded-3xl mr-10 mb-[-20px] shadow-lg lg:h-[67vh] xl:h-[70vh] 2xl:h-[900px] object-cover"
            />
          </div>
        </div>
      </section>

      <StatsBanner />
    </div>
  );
}
