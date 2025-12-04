import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, fadeUpDelayed } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";

import logo from "../assets/logos/logo6.png"; // LOGO OFICIAL

export default function Hero() {
  const blobOrangeY = useParallax({ range: 800, offset: 55 });
  const blobBlueY = useParallax({ range: 800, offset: -55 });
  const textY = useParallax({ range: 400, offset: -12 });

  return (
    <section
      id="inicio"
      className="
        relative min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-[#ffe0d6] via-[#ffffff] to-[#83aefa]
        dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-800/80
      "
    >
      {/* BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* ORANGE BLOB */}
        <motion.div
          style={{ y: blobOrangeY }}
          className="
            absolute -top-1/3 -right-1/4 w-[900px] h-[900px] rounded-full
            bg-gradient-to-br from-[#fd6647]/35 to-[#ffe0d6]/20 blur-3xl
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* BLUE BLOB */}
        <motion.div
          style={{ y: blobBlueY }}
          className="
            absolute -bottom-1/3 -left-1/4 w-[900px] h-[900px] rounded-full
            bg-gradient-to-tr from-[#0259dd]/35 to-[#83aefa]/20 blur-3xl
          "
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* CONTENIDO */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{ y: textY }}
      >
        {/* LOGO */}
        <motion.div {...fadeUp} className="mb-10 flex justify-center">
          <img
            src={logo}
            alt="Nivalis Marketing & Tech Lab"
            className="
              w-[420px] max-w-full mx-auto drop-shadow-xl 
              dark:drop-shadow-2xl
            "
          />
        </motion.div>

        {/* TÍTULO */}
        <motion.div {...fadeUpDelayed(0.15)}>
          <h2
            className="
              font-display font-bold 
              text-4xl md:text-6xl 
              text-gray-900 dark:text-gray-100 
              mb-6 leading-tight
            "
          >
            Transformamos ideas en{" "}
            <span className="text-nivOrange dark:text-nivLightBlue">
              experiencias digitales
            </span>{" "}
            que potencian marcas.
          </h2>

          {/* TEXTO */}
          <p
            className="
              font-body 
              text-lg md:text-xl 
              text-gray-700 dark:text-gray-300 
              max-w-2xl mx-auto 
              mb-12 leading-relaxed
            "
          >
            Combinamos creatividad, estrategia y tecnología para llevar tu marca
            al siguiente nivel con soluciones modernas y escalables.
          </p>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          {...fadeUpDelayed(0.25)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* BOTÓN PRINCIPAL */}
          <a
            href="#contacto"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-full 
              font-body font-semibold text-lg
              text-white 
              bg-nivOrange hover:bg-[#e95b40]
              shadow-lg hover:shadow-xl 
              hover:scale-105 
              transition-all duration-300
            "
          >
            Hablemos
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* BOTÓN SECUNDARIO */}
          <a
            href="#portfolio"
            className="
              font-body px-8 py-4 rounded-full border 
              border-nivBlue/40 dark:border-gray-700
              text-gray-800 dark:text-gray-200 
              hover:bg-nivBlue/10 dark:hover:bg-slate-800/40 
              transition-all duration-300
            "
          >
            Ver portfolio
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
