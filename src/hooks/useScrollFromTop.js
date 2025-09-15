// Custom hook to detect if user is at the top of the page or has scrolled away
import { useState, useEffect } from "react";

const useScrollFromTop = (threshold = 0, scrollContainer = null) => {
  // State to track if user is currently at the top (true = at top, false = scrolled away)
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      let scrollY = 0;

      // Check if we have a custom scroll container
      if (scrollContainer && scrollContainer.current) {
        // Get scroll position from the custom container
        scrollY = scrollContainer.current.scrollTop;
      } else {
        // Fallback to window scroll position
        scrollY =
          window.pageYOffset ||
          window.scrollY ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
      }

      // Debug log to check scroll values (remove after testing)
      //   console.log(
      //     "Scroll position:",
      //     scrollY,
      //     "Threshold:",
      //     threshold,
      //     "Container:",
      //     scrollContainer ? "Custom" : "Window",
      //   );

      // Update state - true when at top, false when scrolled away
      const newIsAtTop = scrollY <= threshold;
      setIsAtTop(newIsAtTop);
    };

    // Determine which element to attach the scroll listener to
    const targetElement =
      scrollContainer && scrollContainer.current
        ? scrollContainer.current
        : window;

    // Add scroll event listener with passive option for better performance
    targetElement.addEventListener("scroll", handleScroll, { passive: true });

    // Also listen to resize events in case layout changes
    if (targetElement === window) {
      window.addEventListener("resize", handleScroll, { passive: true });
    }

    // Check initial scroll position on mount
    handleScroll();

    // Cleanup: remove event listeners on component unmount
    return () => {
      targetElement.removeEventListener("scroll", handleScroll);
      if (targetElement === window) {
        window.removeEventListener("resize", handleScroll);
      }
    };
  }, [threshold, scrollContainer]);

  // Return single boolean state
  return isAtTop;
};

export default useScrollFromTop;
