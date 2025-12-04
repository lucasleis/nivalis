import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "../../../motion/variants";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useParallax } from "../../scroll/useParallax";

interface CaseStudyProps {
  title: string;
  category: string;
  subtitle?: string;
  heroImage?: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  gallery?: string[];
  results: string;
  externalLink?: string;
}

export default function CaseStudyTemplate({
  title,
  category,
  subtitle,
  heroImage,
  problem,
  solution,
  stack,
  highlights,
  gallery,
  results,
  externalLink
}: CaseStudyProps) {

  const heroY = useParallax({ range: 300, offset: -10 });

  return (
    <section className="pt-32 pb-24 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">

      {/* HERO */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-6xl mx-auto px-6 text-center"
        style={{ y: heroY }}
      >
        <motion.p variants={fadeUp} className="uppercase text-sm tracking-[0.2em] text-gray-500 dark:text-gray-400">
          {category}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="
            text-5xl md:text-7xl font-extrabold 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-nivOrange to-nivBlue 
            mt-4 leading-tight
          "
        >
          {title.includes("–") ? (
            <>
              {title.split("–")[0].trim()}
              <br />
              <span className="
                bg-gradient-to-r from-nivOrange to-nivBlue 
                bg-clip-text text-transparent 
                font-semibold
              ">
                {title.split("–")[1].trim()}
              </span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        {subtitle && (
          <motion.p variants={fadeUp} className="text-xl mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </motion.p>
        )}

        {heroImage && (
          <motion.img
            variants={fadeIn}
            src={heroImage}
            alt={title}
            className="mt-12 w-full rounded-3xl shadow-lg"
          />
        )}
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 mt-20 flex flex-col gap-20">

        {/* PROBLEM */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">El desafío</motion.h2>
          <motion.p variants={fadeUp} className="text-lg opacity-80 leading-relaxed">
            {problem}
          </motion.p>
        </motion.div>

        {/* SOLUTION */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">La solución</motion.h2>
          <motion.p variants={fadeUp} className="text-lg opacity-80 leading-relaxed">
            {solution}
          </motion.p>
        </motion.div>

        {/* STACK */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">Tecnologías utilizadas</motion.h2>
          <motion.ul variants={fadeUp} className="flex flex-wrap gap-3 mt-3">
            {stack.map((item, index) => (
              <li key={index} className="px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-sm">
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">Características clave</motion.h2>
          <motion.ul variants={fadeUp} className="grid md:grid-cols-2 gap-6 mt-3">
            {highlights.map((item, index) => (
              <li key={index} className="bg-gray-100 dark:bg-slate-800 p-6 rounded-2xl shadow-md">
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* GALLERY */}
        {gallery && gallery.length > 0 && (
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">Galería</motion.h2>
            <div className="grid md:grid-cols-2 gap-8 mt-3">
              {gallery.map((img, index) => (
                <motion.img
                  key={index}
                  variants={fadeIn}
                  src={img}
                  className="rounded-2xl shadow-lg"
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* RESULTS */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">Resultados</motion.h2>
          <motion.p variants={fadeUp} className="text-lg opacity-80 leading-relaxed">
            {results}
          </motion.p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-6 mt-16">
          <a href="/#portfolio" className="text-orange-600 dark:text-orange-400 font-semibold flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver al portfolio
          </a>

          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-nivOrange to-orange-600 text-white rounded-full flex items-center gap-2"
            >
              Ver proyecto en vivo
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
