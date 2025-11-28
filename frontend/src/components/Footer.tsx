import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/nivalis.techlab/',
      label: 'Instagram',
    },
    {
      icon: Mail,
      href: 'mailto:hola@nivalis.com',
      label: 'Email',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/5491151232153',
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                       dark:from-black dark:via-gray-900 dark:to-black 
                       text-white dark:text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col items-center text-center space-y-6">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                NIVALIS
              </span>
            </h3>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mt-1">
              Marketing & Tech Lab
            </p>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-5"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.18 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                           flex items-center justify-center transition-colors duration-300"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* COPYRIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-2 border-t border-white/10 w-full"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} NIVALIS. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Diseñado con <span className="text-orange-400">pasión</span> para impulsar tu éxito digital.
            </p>
          </motion.div>

          {/* BADGE FINAL (tocamos acá lo que querías mejorar) */}
          <motion.a
            href="#inicio"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-xs text-gray-400 hover:text-gray-200 
                       underline underline-offset-4 decoration-orange-500/50 
                       hover:decoration-orange-400 transition-all cursor-pointer"
          >
            Sitio desarrollado por NIVALIS
          </motion.a>
        </div>

      </div>
    </footer>
  );
}
