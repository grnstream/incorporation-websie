import banneroverlay from "@/src/assets/banner-overlay.png";
function BusinessBanner() {
  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={banneroverlay}
          alt="Overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay z-0"
        />
        {/* Left geometric shape */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl z-0"></div>
        
        {/* Right geometric shapes */}
        <div className="absolute -right-24 top-1/4 w-48 h-48 bg-white/10 rounded-2xl rotate-12 blur-xl"></div>
        <div className="absolute -right-16 bottom-1/4 w-32 h-32 bg-blue-300/20 rounded-xl rotate-45 blur-lg"></div>
        
        {/* Additional subtle background elements */}
        <div className="absolute left-1/4 top-8 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute right-1/3 bottom-8 w-16 h-16 bg-blue-300/15 rounded-lg rotate-12 blur-lg"></div>
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