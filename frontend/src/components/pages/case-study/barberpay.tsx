import CaseStudyTemplate from "./CaseStudyTemplate";

import logo from "../../../assets/portfolio/Barba&Co_logo.png";


export default function PagosCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Sistema de gestión y pagos"
      category=""
      subtitle="Aplicación de control de caja · UX/UI · Desarrollo Web"
      heroImage="/images/case-pagos-hero.jpg"
      logo={logo}

      problem="
        La peluquería gestionaba pagos, servicios y empleados de forma manual o con herramientas dispersas.
        Esto generaba errores en los cobros, falta de control sobre los ingresos y dificultad para entender el rendimiento real del negocio.
      "
      
      solution="
        Desarrollamos un sistema administrativo que centraliza la gestión de servicios, empleados, membresías y pagos.
        La plataforma permite registrar cada operación de forma clara y consistente, adaptándose a distintas formas de cobro y tipos de servicio.
      "
      
      stack={[
        "Flask",
        "Python",
        "PostgreSQL",
        "SQLAlchemy",
        "Jinja2",
        "HTML/CSS",
        "Docker"
      ]}

      highlights={[
        "Registro claro de servicios, pagos y empleados en un solo sistema.",
        "Soporte para pagos combinados y distintos métodos de cobro.",
        "Gestión de membresías y beneficios para clientes frecuentes.",
        "Mayor control sobre ingresos y movimientos diarios.",
        "Información organizada para tomar mejores decisiones.",
        "Sistema preparado para crecer con el negocio."
      ]}

      gallery={[
        "/images/pagos-1.jpg",
        "/images/pagos-2.jpg",
        "/images/pagos-3.jpg"
      ]}

      results="
        El sistema permitió ordenar la gestión diaria de la peluquería y reducir errores en el registro de pagos.
        El negocio ganó mayor control sobre su operación y una base sólida para seguir creciendo.
      "
    />
  );
}
