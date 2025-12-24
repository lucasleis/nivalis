import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import LazoHover from "./LazoHover";

import logo from "../assets/logos/A5.png";

interface Props {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

/* =========================
   ANIMATIONS
========================= */

const menuVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

export default function FullscreenMenu({
  open,
  onClose,
  onNavigate,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  /* =========================
     MOUNT (PORTAL SAFE)
  ========================= */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================
     SCROLL LOCK (GLOBAL)
  ========================= */
  useEffect(() => {
    const el = document.documentElement;

    if (open) {
      el.style.overflow = "hidden";
    } else {
      el.style.overflow = "";
    }

    return () => {
      el.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const root = document.getElementById("root");

    if (!root) return;

    if (open) {
      root.style.transform = "none";
    }

    return () => {
      root.style.transform = "";
    };
  }, [open]);


  if (!mounted) return null;

  const navItems = [
    { id: "home", label: "Home", href: "#inicio" },
    { id: "nivalis", label: "Nivalis", href: "#inicio" },
    { id: "servicios", label: "Servicios", href: "#servicios" },
    { id: "proyectos", label: "Proyectos", href: "#proyectos" },
  ];

  const services = [
    "Desarrollo web",
    "E-commerce",
    "Experiencia de Usuario (UX)",
    "Desarrollo de apps y sistemas",
    "Branding y diseño de marca",
    "SEM - Google ads",
    "Gestión de redes sociales",
  ];

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            transform: "none", 
          }}
          className="bg-nivalis-pattern text-white overflow-hidden"
        >

          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
          />

          {/* ANIMATED WRAPPER */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 w-full h-full"
          >
            {/* CONTENT */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="h-full w-full"
            >
              {/* CLOSE */}
              <button
                onClick={onClose}
                className="
                  absolute top-6 right-6
                  w-12 h-12 rounded-full
                  bg-[#fd6647] text-black
                  text-xl flex items-center justify-center
                "
                aria-label="Cerrar menú"
              >
                ✕
              </button>

              {/* GRID */}
              <div className="h-full w-full grid grid-cols-3 px-20 py-24">

                {/* LEFT */}
                <motion.div variants={itemVariants} className="flex flex-col">
                  <img src={logo} alt="Nivalis" className="w-40 mb-16" />
                  <h3 className="text-4xl mb-10">Servicios</h3>
                  <ul className="space-y-4 text-lg text-white/80">
                    {services.map((service) => (
                      <li key={service} className="hover:text-[#fd6647] transition">
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* CENTER */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col text-6xl font-semibold space-y-4"
                >
                  {navItems.map((item) => (
                    <div
                      key={item.id}
                      className="relative inline-block"
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <button
                        onClick={() => {
                          onClose();
                          onNavigate(item.href);
                        }}
                        className="relative z-10"
                      >
                        <span className="relative inline-block px-0.5 pb-2">
                          <span className="relative z-10">{item.label}</span>
                          <LazoHover active={hovered === item.id} />
                        </span>
                      </button>
                    </div>
                  ))}
                </motion.div>

                {/* RIGHT */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col justify-end"
                >
                  <p className="text-4xl leading-tight whitespace-nowrap self-end">
                    ¿Tenés un proyecto en mente?
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onNavigate("#contacto");
                    }}
                    className="mt-6 text-[#fd6647] text-5xl self-end"
                  >
                    Hablemos ↗
                  </button>
                </motion.div>
                
              </div>

            </motion.div>
            
          </motion.div>

        </div>
      )}
    </AnimatePresence>,
    document.body
  );

}
