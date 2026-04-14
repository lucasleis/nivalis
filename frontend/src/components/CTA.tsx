import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import nivalisGradient from "../assets/FONDO.webp";
import { fadeUp, fadeUpDelayed, staggerContainer } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";

export default function CTA() {
  const ref = useRef(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const blobOrangeY = useParallax({ range: 700, offset: 35 });
  const blobBlueY = useParallax({ range: 700, offset: -35 });
  const contentY = useParallax({ range: 200, offset: -10 });

  const whatsappNumber = "5491151232153";
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me interesa conocer más sobre los servicios de NIVALIS."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (showCalendly) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showCalendly]);

  return (
    <>
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 xl:px-10">
          <motion.div
            style={{
              y: contentY,
              backgroundImage: `url(${nivalisGradient})`,
            }}
            className="relative w-full rounded-[32px] px-10 py-16 md:px-16 md:py-20 overflow-hidden bg-cover bg-center bg-nivalis-pattern-overlay"
          >
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
              {/* LEFT */}
              <motion.div
                variants={fadeUp}
                className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
              >
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
                  Te acompañamos de principio a fin, pensando cada solución desde
                  tu negocio y la estrategia.
                </motion.p>

                <motion.div
                  variants={fadeUpDelayed(0.2)}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all"
                  >
                    Contactanos
                  </a>

                  <button
                    onClick={() => setShowCalendly(true)}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-all font-medium"
                  >
                    Agendar reunión
                  </button>
                </motion.div>
              </motion.div>

              {/* RIGHT */}
              <motion.h2
                variants={fadeUp}
                className="order-1 lg:order-2 text-center lg:text-center font-display font-black text-4xl md:text-6xl leading-tight uppercase text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              >
                Estrategia, diseño y tecnología para hacer crecer tu negocio
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CALENDLY MODAL */}
      <AnimatePresence>
        {showCalendly && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCalendly(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] max-h-[800px] overflow-hidden shadow-2xl relative"
            >
              {/* Close button */}
              <button
                onClick={() => setShowCalendly(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                aria-label="Cerrar"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Calendly iframe */}
              <iframe
                src="https://calendly.com/lucas-mateo-leis/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Agendar reunión con NIVALIS"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
