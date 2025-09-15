import { Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import useScrollToTop from "@/src/hooks/useScrollToTop";
import useScrollFromTop from "@/src/hooks/useScrollFromTop";

import Header from "@/src/components/custom/Header";
import MobileNavigation from "@/src/components/custom/MobileNavigation";
import Footer from "../components/custom/Footer";

function MainLayout() {
  const mainContentRef = useRef(null);
  useScrollToTop(mainContentRef);
  const isAtTop = useScrollFromTop(0, mainContentRef);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen overflow-hidden`}>
      {/* Background Overlay */}
      <div
        className={`to-primary-600/50 fixed inset-0 z-30 bg-gradient-to-l from-white from-55% transition-opacity duration-500 sm:from-50% ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={toggleNav}
      />

      {/* Navigation Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-[60vw] max-w-[300px] transform bg-transparent to-90% transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MobileNavigation setIsOpen={setIsOpen} toggleNav={toggleNav} />
      </aside>

      {/* Main Content Container */}
      <div
        ref={mainContentRef}
        className={`relative z-40 h-screen bg-white transition-all duration-500 ease-in-out ${
          isOpen
            ? `pointer-events-none relative mt-4 mr-4 mb-4 ml-4 origin-left -translate-x-[180px] scale-75 transform overflow-hidden rounded-2xl shadow-2xl`
            : "translate-x-0 scale-100 transform overflow-y-auto"
        }`}
      >
        {!isOpen && (
          <header
            className={`sticky top-5 left-0 z-10 w-full transition-[top] duration-300 ease-in-out`}
          >
            <Header toggleNav={toggleNav} isAtTop={isAtTop} />
          </header>
        )}

        {/* Main Content */}
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default MainLayout;
