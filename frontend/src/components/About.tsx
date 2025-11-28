import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: "Equipo Boutique",
      description:
        "Somos un equipo pequeño, ágil y cercano. Cada proyecto recibe atención directa y personalizada.",
    },
    {
      icon: Lightbulb,
      title: "Creatividad",
      description:
        "Creamos ideas que conectan, inspiran y generan impacto real en la audiencia.",
    },
    {
      icon: Rocket,
      title: "Resultados",
      description:
        "Estrategias basadas en datos, diseñadas para crecer y escalar negocios.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="
        py-32 
        bg-white dark:bg-slate-900 
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* CABECERA */}
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
            Sobre <span className="text-blue-600 dark:text-blue-400">NIVALIS</span>
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
              text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed
              text-gray-600 dark:text-gray-300
            "
          >
            Somos una agencia boutique de marketing & tecnología. 
            Fusionamos creatividad, estrategia e innovación para construir 
            experiencias digitales memorables y orientadas a resultados.
          </p>
        </motion.div>

        {/* TARJETAS */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="
                group p-8 rounded-3xl relative overflow-hidden 
                bg-white dark:bg-slate-800 shadow-sm 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300
              "
            >
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 
                  bg-gradient-to-br from-orange-50/60 to-blue-50/60 
                  dark:from-orange-400/5 dark:to-blue-500/10
                "
              />

              <div className="relative">
                <div
                  className="
                    inline-flex items-center justify-center 
                    w-16 h-16 rounded-2xl mb-6 shadow-lg
                    bg-gradient-to-br from-orange-500 to-blue-600
                    dark:from-orange-400 dark:to-blue-500
                  "
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="
                    text-xl font-bold mb-3
                    text-gray-900 dark:text-white
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    text-gray-600 dark:text-gray-300 leading-relaxed
                  "
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BLOQUE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="
            rounded-[2rem] p-12 md:p-16 text-center 
            bg-gradient-to-br from-orange-50 via-white to-blue-50
            dark:from-slate-800 dark:via-slate-900 dark:to-slate-800
            shadow-lg dark:shadow-xl dark:shadow-black/20
          "
        >
          <h3
            className="
              text-2xl md:text-3xl font-bold mb-6
              text-gray-900 dark:text-white
            "
          >
            Nuestro enfoque
          </h3>

          <p
            className="
              text-lg max-w-3xl mx-auto leading-relaxed
              text-gray-700 dark:text-gray-300
            "
          >
            Creemos en la combinación de{" "}
            <span className="font-semibold text-orange-600 dark:text-orange-400">
              creatividad
            </span>{" "}
            y{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              tecnología
            </span>{" "}
            para diseñar soluciones que sorprenden, inspiran y potencian marcas.
            Cada proyecto es una oportunidad para construir{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              resultados extraordinarios
            </span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
