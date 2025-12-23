import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

/* =========================
   ANIMATIONS
========================= */

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.02,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.25,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};


export default function FullscreenMenu({ open, onClose, onNavigate }: Props) {
  /* =========================
     BLOQUEAR SCROLL
  ========================= */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="
            fixed inset-0 z-[100]
            w-screen h-screen
            bg-nivalis-pattern
            relative overflow-hidden
            text-white
            hidden md:block
          "
        >
          {/* Overlay oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/40 z-0"
          />

          {/* CONTENIDO */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 h-full w-full"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute top-6 right-6
                w-12 h-12 rounded-full
                bg-yellow-400 text-black
                text-xl flex items-center justify-center
              "
            >
              ✕
            </button>

            <div className="h-full w-full grid grid-cols-3 px-20 py-24">
              {/* SERVICIOS */}
              <motion.div variants={itemVariants}>
                <h3 className="text-4xl mb-8">Servicios</h3>
                <ul className="space-y-4 text-lg opacity-80">
                  <li>Desarrollo web</li>
                  <li>E-commerce</li>
                  <li>UX/UI</li>
                  <li>Apps y sistemas</li>
                  <li>Branding</li>
                  <li>SEO</li>
                  <li>SEM</li>
                  <li>Redes sociales</li>
                </ul>
              </motion.div>

              {/* NAVEGACIÓN */}
              <motion.div
                variants={itemVariants}
                className="text-5xl font-semibold space-y-6"
              >
                <button onClick={() => onNavigate("#inicio")}>Home</button>
                <button onClick={() => onNavigate("#agencia")}>Agencia</button>
                <button onClick={() => onNavigate("#trabajos")}>Trabajos</button>
                <button onClick={() => onNavigate("#contacto")}>Contacto</button>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-end"
              >
                <p className="text-4xl leading-tight">
                  ¿Tenés un proyecto en mente?
                </p>
                <button
                  onClick={() => onNavigate("#contacto")}
                  className="mt-6 text-yellow-400 text-5xl flex items-center gap-4"
                >
                  Hablemos <span>↗</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
