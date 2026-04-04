import { useEffect } from "react";

export function useScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Las animaciones de scroll ya están implementadas en cada componente
    // usando Framer Motion con whileInView
    // Este hook está reservado para futuras animaciones GSAP si se necesitan

    return () => {};
  }, []);

  return null;
}

export default useScrollAnimations;