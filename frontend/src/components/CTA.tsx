import { motion } from "framer-motion";
import { useRef } from "react";
import nivalisGradient from "../assets/FONDO.webp";
import { fadeUp, fadeUpDelayed, staggerContainer } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";
import CalendlyWidget from "./CalendlyWidget";

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
    <motion.section
      id="contacto"
      ref={ref}
      className="relative py-32 overflow-hidden bg-white dark:bg-black"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
    >
      {/* BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: blobOrangeY }}
          className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#fd6647]/25 to-[#ffe0d6]/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={{ y: blobBlueY }}
          className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#0259dd]/25 to-[#83aefa]/20 blur-3xl"
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
      <div
        className="
          relative z-10
          w-full
          max-w-7xl
          mx-auto
          px-6 md:px-8 xl:px-10
        "
      >
        <motion.div
          style={{
            y: contentY,
            backgroundImage: `url(${nivalisGradient})`,
          }}
          className="
            relative w-full
            rounded-[32px]
            px-10 py-16 md:px-16 md:py-20
            overflow-hidden
            bg-cover bg-center
            bg-nivalis-pattern-overlay
          "
        >
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-white">
            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display font-black text-4xl md:text-5xl leading-tight uppercase text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] mb-6"
              >
                Estrategia, diseño y tecnología para hacer crecer tu negocio
              </motion.h2>

              <motion.span
                variants={fadeUp}
                className="block mb-4 text-xs tracking-[0.3em] uppercase text-white/80"
              >
                Hagamos crecer tu proyecto
              </motion.span>

              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-white/85 mb-10 max-w-md mx-auto lg:mx-0"
              >
                Te acompañamos de principio a fin, pensando cada solución desde tu negocio y la estrategia.
              </motion.p>

              <motion.div variants={fadeUpDelayed(0.2)}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all"
                >
                  Contactanos
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — Calendly */}
            <motion.div
              variants={fadeUp}
              className="order-1 lg:order-2 w-full"
            >
              <CalendlyWidget url="https://calendly.com/TU-USUARIO" className="w-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}