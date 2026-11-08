import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const heroHeadingTransition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const heroEntranceTransition = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1] as const,
};