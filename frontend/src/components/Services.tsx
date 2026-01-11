import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";

const words = ["Sistemas a medida", "Websites", "Campañas digitales"];

export default function Services() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="services"
      className="min-h-screen flex items-center bg-white"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-6 md:px-8 xl:px-10
        "
      >
        {/* EYEBROW */}
        <motion.p
          variants={fadeUp}
          className="text-sm tracking-[0.25em] text-gray-500 mb-10"
        >
          AGENCIA DIGITAL CON VISIÓN 360
        </motion.p>

        {/* TÍTULO */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight"
        >
          {/* DESKTOP */}
          <span className="hidden md:inline">
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
                    className="
                      acumin-ultrablack
                      block
                      will-change-transform
                      text-[#fd6647]
                    "
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </span>

          {/* MOBILE */}
          <div className="block md:hidden">
            <div>Creamos</div>

            <div className="relative inline-flex items-center px-1 -mx-1">
              <span
                className="
                  relative
                  inline-flex
                  items-center
                  overflow-hidden
                  h-[1em]
                "
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: "130%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-140%" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="
                      acumin-ultrablack
                      block
                      will-change-transform
                      text-[#fd6647]
                      text-3xl leading-none
                    "
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </div>
        </motion.h1>

        {/* SUBTEXTO */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-medium text-gray-900"
        >
          {/* DESKTOP */}
          <span className="hidden md:inline">
            A medida. A tiempo. A otro nivel
          </span>

          {/* MOBILE */}
          <span className="block md:hidden">
            A medida.<br />
            A tiempo.<br />
            A otro nivel
          </span>
        </motion.p>

        {/* LINK */}
        <motion.div variants={fadeUp} className="mt-10">
          <a
            href="/servicios"
            className="
              acumin-extralight
              group
              relative
              inline-block
              w-fit
              text-lg
              text-gray-900
              transition-colors
              duration-300
              hover:text-[#fd6647]
            "
          >
            Más detalles

            <span
              className="
                underline-slide
                pointer-events-none
                absolute left-0 -bottom-[2px]
                h-[2px] w-full
                bg-gray-900
                transition-colors
                duration-300
                group-hover:bg-[#fd6647]
              "
            />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
