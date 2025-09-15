import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Logo from "./Logo";
import { Separator } from "../ui/separator";

function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-y-6  mb-12 items-start md:justify-between mx-10">
          {/* Left Section - Logo and Contact Info */}
          <div className="space-y-3">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  83/1/2, Subadrarama Road, Gangodawila, Nugegoda, Sri lanka
                </span>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">
                  +94 112 51 57 56 | +94 72 28 99 111
                </span>
              </div>

              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">contact@incorporation.lk</span>
              </div>
            </div>
          </div>

          {/* Right Section - About Us */}
          <div className="flex flex-row gap-8 justify-between">
            <div className="w-full sm:w-1/2 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Refund Policy
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                FAQ
              </a>
            </div>
            <div className="w-full sm:w-1/2 space-y-3">
              <a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About Us
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing Options
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Success Stories
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mx-10">
          <Separator className={"bg-neutral/25 mt-12 mb-8 w-full"} />
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Youtube className="w-5 h-5 text-gray-600" />
              </a>
            </div>

            {/* Powered By */}
            <div className="text-center">
              <p className="text-sm text-gray-400">
                Powered By{" "}
                <span className="text-blue-500 font-medium">GreenStream</span>
              </p>
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-sm text-gray-400">
                © Copyright 2025{" "}
                <span className="font-medium text-primary-600">KRC</span>. All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
