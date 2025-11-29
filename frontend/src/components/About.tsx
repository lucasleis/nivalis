import { motion } from "framer-motion";
import { fadeUp, fadeScale, staggerContainer } from "../motion/variants";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-32 
        bg-white dark:bg-slate-900 
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* CONTENEDOR CON STAGGER */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* TÍTULO */}
          <motion.h2
            className="
              text-5xl md:text-6xl font-extrabold mb-8
              text-gray-900 dark:text-white
            "
            variants={fadeUp}
          >
            Sobre{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Nosotros
            </span>
          </motion.h2>

          {/* SUBRAYADO */}
          <motion.div
            variants={fadeUp}
            className="
              w-24 h-1.5 mx-auto mb-10 rounded-full
              bg-gradient-to-r from-orange-500 to-blue-600
              dark:from-orange-400 dark:to-blue-400
            "
          />

          {/* TEXTO PRINCIPAL */}
          <motion.p
            className="
              text-xl md:text-2xl text-gray-600 dark:text-gray-300
              max-w-3xl mx-auto leading-relaxed mb-10
            "
            variants={fadeUp}
          >
            Somos un estudio creativo y tecnológico especializado en diseño,
            desarrollo y marketing digital. Ayudamos a marcas y negocios a crecer
            a través de soluciones inteligentes, modernas y escalables.
          </motion.p>

          {/* TARJETA DESTACADA */}
          <motion.div
            variants={fadeScale}
            className="
              mt-14 
              p-8 md:p-12 
              rounded-3xl 
              bg-gradient-to-br from-orange-500 to-blue-600
              dark:from-orange-600 dark:to-blue-700
              text-white shadow-xl shadow-orange-500/30
              max-w-3xl mx-auto
            "
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Un enfoque diferente
            </h3>

            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Combinamos diseño, tecnología e innovación para crear experiencias 
              digitales memorables. Nuestra misión es potenciar empresas con 
              herramientas modernas, eficientes y de impacto real.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
