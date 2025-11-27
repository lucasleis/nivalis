import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MessageCircle, } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/nivalis.techlab/',
      label: 'Instagram',
    },
    /*
      {
        icon: Linkedin,
        href: 'https://linkedin.com/company/nivalis',
        label: 'LinkedIn',
      },
    */
    {
      icon: Mail,
      href: 'mailto:hola@nivalis.com',
      label: 'Email',
    },
    {
      icon: MessageCircle , 
      href: 'https://wa.me/5491151232153', 
      label: 'WhatsApp',
    },

  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white dark:text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                NIVALIS
              </span>
            </h3>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mt-1">
              Marketing & Tech Lab
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-6 w-full"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} NIVALIS. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Diseñado con pasión para impulsar tu éxito digital
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
