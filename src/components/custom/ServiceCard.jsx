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
  isHighlighted,
  colorVariant = "primary",
}) => {
  const colorVariants = {
    primary: {
      cardBg: "from-primary-400 to-primary-500",
      cardHoverBg: "hover:from-primary-400 hover:to-primary-500",
      iconBg: "bg-primary-500",
      iconHoverBg: "group-hover:bg-primary-500",
      buttonText: "text-primary-800",
      buttonBg: "to-primary-100",
    },
    green: {
      cardBg: "from-green-400 to-green-800",
      cardHoverBg: "hover:from-green-400 hover:to-green-800",
      iconBg: "bg-green-800",
      iconHoverBg: "group-hover:bg-white",
      buttonText: "text-green-800",
      buttonBg: "to-green-100",
    },
  };

  const colors = colorVariants[colorVariant];
  return (
    <div
      className={cn(
        `group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer
         border border-neutral-200 flex flex-col hover:text-white`,
        // Conditional background based on isHighlighted
        isHighlighted
          ? `bg-gradient-to-b ${colors.cardBg} text-white shadow-lg`
          : `bg-gradient-to-b from-neutral-50 to-neutral-100 text-gray-900 ${colors.cardHoverBg}`,
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          `w-13 h-13 rounded-full flex items-center justify-center mb-10 transition-all duration-300`,
          isHighlighted
            ? `bg-white`
            : `${colors.iconBg} group-hover:bg-white group-hover:bg-none`,
          !isHighlighted && secondaryIconBgClassName
        )}
      >
        {/* icon */}
        <div
          className={cn(
            `w-7 h-7 transition-all duration-300`,
            isHighlighted
              ? `${colors.iconBg}`
              : `bg-white ${colors.iconHoverBg}`,
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
        <h3
          className={cn(
            "text-lg font-semibold mb-3 leading-tight transition-colors duration-300",
            isHighlighted ? "text-white" : "group-hover:text-white"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-sm leading-relaxed transition-colors duration-300",
            isHighlighted
              ? "text-white text-opacity-90"
              : "text-gray-600 group-hover:text-white "
          )}
        >
          {description}
        </p>
      </div>
      {btntext && (
        <div className="mt-auto pt-6">
          <Button
            variant="default"
            className={cn(
              "text-white w-full text-xs transition-all duration-300",
              isHighlighted
                ? `${colors.buttonText} bg-gradient-to-b from-white ${colors.buttonBg}`
                : `group-hover:${colors.buttonText} group-hover:bg-gradient-to-b group-hover:from-blue-500 group-hover:${colors.buttonBg}`
            )}
            onClick={onClick}
          >
            {btntext}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
