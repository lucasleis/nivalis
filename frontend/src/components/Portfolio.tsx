import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp, fadeScale, staggerContainer } from "../motion/variants";
import { useSmoothScroll } from "../components/scroll/ScrollProvider";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const { smoothScrollY } = useSmoothScroll();
  const cardsY = useTransform(smoothScrollY, [0, 350], [0, -8]);

  const projects = [
    {
      title: "Restyling + Sistema de reservas",
      category: "Branding & Web",
      description:
        "Identidad visual renovada y desarrollo de un sistema de reservas 100% automatizado.",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      title: "Campaña de performance",
      category: "Marketing Digital",
      description:
        "Diseño de estrategia, contenido, anuncios y optimización de ROI.",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      title: "Automatización con IA",
      category: "IA & Desarrollo",
      description:
        "Integración de modelos de lenguaje, bots y workflows automáticos.",
      gradient: "from-orange-600 to-blue-600",
    },
    {
      title: "Tienda online escalable",
      category: "E-commerce",
      description:
        "Desarrollo de tienda con pasarela de pagos, notificaciones y panel de administración.",
      gradient: "from-blue-700 to-blue-900",
    },
    {
      title: "Aplicación mobile",
      category: "App Development",
      description:
        "Aplicación multiplataforma diseñada para mejorar la experiencia del usuario.",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      title: "Optimización avanzada",
      category: "Performance",
      description:
        "Mejoras de velocidad, SEO técnico, analítica y A/B testing.",
      gradient: "from-blue-600 to-orange-500",
    },
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-32 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER + INTRO */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white"
          >
            Nuestro{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Portfolio
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="
              w-24 h-1.5 mx-auto mb-8 rounded-full
              bg-gradient-to-r from-orange-500 to-blue-600
              dark:from-orange-400 dark:to-blue-400
            "
          />

          <motion.p
            variants={fadeUp}
            className="
              text-xl text-gray-600 dark:text-gray-300 
              max-w-3xl mx-auto leading-relaxed
            "
          >
            Proyectos que reflejan creatividad, estrategia e innovación.  
            Cada caso representa un desafío convertido en resultados reales.
          </motion.p>
        </motion.div>

        {/* GRID DE PROYECTOS */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          style={{ y: cardsY }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeScale}
              className="
                group relative overflow-hidden rounded-3xl cursor-pointer 
                shadow-lg dark:shadow-xl hover:shadow-2xl 
                transition-all duration-500
              "
            >
              {/* FONDO GRADIENTE */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br ${project.gradient} 
                  opacity-90 group-hover:opacity-100 
                  transition-opacity duration-500
                `}
              />

              {/* CAPA OSCURA */}
              <div
                className="
                  absolute inset-0 bg-black/30 group-hover:bg-black/40 
                  transition-colors duration-300
                "
              />

              {/* CONTENIDO */}
              <div className="relative h-80 flex flex-col justify-end p-8 text-white">
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div
                  className="
                    relative z-10 transform translate-y-3 
                    group-hover:translate-y-0 
                    transition-all duration-300
                  "
                >
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p
                    className="
                      text-white/90 mb-4 opacity-0 
                      group-hover:opacity-100 
                      transition-opacity duration-300
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                      inline-flex items-center gap-2 text-sm font-semibold
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300
                    "
                  >
                    Ver proyecto
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
