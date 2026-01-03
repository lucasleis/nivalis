import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      
      {/* FRANJA NEGRA SUPERIOR */}
      <div className="h-8" />

      {/* CONTENIDO */}
      <div className="w-[90vw] mx-auto py-8">
        <div
          className="
            grid
            grid-cols-4
            w-full
            h-32
            text-sm
            uppercase
            tracking-wide
          "
        >
          {/* COLUMNA 1 */}
          <div className="group flex flex-col items-center justify-center gap-1 font-medium">

            {/* TEXTO */}
            <a
              href="https://wa.me/5491151232153"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-all
                duration-300
                ease-out
                group-hover:text-nivOrange
                group-hover:-translate-y-[1px]
              "
            >
              ¿Tenés un proyecto?
            </a>

            {/* BOTÓN */}
            <a
              href="https://wa.me/5491151232153"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5 py-2
                rounded-full
                bg-white
                text-black
                text-xs
                font-semibold
                transition-colors
                duration-300
                ease-out
                group-hover:bg-nivOrange
                overflow-hidden
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

          {/* COLUMNA 2 */}
          <div className="flex flex-col items-center justify-center gap-1 font-medium">
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
            <a
              aria-hidden
              className="
                px-5 py-2
                rounded-full
                text-xs
                font-semibold
                invisible
              "
            >
              Hablemos!
            </a>
          </div>

          {/* COLUMNA 3 */}
          <div className="flex flex-col items-center justify-center gap-1 font-medium">

            <a
              href="https://www.facebook.com/nivalis.techlab"
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
              Facebook
            </a>

            <a
              aria-hidden
              className="
                px-5 py-2
                rounded-full
                text-xs
                font-semibold
                invisible
              "
            >
              Hablemos!
            </a>
          </div>

          {/* COLUMNA 4 */}
          <div className="flex flex-col items-center justify-center gap-1 font-medium">
            <a
              href="#inicio"
              className="
                group
                flex flex-col items-center
                transition-all
                duration-300
                ease-out
                hover:text-nivOrange
              "
            >
              {/* TEXTO */}
              <span
                className="
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:-translate-y-[1px]
                "
              >
                Back to top
              </span>

              {/* FLECHA */}
              <span
                className="
                  mt-1
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
                  strokeWidth={3}
                  className="
                    w-4 h-4
                    text-black
                    group-hover:animate-arrowUpLoop
                  "
                />
              </span>
            </a>

          </div>
          
        </div>

        {/* COPYRIGHT (ya dentro del fondo negro) */}
        <div className="mt-6 text-center text-xs text-white/60">
          © 2026 Nivalis Marketing and Tech Lab {/* · All rights reserved ·{" "} */}
          {/*
            <a
              href="/terminos-y-condiciones"
              className="hover:text-nivOrange transition-colors"
            >
              Términos y Condiciones
            </a>
          */}
        </div>
      </div>
    </footer>
  );
}
