import CaseStudyTemplate from "./CaseStudyTemplate";

import lupaLogo from "../../../assets/logos-portfolio/logo-lupa.png";

// imgs
import img1 from "../../../assets/imgs/lupa-img-1.webp";
import img2 from "../../../assets/imgs/lupa-img-2.webp";
import img3 from "../../../assets/imgs/lupa-img-3.webp";
import img5 from "../../../assets/imgs/lupa-img-5.png";

export default function LupaCaseStudy() {
  return (
    <CaseStudyTemplate
      slug="lupa"
      title="Micrositio de campaña interactiva"
      category="Campañas digitales"
      subtitle="Campaña interactiva · UX/UI · Desarrollo Web"
      heroImage="/images/case-lupa-hero.jpg"
      logo={lupaLogo}

      problem="
        Lupa Supermercados necesitaba contar con un sitio web para una campaña digital interactiva, que acompañe la estrategia 
        de la marca e incentive la participación del público, el uso de beneficios y el tráfico hacia sus canales digitales. 

        El desafío era desarrollar una experiencia atractiva, ágil y accesible, que funcione correctamente en distintos 
        dispositivos y mantenga una estética de campaña cuidada y consistente a lo largo del tiempo.
      "

      solution="
        Desarrollamos el sitio web de la campaña, con múltiples secciones y componentes interactivos pensados para acompañar la experiencia del usuario. 
        
        La solución incluye animaciones, transiciones, pop-ups, sliders y validaciones que guían la navegación, junto a un sistema de categorías con contenido dinámico. 
        
        Se implementó un backend en PHP con Twig para facilitar la reutilización de layouts y una base de datos para registrar la actividad y métricas de uso.
      "

      stack={[
        "PHP",
        "Twig",
        "MySQL / MariaDB",
        "JavaScript",
        "CSS",
        "Docker",
        "Apache",
        "Email (SMTP)"
      ]}


      highlights={[
        "Experiencia interactiva con navegación clara y ritmo dinámico.",
        "Sistema de secciones y categorías con contenido dinámico.",
        "Animaciones y transiciones pensadas para acompañar la campaña.",
        "Pop-ups, sliders y validaciones para guiar la interacción del usuario.",
        "Templates con Twig para mantener consistencia visual y reutilización.",
        "Registro de actividad en base de datos para análisis y métricas.",
      ]}


      gallery={[
          img1,
          img2,
          img5,
          img3,
        ]}

      results="
        El sitio web de la campaña logró una alta participación en los primeros días, aumentando las interacciones y el tiempo de permanencia. 
        La propuesta visual y la experiencia interactiva contribuyeron a reforzar el posicionamiento de la marca como dinámica e innovadora, 
        dejando además una base técnica reutilizable para futuras campañas y activaciones digitales.
      "
      
    />
  );
}
