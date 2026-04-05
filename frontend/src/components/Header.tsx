import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, MessageCircle } from "lucide-react";
import { useParallax } from "./scroll/useParallax";
import FullscreenMenu from "./FullscreenMenu";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../assets/logos/A6.png";

const navSectionsHome = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "about", label: "Nivalis", href: "#about" },
  { id: "services", label: "Servicios", href: "#services" },
  { id: "portfolio", label: "Proyectos", href: "#portfolio" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];

const navSectionsServices = [
  { id: "inicio", label: "Inicio", href: "/" },
  { id: "desarrollo-web", label: "Desarrollo Web", href: "#desarrollo-web" },
  { id: "sistemas-medida", label: "Sistemas a medida", href: "#sistemas-medida" },
  { id: "automatizacion", label: "Automatización", href: "#automatizacion" },
  { id: "consultoria", label: "Consultoría", href: "#consultoria" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];

const navSectionsCaseStudy = [
  { id: "inicio", label: "Inicio", href: "/" },
  { id: "desafio", label: "Desafío", href: "#desafio" },
  { id: "solucion", label: "Solución", href: "#solucion" },
  { id: "resultados", label: "Resultados", href: "#resultados" },
  { id: "beneficios", label: "Beneficios", href: "#beneficios" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];

const primaryButtonClasses =
  "inline-flex items-center justify-center " +
  "px-5 py-2 rounded-full " +
  "border border-black " +
  "bg-transparent text-black " +
  "font-nauryz text-sm " +
  "transition-all duration-200 ease-out " +
  "hover:bg-nivOrange hover:text-white hover:border-nivOrange " +
  "hover:scale-105";

function NavLink({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative font-nauryz text-sm py-3 px-3
        transition-colors duration-200
        ${isActive ? "text-nivOrange" : "text-gray-700 dark:text-gray-300 hover:text-nivOrange"}
      `}
    >
      {label}
      <motion.span
        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-nivOrange rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: isActive ? "80%" : "0%" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </button>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const logoY = useParallax({ range: 250, offset: -6 });

  const isServicesPage = location.pathname === "/servicios";
  const isCaseStudyPage = location.pathname.startsWith("/case-study/");
  const navSections = isCaseStudyPage
    ? navSectionsCaseStudy
    : isServicesPage
    ? navSectionsServices
    : navSectionsHome;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.4] }
    );

    navSections.forEach(({ href }) => {
      if (href.startsWith("/")) return;
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navSections, location.pathname]);

  const handleNavClick = useCallback(
    (href: string) => {
      closeMenu();
      // /#section → navigate al home con estado para scroll
      if (href.startsWith("/#")) {
        const anchor = href.slice(1); // "#section"
        navigate("/", { state: { scrollTo: anchor } });
      } else if (href.startsWith("/")) {
        navigate(href);
      } else {
        // ancla local (#section) — scroll en la misma página
        const el = document.querySelector(href);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    [navigate, closeMenu]
  );

  const handleLogoClick = useCallback(() => {
    if (location.pathname === "/servicios") {
      navigate("/");
    } else if (location.pathname === "/") {
      const el = document.querySelector("#inicio");
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }, [location.pathname, navigate]);

  const logoTransition = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  };

  const isActive = (id: string) => activeSection === id;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className={`w-full ${isScrolled ? "py-2" : "py-4"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">

              <motion.button
                onClick={handleLogoClick}
                className="relative flex items-center"
                style={{ y: isScrolled ? 0 : logoY }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={logoTransition}
              >
                <img
                  src={logo}
                  alt="Nivalis Logo"
                  className={`w-auto object-contain transition-all duration-300 ${
                    isScrolled ? "h-10" : "h-12"
                  }`}
                />
              </motion.button>

              <nav className="hidden lg:flex items-center gap-1">
                {navSections.map((item) => (
                  <NavLink
                    key={item.id}
                    label={item.label}
                    isActive={isActive(item.id)}
                    onClick={() => handleNavClick(item.href)}
                  />
                ))}
              </nav>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={logoTransition}
              >
                <a
                  href="https://calendly.com/lucas-mateo-leis/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${primaryButtonClasses} hidden md:inline-flex`}
                >
                  Agendar
                </a>

                <a
                  href="https://wa.me/5491151232153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10
                    rounded-full
                    bg-green-500 text-white
                    flex items-center justify-center
                    transition-all duration-200 ease-out
                    hover:bg-nivOrange hover:scale-105
                  "
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>

                <button
                  onClick={toggleMenu}
                  className="
                    w-10 h-10
                    rounded-full
                    bg-black text-white
                    flex items-center justify-center
                    transition-all duration-200 ease-out
                    hover:bg-nivOrange hover:scale-105
                  "
                  aria-label="Abrir menú"
                >
                  <Menu size={20} />
                </button>

              </motion.div>

            </div>
          </div>
        </div>
      </motion.header>

      <FullscreenMenu
        open={open}
        onClose={closeMenu}
        onNavigate={handleNavClick}
      />
    </>
  );
}
