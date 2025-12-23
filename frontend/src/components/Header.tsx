import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Calendar } from "lucide-react";
import ThemeToggle from "./theme/ThemeToggle";
import { fadeUp, fadeIn, fadeScale } from "../motion/variants";
import { useParallax } from "./scroll/useParallax";
import FullscreenMenu from "./FullscreenMenu";
import { useRef } from "react";

import logo from "../assets/logos/A6.png";
import logo_mini from "../assets/logos/A6.png";

// ======== NAV LINKS ==========
const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Contacto", href: "#contacto" },
];

// ======== BUTTON STYLE ==========
const primaryButtonClasses =
  "inline-flex items-center justify-center " +
  "px-7 py-3 rounded-full " +
  "border border-black " +
  "bg-transparent text-black " +
  "font-nauryz text-base " +
  "transition-all duration-200 " +
  "hover:bg-black hover:text-white";


// ======== MOBILE OVERLAY ==========
const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.5 },
  exit: { opacity: 0 },
};

// ======== MOBILE PANEL ==========
const panelVariants = {
  initial: { x: "100%" },
  animate: {
    x: "0%",
    transition: { stiffness: 220, damping: 25 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25 },
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState("#inicio");

  // ============= BODY SCROLL LOCK (MENU) =============
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const logoY = useParallax({ range: 250, offset: -6 });
  const glowOpacity = useParallax({ range: 200, from: 1, to: 0.35 });

  // ============= SCROLL POSITION =============
  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY === 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ============= SCROLL SPY =============
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "#inicio";

      navLinks.forEach((link) => {
        const el = document.querySelector(link.href) as HTMLElement;
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = link.href;
        }
      });

      setActiveSection(current);
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy);
    window.addEventListener("resize", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("resize", handleScrollSpy);
    };
  }, []);

  // ============ SCROLL TO ============
  const handleNavClick = useCallback((href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* ================= HEADER TOP ================= */}
      <AnimatePresence>
        {isTop && (
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 w-full z-50 bg-transparent"

          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between h-24">

                {/* LOGO */}
                <motion.button
                  onClick={() => handleNavClick("#inicio")}
                  className="flex items-center gap-3"
                  style={{ y: logoY }}
                >
                  <motion.img
                    src={logo}
                    alt="Nivalis Logo"
                    style={{ opacity: glowOpacity }}
                    className="h-14 w-auto object-contain"
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.button>

                {/* ACTIONS */}
                <div className="flex items-center gap-6">
                  <a
                    href="https://calendly.com/lucas-mateo-leis/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={primaryButtonClasses}
                  >
                    Agendar una reunión
                  </a>


                  <a
                    href="https://wa.me/5491123456789?text=Hola%20Nivalis%20quiero%20agendar%20una%20reunión"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-105 transition"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={22} />
                  </a>

                  <button
                    onClick={() => setOpen(prev => !prev)}
                    className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"
                  >
                    <Menu size={22} />
                  </button>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ================= HEADER SCROLL ================= */}
      <AnimatePresence>
        {!isTop && (
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-8 left-0 w-full z-50 bg-transparent"
          >
            <div className="w-full px-8">
              <div className="flex items-center justify-between h-18">
                {/* LOGO SMALL */}
                <img
                  src={logo_mini}
                  alt="Nivalis"
                  className="h-10 w-auto cursor-pointer"
                  onClick={() => handleNavClick("#inicio")}
                />

                {/* ICONS */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://calendly.com/lucas-mateo-leis/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Agendar una reunión"
                    className="
                      w-10 h-10 rounded-full
                      flex items-center justify-center
                      border border-black
                      text-black
                      hover:bg-black hover:text-white
                      transition-all duration-200
                    "
                  >
                    <Calendar size={20} />
                  </a>

                  <button
                    onClick={() => setOpen(prev => !prev)}
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
                  >
                    <Menu size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ================= MOBILE MENU ================= */}
      <div className="md:hidden">
        <AnimatePresence>
          {open && (
            <>
              {/* Overlay */}
              <motion.div
                key="overlay"
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setOpen(false)}
              />

              {/* Panel */}
              <motion.div
                key="panel"
                variants={panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="
                  fixed top-0 right-0 h-full w-72 z-50
                  bg-white/90 dark:bg-slate-900/90
                  backdrop-blur-xl shadow-xl
                  border-l border-white/20 dark:border-slate-800
                  px-6 py-8 flex flex-col gap-6 font-body
                "
              >
                <button
                  onClick={() => setOpen(false)}
                  className="self-end mb-4 text-gray-700 dark:text-gray-300"
                >
                  <X size={26} />
                </button>

                <nav className="flex flex-col gap-4 text-lg">
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.label}
                      variants={fadeUp}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left py-2 font-medium"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </nav>

                <ThemeToggle />

                <motion.button
                  variants={fadeScale}
                  onClick={() => handleNavClick("#contacto")}
                  className={`${primaryButtonClasses} mt-6 w-full`}
                >
                  Hablemos
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ================= FULLSCREEN MENU (DESKTOP) ================= */}
      <FullscreenMenu
        open={open}
        onClose={() => setOpen(false)}
        onNavigate={(href: string) => handleNavClick(href)}
      />

    </>
  );
}
