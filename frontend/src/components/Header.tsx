import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme/ThemeToggle";
import { fadeUp, fadeIn, fadeScale } from "../motion/variants";
import { useParallax } from "./scroll/useParallax";

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
  "inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold " +
  "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/30 " +
  "hover:shadow-orange-500/50 hover:scale-[1.03] transition-all duration-200";

// ======== HEADER VARIANTS ==========
const headerVariants = {
  initial: {
    paddingTop: "0.9rem",
    paddingBottom: "0.9rem",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrolled: {
    paddingTop: "0.4rem",
    paddingBottom: "0.4rem",
    boxShadow: "0 10px 35px rgba(15,23,42,0.08)",
    backgroundColor: "rgba(255,255,255,0.85)",
    transition: { duration: 0.25 },
  },
};

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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  // ============= SHRINK ON SCROLL =============
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============= SCROLL SPY ROBUSTO =============
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

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, []);

  // ================================
  // ⭐ PREMIUM LOGO ANIMATIONS
  // ================================

  // Micro-parallax vertical
  const logoY = useParallax({ range: 250, offset: -6 });

  // Scroll glow (opacity dinámica)
  const glowOpacity = useParallax({ range: 200, from: 0.9, to: 0.3 });

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate={scrolled ? "scrolled" : "initial"}
        className="
          fixed top-0 left-0 w-full z-50 
          backdrop-blur-md border-b border-white/50
          dark:bg-slate-900/90 dark:border-slate-700 dark:shadow-xl
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            {/* ⭐ LOGO CON ANIMACIONES PREMIUM */}
            <motion.button
              onClick={() => handleNavClick("#inicio")}
              className="flex items-center gap-2"
              style={{ y: logoY }}
            >
              <motion.span
                style={{ opacity: glowOpacity }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className={`
                  text-2xl font-extrabold bg-clip-text text-transparent 
                  bg-gradient-to-r 
                  ${scrolled
                    ? "from-blue-500 to-orange-400"
                    : "from-orange-400 to-blue-600"
                  }
                  transition-all duration-300
                `}
              >
                NIVALIS
              </motion.span>

              <span className="
                text-[0.65rem] uppercase tracking-[0.3em] 
                text-gray-500/80 dark:text-gray-400 hidden sm:block
              ">
                Marketing & Tech Lab
              </span>
            </motion.button>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-sm font-medium 
                      text-gray-700 hover:text-gray-900 
                      dark:text-gray-300 dark:hover:text-white 
                      transition-colors group"
                  >
                    {link.label}

                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[2px] rounded-full 
                        bg-gradient-to-r from-orange-500 to-blue-600 
                        dark:from-orange-400 dark:to-blue-400
                        transition-all duration-300
                        ${
                          isActive
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }
                      `}
                    />
                  </button>
                );
              })}

              <ThemeToggle />

              <button
                onClick={() => handleNavClick("#contacto")}
                className={primaryButtonClasses}
              >
                Hablemos
              </button>
            </nav>

            {/* BOTON MOBILE */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-gray-800 dark:text-white p-1 rounded-full"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= OVERLAY MOBILE ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ================= PANEL MOBILE ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="
              fixed top-0 right-0 h-full w-72 z-50 md:hidden 
              bg-white/90 dark:bg-slate-900/90 
              backdrop-blur-xl shadow-xl 
              border-l border-white/20 dark:border-slate-800
              px-6 py-8 flex flex-col gap-6
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="self-end mb-4 text-gray-700 dark:text-gray-300"
            >
              <X size={26} />
            </button>

            {/* NAV MOBILE */}
            <nav className="flex flex-col gap-4 text-lg">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  variants={fadeUp}
                  onClick={() => handleNavClick(link.href)}
                  className="
                    text-left py-2 font-medium 
                    text-gray-800 dark:text-gray-200
                    hover:text-orange-500 dark:hover:text-orange-400
                    transition-colors
                  "
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* TOGGLE */}
            <motion.div variants={fadeIn}>
              <ThemeToggle />
            </motion.div>

            {/* CTA */}
            <motion.button
              variants={fadeScale}
              onClick={() => handleNavClick("#contacto")}
              className={`${primaryButtonClasses} mt-6 w-full justify-center`}
            >
              Hablemos
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
