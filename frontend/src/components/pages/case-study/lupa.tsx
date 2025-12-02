import CaseStudyTemplate from "./CaseStudyTemplate";

export default function LupaCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Buscando con Lupa – Micrositio Gamificado"
      category="Web & Gamification"
      subtitle="Juego interactivo para impulsar la participación del público y aumentar el engagement de la marca."
      heroImage="/images/case-lupa-hero.jpg"

      problem="
      Lupa Supermercados necesitaba lanzar una campaña interactiva para incentivar la participación de los usuarios,
      ofrecer descuentos y aumentar el tráfico en su plataforma. El desafío principal era crear un juego atractivo,
      rápido y accesible para todo tipo de público."
      
      solution="
      Desarrollé un micrositio gamificado compuesto por múltiples secciones, animaciones y lógica interactiva 
      en tiempo real. Incluye sliders, pop-ups, animaciones, transiciones suaves, validaciones y un sistema de 
      categorías con imágenes ocultas que los usuarios deben descubrir. Todo construido en PHP, MySQL y Javascript."
      
      stack={[
        "PHP",
        "Twig",
        "MySQL/MariaDB",
        "JavaScript",
        "CSS Animations",
        "Docker"
      ]}

      highlights={[
        "Micrositio de alto rendimiento con múltiples secciones temáticas",
        "Sistema de pistas y ocultamiento de imágenes animado",
        "Integración de sliders, pop-ups y efectos de transición estilo campaña",
        "Backend en PHP con plantillas Twig para reutilizar layouts",
        "Base de datos para registro de actividad de usuarios",
        "Estructura dockerizada con ambientes para desarrollo y producción"
      ]}

      gallery={[
        "/images/lupa-1.jpg",
        "/images/lupa-2.jpg",
        "/images/lupa-3.jpg",
        "/images/lupa-4.jpg"
      ]}

      results="
      El micrositio superó las expectativas de participación, generó miles de interacciones en los primeros días 
      y fortaleció la imagen de Lupa como una marca dinámica. La experiencia visual logró captar y mantener la 
      atención del público objetivo."
    />
  );
}
