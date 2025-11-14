import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Lightbulb, Rocket } from 'lucide-react';

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
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Somos <span className="text-blue-600">NIVALIS</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full mb-8" />
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una agencia boutique formada por dos personas apasionadas por la innovación.
            Transformamos ideas en experiencias digitales que generan impacto real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-orange-50 via-white to-blue-50 rounded-[2rem] p-12 md:p-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Nuestro enfoque
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Creemos en la potencia de la{' '}
            <span className="font-semibold text-orange-600">creatividad</span> unida a la{' '}
            <span className="font-semibold text-blue-600">tecnología</span>. Cada proyecto es una
            oportunidad para innovar, sorprender y entregar{' '}
            <span className="font-semibold text-gray-900">resultados extraordinarios</span> que
            superen expectativas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
