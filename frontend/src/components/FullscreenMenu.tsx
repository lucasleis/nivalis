import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import logo from "../assets/logos/A5.png";
import LazoHover from "./LazoHover";

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


export default function FullscreenMenu({
  open,
  onClose,
  onNavigate,
}: Props) {

  const [hovered, setHovered] = useState<string | null>(null);

  const navItems = [
    { id: "home", label: "Home", href: "#inicio" },
    { id: "nivalis", label: "Nivalis", href: "#inicio" },
    { id: "servicios", label: "Servicios", href: "#servicios" },
    { id: "proyectos", label: "Proyectos", href: "#proyectos" },
    ];

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
                    bg-[#fd6647] text-black
                    text-xl flex items-center justify-center
                "
            >
              ✕
            </button>

            <div className="h-full w-full grid grid-cols-3 px-20 py-24">
                {/* ================= LEFT: LOGO + SERVICIOS ================= */}
                <motion.div
                variants={itemVariants}
                className="flex flex-col"
                >
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Nivalis"
                    className="w-40 mb-16"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                />


                {/* Servicios */}
                <h3 className="text-4xl mb-10">Servicios</h3>

                <ul className="space-y-4 text-lg text-white/80 hover:text-white transition">
                    <li>Desarrollo web</li>
                    <li>E-commerce</li>
                    <li>Experiencia de Usuario (UX)</li>
                    <li>Desarrollo de apps y sistemas</li>
                    <li>Branding y diseño de marca</li>
                    <li>SEM - Google ads</li>
                    <li>Gestión de redes sociales</li>
                </ul>
                </motion.div>

                {/* ================= CENTER: NAVEGACIÓN ================= */}
                <motion.div
                variants={itemVariants}
                className="
                    flex flex-col
                    text-6xl font-semibold
                    space-y-10
                    pt-[10px]
                "
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
                        className="relative z-10 transition"
                    >
                        <span className="relative inline-block px-0.5 pb-2">
                            <span className="relative z-10">
                                {item.label}
                            </span>
                            <LazoHover active={hovered === item.id} />
                        </span>
                    </button>
                    </div>
                ))}
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
                    className="mt-6 text-[#fd6647] text-5xl flex items-center gap-4"
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
