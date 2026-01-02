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
              className="
                transition-all
                duration-300
                ease-out
                hover:text-nivOrange
                hover:-translate-y-[1px]
              "
            >
              Instagram
            </a>
          </div>

          <div className="flex items-center justify-center font-medium">
            <a
              href="https://linkedin.com/company/nivalis"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-all
                duration-300
                ease-out
                hover:text-nivOrange
                hover:-translate-y-[1px]
              "
            >
              Linkedin
            </a>
          </div>

          <div className="flex items-center justify-center font-medium">
            <a
              href="#inicio"
              className="
                group
                flex items-center gap-3
                font-medium
                transition-colors
                duration-300
                ease-out
                hover:text-nivOrange
              "
            >
              {/* CÍRCULO */}
              <span
                className="
                  w-8 h-8
                  flex items-center justify-center
                  rounded-full
                  bg-white
                  transition-colors
                  duration-300
                  ease-out
                  group-hover:bg-nivOrange
                  overflow-hidden
                "
              >
                <ArrowUp
                  strokeWidth={2.5}
                  className="
                    w-4 h-4
                    text-black
                    group-hover:animate-arrowUpLoop
                  "
                />
              </span>

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
                transition-colors
                duration-300
                ease-out
                hover:bg-nivOrange
                overflow-hidden
                group
              "
            >
              <span
                className="
                  inline-block
                  text-black
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:animate-arrowUpLoop
                "
              >
                Hablemos!
              </span>
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
