import Logo from "@/src/components/custom/Logo";
import { Button } from "@/src/components/ui/button";

import {
  Menu,
  X,
  Home,
  User,
  BriefcaseBusiness,
  Phone,
  Info,
  Contact,
} from "lucide-react";
import { Link, useNavigate } from "react-router";

const navItems = [
  { icon: Home, label: "Home", to: "/" },
  { icon: User, label: "About Us", to: "/about" },
  { icon: BriefcaseBusiness, label: "All Services", to: "/services" },
  { icon: Contact, label: "Contact", to: "/contact" },
  { icon: Info, label: "Privacy Policy", to: "/privacy-policy" },
  { icon: Info, label: "Terms & Conditions", to: "/terms-and-conditions" },
  { icon: Info, label: "Refund Policy", to: "/refund-policy" },
];

function MobileNavigation({ setIsOpen, toggleNav }) {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="flex h-full flex-col p-6">
        <div className="mb-8 flex items-center justify-between">
          {/* <h2 className="text-primary-900 text-2xl font-bold">Menu</h2> */}
          <Logo className={"w-[70%]"} logoBlack />
          <button
            onClick={toggleNav}
            className="text-primary-900 hover:bg-primary-100/50 rounded-lg p-1 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav
          className="scrollbar-hide flex-1 space-y-2 overflow-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={index}
                to={item.to}
                className="group hover:bg-primary-100/50 hover:primary-900 flex items-center space-x-4 rounded-lg p-4 text-black transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <IconComponent
                  size={20}
                  className="transition-transform group-hover:scale-110"
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <Button
          size={"lg"}
          className={
            "border-primary-900 text-white my-6 rounded-full transition-colors duration-200"
          }
          onClick={() =>
            window.open("https://platform.incorporation.lk/", "_blank")
          }
        >
          Go To Online Platform
        </Button>

        <div className="border-primary-200 border-t pt-4">
          <div className="text-black">
            <p className="mt-1 text-center text-xs">
              © {year}{" "}
              <a
                to="https://greenstream.lk/"
                target="_blank"
                className="text-primary-900 font-semibold hover:underline"
              >
                GreenStream
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;
