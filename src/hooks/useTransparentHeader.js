import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// For React Router

// For Next.js,
// import { usePathname } from "next/navigation";

function useTransparentHeader() {
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();
  // or  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll(
      "[data-header-style='transparent']",
    );

    if (!sections.length) {
      setIsTransparent(false);
      return;
    }

    // --- Initial check on mount/route change
    const checkVisibility = () => {
      const anyVisible = Array.from(sections).some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
      setIsTransparent(anyVisible);
    };

    checkVisibility();

    // --- Setup IO for updates while scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((entry) => entry.isIntersecting);
        setIsTransparent(anyVisible);
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location]); // or [pathname] if Next.js

  return isTransparent;
}

export default useTransparentHeader;
