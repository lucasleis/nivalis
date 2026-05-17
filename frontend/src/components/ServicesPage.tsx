import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useParallax } from "./scroll/useParallax";

export default function ServicesPage() {

  const heroY = useParallax({ range: 300, offset: -10 });

  return (
    <>
      <Helmet>
        <title>Servicios de Desarrollo Web, Automatización y Consultoría | Nivalis</title>
        <meta name="description" content="Desarrollo web a medida, automatizaciones digitales y consultoría tecnológica para empresas en Argentina. Conocé todos nuestros servicios." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nivalistechlab.com/servicios" />
        <meta property="og:title" content="Servicios de Desarrollo Web, Automatización y Consultoría | Nivalis" />
        <meta property="og:description" content="Desarrollo web a medida, automatizaciones digitales y consultoría tecnológica para empresas en Argentina. Conocé todos nuestros servicios." />
        <meta property="og:image" content="https://nivalistechlab.com/og-image.png" />
      </Helmet>
      <Header />

      <main className="pt-48 pb-0 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 xl:px-10">
          {/* HERO */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            style={{ y: heroY }}
          >
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-medium text-gray-900"
            >
              Nuestros{" "}
              <span className="acumin-ultrablack text-nivOrange">
                Servicios
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xl text-gray-600 max-w-2xl"
            >
              Diseñamos y desarrollamos soluciones digitales pensadas para
              hacer crecer tu negocio.
            </motion.p>
          </motion.div>

          {/* ========= SERVICIO 01 ========= */}
          <motion.section
            id="desarrollo-web"
            className="py-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium text-gray-900 text-left"
            >
              <span className="text-nivOrange">/</span> Desarrollo Web
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <motion.ul
                variants={fadeUp}
                className="space-y-4 text-lg text-gray-700"
              >
                {[
                  "Sitios web profesionales",
                  "Landing Pages de conversión",
                  "E-Commerce",
                  "Aplicaciones web",
                  "Diseño UX/UI",
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
                Creamos sitios y aplicaciones web que representan tu marca y ayudan a alcanzar tus objetivos comerciales.
              </motion.p>
            </div>
          </motion.section>

          <div className="h-px bg-gradient-to-r from-transparent via-nivOrange/30 to-transparent" />

          {/* ========= SERVICIO 02 ========= */}
          <motion.section
            id="sistemas-medida"
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
                Diseñamos y desarrollamos sistemas digitales a medida para optimizar procesos y acompañar el crecimiento de tu negocio.
              </motion.p>
            </div>
          </motion.section>

          <div className="h-px bg-gradient-to-r from-transparent via-nivOrange/30 to-transparent" />

          {/* ========= SERVICIO 03 ========= */}
          <motion.section
            id="automatizacion"
            className="py-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium text-gray-900 text-left"
            >
              <span className="text-nivOrange">/</span> Automatización
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <motion.ul
                variants={fadeUp}
                className="space-y-4 text-lg text-gray-700"
              >
                {[
                  "Automatización de tareas repetitivas",
                  "Workflows personalizados",
                  "Integración con herramientas existentes",
                  "Reportes automáticos",
                  "Notificaciones y alertas",
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
                Automatizamos procesos para que tu equipo se enfoque en lo importante: hacer crecer tu negocio.
              </motion.p>
            </div>
          </motion.section>

          <div className="h-px bg-gradient-to-r from-transparent via-nivOrange/30 to-transparent" />

          {/* ========= SERVICIO 04 ========= */}
          <motion.section
            id="consultoria"
            className="py-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium text-gray-900 text-left"
            >
              <span className="text-nivOrange">/</span> Consultoría Tech
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <motion.ul
                variants={fadeUp}
                className="space-y-4 text-lg text-gray-700"
              >
                {[
                  "Arquitectura tecnológica",
                  "Evaluación de infraestructura",
                  "Planificación de migración",
                  "Seguridad y protección de datos",
                  "Capacitación de equipos",
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
                Te asesoramos para que tomes decisiones tecnológicas correctas para tu negocio.
              </motion.p>
            </div>
          </motion.section>

          {/* CONTACT FORM */}
          <div id="contacto" className="mt-32">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}