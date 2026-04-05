import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const easeOut = "power2.out";

export function initCaseStudyAnimations(container: HTMLElement) {
  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const reduceMotion = context.conditions?.reduceMotion ?? false;

      if (reduceMotion) {
        gsap.set("[data-gsap-animate]", { opacity: 1, y: 0 });
        gsap.set("[data-gallery-item]", { opacity: 1, scale: 1 });
        gsap.set("[data-stack-item]", { opacity: 1, scale: 1 });
        return;
      }

      const isDesktop = context.conditions?.isDesktop ?? false;

      gsap.fromTo(
        ".case-hero-content",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: easeOut }
      );

      const sections = container.querySelectorAll("[data-case-section]");
      sections.forEach((section) => {
        const elements = section.querySelectorAll("[data-gsap-animate]");
        
        gsap.fromTo(
          section.querySelector("h2"),
          { opacity: 0, x: isDesktop ? -50 : -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: easeOut,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: easeOut,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const galleryImages = container.querySelectorAll("[data-gallery-item]");
      galleryImages.forEach((img, i) => {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: easeOut,
            scrollTrigger: {
              trigger: img.closest("[data-gallery-section]"),
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const stackItems = container.querySelectorAll("[data-stack-item]");
      gsap.fromTo(
        stackItems,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: container.querySelector("[data-stack-section]"),
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  );
}
