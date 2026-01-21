import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useParallax } from "./scroll/useParallax";

export default function ServicesPage() {

  const heroY = useParallax({ range: 300, offset: -10 });

  return (
    <>
      <Header />

      <main className="pt-48 pb-0 bg-white">
        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-6 md:px-8 xl:px-10
          "
        >
          {/* HERO */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            style={{ y: heroY }}
          >
            {/* TÍTULO */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-medium text-gray-900"
            >
              Nuestros{" "}
              <span className="acumin-ultrablack text-nivOrange">
                Servicios
              </span>
            </motion.h1>

            {/* BAJADA */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-xl text-gray-600 max-w-2xl"
            >
              Diseñamos y desarrollamos soluciones digitales pensadas para
              crecer con tu negocio, optimizar procesos y generar impacto real.
            </motion.p>
          </motion.div>

          {/* ========= SERVICIO 01 ========= */}
          <motion.section
            className="py-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium text-gray-900 text-left"
            >
              <span className="text-nivOrange">/</span> Websites
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <motion.ul
                variants={fadeUp}
                className="space-y-4 text-lg text-gray-700"
              >
                {[
                  "Landing Pages",
                  "Diseño UX/UI",
                  "E-Commerce",
                  "Desarrollos a medida",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 hover:text-nivOrange transition-colors duration-200"
                  >
                    <span className="text-nivOrange">•</span>
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.p
                variants={fadeUp}
                className="text-xl text-gray-700 max-w-md"
              >
                Alcanzá tus objetivos comerciales con una website a medida, rápida y responsive.
              </motion.p>
            </div>
          </motion.section>

          <div className="h-px bg-gradient-to-r from-transparent via-nivOrange/30 to-transparent" />

          {/* ========= SERVICIO 02 ========= */}
          <motion.section
            className="py-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium text-gray-900 text-left"
            >
              <span className="text-nivOrange">/</span> Sistemas a medida
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <motion.ul
                variants={fadeUp}
                className="space-y-4 text-lg text-gray-700"
              >
                {[
                  "Automatización de procesos",
                  "Sistemas de gestión interna",
                  "Paneles de control y dashboards",
                  "Integraciones entre sistemas",
                  "Escalabilidad y soporte",
                  "Mantenimiento y evolución continua",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 hover:text-nivOrange transition-colors duration-200"
                  >
                    <span className="text-nivOrange">•</span>
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.p
                variants={fadeUp}
                className="text-xl text-gray-700 max-w-md"
              >
                Diseñamos y desarrollamos sistemas digitales a medida para optimizar procesos y 
                acompañar el crecimiento de tu negocio.
              </motion.p>
            </div>
          </motion.section>

          <div className="h-px bg-gradient-to-r from-transparent via-nivOrange/30 to-transparent" />

          {/* ========= SERVICIO 03 ========= */}
          <motion.section
            className="py-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium text-gray-900 text-left"
            >
              <span className="text-nivOrange">/</span> Marketing & Tecnología
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <motion.ul
                variants={fadeUp}
                className="space-y-4 text-lg text-gray-700"
              >
                {[
                  "Estrategia digital",
                  "Performance y analítica",
                  "UX/UI",
                  "Optimización continua",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 hover:text-nivOrange transition-colors duration-200"
                  >
                    <span className="text-nivOrange">•</span>
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.p
                variants={fadeUp}
                className="text-xl text-gray-700 max-w-md"
              >
                Integramos marketing, diseño y tecnología para acompañar el crecimiento de tu negocio.
              </motion.p>
            </div>
          </motion.section>

          {/* CONTACT FORM */}
          <div className="mt-32">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
