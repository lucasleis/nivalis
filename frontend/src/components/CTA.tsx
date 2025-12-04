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
        bg-gradient-to-br from-[#ffffff] via-[#ffe0d6]/25 to-[#83aefa]/25
        dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800
        transition-colors duration-300
      "
    >
      {/* BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* ORANGE BLOB */}
        <motion.div
          style={{ y: blobOrangeY }}
          className="
            absolute top-1/4 right-1/3 
            w-[500px] h-[500px] rounded-full 
            bg-gradient-to-br from-[#fd6647]/25 to-[#ffe0d6]/20
            blur-3xl
          "
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* BLUE BLOB */}
        <motion.div
          style={{ y: blobBlueY }}
          className="
            absolute bottom-1/4 left-1/3 
            w-[500px] h-[500px] rounded-full 
            bg-gradient-to-tr from-[#0259dd]/25 to-[#83aefa]/20
            blur-3xl
          "
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
            className="
              inline-flex items-center justify-center 
              w-20 h-20 mb-8 rounded-3xl 
              bg-gradient-to-br from-nivOrange to-nivBlue 
              shadow-2xl
            "
          >
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* TITULO */}
        <motion.h2
          variants={fadeUp}
          className="
            font-display font-bold
            text-5xl md:text-7xl 
            mb-8 text-gray-900 dark:text-white
          "
        >
          ¿Listo para dar{" "}
          <span className="text-nivOrange dark:text-nivLightBlue">
            el próximo paso
          </span>
          ?
        </motion.h2>

        {/* COPY */}
        <motion.p
          variants={fadeUp}
          className="
            font-body 
            text-xl md:text-2xl 
            text-gray-700 dark:text-gray-300 
            mb-12 max-w-2xl mx-auto leading-relaxed
          "
        >
          Conversemos sobre tu proyecto y descubramos cómo llevar tu marca
          al siguiente nivel con soluciones modernas, ágiles y creativas.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.div variants={fadeUpDelayed(0.2)}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 
              px-10 py-5 rounded-full font-body font-semibold text-lg
              bg-nivOrange text-white 
              hover:bg-[#e85a40] hover:scale-105 
              shadow-lg hover:shadow-xl 
              transition-all
            "
          >
            <MessageCircle className="w-6 h-6" />
            Escríbenos por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* MICROCOPY */}
        <motion.p
          variants={fadeUpDelayed(0.4)}
          className="font-body mt-12 text-gray-600 dark:text-gray-400"
        >
          Respuesta garantizada en menos de 24 horas
        </motion.p>
      </motion.div>
    </section>
  );
}
