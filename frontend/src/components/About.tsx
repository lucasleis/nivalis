import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Lightbulb, Rocket } from 'lucide-react';

import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: 'Equipo Boutique',
      description: 'Atención personalizada y dedicada a cada proyecto',
    },
    {
      icon: Lightbulb,
      title: 'Creatividad',
      description: 'Ideas frescas que conectan con tu audiencia',
    },
    {
      icon: Rocket,
      title: 'Resultados',
      description: 'Estrategias medibles que impulsan tu crecimiento',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título estandarizado */}
        <SectionTitle
          title="Somos"
          highlight="NIVALIS"
          description="Una agencia boutique formada por dos personas apasionadas por la innovación. Transformamos ideas en experiencias digitales que generan impacto real."
        />

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              delay={index * 0.2}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bloque final "Nuestro enfoque" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-[2rem] p-12 md:p-16 text-center 
                     bg-gradient-to-br from-orange-50 via-white to-blue-50 
                     dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                     shadow-xl dark:shadow-none"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Nuestro enfoque
          </h3>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Creemos en la potencia de la{' '}
            <span className="font-semibold text-orange-600">creatividad</span> unida a la{' '}
            <span className="font-semibold text-blue-600">tecnología</span>. Cada proyecto es una
            oportunidad para innovar, sorprender y entregar{' '}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              resultados extraordinarios
            </span>{' '}
            que superen expectativas.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
