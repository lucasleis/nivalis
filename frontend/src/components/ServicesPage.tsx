import Header from "./Header";
import Footer from "./Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="pt-40 pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* TÍTULO */}
          <h1 className="font-display text-5xl md:text-6xl font-medium text-gray-900">
            Nuestros servicios
          </h1>

          {/* BAJADA */}
          <p className="mt-6 text-xl text-gray-600 max-w-2xl">
            Diseñamos y desarrollamos soluciones digitales pensadas para
            crecer con tu negocio, optimizar procesos y generar impacto real.
          </p>

          {/* BLOQUES DE SERVICIO */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Servicio 1 */}
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Desarrollo web
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sitios institucionales, landings y plataformas web
                rápidas, escalables y pensadas desde la experiencia de usuario.
              </p>
            </div>

            {/* Servicio 2 */}
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Sistemas a medida
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automatizamos procesos, creamos paneles de gestión
                y herramientas adaptadas a la lógica real de tu negocio.
              </p>
            </div>

            {/* Servicio 3 */}
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Marketing & tecnología
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Integramos diseño, desarrollo y estrategia digital
                para potenciar tu presencia online.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
