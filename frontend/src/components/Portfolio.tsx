import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp, fadeScale, staggerContainer } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

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
        "Aplicación completa con React + Flask + Redis. Carrito persistente, gestión de órdenes, UI/UX moderna y flujo completo de cocina.",
      gradient: "from-nivOrange to-nivBlue",
    },

    // ===============================
    // ✔ Buscando con Lupa (Lupa Supermercados)
    // ===============================
    {
      title: "Buscando con Lupa – Micrositio Gamificado",
      slug: "lupa",
      category: "Web & Gamification",
      description:
        "Micrositio interactivo para Lupa Supermercados. Animaciones, transiciones, pistas, sliders y lógica gamificada.",
      gradient: "from-nivBlue to-nivLightBlue",
    },

    // ===============================
    // ✔ Sistema de Gestión de Pagos (Peluquerías)
    // ===============================
    {
      title: "Sistema de Gestión de Pagos",
      slug: "pagos",
      category: "Backend & Systems",
      description:
        "Plataforma administrativa con Flask + PostgreSQL. Gestión de servicios, métodos de pago, membresías, reportes y usuarios.",
      gradient: "from-nivOrange to-nivLightBlue",
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
      className="
        py-32 
        bg-gradient-to-b from-[#ffffff] via-[#ffe0d6]/20 to-[#83aefa]/20
        dark:bg-slate-900
        transition-colors duration-300
      "
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
            className="
              font-display font-bold 
              text-5xl md:text-6xl 
              mb-6 text-gray-900 dark:text-white
            "
          >
            Nuestro{" "}
            <span className="text-nivBlue dark:text-nivLightBlue">Portfolio</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="
              w-28 h-1.5 mx-auto mb-8 rounded-full
              bg-gradient-to-r from-nivOrange to-nivBlue
              dark:from-nivLightBlue dark:to-nivBlue
            "
          />

          <motion.p
            variants={fadeUp}
            className="
              font-body 
              text-xl text-gray-700 dark:text-gray-300 
              max-w-3xl mx-auto leading-relaxed
            "
          >
            Proyectos que combinan diseño, tecnología y creatividad.
            Cada caso refleja nuestra forma de trabajar: profesional, ágil y cercana.
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
                shadow-lg dark:shadow-xl 
                hover:shadow-2xl hover:-translate-y-1 
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

              {/* SOFT GLOW OVERLAY */}
              <div
                className="
                  absolute inset-0 bg-black/20 
                  group-hover:bg-black/40 
                  dark:group-hover:bg-black/50
                  transition-colors duration-300
                "
              />

              {/* CONTENT */}
              <div className="relative h-80 flex flex-col justify-end p-8 text-white">
                
                {/* BOTTOM FADE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="relative z-10 flex flex-col gap-3 transition-all duration-300">

                  {/* CATEGORY */}
                  <p
                    className="
                      font-body text-[0.75rem] font-semibold uppercase tracking-wider 
                      opacity-70 group-hover:opacity-90 transition-opacity
                    "
                  >
                    {project.category}
                  </p>

                  {/* TITLE */}
                  <h3
                    className="
                      font-display text-2xl font-bold 
                      transform transition-all duration-300
                      group-hover:-translate-y-1
                    "
                  >
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      font-body text-sm text-white/95 leading-relaxed 
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
