import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !contact || !message) return;

    const whatsappMessage = `
      Hola! 👋
      Te escribo desde el sitio de Nivalis.

      Nombre: ${name}
      Contacto: ${contact}

      Mensaje:
      ${message}
    `;

    const phone = "5491151232153";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <motion.section
      className="w-full bg-white py-24"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ======================
              COLUMNA IZQUIERDA
          ====================== */}
          <motion.div
            variants={fadeUp}
            className="
              flex flex-col gap-10
              text-center lg:text-left
              items-center lg:items-start
            "
          >
            <p className="text-2xl leading-snug max-w-md">
              Contáctanos hoy mismo y empecemos una conversación
              sobre tu proyecto.
            </p>

            <div
              className="
                flex flex-col gap-6 text-xl font-medium
                items-center lg:items-start
              "
            >
              {/* Email */}
              <a
                href="mailto:nivalis.techlab@gmail.com"
                className="
                  group
                  relative
                  inline-block
                  w-fit
                  text-gray-900
                  transition-colors
                  duration-300
                  hover:text-[#fd6647]
                "
              >
                nivalis.techlab@gmail.com

                <span
                  className="
                    underline-slide
                    pointer-events-none
                    absolute left-0 -bottom-[2px]
                    h-[2px] w-full
                    bg-gray-900
                    transition-colors
                    duration-300
                    group-hover:bg-[#fd6647]
                  "
                />
              </a>

              {/* Teléfono */}
              <a
                href="https://wa.me/5491151232153"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  inline-block
                  w-fit
                  text-gray-900
                  transition-colors
                  duration-300
                  hover:text-[#fd6647]
                "
              >
                +54 9 11 5123 2153

                <span
                  className="
                    underline-slide
                    pointer-events-none
                    absolute left-0 -bottom-[2px]
                    h-[2px] w-full
                    bg-gray-900
                    transition-colors
                    duration-300
                    group-hover:bg-[#fd6647]
                  "
                />
              </a>
            </div>
          </motion.div>

          {/* ======================
              COLUMNA DERECHA
          ====================== */}
          <motion.form
            variants={fadeUp}
            className="
              flex flex-col gap-8
              items-center lg:items-stretch
            "
            onSubmit={handleSubmit}
          >
            {/* Nombre */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-medium">
                Nombre:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingrese su nombre"
                className="
                  w-full
                  rounded-xl
                  border border-gray-300
                  px-4 py-4
                  text-base
                  outline-none
                  focus:border-black
                "
              />
            </div>

            {/* Email / Teléfono */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-medium">
                Email/Telefono de contacto:
              </label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Ingrese su email o numero de contacto"
                className="
                  w-full
                  rounded-xl
                  border border-gray-300
                  px-4 py-4
                  text-base
                  outline-none
                  focus:border-black
                "
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-lg font-medium">
                Mensaje:
              </label>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ingrese su consulta o proyecto a desarrollar"
                className="
                  w-full
                  rounded-xl
                  border border-gray-300
                  px-4 py-4
                  text-base
                  outline-none
                  resize-none
                  focus:border-black
                "
              />
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-gray-600 flex gap-2 max-w-xl">
              <span>ⓘ</span>
              Todos los campos son obligatorios. Al enviar el formulario
              aceptas los Términos y Condiciones y la Política de Privacidad.
            </p>

            {/* Botón */}
            <button
              type="submit"
              className="
                mt-6
                w-fit
                rounded-full
                border border-black
                px-12 py-5
                text-lg font-semibold
                flex items-center gap-3
                transition-all duration-200 ease-out
                hover:bg-nivOrange
                hover:text-white
                hover:border-nivOrange
                hover:scale-105
              "
            >
              ENVIAR MENSAJE
            </button>
          </motion.form>

        </div>
      </div>
    </motion.section>
  );
}
