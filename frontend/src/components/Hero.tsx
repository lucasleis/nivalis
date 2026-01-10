import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/variants";
import logo from "../assets/logos/logo6.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-white flex items-center"
    >
      <motion.div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-8 md:px-6
          grid grid-cols-1 md:grid-cols-2
          gap-16
        "
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
      >
        {/* COLUMNA IZQUIERDA */}
        <motion.div
          variants={fadeUp}
          className="
            flex flex-col justify-center
            items-center text-center
            md:items-start md:text-left
            order-2 md:order-1
          "
        >
          {/* SUBTEXTO */}
          <span className="behance text-base text-nivOrange mb-4 block">
            Marketing & Tech Lab
          </span>

          {/* TEXTO PRINCIPAL */}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
            Construimos experiencias digitales con
            <span className="acumin-ultrablack text-nivOrange"> impacto real</span>
          </h1>

          {/* BOTÓN */}
          <motion.div variants={fadeUp}>
            <a
              href="#contacto"
              className="
                group
                inline-flex items-center
                px-8 py-4
                rounded-full
                bg-nivOrange
                text-white
                font-body font-semibold
                text-lg
                hover:bg-[#e95b40]
                transition-colors duration-300 ease-out
                overflow-hidden
                w-fit
              "
            >
              <span className="inline-flex items-center w-0 opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 mr-0 group-hover:mr-2">
                <ArrowRight className="w-5 h-5" />
              </span>

              <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                Hablemos
              </span>

              <span className="inline-flex items-center ml-2 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-x-3">
                <ArrowRight strokeWidth={3} className="w-5 h-5" />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* COLUMNA DERECHA */}
        <motion.div
          variants={fadeUp}
          className="
            flex items-center justify-center
            order-1 md:order-2
            mt-12 md:mt-0
          "
        >
          <img
            src={logo}
            alt="Nivalis Marketing & Tech Lab"
            className="w-[180px] md:w-[300px] opacity-80 mb-8 md:mb-0"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
