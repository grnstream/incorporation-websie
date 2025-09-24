// hooks/useElementInView.js
import { useEffect, useRef, useState } from "react";

/**
 * useElementInView(refOptions)
 * returns [ref, inView]
 * options: { root, rootMargin, threshold, once }
 */
export function useElementInView({ root = null, rootMargin = "0px", threshold = 0, once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else {
          if (!once) setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once]);

  return [ref, inView];
}
