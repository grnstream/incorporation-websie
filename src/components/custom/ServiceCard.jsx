import React from "react";
import { Button } from "../ui/button";

const ServiceCard = ({ title, description, logo, btntext }) => {
  return (
    <div
      className={`
        group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer
        bg-gradient-to-b hover:text-white from-neutral-50 to-neutral-100 hover:from-blue-400 hover:to-blue-500 text-gray-900 border-1 border-neutral-200
flex flex-col      
        `}
    >
      {/* Icon */}
      <div className="w-13 h-13 rounded-full flex items-center justify-center mb-10 bg-blue-500 group-hover:bg-white transition-all duration-300">
        <div
          className="w-6 h-6 bg-white group-hover:bg-blue-500 transition-all duration-300"
          style={{
            mask: `url(${logo}) no-repeat center/contain`,
            WebkitMask: `url(${logo}) no-repeat center/contain`,
          }}
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
      {btntext && (
        <div className="mt-auto pt-6">
          <Button variant="default" className={"text-white w-full text-xs"}>
            {btntext}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
