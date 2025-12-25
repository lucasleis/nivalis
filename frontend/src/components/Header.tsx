import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MessageCircle, Calendar } from "lucide-react";
//import ThemeToggle from "./theme/ThemeToggle";
import { useParallax } from "./scroll/useParallax";
import FullscreenMenu from "./FullscreenMenu";

import logo from "../assets/logos/A6.png";
import logo_mini from "../assets/logos/A6.png";


// ======== BUTTON STYLE ==========
const primaryButtonClasses =
  "inline-flex items-center justify-center " +
  "px-7 py-3 rounded-full " +
  "border border-black " +
  "bg-transparent text-black " +
  "font-nauryz text-base " +
  "transition-all duration-200 " +
  "hover:bg-black hover:text-white";

export default function Header() {
  // ===== MENU STATE =====
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  // ===== SCROLL STATE =====
  const [isTop, setIsTop] = useState(true);

  // ===== PARALLAX =====
  const logoY = useParallax({ range: 250, offset: -6 });
  //const glowOpacity = useParallax({ range: 200, from: 1, to: 0.35 });

  // ===== DETECT TOP =====
  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY === 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ===== SCROLL TO =====
  const handleNavClick = useCallback((href: string) => {
    closeMenu();
    const el = document.querySelector(href);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 w-full z-50 bg-transparent"
      >
        <div className={`w-full ${isTop ? "py-0" : "py-2"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-24">

              {/* LOGO */}
              <motion.button
                onClick={() => handleNavClick("#inicio")}
                className="relative flex items-center overflow-hidden"
                style={isTop ? { y: logoY } : undefined}
              >
                {/* LOGO TOP */}
                <motion.img
                  src={logo}
                  alt="Nivalis Logo"
                  className={`${isTop ? "h-14" : "h-10"} w-auto object-contain`}
                  initial={false}
                  animate={{
                    y: isTop ? 0 : -40,
                    opacity: isTop ? 1 : 0,
                  }}
                  whileHover={{
                    y: -40,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.05,
                  }}
                />

                {/* LOGO SCROLL */}
                <motion.img
                  src={logo_mini}
                  alt="Nivalis Logo Scroll"
                  className={`${isTop ? "h-14" : "h-10"} w-auto object-contain absolute`}
                  initial={false}
                  animate={{
                    y: isTop ? 40 : 0,
                    opacity: isTop ? 0 : 1,
                  }}
                  whileHover={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.05,
                  }}
                />
              </motion.button>

              {/* ACTIONS */}
              <div className="flex items-center gap-4">

                <AnimatePresence mode="wait">
                  {isTop ? (
                    /* ================= TEXT BUTTON (TOP) ================= */
                    <motion.a
                      key="agenda-text"
                      href="https://calendly.com/lucas-mateo-leis/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${primaryButtonClasses} hidden md:inline-flex`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      Agendar una reunión
                    </motion.a>
                  ) : (
                    /* ================= ICON BUTTON (SCROLL) ================= */
                    <motion.a
                      key="agenda-icon-desktop"
                      href="https://calendly.com/lucas-mateo-leis/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        hidden md:flex
                        w-11 h-11
                        rounded-full
                        border border-black
                        text-black
                        items-center justify-center
                        transition-all duration-200
                        hover:scale-105
                        hover:ring-2 hover:ring-black hover:ring-offset-2
                      "
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      aria-label="Agendar reunión"
                    >
                      <Calendar size={20} />
                    </motion.a>
                  )}
                </AnimatePresence>

                <a
                  href="https://calendly.com/lucas-mateo-leis/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    md:hidden
                    w-11 h-11
                    rounded-full
                    border border-black
                    text-black
                    flex items-center justify-center
                    transition-all duration-200
                    hover:scale-105
                    hover:ring-2 hover:ring-black hover:ring-offset-2
                  "
                  aria-label="Agendar reunión"
                >
                  <Calendar size={20} />
                </a>

                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-105 transition"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={22} />
                </a>

                <button
                  onClick={toggleMenu}
                  className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"
                  aria-label="Abrir menú"
                >
                  <Menu size={22} />
                </button>

              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ================= FULLSCREEN MENU ================= */}
      <FullscreenMenu
        open={open}
        onClose={closeMenu}
        onNavigate={handleNavClick}
      />
    </>
  );
}
