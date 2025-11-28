import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme/ThemeToggle";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto", href: "#contacto" },
];

const primaryButtonClasses =
  "inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold " +
  "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/30 " +
  "hover:shadow-orange-500/50 hover:scale-[1.03] transition-all duration-200";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#inicio");

  // Efecto de scroll para tamaño/sombra del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy basado en posición del scroll (no IntersectionObserver)
  useEffect(() => {
    const handleScrollSpy = () => {
      // Usamos el centro de la pantalla como referencia
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "#inicio";

      navLinks.forEach((link) => {
        const el = document.querySelector(link.href) as HTMLElement | null;
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          current = link.href;
        }
      });

      setActiveSection(current);
    };

    handleScrollSpy(); // para que marque bien al cargar
    window.addEventListener("scroll", handleScrollSpy);
    window.addEventListener("resize", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("resize", handleScrollSpy);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        animate={{
          paddingTop: scrolled ? "0.4rem" : "0.9rem",
          paddingBottom: scrolled ? "0.4rem" : "0.9rem",
          boxShadow: scrolled
            ? "0 10px 35px rgba(15,23,42,0.08)"
            : "0 0 0 rgba(0,0,0,0)",
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.85)"
            : "rgba(255,255,255,1)",
        }}
        transition={{ duration: 0.25 }}
        className="
          fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/50
          dark:bg-slate-900/90 dark:border-slate-700 dark:shadow-xl
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* LOGO */}
            <button
              onClick={() => handleNavClick("#inicio")}
              className="flex items-center gap-2 group"
              aria-label="Ir al inicio"
            >
              <span
                className={`
                  text-2xl font-extrabold bg-clip-text text-transparent 
                  transition-all duration-300
                  ${
                    scrolled
                      ? "bg-gradient-to-r from-blue-500 to-orange-400"
                      : "bg-gradient-to-r from-orange-400 to-blue-600"
                  }
                  dark:bg-gradient-to-r dark:from-blue-400 dark:to-orange-300
                `}
              >
                NIVALIS
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500/80 dark:text-gray-400 hidden sm:block">
                Marketing & Tech Lab
              </span>
            </button>

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors group"
                  >
                    {link.label}
                    {/* underline animado */}
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

            {/* BOTÓN MENU MOBILE */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-gray-800 dark:text-white p-1 rounded-full"
              aria-label="Abrir menú"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* BACKDROP MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* PANEL LATERAL MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            className="
              fixed top-0 right-0 h-full w-72 z-50 md:hidden 
              bg-white/90 dark:bg-slate-900/90 
              backdrop-blur-xl shadow-xl 
              border-l border-white/20 dark:border-slate-800
              px-6 py-8 flex flex-col gap-6
            "
          >
            {/* CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className="self-end mb-4 text-gray-700 dark:text-gray-300"
              aria-label="Cerrar menú"
            >
              <X size={26} />
            </button>

            {/* LINKS MOBILE */}
            <nav className="flex flex-col gap-4 text-lg">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="
                    text-left py-2 font-medium 
                    text-gray-800 dark:text-gray-200
                    hover:text-orange-500 dark:hover:text-orange-400
                    transition-colors
                  "
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* DARK MODE */}
            <div className="mt-4">
              <ThemeToggle />
            </div>

            {/* CTA MOBILE */}
            <button
              onClick={() => handleNavClick("#contacto")}
              className={`${primaryButtonClasses} mt-6 w-full justify-center`}
            >
              Hablemos
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
