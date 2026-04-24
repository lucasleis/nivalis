import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/variants";

const words = ["Sistemas a medida", "Websites", "Proyectos IA"];

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Sitios y aplicaciones web personalizados, optimizados para rendimiento y conversión.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces diseñadas para crear experiencias memorables e intuitivas.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Automatización de procesos para optimizar tiempos y recursos de tu negocio.",
  },
  {
    icon: Users,
    title: "Consultoría Tech",
    description: "Asesoramiento experto para transformar tu negocio con tecnología.",
  },
];

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
      className="min-h-screen flex items-center bg-white dark:bg-neutral-900"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 xl:px-10 py-20">
        {/* EYEBROW */}
        <motion.p
          variants={fadeUp}
          className="text-sm tracking-[0.25em] text-gray-500 mb-10"
        >
          SERVICIOS
        </motion.p>

        {/* TÍTULO */}
        <motion.h2
          variants={fadeUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 dark:text-white leading-tight"
        >
          <span className="hidden md:inline">
            Diseñamos{" "}
            <span className="relative inline-flex align-baseline px-1 -mx-1">
              <span className="relative inline-block overflow-hidden h-[1.2em] align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-110%" }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="acumin-ultrablack block will-change-transform text-nivOrange"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </span>

          <div className="block md:hidden">
            <div>Creamos</div>
            <div className="relative inline-flex items-center px-1 -mx-1">
              <span className="relative inline-flex items-center overflow-hidden h-[1em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: "130%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-140%" }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="acumin-ultrablack block will-change-transform text-nivOrange text-3xl leading-none"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </div>
        </motion.h2>

        {/* SUBTEXTO */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-medium text-gray-900 dark:text-white"
        >
          <span className="hidden md:inline">
            A medida. A tiempo. <br />
            Pensadas para crecer.
          </span>
          <span className="block md:hidden">
            A medida.<br />
            A tiempo.<br />
            Pensadas para crecer.
          </span>
        </motion.p>

        {/* CARDS */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="
                group
                relative
                bg-white/60 dark:bg-gray-800/60
                backdrop-blur-lg
                rounded-2xl
                p-6
                border border-gray-200/50 dark:border-gray-700/50
                shadow-xl
                hover:-translate-y-2
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-nivOrange/0 to-nivOrange/0 group-hover:from-nivOrange/5 group-hover:to-transparent transition-all duration-300" />
              
              {/* Icon */}
              <div className="relative z-10 mb-4">
                <service.icon className="w-8 h-8 text-nivOrange group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-nauryz font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-nivOrange/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* LINK */}
        <motion.div variants={fadeUp} className="mt-12">
          <a
            href="/servicios"
            className="acumin-extralight group relative inline-block w-fit text-lg text-gray-900 dark:text-white transition-colors duration-300 hover:text-nivOrange"
          >
            Ver servicios
            <span className="underline-slide pointer-events-none absolute left-0 -bottom-[2px] h-[2px] w-full bg-gray-900 dark:bg-white transition-colors duration-300 group-hover:bg-nivOrange" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
