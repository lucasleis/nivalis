import { motion } from "framer-motion";

interface Props {
  active: boolean;
}

export default function LazoHover({ active }: Props) {
  return (
    <motion.svg
        viewBox="0 0 100 16"
        preserveAspectRatio="none"
        className="
            absolute left-0 bottom-0
            w-full h-[1em]
            pointer-events-none
            z-0
        "


        fill="none"
    >
        <motion.path
            d="
                M2 8
                C18 2, 82 2, 98 8
                C82 14, 18 14, 2 8
            "
            stroke="#ff6a3d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
            active
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 0.35, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
