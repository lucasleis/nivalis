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
        "Sitios y aplicaciones modernas, rápidas, escalables y diseñadas a medida. Landing pages, e-commerce, sistemas y plataformas completas.",
      gradient: "from-nivOrange to-nivBlue",
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description:
        "Estrategias basadas en datos: contenido, campañas, SEO y automatización para maximizar alcance, rendimiento y conversión.",
      gradient: "from-nivBlue to-nivLightBlue",
    },
    {
      icon: Zap,
      title: "Automatizaciones",
      description:
        "Optimizamos procesos con integraciones, bots, flujos inteligentes y sistemas que aceleran tareas repetitivas.",
      gradient: "from-nivOrange to-nivLightBlue",
    },
    {
      icon: Palette,
      title: "Branding & Identidad",
      description:
        "Construimos identidades visuales sólidas, coherentes y creativas que representan la esencia de cada marca.",
      gradient: "from-nivOrange to-[#ffb199]",
    },
    {
      icon: Brain,
      title: "IA aplicada a negocios",
      description:
        "Soluciones inteligentes para potenciar equipos, automatizar tareas y mejorar procesos de decisión.",
      gradient: "from-nivBlue to-nivOrange",
    },
  ];

  return (
    <section
      id="servicios"
      ref={ref}
      className="
        py-32 
        bg-gradient-to-b from-[#ffffff] via-[#ffe0d6]/20 to-[#83aefa]/20
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
            className="
              font-display font-bold 
              text-5xl md:text-6xl 
              mb-6 text-gray-900 dark:text-white
            "
          >
            Nuestros{" "}
            <span className="text-nivOrange dark:text-nivLightBlue">Servicios</span>
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
            Soluciones integrales que combinan creatividad, estrategia y tecnología
            para impulsar tu presencia digital y acelerar tu crecimiento.
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
                shadow-md dark:shadow-lg 
                hover:shadow-2xl hover:-translate-y-1 
                transition-all duration-300 overflow-hidden
              "
            >
              {/* Glow Hover */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100 
                  bg-gradient-to-br from-[#ffe0d6]/40 to-[#83aefa]/40
                  dark:from-nivLightBlue/10 dark:to-nivOrange/10
                  transition-opacity duration-500
                "
              />

              {/* ICONO */}
              <div className="relative z-10">
                <div
                  className={`
                    inline-flex items-center justify-center 
                    w-16 h-16 mb-6 rounded-2xl shadow-lg 
                    text-white group-hover:scale-110 
                    transition-transform bg-gradient-to-br ${service.gradient}
                  `}
                >
                  <service.icon className="w-8 h-8" />
                </div>

                {/* TÍTULO */}
                <h3
                  className="
                    font-display text-2xl font-bold mb-4 
                    text-gray-900 dark:text-white 
                    group-hover:text-nivOrange dark:group-hover:text-nivLightBlue 
                    transition-colors
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p
                  className="
                    font-body text-gray-600 dark:text-gray-300 
                    leading-relaxed relative z-10
                  "
                >
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
