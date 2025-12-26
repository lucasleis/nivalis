import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["sistemas a medida", "websites", "campañas digitales"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2750); // 2 segundos

    return () => clearInterval(interval);
  }, []);

  // const nextWord = () => setIndex((prev) => (prev + 1) % words.length);

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <p className="text-sm tracking-[0.25em] text-gray-500 mb-10">
          AGENCIA DIGITAL CON VISIÓN 360
        </p>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight">
          Creamos{" "}
          <span className="relative inline-flex align-baseline px-1 -mx-1">
            <span className="relative inline-block overflow-hidden h-[1.2em] align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-110%" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="block will-change-transform text-[#fd6647]"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </h1>

        <p className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-medium text-gray-900">
          A medida. A tiempo. A otro nivel
        </p>
      </div>
    </section>
  );
}
