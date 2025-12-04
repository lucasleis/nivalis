import { motion, useTransform } from "framer-motion";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSmoothScroll } from "../components/scroll/ScrollProvider";

import logo from "../assets/logos/logo6.png"; // LOGO OFICIAL

export default function Footer() {
  const { smoothScrollY } = useSmoothScroll();
  const bgY = useTransform(smoothScrollY, [0, 300], [0, -8]);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/nivalis.techlab/", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/nivalis", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hola@nivalis.com", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/5491151232153", label: "WhatsApp" },
  ];

  return (
    <motion.footer
      style={{ y: bgY }}
      className="
        relative
        bg-gradient-to-br from-[#ffe0d6]/25 via-[#ffffff]/40 to-[#83aefa]/25
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
        text-gray-900 dark:text-gray-100
        py-24 border-t border-white/20
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID PRINCIPAL */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center md:text-left"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* BRANDING */}
          <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start">
            
            {/* LOGO OFICIAL */}
            <img
              src={logo}
              alt="Nivalis Logo"
              className="
                h-14 w-auto mb-4 drop-shadow-md 
                dark:drop-shadow-xl
              "
            />

            {/*
            <p
              className="
                font-display text-sm uppercase tracking-[0.3em] 
                text-gray-600 dark:text-gray-400 mt-1
              "
            >
              Marketing & Tech Lab
            </p>
            */}

            <p className="font-body text-gray-600 dark:text-gray-400 mt-6 leading-relaxed max-w-sm">
              Combinamos creatividad, estrategia y tecnología para construir marcas sólidas,
              experiencias digitales memorables y soluciones de alto impacto.
            </p>
          </motion.div>

          {/* REDES SOCIALES */}
          <motion.div variants={fadeUp} className="flex flex-col items-center md:items-end">
            <h4 className="font-display text-xl mb-6 text-gray-800 dark:text-gray-200">
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
                    w-12 h-12 rounded-full flex items-center justify-center 
                    bg-gradient-to-br from-nivOrange to-nivBlue
                    text-white shadow-md
                    hover:scale-110 hover:shadow-xl
                    transition-all duration-300
                  "
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* LÍNEA FINAL */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-300/40 dark:border-white/10 text-center"
        >
          <p className="font-body text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} NIVALIS — Todos los derechos reservados.
          </p>

          <a
            href="#inicio"
            className="
              font-body text-gray-600 dark:text-gray-400 
              hover:text-nivBlue dark:hover:text-nivLightBlue
              text-xs mt-2 inline-block transition-colors
            "
          >
            Built & Designed by Nivalis
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
