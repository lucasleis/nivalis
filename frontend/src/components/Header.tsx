import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.25 }}
      className="fixed top-0 left-0 w-full z-50 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <a href="#inicio" className="flex items-center gap-2">
            <span
              className={`text-2xl font-bold transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent"
              }`}
            >
              NIVALIS
            </span>
            <span
              className={`text-xs uppercase tracking-[0.3em] transition-all duration-300 ${
                scrolled ? "text-gray-400" : "text-gray-500"
              } hidden sm:block`}
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
                className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* MENU MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md py-6 px-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 py-3 text-lg border-b border-gray-200"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
