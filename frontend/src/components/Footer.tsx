import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      
      {/* FRANJA NEGRA SUPERIOR */}
      <div className="h-8" />

      {/* CONTENIDO */}
      <div className="w-[90vw] mx-auto h-32">
        <div
          className="
            grid
            grid-cols-4
            grid-rows-2
            w-full
            h-full
            text-sm
            uppercase
            tracking-wide
          "
        >
          {/* FILA 1 */}
          <div className="flex items-center justify-center font-medium">
            ¿Tenés un proyecto?
          </div>

          <div className="flex items-center justify-center font-medium">
            <a
              href="https://www.instagram.com/nivalis.techlab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>
          </div>

          <div className="flex items-center justify-center font-medium">
            <a
              href="https://linkedin.com/company/nivalis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              Linkedin
            </a>
          </div>

          <div className="flex items-center justify-center font-medium">
            <a
              href="#inicio"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </a>
          </div>

          {/* FILA 2 */}
          <div className="flex items-start justify-center">
            <a
              href="#contacto"
              className="
                mt-1
                px-5 py-2
                rounded-full
                bg-white
                text-black
                text-xs
                font-semibold
                hover:bg-neutral-200
                transition-colors
              "
            >
              Hablemos!
            </a>
          </div>

          <div />
          <div />
          <div />
        </div>
      </div>
    </footer>
  );
}
