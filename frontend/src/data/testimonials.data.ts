export type Testimonial = {
  slug: string;
  quote: string;
  company: string;
  type: string;
};

export const testimonials: Testimonial[] = [
  {
    slug: "lupa",
    quote:
      "El proyecto quedó muy bien y en tiempo récord. Buena disposición y eficiencia de principio a fin.",
    company: "Burns Agency · Lupa Supermercados",
    type: "Campaña Buscando con Lupa",
  },
  {
    slug: "barberpay",
    quote:
      "Pasé de pelearme con planillas cada quincena a tener, en dos clics, el desglose exacto de lo que le corresponde a cada barbero. Simple, preciso y sin errores. El tiempo que me ahorra solo ya justifica todo.",
    company: "Barba & Co.",
    type: "Sistema de gestión de pagos",
  },
  {
    slug: "mvp-burgers",
    quote:
      "Tiene todo lo que necesito: los clientes hacen pedidos online, manejo el menú y los precios desde el panel de admin, y las notificaciones me llegan directo a Telegram. La interfaz quedó espectacular y es súper fácil de usar. Se nota el laburo que le metieron.",
    company: "MVP Burgers",
    type: "Plataforma integral de pedidos",
  },
];
