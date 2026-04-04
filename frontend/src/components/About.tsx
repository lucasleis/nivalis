import { motion } from "framer-motion";
import { fadeUp, fadeScale, staggerContainer } from "../motion/variants";
import { useParallax } from "../components/scroll/useParallax";
import { ArrowRight } from "lucide-react";
import aboutImage from "../assets/perritos.png";

export default function About() {
  const imageY = useParallax({ range: 300, offset: -10 });
  const textY = useParallax({ range: 350, offset: -8 });

  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="bg-white dark:bg-slate-900 transition-colors duration-300 py-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 xl:px-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        >
          {/* IMAGEN IZQUIERDA */}
          <motion.div
            variants={fadeScale}
            style={{ y: imageY }}
            className="order-2 md:order-1 relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img src={aboutImage} alt="Equipo creativo de Nivalis" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 inline-flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">¿Hablamos?</span>
              </div>
            </div>
          </motion.div>

          {/* TEXTO DERECHA */}
          <motion.div variants={fadeUp} style={{ y: textY }} className="order-1 md:order-2 text-center md:text-left">
            <motion.h2 variants={fadeUp} className="font-display font-bold text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white">
              Estrategia <br />
              <span className="acumin-ultrablack text-nivOrange dark:text-nivLightBlue">creativa digital</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="font-body text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
              Hola, soy Lucas. Junto a mi equipo simplificamos lo complejo: convertimos tus ideas en soluciones digitales que funcionan.
              <br /><br />
              Creamos herramientas digitales que trabajan por vos mientras te enfocás en tu negocio.
              <br /><br />
              Cada cliente recibe atención personalizada porque sabemos que tu negocio es único.
            </motion.p>

            <motion.button
              variants={fadeUp}
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-body font-semibold hover:bg-nivOrange hover:border-nivOrange hover:text-white transition-all duration-200"
            >
              <span>Conocer servicios</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
