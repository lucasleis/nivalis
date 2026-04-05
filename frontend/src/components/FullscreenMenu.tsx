import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
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
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function FullscreenMenu({
  open,
  onClose,
  onNavigate,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  if (!mounted) return null;

  const isServicesPage = location.pathname === "/servicios";

  const navItems = isServicesPage
    ? [
        { id: "inicio", label: "Inicio", href: "/" },
        { id: "desarrollo-web", label: "Desarrollo Web", href: "#desarrollo-web" },
        { id: "sistemas-medida", label: "Sistemas a medida", href: "#sistemas-medida" },
        { id: "automatizacion", label: "Automatización", href: "#automatizacion" },
        { id: "consultoria", label: "Consultoría", href: "#consultoria" },
        { id: "contacto", label: "Contacto", href: "#contacto" },
      ]
    : [
        { id: "inicio", label: "Inicio", href: "#inicio" },
        { id: "about", label: "Nivalis", href: "#about" },
        { id: "services", label: "Servicios", href: "#services" },
        { id: "portfolio", label: "Proyectos", href: "#portfolio" },
        { id: "contacto", label: "Contacto", href: "#contacto" },
      ];

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999]">

          {/* OVERLAY (debajo del contenido) */}
          <div
            className="absolute inset-0 bg-black/40 z-0"
            onClick={onClose}
          />

          {/* CONTENT */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 w-full h-full bg-nivalis-pattern text-white"
          >
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="w-full h-full"
            >
              {/* CLOSE */}
              <button
                onClick={onClose}
                className="
                  absolute top-6 right-6
                  w-12 h-12
                  rounded-full
                  bg-black
                  text-xl
                  flex items-center justify-center
                  hover:bg-nivOrange
                  transition
                "
              >
                ✕
              </button>

              {/* GRID */}
              <div
                className="
                  h-full w-full
                  grid
                  grid-cols-1
                  lg:grid-cols-3
                  lg:grid-rows-[1fr_auto]
                  gap-8
                  px-6 pt-20 pb-16
                  lg:px-20 lg:py-24
                "
              >

                {/* LOGO */}
                <motion.div
                  variants={itemVariants}
                  className="hidden lg:flex col-start-1 row-start-1"
                >
                  <img
                    src={logo}
                    alt="Nivalis"
                    className="
                      w-auto
                      max-w-[180px]
                      max-h-[120px]
                      object-contain
                    "
                  />
                </motion.div>

                {/* LOGO MOBILE */}
                <div className="lg:hidden">
                  <img src={logo} alt="Nivalis" className="w-24 mb-10" />
                </div>

                {/* LINKS */}
                <motion.div
                  variants={itemVariants}
                  className="
                    flex flex-col
                    text-4xl lg:text-6xl
                    font-semibold
                    space-y-2 lg:space-y-6
                    lg:col-start-2 lg:row-start-1
                  "
                >
                  {navItems.map((item) => (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <button
                        onClick={() => {
                          onClose();
                          onNavigate(item.href);
                        }}
                      >
                        <span className="relative inline-block pb-2">
                          {item.label}
                          <LazoHover active={hovered === item.id} />
                        </span>
                      </button>
                    </div>
                  ))}
                </motion.div>


                {/* CTA */}
                <motion.div
                  variants={itemVariants}
                  className="
                    flex flex-col
                    items-end
                    justify-end
                    text-right
                    lg:col-start-2 lg:col-span-2 lg:row-start-2
                  "
                >
                  <p className="text-2xl lg:text-4xl mb-4 leading-tight">
                    ¿Tenés un proyecto en mente?
                  </p>

                  <a
                    href="https://wa.me/5491151232153"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="
                      text-3xl lg:text-5xl
                      hover:text-[#fd6647]
                      transition
                      self-end
                    "
                  >
                    Hablemos ↗
                  </a>
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
