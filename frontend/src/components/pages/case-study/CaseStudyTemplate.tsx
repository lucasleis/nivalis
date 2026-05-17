import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer } from "../../../motion/variants";
import { useParallax } from "../../scroll/useParallax";
import ContactForm from "../../ContactForm";
import Header from "../../Header";
import Footer from "../../Footer";
import { testimonials } from "../../../data/testimonials.data";

interface CaseStudyProps {
  slug: string;
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
  slug,
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
  const testimonial = testimonials.find((t) => t.slug === slug) ?? null;
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
      <Helmet>
        <title>{title} | Nivalis</title>
        <meta name="description" content={subtitle ?? `Caso de estudio: ${title}. Conocé el proceso, solución y resultados de este proyecto desarrollado por Nivalis.`} />
      </Helmet>
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
          <motion.div id="desafio" variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              <span className="text-nivOrange">/</span> Desafío
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg opacity-80 leading-relaxed">
              {problem}
            </motion.p>
          </motion.div>

          {/* SOLUTION */}
          <motion.div id="solucion" variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              <span className="text-nivOrange">/</span> Solución
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg opacity-80 leading-relaxed">
              {solution}
            </motion.p>
          </motion.div>

          {/* RESULTS */}
          <motion.div id="resultados" variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              <span className="text-nivOrange">/</span> Resultados
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg opacity-80 leading-relaxed">
              {results}
            </motion.p>
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div id="beneficios" variants={staggerContainer} initial="initial" whileInView="animate">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
              <span className="text-nivOrange">/</span> Beneficios
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 dark:bg-slate-800/50 p-6 rounded-xl border border-gray-100 dark:border-slate-700/30 hover:border-nivOrange/40 hover:shadow-lg hover:shadow-nivOrange/5 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 w-7 h-7 bg-nivOrange/10 rounded-full flex items-center justify-center text-nivOrange font-bold text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed pr-8 text-base">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* GALLERY */}
          {gallery && gallery.length > 0 && (
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate">
              <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
                <span className="text-nivOrange">/</span> Galería
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                {gallery.map((img, index) => (
                  <motion.img
                    key={index}
                    variants={fadeIn}
                    src={img}
                    alt={`Captura del proyecto, imagen ${index + 1}`}
                    className="
                      cursor-zoom-in
                      rounded-xl
                      shadow-sm
                      w-full
                      h-40 md:h-48
                      object-cover
                      transition-all duration-300
                      hover:scale-[1.02]
                      hover:shadow-lg
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

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-3">
              {stack.map((item, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-gray-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* TESTIMONIO */}
          {testimonial && (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                variants={fadeUp}
                className="
                  flex flex-col md:flex-row md:items-center gap-8
                  bg-gray-50 dark:bg-slate-800/50
                  border border-gray-100 dark:border-slate-700/30
                  rounded-2xl px-8 py-10
                "
              >
                <Quote className="shrink-0 w-10 h-10 text-nivOrange opacity-80" aria-hidden="true" />

                <blockquote className="flex-1 text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="md:border-l md:border-gray-200 dark:md:border-slate-600 md:pl-8 flex flex-col gap-1 shrink-0">
                  <cite className="not-italic font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.company}
                  </cite>
                  <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wide">
                    {testimonial.type}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* CONTACT FORM */}
          <div id="contacto" className="mt-32">
            <ContactForm />
          </div>
        </div>

        {/* ================= MODAL GALERÍA ================= */}
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {activeIndex > 0 && (
                <button
                  onClick={showPrev}
                  className="absolute top-1/2 -left-16 md:-left-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {gallery && activeIndex < gallery.length - 1 && (
                <button
                  onClick={showNext}
                  className="absolute top-1/2 -right-16 md:-right-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {activeIndex + 1} / {gallery?.length}
              </p>

              <motion.img
                src={activeImage}
                alt="Imagen del proyecto ampliada"
                onWheel={handleWheel}
                onDoubleClick={handleDoubleClick}
                style={{ scale, transformOrigin: `${origin.x} ${origin.y}` }}
                className={`max-w-[90vw] max-h-[75vh] rounded-2xl shadow-2xl select-none object-contain ${
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
