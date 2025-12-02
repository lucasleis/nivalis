import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { fadeUp, fadeUpDelayed, fadeScale, staggerContainer } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blobOrangeY = useParallax({ range: 700, offset: 35 });
  const blobBlueY = useParallax({ range: 700, offset: -35 });
  const contentY = useParallax({ range: 300, offset: -10 });

  const whatsappNumber = "5491151232153";
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me interesa conocer más sobre los servicios de NIVALIS."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contacto"
      ref={ref}
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-br from-gray-50 via-orange-50/30 to-blue-50/40
        dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800
        transition-colors duration-300
      "
    >
      {/* BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: blobOrangeY }}
          className="
            absolute top-1/4 right-1/3 
            w-[550px] h-[550px] rounded-full 
            bg-gradient-to-br from-orange-400/20 to-orange-500/10 
            blur-3xl dark:from-orange-500/10 dark:to-orange-600/5
          "
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={{ y: blobBlueY }}
          className="
            absolute bottom-1/4 left-1/3 
            w-[550px] h-[550px] rounded-full 
            bg-gradient-to-tr from-blue-600/20 to-blue-500/10 
            blur-3xl dark:from-blue-500/10 dark:to-blue-700/5
          "
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* CONTENIDO */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        style={{ y: contentY }}
      >
        {/* ICONO */}
        <motion.div variants={fadeScale}>
          <div
            className="inline-flex items-center justify-center 
              w-20 h-20 mb-8 rounded-3xl 
              bg-gradient-to-br from-orange-500 to-blue-600 
              shadow-2xl"
          >
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* TITULO */}
        <motion.h2
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold mb-8 text-gray-900 dark:text-white"
        >
          ¿Listo para dar{" "}
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
            el próximo paso
          </span>
          ?
        </motion.h2>

        {/* COPY */}
        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12"
        >
          Conversemos sobre tu proyecto y descubramos cómo llevar tu marca
          al siguiente nivel.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.div variants={fadeUpDelayed(0.2)}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            Escríbenos por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* MICROCOPY */}
        <motion.p
          variants={fadeUpDelayed(0.4)}
          className="mt-12 text-gray-500 dark:text-gray-400"
        >
          Respuesta garantizada en menos de 24 horas
        </motion.p>
      </motion.div>
    </section>
  );
}
