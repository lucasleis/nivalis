import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

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
                <div className="max-w-7xl mx-auto px-6">

                    {/* ========= SERVICIO 01 ========= */}
                    <section className="py-28">
                        <div className="max-w-7xl mx-auto px-6">

                            {/* ===== TÍTULO ===== */}
                            <div className="mb-20">
                                <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
                                    Websites
                                </h2>
                            </div>

                            {/* ===== CONTENIDO ===== */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                                {/* CARACTERÍSTICAS */}
                                <div>
                                    <ul className="space-y-4 text-lg text-gray-700">
                                        <li>• Landing Pages</li>
                                        <li>• Corporativas</li>
                                        <li>• E-Commerce</li>
                                        <li>• Desarrollos a medida</li>
                                    </ul>
                                </div>

                                {/* TEXTO */}
                                <div>
                                    <p className="text-xl text-gray-700 max-w-md">
                                        Alcanzá tus metas comerciales con un website a medida,
                                        rápida y responsive.
                                    </p>

                                </div>

                            </div>
                        </div>
                    </section>

                    {/* DIVIDER */}
                    <div className="h-px bg-gray-200" />

                    {/* ========= SERVICIO 02 ========= */}
                    <section className="py-28">
                        <div className="max-w-7xl mx-auto px-6">

                            {/* ===== TÍTULO ===== */}
                            <div className="mb-20">
                            <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
                                Sistemas a medida
                            </h2>
                            </div>

                            {/* ===== CONTENIDO ===== */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                            {/* CARACTERÍSTICAS */}
                            <div>
                                <ul className="space-y-4 text-lg text-gray-700">
                                    <li>• Automatización de procesos</li>
                                    <li>• Sistemas de gestión interna</li>
                                    <li>• Paneles de control y dashboards</li>
                                    <li>• Integraciones entre sistemas</li>
                                    <li>• Escalabilidad y soporte</li>
                                    <li>• Mantenimiento y evolución continua</li>
                                </ul>
                            </div>

                            {/* TEXTO */}
                            <div>
                                <p className="text-xl text-gray-700 max-w-md">
                                Diseñamos herramientas digitales adaptadas
                                a la lógica real de tu negocio.
                                </p>
                            </div>

                            </div>
                        </div>
                    </section>

                    {/* DIVIDER */}
                    <div className="h-px bg-gray-200" />

                    {/* ========= SERVICIO 03 ========= */}
                    <section className="py-28">
                        <div className="max-w-7xl mx-auto px-6">

                            {/* ===== TÍTULO ===== */}
                            <div className="mb-20">
                            <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
                                Marketing & Tecnología
                            </h2>
                            </div>

                            {/* ===== CONTENIDO ===== */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

                            {/* CARACTERÍSTICAS */}
                            <div>
                                <ul className="space-y-4 text-lg text-gray-700">
                                <li>• Estrategia digital</li>
                                <li>• Performance & analítica</li>
                                <li>• UX/UI</li>
                                <li>• Optimización continua</li>
                                </ul>
                            </div>

                            {/* TEXTO */}
                            <div>
                                <p className="text-xl text-gray-700 max-w-md">
                                Unimos diseño, datos y tecnología
                                para generar impacto real.
                                </p>
                            </div>

                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </main>

        <ContactForm />

        <Footer />
    </>
  );
}
