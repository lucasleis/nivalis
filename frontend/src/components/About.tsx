import { motion } from "framer-motion";
import { fadeUp, fadeScale, staggerContainer } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";

export default function About() {
  const headingY = useParallax({ range: 350, offset: -8 });
  const cardY = useParallax({ range: 400, offset: -10 });

  return (
    <section
      id="about"
      className="
        py-32 
        bg-gradient-to-b from-[#ffffff] via-[#ffe0d6]/20 to-[#83aefa]/20
        dark:bg-slate-900
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
          style={{ y: headingY }}
        >
          {/* TÍTULO */}
          <motion.h2
            className="
              font-display font-bold 
              text-5xl md:text-6xl 
              mb-8 text-gray-900 dark:text-white
            "
            variants={fadeUp}
          >
            Sobre{" "}
            <span className="text-nivOrange dark:text-nivLightBlue">
              Nosotros
            </span>
          </motion.h2>

          {/* SUBRAYADO */}
          <motion.div
            variants={fadeUp}
            className="
              w-28 h-1.5 mx-auto mb-10 rounded-full 
              bg-gradient-to-r from-nivOrange to-nivBlue
              dark:from-nivLightBlue dark:to-nivBlue
            "
          />

          {/* TEXTO PRINCIPAL */}
          <motion.p
            className="
              font-body text-xl md:text-2xl 
              text-gray-700 dark:text-gray-300 
              max-w-3xl mx-auto leading-relaxed mb-10
            "
            variants={fadeUp}
          >
            Somos un estudio creativo y tecnológico especializado en diseño,
            desarrollo y marketing digital. Ayudamos a marcas y negocios a crecer
            mediante soluciones modernas, humanas y adaptadas a cada necesidad.
          </motion.p>
        </motion.div>

        {/* CARD CENTRAL */}
        <motion.div
          variants={fadeScale}
          className="
            mt-14 p-10 md:p-14 rounded-3xl text-white shadow-lg
            bg-gradient-to-br from-nivOrange to-nivBlue
            dark:from-[#fd6647]/70 dark:to-[#0259dd]/70
            max-w-3xl mx-auto
          "
          style={{ y: cardY }}
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Un enfoque diferente
          </h3>

          <p className="font-body text-lg md:text-xl leading-relaxed opacity-95">
            Combinamos creatividad, estrategia y tecnología para crear experiencias
            digitales memorables. Nuestra misión es potenciar empresas con herramientas
            modernas, eficientes y de impacto real — siempre con agilidad, claridad y
            un trato cercano.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
