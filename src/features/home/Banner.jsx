import banneroverlay from "@/src/assets/banner-overlay.png";
function BusinessBanner() {
  return (
    <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 mb-10 mx-16 justify-self-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden ">
        <img
          src={banneroverlay}
          alt="Overlay"
          className="absolute inset-0 left-0 object-cover   z-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-0 text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-tight mb-6">
          Empowering your
          <br />
          <span className="text-blue-100">Business Journey</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
          Empowering companies of all sizes to achieve more
        </p>

        <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default BusinessBanner;
