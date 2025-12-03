import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp, fadeScale, staggerContainer } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  // Reemplazo de useTransform → useParallax para consistencia global
  const cardsY = useParallax({ range: 350, offset: -8 });

  const projects = [
    // ===============================
    // ✔ MVP Burgers (FULLSTACK)
    // ===============================
    {
      title: "MVP Burgers – Plataforma de pedidos",
      slug: "mvp-burgers",
      category: "Fullstack Development",
      description:
        "Aplicación completa desarrollada con React + Flask + Redis para gestionar pedidos de hamburguesas en tiempo real. Incluye UI/UX moderna, carrito persistente, sistema de órdenes, gestión de estado global, endpoints REST y lógica de impresión en cocina.",
      gradient: "from-orange-600 to-orange-800",
    },

    // ===============================
    // ✔ Buscando con Lupa (Lupa Supermercados)
    // ===============================
    {
      title: "Buscando con Lupa – Micrositio Gamificado",
      slug: "lupa",
      category: "Web & Gamification",
      description:
        "Micrositio interactivo desarrollado para Lupa Supermercados con PHP, MySQL y JavaScript. Incluye animaciones, popups, transición entre categorías, sliders, validaciones, sistema de pistas y flujo completo del juego.",
      gradient: "from-blue-600 to-orange-500",
    },

    // ===============================
    // ✔ Sistema de Gestión de Pagos (Peluquerías)
    // ===============================
    {
      title: "Sistema de Gestión de Pagos",
      slug: "pagos",
      category: "Backend & Systems",
      description:
        "Plataforma administrativa para peluquerías con Flask + PostgreSQL: gestión de barberos, servicios, turnos, productos, métodos de pago múltiples, membresías, reportes, usuarios admins y lógica completa de validación.",
      gradient: "from-orange-500 to-blue-600",
    },

    // Marketing placeholders
    {
      title: "Proyecto de Marketing 1",
      slug: "marketing-1",
      category: "Marketing",
      description: "Espacio reservado para un próximo caso de éxito.",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      title: "Proyecto de Marketing 2",
      slug: "marketing-2",
      category: "Marketing",
      description: "Espacio reservado para un próximo caso de éxito.",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      title: "Proyecto de Marketing 3",
      slug: "marketing-3",
      category: "Marketing",
      description: "Espacio reservado para un próximo caso de éxito.",
      gradient: "from-gray-400 to-gray-600",
    },
  ];


  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-32 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
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

        {/* GRID */}
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
              {/* GRADIENT BG */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br ${project.gradient} 
                  opacity-90 group-hover:opacity-100 
                  transition-opacity duration-500
                `}
              />

              {/* DARK LAYER */}
              <div
                className="
                  absolute inset-0 bg-black/20 group-hover:bg-black/35 
                  transition-colors duration-300
                "
              />

              {/* CONTENT */}
              <div className="relative h-80 flex flex-col justify-end p-8 text-white">
                
                {/* BOTTOM GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <div className="relative z-10 flex flex-col gap-3 transition-all duration-300">

                  {/* CATEGORY */}
                  <p className="
                    text-xs font-semibold uppercase tracking-wider 
                    opacity-75 group-hover:opacity-90 transition-opacity
                  ">
                    {project.category}
                  </p>

                  {/* TITLE */}
                  <h3
                    className="
                      text-2xl font-bold mb-1 
                      transform transition-all duration-300
                      group-hover:-translate-y-1
                    "
                  >
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      text-sm text-white/90 leading-relaxed 
                      opacity-0 max-h-0 
                      group-hover:max-h-40 group-hover:opacity-100 
                      transition-all duration-300
                    "
                  >
                    {project.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={`/case-study/${project.slug}`}
                    className="
                      inline-flex items-center gap-2 text-sm font-semibold
                      opacity-0 translate-y-2 
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300
                    "
                  >
                    Ver proyecto
                    <ExternalLink className="w-4 h-4" />
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
