import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  slug: string;
  quote: string;
  company: string;
  type: string;
};

const testimonials: Testimonial[] = [
  {
    slug: "lupa",
    quote:
      "El proyecto quedó muy bien y en tiempo récord. Buena disposición y eficiencia de principio a fin.",
    company: "Burns Agency · Lupa Supermercados",
    type: "Campaña Buscando con Lupa",
  },
  {
    slug: "barberpay",
    quote:
      "Pasé de pelearme con planillas cada quincena a tener, en dos clics, el desglose exacto de lo que le corresponde a cada barbero. Simple, preciso y sin errores. El tiempo que me ahorra solo ya justifica todo.",
    company: "Barba & Co.",
    type: "Sistema de gestión de pagos",
  },
  {
    slug: "mvp-burgers",
    quote:
      "Tiene todo lo que necesito: los clientes hacen pedidos online, manejo el menú y los precios desde el panel de admin, y las notificaciones me llegan directo a Telegram. La interfaz quedó espectacular y es súper fácil de usar. Se nota el laburo que le metieron.",
    company: "MVP Burgers",
    type: "Plataforma integral de pedidos",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".testimonials-eyebrow",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".testimonials-header",
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          ".testimonials-title",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".testimonials-header",
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          ".testimonial-card",
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".testimonials-grid",
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.utils.toArray<HTMLElement>(".quote-icon").forEach((el) => {
          gsap.to(el, {
            y: -8,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest(".testimonial-card") as Element,
              start: "top 90%",
              end: "center top",
              scrub: 1.5,
            },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".testimonials-eyebrow", ".testimonials-title", ".testimonial-card"],
          { opacity: 1, y: 0, scale: 1 }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="bg-white dark:bg-neutral-900 py-20"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 xl:px-10">
        <div className="testimonials-header mb-16">
          <p className="testimonials-eyebrow text-sm tracking-[0.25em] text-gray-500 mb-10">
            CLIENTES
          </p>
          <h2 className="testimonials-title font-display text-5xl md:text-6xl font-medium text-gray-900 dark:text-white leading-tight">
            Lo que dicen{" "}
            <span className="acumin-ultrablack text-nivOrange">
              nuestros clientes
            </span>
          </h2>
        </div>

        <div className="testimonials-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                testimonial-card
                group
                relative
                bg-white/60 dark:bg-gray-800/60
                backdrop-blur-lg
                rounded-2xl
                p-6
                border border-gray-200/50 dark:border-gray-700/50
                shadow-xl
                hover:-translate-y-2
                transition-transform duration-300
                flex flex-col
                gap-4
                overflow-hidden
              "
            >
              {/* hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-nivOrange/0 to-nivOrange/0 group-hover:from-nivOrange/5 group-hover:to-transparent transition-all duration-300" />
              {/* hover border ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-nivOrange/30 transition-colors duration-300" />

              {/* quote mark with parallax target */}
              <div className="relative z-10">
                <Quote
                  aria-hidden="true"
                  className="quote-icon w-7 h-7 text-nivOrange opacity-70"
                />
              </div>

              <blockquote className="relative z-10 text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
                <cite className="not-italic font-nauryz font-semibold text-gray-900 dark:text-white text-sm">
                  {t.company}
                </cite>
                <Link
                  to={`/case-study/${t.slug}`}
                  className="rounded-full bg-[#fd6647] px-5 py-2 text-sm font-semibold text-white hover:bg-[#e95b40] transition-colors duration-300 cursor-pointer"
                >
                  {t.type}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
