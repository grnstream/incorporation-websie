import React from "react";

const ServiceCard = ({ title, description, logo }) => {
  return (
    <div
      className={`
        group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer
        bg-gradient-to-b hover:text-white from-neutral-50 to-neutral-100 hover:from-blue-400 hover:to-blue-500 text-gray-900 border-0
      `}
    >
      {/* Icon */}
      <div className="w-13 h-13 rounded-full flex items-center justify-center mb-10 bg-blue-500 group-hover:bg-white transition-all duration-300">
        <img
          src={logo}
          alt={`${title} icon`}
          width={24}
          height={24}
          className="filter brightness-0 invert group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold mb-3 leading-tight group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white group-hover:text-opacity-90 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
