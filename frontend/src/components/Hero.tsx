import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import Button from "./common/Button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/40 dark:bg-gradient-to-br
                 dark:from-black dark:via-gray-900 dark:to-gray-950"
    >
      {/* Background animated blobs */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full 
                     bg-gradient-to-br from-orange-400/20 to-orange-500/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full 
                     bg-gradient-to-tr from-blue-600/20 to-blue-500/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Logo + Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 
                          rounded-3xl bg-gradient-to-br from-orange-500 to-blue-600 
                          shadow-2xl shadow-orange-500/20">
            <span className="text-4xl font-bold text-white">N</span>
          </div>

          <h1 className="font-manrope text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 
                             bg-clip-text text-transparent">
              NIVALIS
            </span>
          </h1>

          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-500 font-medium mb-8">
            Marketing & Tech Lab
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-manrope text-3xl md:text-5xl font-semibold mb-6 
                         text-gray-800 dark:text-gray-200 max-w-4xl mx-auto leading-tight">
            Marketing, tecnología e ideas que{' '}
            <span className="text-orange-500">impulsan negocios</span>
          </h2>

          <p className="font-inter text-lg md:text-xl text-gray-600 dark:text-gray-400 
                        max-w-2xl mx-auto mb-12 leading-relaxed">
            Combinamos creatividad, estrategia y tecnología para llevar tu marca al siguiente nivel.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="font-poppins" href="#contacto">
            Hablemos
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
