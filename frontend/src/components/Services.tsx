import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TrendingUp, Code, Zap, Palette, Brain } from "lucide-react";
import { fadeUp, fadeScale, staggerContainer } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  // Parallax para todo el grid
  const cardsY = useParallax({ range: 300, offset: -8 });

  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Sitios web modernos, rápidos y escalables. Landing pages, e-commerce, sistemas, y aplicaciones personalizadas.",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description:
        "Estrategias de contenido, SEO, campañas pagas y analítica para maximizar el alcance y las conversiones.",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Zap,
      title: "Automatizaciones",
      description:
        "Optimizamos operaciones mediante automatizaciones inteligentes: bots, flujos, integraciones y sistemas ágil.",
      gradient: "from-orange-600 to-blue-600",
    },
    {
      icon: Palette,
      title: "Branding & Identidad",
      description:
        "Creamos marcas sólidas con identidad visual, tono, estética y coherencia estratégica.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Brain,
      title: "IA aplicada a negocios",
      description:
        "Soluciones inteligentes para potenciar equipos, acelerar procesos y mejorar decisiones.",
      gradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section
      id="servicios"
      ref={ref}
      className="
        py-32 
        bg-gradient-to-br from-gray-50 via-white to-gray-50 
        dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO */}
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
            Nuestros{" "}
            <span className="text-orange-600 dark:text-orange-400">Servicios</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="w-24 h-1.5 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 dark:from-orange-400 dark:to-blue-400"
          />

          <motion.p
            variants={fadeUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Soluciones integrales diseñadas para impulsar tu presencia digital
            y acelerar tu crecimiento.
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeScale}
              className="
                group relative p-8 rounded-3xl 
                bg-white dark:bg-slate-800 
                shadow-sm dark:shadow-md 
                hover:shadow-2xl hover:-translate-y-1 
                transition-all duration-300 overflow-hidden
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100 
                  bg-gradient-to-br from-orange-50/60 to-blue-50/60 
                  dark:from-orange-400/10 dark:to-blue-400/10 
                  transition-opacity duration-500
                "
              />

              {/* ICONO */}
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl shadow-lg bg-gradient-to-br ${service.gradient} text-white group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8" />
                </div>

                {/* TÍTULO */}
                <h3
                  className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
                >
                  {service.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
