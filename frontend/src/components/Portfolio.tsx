import CaseCard from "./common/CaseCard"

// imágenes locales (mejor práctica, ya lo venís haciendo)
import mvp from "../assets/portfolio/test_mvp.webp"
import barberpay from "../assets/portfolio/barberpay.webp"
import lupa from "../assets/portfolio/lupa.webp"
import nivalis from "../assets/portfolio/nivalis.webp"


const cases = [
  {
    image: mvp,
    title: "MVP Burgers",
    subtitle: "Plataforma de pedidos · UX/UI · Desarrollo Web",
  },
  {
    image: barberpay,
    title: "BarberPay",
    subtitle: "Sistema de gestión · Pagos · UX/UI",
  },
  {
    image: lupa,
    title: "Buscando con Lupa",
    subtitle: "Micrositio gamificado · Frontend",
  },
  /*
  {
    image: nivalis,
    title: "Nivalis TechLab",
    subtitle: "Branding · Web · Animaciones",
  },
  {
    image: nivalis,
    title: "Nivalis TechLab",
    subtitle: "Branding · Web · Animaciones",
  },
    {
    image: nivalis,
    title: "Nivalis TechLab",
    subtitle: "Branding · Web · Animaciones",
  },
  */
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-white py-28 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Casos de éxito
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Últimos proyectos
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
