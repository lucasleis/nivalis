import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/A6.png";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="
            fixed inset-0 z-[9999]
            bg-white dark:bg-neutral-950
            flex items-center justify-center
          "
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={logo}
              alt="Nivalis"
              className="w-24 md:w-32"
              animate={{
                scale: [1, 1.1, 0.95, 1.05, 1],
                rotate: [0, 5, -3, 2, 0],
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: 0,
              }}
            />
          </motion.div>
          
          {/* Loading dots */}
          <motion.div
            className="absolute bottom-10 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-nivOrange"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}