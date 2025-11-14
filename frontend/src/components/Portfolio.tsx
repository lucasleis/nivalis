import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Proyecto 1',
      category: 'Branding & Web',
      description: 'Identidad visual completa y sitio web corporativo',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Proyecto 2',
      category: 'Marketing Digital',
      description: 'Estrategia de contenido y crecimiento en redes sociales',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      title: 'Proyecto 3',
      category: 'Desarrollo & IA',
      description: 'Plataforma con automatizaciones inteligentes',
      gradient: 'from-orange-600 to-blue-600',
    },
    {
      title: 'Proyecto 4',
      category: 'E-commerce',
      description: 'Tienda online con integración completa',
      gradient: 'from-blue-700 to-blue-800',
    },
    {
      title: 'Proyecto 5',
      category: 'App Development',
      description: 'Aplicación móvil multiplataforma',
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      title: 'Proyecto 6',
      category: 'Performance',
      description: 'Optimización y analítica avanzada',
      gradient: 'from-blue-600 to-orange-500',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Nuestro <span className="text-blue-600">Portfolio</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proyectos que demuestran nuestra pasión por la excelencia y la innovación
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative h-80 flex flex-col justify-end p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver proyecto
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
