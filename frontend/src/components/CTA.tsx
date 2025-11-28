import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

import Button from "./common/Button";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappNumber = '1234567890';
  const whatsappMessage = encodeURIComponent('¡Hola! Me interesa conocer más sobre los servicios de NIVALIS');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      ref={ref}
      id="contacto"
      className="py-32 bg-gradient-to-br from-gray-50 via-orange-50/30 to-blue-50/40 
                 dark:from-black dark:via-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Background floating blobs */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full 
                     bg-gradient-to-br from-orange-400/20 to-orange-500/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full 
                     bg-gradient-to-tr from-blue-600/20 to-blue-500/10 blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Icon + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 
                          rounded-3xl bg-gradient-to-br from-orange-500 to-blue-600 
                          shadow-2xl shadow-orange-500/30">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-gray-100 leading-tight">
            ¿Listo para{' '}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 
                            bg-clip-text text-transparent">
              transformar
            </span>{' '}
            tu negocio?
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <Button href={whatsappUrl}>
            <MessageCircle className="w-6 h-6" />
            Escríbenos por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-gray-500 dark:text-gray-400"
        >
          Respuesta en menos de 24 horas
        </motion.p>

      </div>
    </section>
  );
}
