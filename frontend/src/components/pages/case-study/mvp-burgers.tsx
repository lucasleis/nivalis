import CaseStudyTemplate from "./CaseStudyTemplate";

export default function MvpBurgersCaseStudy() {
  return (
    <CaseStudyTemplate
      title="MVP Burgers – Plataforma de pedidos"
      category="Fullstack Development"
      subtitle="Una plataforma moderna y ágil para gestionar pedidos de hamburguesas en tiempo real."
      heroImage="/images/case-mvp-hero.jpg"

      problem="
      El cliente necesitaba digitalizar completamente su flujo de pedidos para evitar confusiones, 
      optimizar los tiempos de preparación y centralizar la gestión de pedidos tanto en salón como en cocina. 
      Los sistemas manuales ya no permitían escalar."
      
      solution="
      Desarrollé un MVP completo que permite tomar pedidos, mostrar un resumen claro, 
      enviar órdenes al backend y gestionar el estado de cada pedido. 
      La UI fue diseñada para ser extremadamente rápida, moderna y adaptable a escritorio, tablets o celulares. 
      La arquitectura incluye React para el frontend, Flask como backend ligero y Redis como capa de almacenamiento y cola."
      
      stack={[
        "React", 
        "Flask", 
        "Redis", 
        "Python", 
        "PostgreSQL",
        "TailwindCSS", 
        "API REST"
      ]}

      highlights={[
        "Carrito persistente con gestión de estado global",
        "Order Summary Modal con métodos de entrega (Take Away / Delivery)",
        "Mapa interactivo con Leaflet para entrega por dirección",
        "Backend en Flask con API REST para registrar pedidos",
        "Integración con Redis para manejo rápido de datos",
        "UI adaptada para mostrarse en kiosko o mostrador"
      ]}

      gallery={[
        "/images/mvp-1.jpg",
        "/images/mvp-2.jpg",
        "/images/mvp-3.jpg",
        "/images/mvp-4.jpg"
      ]}

      results="
      El sistema permitió eliminar errores en los pedidos, mejorar la comunicación entre salón y cocina, 
      y acelerar los tiempos en la preparación. Al ser un MVP, el cliente pudo validar el flujo completo 
      y sentar las bases para un sistema más robusto."
    />
  );
}
