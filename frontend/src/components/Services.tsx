import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Code, Zap } from 'lucide-react';

import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Sitios web y aplicaciones modernas, rápidas y escalables.',
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Digital',
      description: 'Estrategias, SEO, campañas pagadas y analítica.',
      gradient: 'from-orange-600 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Automatizaciones',
      description: 'Flujos de trabajo automatizados personalizados.',
      gradient: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <section id="servicios" ref={ref} className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Nuestros"
          highlight="Servicios"
          description="Soluciones integrales para impulsar tu presencia digital y acelerar tu crecimiento"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              delay={index * 0.1}
              className="
                relative 
                bg-white dark:bg-gray-900 
                p-8 
                rounded-3xl 
                shadow-md hover:shadow-xl 
                transition-all 
                duration-500 
              "
            >
              {/* Icono */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 mb-6 
                  rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Título */}
              <h3 className="font-manrope text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="font-inter text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
