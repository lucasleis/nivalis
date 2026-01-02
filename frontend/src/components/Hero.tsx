import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, fadeUpDelayed } from "../motion/variants";
import logo from "../assets/logos/logo6.png";


export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-white flex items-center"
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-8 md:px-16
          grid grid-cols-1 md:grid-cols-2
          gap-16
        "
      >
        {/* COLUMNA IZQUIERDA */}
        <motion.div
          {...fadeUp}
          className="
            flex flex-col justify-center
            items-center text-center
            md:items-start md:text-left
            order-2 md:order-1
          "
        >
          {/* SUBTEXTO */}
          <span
            className="
              font-nauryz
              text-base
              text-nivOrange
              mb-4
              block
            "
          >
            Marketing & Technology Lab
          </span>

          {/* TEXTO PRINCIPAL */}
          <h1
            className="
              font-display font-bold
              text-4xl md:text-5xl lg:text-6xl
              text-gray-900
              leading-tight
              mb-6
            "
          >
            Construimos experiencias digitales
            <span className="text-nivOrange"> con impacto real</span>
          </h1>

          {/* BOTÓN */}
          <motion.div {...fadeUpDelayed(0.2)}>
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
              {/* Flecha izquierda (hover) */}
              <span
                className="
                  inline-flex items-center
                  w-0 opacity-0
                  -translate-x-2
                  transition-all duration-300 ease-out
                  group-hover:w-5
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  mr-0 group-hover:mr-2
                "
              >
                <ArrowRight className="w-5 h-5" />
              </span>

              {/* Texto */}
              <span
                className="
                  inline-block
                  transition-transform duration-300 ease-out
                  group-hover:translate-x-1
                "
              >
                Hablemos
              </span>

              {/* Flecha derecha (default) */}
              <span
                className="
                  inline-flex items-center
                  ml-2
                  transition-all duration-300 ease-out
                  group-hover:opacity-0
                  group-hover:translate-x-3
                "
              >
                <ArrowRight 
                  strokeWidth={3} 
                  className="w-5 h-5" 
                />
              </span>
            </a>
          </motion.div>

        </motion.div>

        {/* COLUMNA DERECHA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            flex items-center justify-center
            order-1 md:order-2
            mt-12 md:mt-0
          "
        >
          <img
            src={logo}
            alt="Nivalis Marketing & Tech Lab"
            className="
              w-[180px]
              md:w-[300px]
              opacity-80
              mb-8 md:mb-0
            "
          />
        </motion.div>


      </div>
    </section>
  );
}
