// /src/motion/variants.ts

// cubic-bezier equivalente a easeOut
const easeOut = [0.17, 0.55, 0.55, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOut }
};

export const fadeUpDelayed = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOut, delay },
});

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: easeOut },
};

export const fadeScale = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: easeOut }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
