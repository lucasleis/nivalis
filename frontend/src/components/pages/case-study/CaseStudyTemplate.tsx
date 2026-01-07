import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
  logo?: string;
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
  externalLink,
  logo,
}: CaseStudyProps) {

  const heroY = useParallax({ range: 300, offset: -10 });
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const activeIndex = gallery?.indexOf(activeImage ?? "") ?? -1;
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });

  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setZoomOriginFromEvent(e);

    setScale((prev) => {
      const next = prev - e.deltaY * 0.0012;
      return clamp(next, 1, 3);
    });
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setZoomOriginFromEvent(e);

    setScale((prev) => (prev === 1 ? 2 : 1));
  };

  const resetZoom = () => {
    setScale(1);
    setOrigin({ x: "50%", y: "50%" });
  };

  const showPrev = () => {
    if (!gallery || activeIndex <= 0) return;
    setActiveImage(gallery[activeIndex - 1]);
  };

  const showNext = () => {
    if (!gallery || activeIndex >= gallery.length - 1) return;
    setActiveImage(gallery[activeIndex + 1]);
  };

  const setZoomOriginFromEvent = (
    e: React.MouseEvent | React.WheelEvent
  ) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setOrigin({
      x: `${x}%`,
      y: `${y}%`,
    });
  };


  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, gallery]);

  useEffect(() => {
    if (activeImage) {
      resetZoom();
    }
  }, [activeImage]);



  return (
    <section className="pb-24 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">

      <div className="pt-48">
        {/* HERO */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto px-6"
          style={{ y: heroY }}
        >
          {/* Category */}
          {/*
            <motion.p
              variants={fadeUp}
              className="uppercase text-sm tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-6"
            >
              {category}
            </motion.p>
          */}

        {/* Logo + Title */}
        <div className="flex flex-col gap-4">

          {/* FILA: logo + título */}
          <div className="flex items-center gap-6">
            {logo && (
              <motion.img
                variants={fadeUp}
                src={logo}
                alt={title}
                className="
                  h-24 md:h-28 lg:h-32
                  w-auto object-contain
                  flex-shrink-0
                  self-start
                "
              />
            )}

            <motion.h1
              variants={fadeUp}
              className="
                relative
                text-4xl md:text-6xl font-bold leading-tight
                text-gray-900 dark:text-white
              "
            >
              <span className="relative z-10">{title}</span>

              {/* subrayado naranja */}
              <span
                className="
                  absolute left-0 -bottom-2
                  h-[6px] w-24 bg-nivOrange/80 rounded-full
                "
              />
            </motion.h1>
          </div>

          {/* SUBTÍTULO */}
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="
                mt-2
                text-base md:text-lg
                text-gray-600 dark:text-gray-300
                max-w-3xl
                flex items-center gap-3
              "
            >
              <span className="inline-block h-1 w-6 bg-nivOrange rounded-full" />
              {subtitle}
            </motion.p>
          )}
        </div>

        </motion.div>
      </div>

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-3">
              {gallery.map((img, index) => (
                <motion.img
                  key={index}
                  variants={fadeIn}
                  src={img}
                  className="
                    cursor-zoom-in
                    rounded-xl
                    shadow-md
                    w-full
                    max-h-48
                    object-cover
                    transition-transform
                    hover:scale-[1.03]
                  "
                  onClick={() => setActiveImage(img)}
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

      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[9999]
            bg-black/80
            flex items-center justify-center
            p-6
          "

          onMouseDown={() => setActiveImage(null)}
        >
          <div
            className="relative inline-block"
            onMouseDown={(e) => e.stopPropagation()}
          >

            {/* Flecha izquierda */}
            {activeIndex > 0 && (
              <button
                type="button"
                onClick={showPrev}
                className="
                  absolute top-1/2 -left-12 -translate-y-1/2
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-white/90
                  text-black
                  shadow
                  hover:scale-105
                  transition
                "
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Flecha derecha */}
            {gallery && activeIndex < gallery.length - 1 && (
              <button
                type="button"
                onClick={showNext}
                className="
                  absolute top-1/2 -right-12 -translate-y-1/2
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-white/90
                  text-black
                  shadow
                  hover:scale-105
                  transition
                "
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Button X */}
            {scale === 1 && (
              <button
                type="button"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setActiveImage(null);
                }}
                className="
                  absolute top-3 right-3 z-10
                  w-8 h-8
                  flex items-center justify-center
                  rounded-full
                  bg-white
                  text-black
                  shadow
                  hover:scale-105
                  transition
                "
                aria-label="Cerrar imagen"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <motion.img
              src={activeImage}
              onWheel={handleWheel}
              onDoubleClick={handleDoubleClick}
              style={{
                scale,
                transformOrigin: `${origin.x} ${origin.y}`,
              }}
              className={`
                max-w-[90vw]
                max-h-[85vh]
                rounded-2xl
                shadow-2xl
                select-none
                ${scale > 1 ? "cursor-zoom-out" : "cursor-zoom-in"}
              `}
            />
          </div>
        </motion.div>
      )}

    </section>
  );
}
