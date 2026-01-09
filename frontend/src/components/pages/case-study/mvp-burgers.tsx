import CaseStudyTemplate from "./CaseStudyTemplate";

import mvpLogo from "../../../assets/portfolio/mvp-logo.png";
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
        title="Plataforma de pedidos"
        category=""
        subtitle="UX/UI · Desarrollo Web"
        // brandLogo="/assets/logos/mvp-burgers.svg"
        heroImage="/assets/cases/mvp-hero.jpg"
        logo={mvpLogo}

        problem="
          El negocio gestionaba los pedidos de forma manual, lo que generaba errores, confusión entre el mostrador y la cocina y demoras en la preparación.
          Este enfoque funcionaba al inicio, pero se volvía insostenible a medida que el volumen de pedidos crecía, afectando la atención y provocando pérdida de ventas en horarios pico.
        "
        
        solution="
          Diseñamos una plataforma de pedidos simple y ordenada que unifica la experiencia del cliente con la operación interna.
          El sistema permite confirmar pedidos con claridad y enviarlos automáticamente al equipo, eliminando pasos manuales.
        "
        
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
          "El pedido no se pierde aunque el cliente recargue o se equivoque.",
          "El cliente revisa y confirma su pedido antes de enviarlo.",
          "Posibilidad de pedidos con entrega a domicilio mediante ubicación.",
          "Sistema preparado para integrarse con otros servicios.",
          "Respuesta rápida incluso en momentos de alta demanda.",
          "Funciona correctamente en mostrador, tablet o kiosco."
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
          La implementación del sistema trajo mayor previsibilidad y control en la gestión de pedidos.
          El negocio dejó de depender de procesos manuales y ganó una base sólida para crecer de forma organizada.
        "
      />

    </>

  );
}
