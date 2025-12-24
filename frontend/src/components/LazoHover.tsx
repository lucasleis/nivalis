import { motion } from "framer-motion";

interface Props {
  active: boolean;
}

export default function LazoHover({ active }: Props) {
    return (
        <motion.svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="absolute left-0 bottom-0 w-full h-[1.2em] pointer-events-none z-0"
        fill="none"
        >
        <motion.path
            d="
                M12 18
                C18 4, 42 6, 52 10
                C74 16, 86 28, 76 34
                C58 36, 26 32, 16 24
                C8 20, 8 16, 12 18
            "
            stroke="#fd6647"
            strokeOpacity="0.85"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
                active
                    ? { pathLength: 1, opacity: 0.65, rotate: [0, 0.5, 0] }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                duration: 0.6,
                ease: "easeOut"
                }
            }
        />
        </motion.svg>
    );
}
