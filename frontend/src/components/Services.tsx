import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Code, Palette, Brain, Zap } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Sitios web y aplicaciones modernas, rápidas y escalables con las últimas tecnologías.',
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'Estrategias de contenido, SEO, campañas pagadas y analítica para maximizar tu alcance y conversiones.',
      gradient: 'from-orange-600 to-blue-600', 
    },
    {
      icon: Zap,
      title: 'Automatizaciones',
      description: 'Optimiza operaciones y ahorra tiempo con flujos de trabajo automatizados personalizados.',
      gradient: 'from-blue-500 to-blue-700',
    },
    /* 
    {
      icon: Palette,
      title: 'Branding',
      description: 'Identidad visual completa que captura la esencia de tu marca y conecta con tu audiencia.',
      gradient: 'from-orange-500 to-orange-700',
    },
    
    {
      icon: Brain,
      title: 'IA aplicada a negocios',
      description: 'Soluciones inteligentes que automatizan procesos y potencian la toma de decisiones.',
      gradient: 'from-blue-600 to-blue-800',
    },
    */
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Nuestros <span className="text-orange-500">Servicios</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales para impulsar tu presencia digital y acelerar tu crecimiento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
