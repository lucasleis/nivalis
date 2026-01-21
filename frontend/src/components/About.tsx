import { motion } from "framer-motion";
import { fadeUp, fadeScale, staggerContainer } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";
import aboutImage from "../assets/perritos.png";

export default function About() {
  const imageY = useParallax({ range: 300, offset: -10 });
  const textY = useParallax({ range: 350, offset: -8 });

  return (
    <section
      id="about"
      className="
        
        bg-white
        dark:bg-slate-900
        transition-colors duration-300
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-6 md:px-8 xl:px-10
        "
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-14 items-center
          "
        >
          {/* IMAGEN IZQUIERDA */}
          <motion.div
            variants={fadeScale}
            style={{ y: imageY }}
            className="
              order-2 md:order-1
              relative w-full h-[420px] md:h-[520px]
              rounded-3xl overflow-hidden shadow-xl
            "
          >
            <img
              src={aboutImage}
              alt="Equipo creativo Nivalis"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* TEXTO DERECHA */}
          <motion.div
            variants={fadeUp}
            style={{ y: textY }}
            className="
              order-1 md:order-2
              text-center md:text-left
            "
          >
            <motion.h2
              variants={fadeUp}
              className="
                font-display font-bold
                text-5xl md:text-6xl
                mb-6 text-gray-900 dark:text-white
              "
            >
              Agencia <br />
              <span className="acumin-ultrablack text-nivOrange dark:text-nivLightBlue">
                creativa digital
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                font-body text-xl md:text-2xl
                text-gray-700 dark:text-gray-300
                leading-relaxed max-w-xl
                mx-auto md:mx-0
              "
            >
              Nuestro equipo con base en Buenos Aires responde a las
              necesidades de marcas que buscan destacarse en el mundo digital.
              Diseñamos, desarrollamos y posicionamos experiencias con foco en
              resultados reales.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
