import { motion } from "framer-motion";
import { useRef } from "react";
//import { MessageCircle } from "lucide-react";
import nivalisGradient from "../assets/FONDO.jpg";

import {
  fadeUp,
  fadeUpDelayed,
} from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";

export default function CTA() {
  const ref = useRef(null);
  const blobOrangeY = useParallax({ range: 700, offset: 35 });
  const blobBlueY = useParallax({ range: 700, offset: -35 });
  const contentY = useParallax({ range: 200, offset: -10 });

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
        bg-white dark:bg-black
      "
    >
      {/* BLOBS EXTERIORES (IGUAL QUE ANTES) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ORANGE */}
        <motion.div
          style={{ y: blobOrangeY }}
          className="
            absolute top-1/4 right-1/3
            w-[500px] h-[500px] rounded-full
            bg-gradient-to-br from-[#fd6647]/25 to-[#ffe0d6]/20
            blur-3xl
          "
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* BLUE */}
        <motion.div
          style={{ y: blobBlueY }}
          className="
            absolute bottom-1/4 left-1/3
            w-[500px] h-[500px] rounded-full
            bg-gradient-to-tr from-[#0259dd]/25 to-[#83aefa]/20
            blur-3xl
          "
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.15, 0.35, 0.15] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* CARD */}
      <motion.div
        className="
          relative z-10
          w-[80%] mx-auto
          rounded-[32px]
          px-10 py-16 md:px-16 md:py-20
          overflow-hidden
          bg-cover bg-center
          bg-nivalis-pattern-overlay
        "
        style={{
          y: contentY,
          backgroundImage: `url(${nivalisGradient})`,
        }}
      >
        {/* OVERLAY MÍNIMO */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* CONTENIDO */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
          {/* LEFT */}
          <div>
            <motion.span
              variants={fadeUp}
              className="block mb-4 text-xs tracking-[0.3em] uppercase text-white/80"
            >
              Trabajemos juntos y en equipo
            </motion.span>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/85 mb-10 max-w-md"
            >
              Construyendo el camino hacia un resultado plug and play.
            </motion.p>

            <motion.div variants={fadeUpDelayed(0.2)}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  px-8 py-4 rounded-full
                  border border-white
                  text-white
                  hover:bg-white hover:text-black
                  transition-all
                "
              >
                Contactanos
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.h2
            variants={fadeUp}
            className="
              font-display font-black
              text-5xl md:text-7xl
              leading-tight
              uppercase
              text-white
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]
            "
          >
            Hacemos todo <br /> en un solo lugar
          </motion.h2>
        </div>
      </motion.div>
    </section>
  );
}
