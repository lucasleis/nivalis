import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer } from "../../../motion/variants";
import { useParallax } from "../../scroll/useParallax";
import ContactForm from "../../ContactForm";
import Header from "../../Header";
import Footer from "../../Footer";

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
  subtitle,
  problem,
  solution,
  stack,
  highlights,
  gallery,
  results,
  logo,
}: CaseStudyProps) {
  const heroY = useParallax({ range: 300, offset: -10 });

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const activeIndex = gallery?.indexOf(activeImage ?? "") ?? -1;

  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });

  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max);

  const setZoomOriginFromEvent = (
    e: React.MouseEvent | React.WheelEvent
  ) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setOrigin({ x: `${x}%`, y: `${y}%` });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setZoomOriginFromEvent(e);

    setScale((prev) => clamp(prev - e.deltaY * 0.0012, 1, 3));
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
    document.body.style.overflow = activeImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  useEffect(() => {
    if (activeImage) resetZoom();
  }, [activeImage]);

  return (
    <>
      <Header />

      <section className="pb-24 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        {/* ================= HERO ================= */}
        <div className="pt-48">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            style={{ y: heroY }}
            className="
              w-full
              max-w-7xl
              mx-auto
              px-6 md:px-8 xl:px-10
            "
          >
            <div className="flex flex-col gap-6">
              {/* LOGO + TITULO */}
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                {logo && (
                  <motion.div
                    variants={fadeUp}
                    className="
                      flex-shrink-0
                      max-w-[160px] md:max-w-[200px]
                      max-h-[96px] md:max-h-[112px]
                      flex items-center justify-center
                    "
                  >
                    <img
                      src={logo}
                      alt={title}
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                    />
                  </motion.div>
                )}

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl md:text-6xl font-bold leading-tight"
                >
                  {title}
                </motion.h1>
              </div>

              {/* SUBTITULO */}
              {subtitle && (
                <motion.p
                  variants={fadeUp}
                  className="text-base md:text-lg max-w-3xl text-center md:text-left"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-6 md:px-8 xl:px-10
            mt-20
            flex flex-col gap-20
          "
        >
          {/* PROBLEM */}
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              <span className="text-nivOrange">/</span> Desafío
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg opacity-80 leading-relaxed">
              {problem}
            </motion.p>
          </motion.div>

          {/* SOLUTION */}
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              <span className="text-nivOrange">/</span> Solución
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg opacity-80 leading-relaxed">
              {solution}
            </motion.p>
          </motion.div>

          {/* RESULTS */}
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              <span className="text-nivOrange">/</span> Resultados
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg opacity-80 leading-relaxed">
              {results}
            </motion.p>
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              <span className="text-nivOrange">/</span> Beneficios
            </motion.h2>
            <motion.ul variants={fadeUp} className="grid md:grid-cols-2 gap-6 mt-3">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 dark:bg-slate-800 p-6 rounded-2xl shadow-md"
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* GALLERY */}
          {gallery && gallery.length > 0 && (
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
              <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
                <span className="text-nivOrange">/</span> Galería
              </motion.h2>

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

          {/* STACK */}
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              <span className="text-nivOrange">/</span> Tecnologías utilizadas
            </motion.h2>

            <motion.ul variants={fadeUp} className="flex flex-wrap gap-3 mt-3">
              {stack.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full text-sm"
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* CONTACT FORM */}
          <div className="mt-32">
            <ContactForm />
          </div>
        </div>

        {/* ================= MODAL GALERÍA ================= */}
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-6"
            onMouseDown={() => setActiveImage(null)}
          >
            <div
              className="relative inline-block"
              onMouseDown={(e) => e.stopPropagation()}
            >
              {activeIndex > 0 && (
                <button
                  onClick={showPrev}
                  className="absolute top-1/2 left-2 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
                >
                  <ChevronLeft />
                </button>
              )}

              {gallery && activeIndex < gallery.length - 1 && (
                <button
                  onClick={showNext}
                  className="absolute top-1/2 right-2 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
                >
                  <ChevronRight />
                </button>
              )}

              {scale === 1 && (
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <motion.img
                src={activeImage}
                onWheel={handleWheel}
                onDoubleClick={handleDoubleClick}
                style={{ scale, transformOrigin: `${origin.x} ${origin.y}` }}
                className={`max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl select-none ${
                  scale > 1 ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
              />
            </div>
          </motion.div>
        )}
      </section>

      <Footer />
    </>
  );
}
