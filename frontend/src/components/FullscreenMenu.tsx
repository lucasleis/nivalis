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

const underlineVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
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

  const isMobile = window.matchMedia("(max-width: 1024px)").matches;

  /* =========================
     SCROLL LOCK (GLOBAL)
  ========================= */
  useEffect(() => {
    const el = document.documentElement;
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;

    if (open && !isMobile) {
      // Desktop → bloquear scroll
      el.style.overflow = "hidden";
    } else {
      // Mobile o cerrado → permitir scroll
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
    { id: "proyectos", label: "Proyectos", href: "#proyectos" },
    { id: "contacto", label: "Contacto", href: "#contacto" },
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
            className="relative z-10 w-full h-full overflow-y-auto lg:overflow-hidden"
          >
            {/* CONTENT */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="min-h-full w-full"
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
              <div className=" min-h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 px-6 pt-16 pb-24 lg:py-24 lg:px-20 ">

                {/* LEFT */}
                <motion.div
                  variants={itemVariants}
                  className=" flex flex-col order-2 lg:order-1">
                  <img src={logo} alt="Nivalis" className="w-40 mb-16 hidden lg:block"
                />

                  <h3 className="text-4xl mb-2 lg:mb-10">Servicios</h3>
                  <ul className="space-y-1 lg:space-y-4 text-lg text-white/80">
                    {services.map((service) => (
                      <li key={service} className="hover:text-[#fd6647] transition">
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* LOGO – SOLO MOBILE */}
                <div className="mb-10 lg:hidden">
                  <img src={logo} alt="Nivalis" className="w-24"/>
                </div>

                {/* CENTER */}
                <motion.div
                  variants={itemVariants}
                  className=" flex flex-col text-4xl lg:text-6xl font-semibold space-y-1 lg:space-y-6 order-1 lg:order-2"
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
                  className=" flex flex-col justify-end gap-1 lg:gap-6 order-3 text-right"
                >

                  <p className=" text-2xl lg:text-4xl leading-tight whitespace-nowrap self-end">
                    ¿Tenés un proyecto en mente?
                  </p>

                  <motion.button
                    onClick={() => {
                      onClose();
                      onNavigate("#contacto");
                    }}
                    className="mt-6 self-end"
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                  >
                    <span className="relative inline-block">
                      {/* TEXTO */}
                      <span className="text-[#fd6647] text-3xl lg:text-5xl">
                        Hablemos ↗
                      </span>

                      {/* SUBRAYADO */}
                      <motion.span
                        variants={underlineVariants}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
                          absolute left-0 -bottom-1
                          h-[3px] w-full
                          bg-[#fd6647]
                          origin-left
                        "
                      />
                    </span>
                  </motion.button>

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
