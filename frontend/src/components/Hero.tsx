import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, fadeUpDelayed } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";

export default function Hero() {
  const blobOrangeY = useParallax({ range: 800, offset: 55 });
  const blobBlueY = useParallax({ range: 800, offset: -55 });
  const textY = useParallax({ range: 400, offset: -12 });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-white via-orange-50/20 to-blue-50/30
      dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-800/80"
    >
      {/* BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: blobOrangeY }}
          className="absolute -top-1/3 -right-1/4 w-[900px] h-[900px] rounded-full
          bg-gradient-to-br from-orange-400/25 to-orange-600/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={{ y: blobBlueY }}
          className="absolute -bottom-1/3 -left-1/4 w-[900px] h-[900px] rounded-full
          bg-gradient-to-tr from-blue-600/25 to-blue-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* CONTENIDO */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{ y: textY }}
      >
        {/* LOGO + NOMBRE */}
        <motion.div {...fadeUp} className="mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-3xl bg-gradient-to-br from-orange-500 to-blue-600 shadow-2xl shadow-orange-500/20">
            <span className="text-4xl font-bold text-white">N</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
            NIVALIS
          </h1>

          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400">
            Marketing & Tech Lab
          </p>
        </motion.div>

        {/* SUBTÍTULO */}
        <motion.div {...fadeUpDelayed(0.15)}>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Transformamos ideas en{" "}
            <span className="text-orange-600 dark:text-orange-400">
              experiencias digitales
            </span>{" "}
            que impulsan negocios.
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Combinamos creatividad, estrategia y tecnología para llevar tu marca
            al siguiente nivel.
          </p>
        </motion.div>

        <motion.div
          {...fadeUpDelayed(0.25)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg
            text-white bg-gradient-to-r from-orange-500 to-orange-600 
            shadow-lg hover:scale-105 transition-all duration-300"
          >
            Hablemos
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 
            text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 
            transition-all duration-300"
          >
            Ver portfolio
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
