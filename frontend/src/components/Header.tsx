import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode toggle
  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.header
      animate={{
        paddingTop: scrolled ? "0.5rem" : "1rem",
        paddingBottom: scrolled ? "0.5rem" : "1rem",
        boxShadow: scrolled
          ? "0 4px 20px rgba(0,0,0,0.08)"
          : "0 0 0 rgba(0,0,0,0)",
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.85)"
          : "rgba(255,255,255,1)",
      }}
      className="fixed top-0 left-0 w-full z-50 dark:bg-black/90 backdrop-blur"
      transition={{ duration: 0.25 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <a href="#inicio" className="flex items-center gap-2 select-none">
            <span
              className={`
                font-manrope text-2xl font-extrabold transition-all duration-300 
                ${scrolled
                  ? "bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent"
                }
              `}
            >
              NIVALIS
            </span>

            <span
              className={`text-xs uppercase tracking-[0.3em] transition-colors duration-300 
                          hidden sm:block ${
                            scrolled
                              ? "text-gray-400"
                              : "text-gray-500"
                          }`}
            >
              Marketing & Tech Lab
            </span>
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.08 }}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors text-sm font-medium"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 transition-colors text-lg"
              aria-label="Toggle Dark Mode"
            >
              {dark ? "🌙" : "☀️"}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-700 dark:text-gray-300"
              aria-label="Menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-md py-6 px-6 space-y-4 border-t border-gray-200 dark:border-gray-700"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 dark:text-gray-200 py-3 text-lg"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
