import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/nivalis.techlab/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/nivalis",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:hola@nivalis.com",
      label: "Email",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/5491151232153",
      label: "WhatsApp",
    },
  ];

  return (
    <footer
      className="
        bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 
        text-white py-20 
        border-t border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID DE DOS COLUMNAS */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 gap-12 
          text-center md:text-left
        ">
          {/* BRANDING + TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3
              className="
                text-3xl font-extrabold tracking-tight
                bg-gradient-to-r from-orange-400 to-blue-500 
                bg-clip-text text-transparent
              "
            >
              NIVALIS
            </h3>

            <p
              className="
                text-sm uppercase tracking-[0.3em] text-gray-400 mt-2
              "
            >
              Marketing & Tech Lab
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed max-w-xs">
              Combinamos creatividad, estrategia y tecnología para
              llevar marcas al siguiente nivel.
            </p>
          </motion.div>

          {/* REDES SOCIALES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-200">
              Conectemos
            </h4>

            <div className="flex gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="
                    w-11 h-11 rounded-full flex items-center justify-center 
                    bg-white/10 hover:bg-white/20 
                    transition-all duration-300 hover:scale-110
                  "
                >
                  <link.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* LÍNEA FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} NIVALIS. Todos los derechos reservados.
          </p>

          <a
            href="#inicio"
            className="
              text-gray-500 hover:text-gray-300 
              text-xs mt-2 inline-block transition-colors
            "
          >
            Built & Designed by Nivalis
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
