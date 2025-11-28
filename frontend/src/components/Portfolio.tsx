import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

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
      className="
        py-32 bg-white dark:bg-slate-900
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="
              text-5xl md:text-6xl font-extrabold mb-6
              text-gray-900 dark:text-white
            "
          >
            Nuestro{" "}
            <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
          </h2>

          <div
            className="
              w-24 h-1.5 rounded-full mx-auto mb-8
              bg-gradient-to-r from-orange-500 to-blue-600
              dark:from-orange-400 dark:to-blue-400
            "
          />

          <p
            className="
              text-xl text-gray-600 dark:text-gray-300 
              max-w-3xl mx-auto leading-relaxed
            "
          >
            Proyectos que reflejan creatividad, estrategia e innovación.  
            Cada caso representa un desafío convertido en resultados reales.
          </p>
        </motion.div>

        {/* GRID DE PROYECTOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
                group relative overflow-hidden rounded-3xl cursor-pointer 
                shadow-lg dark:shadow-xl hover:shadow-2xl 
                transition-all duration-500
              "
            >
              {/* CAPA DE COLOR GRADIENT */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br ${project.gradient} 
                  opacity-90 group-hover:opacity-100 
                  transition-opacity duration-500
                `}
              />

              {/* IMAGEN O BACKDROP */}
              <div
                className="
                  absolute inset-0 
                  bg-black/30 group-hover:bg-black/40 
                  transition-colors duration-300
                "
              />

              {/* CONTENIDO */}
              <div
                className="
                  relative h-80 flex flex-col justify-end p-8 
                  text-white
                "
              >
                {/* OVERLAY GRADIENT */}
                <div
                  className="
                    absolute inset-0 
                    bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                  "
                />

                <div
                  className="
                    relative z-10 transform translate-y-3 
                    group-hover:translate-y-0 transition-all duration-300
                  "
                >
                  {/* CATEGORÍA */}
                  <p
                    className="
                      text-sm font-semibold uppercase tracking-wider mb-2 
                      opacity-90
                    "
                  >
                    {project.category}
                  </p>

                  {/* TÍTULO */}
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>

                  {/* DESCRIPCIÓN */}
                  <p
                    className="
                      text-white/90 mb-4 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300
                    "
                  >
                    {project.description}
                  </p>

                  {/* CTA */}
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
        </div>
      </div>
    </section>
  );
}
