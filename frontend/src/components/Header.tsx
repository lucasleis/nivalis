import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 via-black/80 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
              NIVALIS
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 hidden sm:block">
              Marketing & Tech Lab
            </span>
          </a>

          {/* NAV - DESKTOP */}
          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* MENU BUTTON MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
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
          className="md:hidden bg-black/90 backdrop-blur-md py-6 px-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-200 py-2 text-lg border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
