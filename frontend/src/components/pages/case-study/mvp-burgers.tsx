import CaseStudyTemplate from "./CaseStudyTemplate";

import mvpLogo from "../../../assets/logos-portfolio/logo-mvp-burgers.png";
import img1 from "../../../assets/imgs/mvp-img-1.png";
import img2 from "../../../assets/imgs/mvp-img-2.png";
import img3 from "../../../assets/imgs/mvp-img-3.png";
import img4 from "../../../assets/imgs/mvp-img-4.png";
import img5 from "../../../assets/imgs/mvp-img-5.png";
import img6 from "../../../assets/imgs/mvp-img-6.png";
import img7 from "../../../assets/imgs/mvp-img-7.png";
import img8 from "../../../assets/imgs/mvp-img-8.png";


export default function MvpBurgersCaseStudy() {
  return (
    <>

      <CaseStudyTemplate
        title="Plataforma integral de pedidos"
        category="Plataformas digitales"
        subtitle="UX/UI · Desarrollo web · Plataforma a medida"
        heroImage="/assets/cases/mvp-hero.jpg"
        logo={mvpLogo}

        problem="
          MVP Burgers gestionaba los pedidos de forma manual, lo que generaba errores, confusión entre el mostrador y la cocina y demoras en la preparación. 
          
          A medida que el volumen de pedidos crecía, este enfoque se volvió insostenible: faltaba control sobre el estado de las comandas, 
          se perdían pedidos en momentos de alta demanda y la experiencia del cliente se veía afectada.
        "
        
        
        solution="
          Diseñamos y desarrollamos una plataforma integral de pedidos que unifica la experiencia del cliente con la operación interna del local. 
          
          El sistema cuenta con un backend administrativo para gestionar el menú, controlar la disponibilidad de pedidos y visualizar las comandas 
          enviadas y pendientes, y un frontend de pedidos donde los clientes pueden armar su pedido, elegir el método de entrega y seleccionar la forma de pago. 
          
          Esta integración eliminó pasos manuales y permitió ordenar el flujo entre mostrador y cocina.
        "
        
        stack={[
          "React",
          "Flask",
          "PostgreSQL",
          "Docker",
          "Tailwind CSS",
          "API REST"
        ]}


        highlights={[
          "Persistencia del pedido ante recargas o errores del usuario.",
          "Confirmación clara del pedido antes de su envío.",
          "Pedidos con entrega a domicilio mediante selección de ubicación.",
          "Arquitectura preparada para integrarse con otros servicios.",
          "Respuesta rápida incluso en momentos de alta demanda.",
          "Funcionamiento estable en mostrador, tablet o kiosco.",
        ]}


        gallery={[
          img1,
          img2,
          img3,
          img4,
          img5,
          img8,
          img6,
          img7,
        ]}

        results="
          La implementación de la plataforma aportó mayor previsibilidad y control en la gestión de pedidos. 
          El negocio dejó de depender de procesos manuales, ordenó el flujo entre mostrador y cocina y obtuvo una base sólida para crecer de forma organizada.
        "
      />

    </>

  );
}
