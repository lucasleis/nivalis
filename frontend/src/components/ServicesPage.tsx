import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="pt-40 pb-0 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* TÍTULO */}
          <h1 className="font-display text-5xl md:text-6xl font-medium text-gray-900">
            Nuestros <span className="acumin-ultrablack text-nivOrange">Servicios</span>
          </h1>

          {/* BAJADA */}
          <p className="mt-6 text-xl text-gray-600 max-w-2xl">
            Diseñamos y desarrollamos soluciones digitales pensadas para
            crecer con tu negocio, optimizar procesos y generar impacto real.
          </p>

          {/* ========= SERVICIO 01 ========= */}
          <section className="py-16">

            {/* TÍTULO DEL SERVICIO (FUERA DEL GRID) */}
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 text-left">
              <span className="text-nivOrange">/</span> Websites
            </h2>

            {/* GRID */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

              {/* COLUMNA IZQUIERDA */}
              <ul className="space-y-4 text-lg text-gray-700">
                {[
                  "Landing Pages",
                  "UX/UI Design",
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
              </ul>

              {/* COLUMNA DERECHA */}
              <p className="text-xl text-gray-700 max-w-md">
                Alcanzá tus metas comerciales con un website a medida,
                rápida y responsive.
              </p>

            </div>
          </section>

          {/* DIVIDER */}
          <div className="h-px bg-gradient-to-r from-transparent via-nivOrange/30 to-transparent" />

          {/* ========= SERVICIO 02 ========= */}
          <section className="py-16">

            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 text-left">
              <span className="text-nivOrange">/</span> Sistemas a medida
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

              <ul className="space-y-4 text-lg text-gray-700">
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
              </ul>

              <p className="text-xl text-gray-700 max-w-md">
                Diseñamos herramientas digitales adaptadas
                a la lógica real de tu negocio.
              </p>

            </div>
          </section>

          {/* DIVIDER */}
          <div className="h-px bg-gradient-to-r from-transparent via-nivOrange/30 to-transparent" />

          {/* ========= SERVICIO 03 ========= */}
          <section className="py-16">

            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 text-left">
              <span className="text-nivOrange">/</span> Marketing & Tecnología
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

              <ul className="space-y-4 text-lg text-gray-700">
                {[
                  "Estrategia digital",
                  "Performance & analítica",
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
              </ul>

              <p className="text-xl text-gray-700 max-w-md">
                Unimos diseño, datos y tecnología
                para generar impacto real.
              </p>

            </div>
          </section>

        </div>
      </main>

      <ContactForm />
      <Footer />
    </>
  );
}
