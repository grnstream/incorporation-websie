import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop(ref, smooth = true) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (ref?.current) {
      // Scroll the container div
      ref.current.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? "smooth" : "instant",
      });
    } else {
      // Fallback to window
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? "smooth" : "instant",
      });
    }
  }, [pathname, ref, smooth]);
}

export default useScrollToTop;
