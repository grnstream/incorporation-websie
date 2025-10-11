import React from "react";
import { NumberTicker } from "../magicui/number-ticker";
import { Separator } from "@radix-ui/react-separator";

const statsData = [
  {
    number: 5,
    title: "Licensed",
    subtitle: "Consultants",
  },
  {
    number: 750,
    title: "Company",
    subtitle: "Registrations",
  },
  {
    number: 20,
    title: "Experts",
    subtitle: "Employees",
  },
  {
    number: 15,
    title: "Years of",
    subtitle: "Experience",
  },
];

const StatsBanner = () => {
  return (
    <div className="w-full bg-gradient-to-b from-primary-500 to-primary-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center py-6 px-8 text-white"
            >
              {/* Number */}
              <div className="flex items-center">
                
                <NumberTicker
                  value={stat.number}
                  className="whitespace-pre-wrap text-4xl lg:text-4xl font-medium tracking-tighter text-white dark:text-white "
                />
                <span className="text-3xl font-bold text-white mr-3">+</span>
              </div>

              <Separator orientation="vertical" className="h-10 w-px bg-white/20 mx-2"/>

              {/* Title + Subtitle */}
              <div className="flex flex-col text-left">
                <span className="text-sm lg:text-base font-semibold">
                  {stat.title}
                </span>
                <span className="text-xs md:text-sm opacity-80">
                  {stat.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
