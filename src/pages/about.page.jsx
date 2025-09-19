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
            <p className="text-gray-700 leading-normal mb-6 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              Incorporation.lk is a trusted platform for establishing and
              managing businesses in Sri Lanka. The system is powered by K R C
              Corporate Services (Private) Ltd, a registered entity with a
              holding certificate to practice issued by the Registrar General of
              Companies. We provide comprehensive support for businesses at
              every step, ensuring seamless incorporation and ongoing success
              for your ventures.
            </p>
            <p className="text-gray-700 leading-normal mb-6 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              The company was founded with a vision to simplify company
              registration/incorporation and compliance for entrepreneurs. We
              ensure that our clients’ businesses adhere to relevant laws,
              regulations, and standards set by governing bodies or regulatory
              authorities. This involves meeting legal obligations, filing
              necessary documents, and adhering to specific guidelines related
              to business operations, taxation, auditing, reporting, and other
              regulatory requirements. We pride ourselves on our commitment to
              excellence, integrity, and client satisfaction.
            </p>
            <p className="text-gray-700 leading-normal mb-6 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
              Our team comprises experienced professionals specializing in
              business registration, corporate secretarial services, accounting,
              auditing, and compliance management. Together, we strive to
              empower businesses by providing reliable, efficient, and
              cost-effective solutions tailored to our clients’ needs. Our
              mission is to empower businesses by simplifying the complexities
              of registration and compliance, facilitating seamless operations
              for our clients and successful business incorporation.
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

      <StatsBanner className="sticky bottom-0" />
    </div>
  );
}
