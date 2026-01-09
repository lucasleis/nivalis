import CaseStudyTemplate from "./CaseStudyTemplate";

import lupaLogo from "../../../assets/logos-portfolio/logo-lupa.png";

export default function LupaCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Micrositio gamificado"
      category=""
      subtitle="Campaña interactiva · UX/UI · Desarrollo Web"
      heroImage="/images/case-lupa-hero.jpg"
      logo={lupaLogo}
      problem="
        Lupa Supermercados necesitaba lanzar una campaña interactiva que incremente la participación del público,
        impulse el uso de beneficios y aumente el tráfico hacia sus canales digitales.
        El desafío era lograr una experiencia entretenida, rápida y accesible, que funcione bien en distintos dispositivos,
        manteniendo una estética de campaña cuidada y consistente.
      "
      solution="
        Desarrollamos un micrositio gamificado con múltiples secciones y lógica interactiva en tiempo real.
        La experiencia incluye animaciones, transiciones, pop-ups, sliders y validaciones, además de un sistema de categorías
        con imágenes ocultas que el usuario debe descubrir para avanzar.
        Se implementó un backend en PHP con Twig para reutilizar layouts y una base de datos para registrar actividad y métricas.
      "
      stack={[
        "PHP",
        "Twig",
        "MySQL/MariaDB",
        "JavaScript",
        "CSS Animations",
        "Docker",
      ]}
      highlights={[
        "Experiencia gamificada con navegación clara y ritmo dinámico.",
        "Sistema de categorías con imágenes ocultas y mecánica de descubrimiento.",
        "Animaciones y transiciones suaves pensadas para campaña.",
        "Pop-ups, sliders y validaciones para guiar la interacción.",
        "Templates con Twig para mantener consistencia visual y reutilización.",
        "Persistencia de actividad en base de datos para análisis posterior.",
      ]}
      gallery={[
        "/images/lupa-1.jpg",
        "/images/lupa-2.jpg",
        "/images/lupa-3.jpg",
        "/images/lupa-4.jpg",
      ]}
      results="
        El micrositio logró una alta participación en los primeros días de campaña, aumentando las interacciones y el tiempo de permanencia.
        La propuesta visual y la mecánica del juego ayudaron a reforzar el posicionamiento de la marca como dinámica e innovadora,
        dejando además una base técnica reutilizable para futuras campañas.
      "
    />
  );
}
