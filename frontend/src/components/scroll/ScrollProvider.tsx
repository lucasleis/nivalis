import { createContext, useContext } from "react";
import { useScroll, useSpring, MotionValue } from "framer-motion";

interface ScrollContextType {
  scrollY: MotionValue<number>;
  smoothScrollY: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();

  // Scroll global suavizado
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 50,
    damping: 18,
    mass: 0.2,
  });

  return (
    <ScrollContext.Provider value={{ scrollY, smoothScrollY }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useSmoothScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useSmoothScroll must be used within ScrollProvider");
  return ctx;
};
