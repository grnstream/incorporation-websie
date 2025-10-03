import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/src/lib/utils";

const ServiceCard = ({
  onClick,
  title,
  description,
  logo,
  btntext,
  className,
  secondaryIconClassName,
  secondaryIconBgClassName,
}) => {
  return (
    <div
      className={cn(
        `group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer
         bg-gradient-to-b from-neutral-50 to-neutral-100 
         hover:from-primary-400 hover:to-primary-500 
         hover:text-white text-gray-900 border border-neutral-200
         flex flex-col`,
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          `w-13 h-13 rounded-full flex items-center justify-center mb-10 bg-primary-500 group-hover:bg-white transition-all duration-300`,
          secondaryIconBgClassName
        )}
      >
        <div
          className={cn(
            `w-7 h-7 bg-white group-hover:bg-primary-500 transition-all duration-300`,
            secondaryIconClassName
          )}
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
          <Button variant="default" className={"text-white w-full text-xs group-hover:text-primary-800 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-primary-100"} onClick={onClick}>
            {btntext}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
