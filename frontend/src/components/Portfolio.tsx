
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import CaseCard from "./common/CaseCard";
import mvp from "../assets/portfolio/mvp-burgers.webp";
import barberpay from "../assets/portfolio/barberpay.webp";
import lupa from "../assets/portfolio/lupa.webp";

type Category = "todos" | "web-app" | "gestion" | "campana";

interface Case {
  image: string;
  title: string;
  subtitle: string;
  slug: string;
  categories: Category[];
}

const cases: Case[] = [
  {
    image: mvp,
    title: "MVP Burgers",
    subtitle: "Plataforma de pedidos · UX/UI · Desarrollo Web",
    slug: "mvp-burgers",
    categories: ["web-app"],
  },
  {
    image: barberpay,
    title: "BarberPay",
    subtitle: "Sistema de gestión de pagos · UX/UI",
    slug: "barberpay",
    categories: ["gestion", "web-app"],
  },
  {
    image: lupa,
    title: "Buscando con Lupa",
    subtitle: "Micrositio gamificado · Frontend",
    slug: "lupa",
    categories: ["campana"],
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "web-app", label: "Web App" },
  { id: "gestion", label: "Gestión" },
  { id: "campana", label: "Campaña" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("todos");

  const filteredCases = activeFilter === "todos"
    ? cases
    : cases.filter((c) => c.categories.includes(activeFilter));

  return (
    <motion.section
      id="portfolio"
      className="bg-white dark:bg-neutral-950 py-20"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.01 }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 xl:px-10">
        {/* HEADER */}
        <motion.div variants={fadeUp} className="mb-12 max-w-2xl">
          <p className="mt-4 text-gray-600 dark:text-gray-400">P O R T F O L I O</p>
          <h2 className="text-4xl font-nauryz font-bold text-gray-900 dark:text-gray-100">
            Proyectos destacados
          </h2>
        </motion.div>

        {/* FILTROS */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`
                px-5 py-2.5 rounded-full
                font-body text-sm font-medium
                transition-all duration-300 ease-out
                ${
                  activeFilter === cat.id
                    ? "bg-nivOrange text-white shadow-lg shadow-nivOrange/30"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* GRID CON ANIMACIÓN */}
        <motion.div
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((c, i) => (
              <motion.div
                key={c.slug}
                variants={fadeUp}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CaseCard {...c} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
