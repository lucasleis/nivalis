import { ArrowUp, Instagram, Facebook, Mail, Sparkles, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesLinks = [
    { label: "Desarrollo Web", href: "/servicios#web" },
    { label: "Diseño UI/UX", href: "/servicios#diseno" },
    { label: "Automatización", href: "/servicios#automatizacion" },
    { label: "Consultoría", href: "/servicios#consultoria" },
  ];

  const portfolioLinks = [
    { label: "MVP Burgers", href: "/case-study/mvp-burgers" },
    { label: "BarberPay", href: "/case-study/barberpay" },
    { label: "Lupa", href: "/case-study/lupa" },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nivalis.techlab/" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/nivalis.techlab" },
  ];

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-nivOrange" />
              <span className="font-nauryz text-xl font-bold">Nivalis</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Agencia de marketing y tecnología para proyectos que quieren destacar en el mercado digital.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="mailto:nivalis.techlab@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-nivOrange transition-colors"
              >
                <Mail className="w-4 h-4" />
                nivalis.techlab@gmail.com
              </a>
              <a
                href="https://wa.me/5491151232153"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-nivOrange transition-colors"
              >
                <Phone className="w-4 h-4" />
                +54 9 11 5123-2153
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-nauryz font-semibold text-lg">Servicios</h3>
            <ul className="flex flex-col gap-2">
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-nivOrange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-nauryz font-semibold text-lg">Proyectos</h3>
            <ul className="flex flex-col gap-2">
              {portfolioLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-nivOrange transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-nauryz font-semibold text-lg">¿Hablamos?</h3>
            <p className="text-sm text-gray-400">
              ¿Tenés un proyecto en mente? Escribinos y te respondemos hoy.
            </p>
            <a
              href="https://wa.me/5491151232153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-nivOrange text-white font-body text-sm font-medium hover:bg-[#e95b40] transition-colors w-fit"
            >
              Enviar mensaje
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-nivOrange hover:bg-white/20 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="text-sm text-gray-500">© 2026 Nivalis Tech & Digital Lab</p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-gray-400 hover:text-nivOrange transition-colors"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}