import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export default function FullscreenMenu({ open, onClose }: Props) {
  // 🔒 Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        w-screen h-screen
        bg-nivalis-pattern
        relative overflow-hidden
        text-white
        hidden md:block
      "
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* CONTENIDO */}
      <div className="relative z-10 h-full w-full">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-yellow-400 text-black text-xl flex items-center justify-center"
        >
          ✕
        </button>

        <div className="h-full w-full grid grid-cols-3 px-20 py-24">
          {/* Servicios */}
          <div>
            <h3 className="text-4xl mb-8">Servicios</h3>
            <ul className="space-y-4 text-lg opacity-80">
              <li>Desarrollo web</li>
              <li>E-commerce</li>
              <li>UX/UI</li>
              <li>Apps y sistemas</li>
              <li>Branding</li>
              <li>SEO</li>
              <li>SEM</li>
              <li>Redes sociales</li>
            </ul>
          </div>

          {/* Navegación */}
          <div className="text-5xl font-semibold space-y-6">
            <a href="#home">Home</a>
            <a href="#agencia">Agencia</a>
            <a href="#trabajos">Trabajos</a>
            <a href="#contacto">Contacto</a>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-end">
            <p className="text-4xl leading-tight">
              ¿Tenés un proyecto en mente?
            </p>
            <button className="mt-6 text-yellow-400 text-5xl flex items-center gap-4">
              Hablemos <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
