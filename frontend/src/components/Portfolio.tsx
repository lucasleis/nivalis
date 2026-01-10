import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import CaseCard from "./common/CaseCard";

// imágenes locales
import mvp from "../assets/portfolio/mvp-burgers.webp";
import barberpay from "../assets/portfolio/barberpay.webp";
import lupa from "../assets/portfolio/lupa.webp";
import temptation from "../assets/portfolio/temptation.webp";

const cases = [
  {
    image: mvp,
    title: "MVP Burgers",
    subtitle: "Plataforma de pedidos · UX/UI · Desarrollo Web",
    slug: "mvp-burgers",
  },
  {
    image: barberpay,
    title: "BarberPay",
    subtitle: "Sistema de gestión de pagos · UX/UI",
    slug: "barberpay",
  },
  {
    image: lupa,
    title: "Buscando con Lupa",
    subtitle: "Micrositio gamificado · Frontend",
    slug: "lupa",
  },
  {
    image: temptation,
    title: "Temptation Lingerie",
    subtitle: "Pauta digital · Redes sociales",
    slug: "temptation-lingerie",
  },
];

export default function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      className="bg-white py-28 dark:bg-neutral-950"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          className="mb-16 max-w-2xl"
        >
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Casos de éxito
          </p>
          <h2 className="text-4xl font-nauryz font-bold text-gray-900 dark:text-gray-100">
            Últimos proyectos
          </h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={staggerContainer}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((c, i) => (
            <motion.div key={i} variants={fadeUp}>
              <CaseCard {...c} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}
