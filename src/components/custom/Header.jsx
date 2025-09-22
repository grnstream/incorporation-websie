import useTransparentHeader from "@/src/hooks/useTransparentHeader";

import { Button } from "@/src/components/ui/button";
import Logo from "@/src/components/custom/Logo";

import { HiMenuAlt3 } from "react-icons/hi";
import NavigationBar from "./NavBar";

function Header({ toggleNav, isAtTop }) {
  const isTransparentHeader = useTransparentHeader();

  const getHeaderStyles = () => {
    // If header is at top and isTransparentHeader is true
    if (isAtTop) {
      return " bg-transparent px-8 lg:px-16 w-full";
    }

    // If header is NOT at top and isTransparentHeader is false
    else {
      return "bg-white/50 shadow-xs backdrop-blur-sm border border-neutral-300/50 px-2 lg:px-6 w-[80vw] sm:w-[60vw] lg:w-[80vw]  xl:w-[70vw] 2xl:w-[55vw] 3xl:w-[50vw] rounded-2xl";
    }
  };

  return (
    <div
      className={`mx-auto flex h-[56px] items-center justify-between lg:h-[64px] ${getHeaderStyles()} transition-[width] duration-300 ease-in-out z-55 bg-white `}
    >
      <Logo
        logoBlack={!isTransparentHeader || !isAtTop}
        className={`${isAtTop ? "" : "w-[140px] lg:w-[160px]"} `}
      />

      <NavigationBar
        isTransparentHeader={isTransparentHeader}
        isAtTop={isAtTop}
        className=""
      />

      <div
        className={`flex items-center justify-end gap-3 ${
          isAtTop ? "min-w-[180px]" : "min-w-[100px]"
        }`}
      >
        <a
          href="https://platform.incorporation.lk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Button
              size={"lg"}
              className={
                "hidden rounded-full text-white lg:block hover:bg-gradient-to-t"
              }
            >
              Go To Online Platform
            </Button>
          </div>
        </a>

        <div className="flex items-center gap-1 sm:gap-3.5 lg:hidden">
          <Button
            size={"icon"}
            className="group bg-transparent shadow-none transition-all duration-300 ease-in-out hover:bg-transparent"
            onClick={toggleNav}
          >
            <HiMenuAlt3
              className={` ${
                isTransparentHeader
                  ? "group-hover:text-background text-black/80"
                  : "group-hover:text-primary-foreground text-primary-foreground/80"
              } size-5 cursor-pointer transition-all duration-300 ease-in-out sm:size-6`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
