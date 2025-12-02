import CaseStudyTemplate from "./CaseStudyTemplate";

export default function PagosCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Sistema de Gestión de Pagos para Peluquerías"
      category="Backend & Admin System"
      subtitle="Un sistema administrativo completo para gestionar servicios, empleados y pagos combinados."
      heroImage="/images/case-pagos-hero.jpg"

      problem="
      La peluquería necesitaba un sistema centralizado para gestionar barberos, servicios, métodos de pago, 
      membresías y reportes. El registro manual era lento, propenso a errores y no permitía visualizar datos 
      clave del negocio."
      
      solution="
      Diseñé y desarrollé un backend completo en Flask con un modelo de datos robusto en PostgreSQL. 
      Implementé la lógica para calcular pagos por combinación de métodos, registrar servicios realizados, 
      gestionar membresías y administrar productos. La interfaz fue construida para ser clara y eficiente."
      
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
        "CRUD completo para empleados, servicios, productos y métodos de pago",
        "Registro de pagos con múltiples métodos combinados",
        "Manejo de membresías y beneficios asociados",
        "Dashboard administrativo con reportes",
        "Arquitectura escalable y preparada para nuevas funcionalidades",
        "Validaciones avanzadas del lado del backend"
      ]}

      gallery={[
        "/images/pagos-1.jpg",
        "/images/pagos-2.jpg",
        "/images/pagos-3.jpg"
      ]}

      results="
      El sistema permitió automatizar el proceso de registro de pagos, reducir errores humanos 
      y mejorar la organización interna. La peluquería ahora cuenta con una herramienta sólida 
      para administrar su operación diaria."
    />
  );
}
