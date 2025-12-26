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

  // ===== HOVER / TRANSITION DE LOGOS =====
  const logoTransition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 w-full z-[100] bg-transparent"
      >
        <div className={`w-full ${isTop ? "py-0" : "py-2"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-24">

              {/* ================= LOGO TOP ================= */}
              <AnimatePresence>
                {isTop && (
                  <motion.button
                    onClick={() => handleNavClick("#inicio")}
                    className="relative flex items-center"
                    style={{ y: logoY }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={logoTransition}
                  >
                    <img
                      src={logo}
                      alt="Nivalis Logo"
                      className="h-14 w-auto object-contain"
                    />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* ================= BOTONES TOP ================= */}
              <AnimatePresence>
                {isTop && (
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={logoTransition}
                  >
                    <a
                      href="https://calendly.com/lucas-mateo-leis/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${primaryButtonClasses} hidden md:inline-flex`}
                    >
                      Agendar una reunión
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
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* ================= LOGO SCROLL ================= */}
          <AnimatePresence>
            {!isTop && (
              <motion.button
                onClick={() => handleNavClick("#inicio")}
                className="fixed top-4 left-4 z-[100] flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={logoTransition}
              >
                <img
                  src={logo_mini}
                  alt="Nivalis Logo Scroll"
                  className="h-10 w-auto object-contain"
                />
              </motion.button>
            )}
          </AnimatePresence>

          {/* ================= BOTONES SCROLL ================= */}
          <AnimatePresence>
            {!isTop && (
              <motion.div
                className="fixed top-4 right-4 z-[100] flex items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={logoTransition}
              >
                <a
                  href="https://calendly.com/lucas-mateo-leis/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    rounded-full
                    border border-black
                    text-black
                    flex items-center justify-center
                    hover:scale-105
                    transition
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
              </motion.div>
            )}
          </AnimatePresence>

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
