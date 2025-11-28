import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme/ThemeProvider";
import ThemeToggle from "./theme/ThemeToggle";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Sobre Nosotros", href: "#about" },
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

  const { theme, toggleTheme } = useTheme();

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href) as HTMLElement | null)
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
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
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/50 
      dark:bg-slate-900/90 dark:border-slate-700 dark:shadow-xl"
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
              className={`text-2xl font-extrabold bg-clip-text text-transparent transition-all duration-300 
              ${scrolled ? "bg-gradient-to-r from-blue-500 to-orange-400" : "bg-gradient-to-r from-orange-400 to-blue-600"}
              dark:bg-gradient-to-r dark:from-blue-400 dark:to-orange-300`}
            >
              NIVALIS
            </span>

            <span
              className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500/80 
              dark:text-gray-400 hidden sm:block"
            >
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
                  className="relative text-sm font-medium text-gray-700 hover:text-gray-900 
                  dark:text-gray-300 dark:hover:text-white transition-colors group"
                >
                  {link.label}

                  {/* Underline animado */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 
                    bg-gradient-to-r from-orange-500 to-blue-600 
                    dark:from-orange-400 dark:to-blue-400
                    ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
                    `}
                  />
                </button>
              );
            })}

            {/* TOGGLE DARK MODE */}
            <ThemeToggle />

            {/* CTA */}
            <button
              onClick={() => handleNavClick("#contacto")}
              className={primaryButtonClasses}
            >
              Hablemos
            </button>
          </nav>

          {/* MENU MOBILE */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden text-gray-800 dark:text-white p-1 rounded-full"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-slate-700"
        >
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left py-3 text-base border-b border-gray-200 dark:border-slate-800 
                text-gray-800 dark:text-gray-300"
              >
                {link.label}
              </button>
            ))}

            {/* TOGGLE DARK MODE (Mobile) */}
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-700 dark:text-gray-300">Modo oscuro</span>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
