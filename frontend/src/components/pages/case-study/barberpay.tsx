import CaseStudyTemplate from "./CaseStudyTemplate";

import logo from "../../../assets/logos-portfolio/logo-barba&co.png";

// imgs
import img1 from "../../../assets/imgs/barba-img-1.png";
import img2 from "../../../assets/imgs/barba-img-2.png";
import img3 from "../../../assets/imgs/barba-img-3.png";
import img4 from "../../../assets/imgs/barba-img-4.png";


export default function PagosCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Sistema de gestión de pagos"
      category="Sistemas a medida"
      subtitle="Sistema administrativo de control de caja · UX/UI · Desarrollo web"
      heroImage="/images/case-pagos-hero.jpg"
      logo={logo}

      problem="
        La peluquería gestionaba pagos, servicios y empleados de forma manual o a través de diferentes herramientas. 
        Esto provocaba errores en los cobros, poco control sobre los ingresos y dificultad para tener una visión clara del rendimiento del negocio.
      "
      
      solution="
        Desarrollamos un sistema administrativo que centraliza la gestión de servicios, empleados, membresías y pagos en una única plataforma. 
        La solución permite registrar cada operación de forma clara y consistente, adaptándose a distintos tipos de cobro y necesidades del negocio.
      "
      
      stack={[
        "Flask",
        "Python",
        "PostgreSQL",
        "SQLAlchemy",
        "Jinja2",
        "HTML",
        "CSS",
        "Docker"
      ]}

      highlights={[
        "Registro centralizado de servicios, pagos y empleados en un único sistema.",
        "Soporte para pagos combinados y distintos métodos de cobro.",
        "Gestión de membresías y beneficios para clientes frecuentes.",
        "Mayor control sobre ingresos y movimientos diarios.",
        "Información organizada para facilitar la toma de decisiones.",
        "Sistema preparado para acompañar el crecimiento del negocio."
      ]}

      gallery={[
          img1,
          img3,
          img2,
          img4,
        ]}

      results="
        El sistema permitió ordenar la gestión diaria del negocio y reducir errores en el registro de pagos. 
        La peluquería ganó mayor control sobre su operación y una base sólida para seguir creciendo.
      "
    />
  );
}
