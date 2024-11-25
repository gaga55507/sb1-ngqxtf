import React from 'react';
import { Home, Wrench, Shield } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Charpente Traditionnelle',
    description: 'Conception et réalisation de charpentes sur-mesure pour tous types de bâtiments.',
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: 'Rénovation',
    description: 'Restauration et renforcement de charpentes anciennes dans le respect des traditions.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Couverture & Zinguerie',
    description: 'Travaux de couverture et zinguerie pour une protection optimale de votre toiture.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Une expertise complète pour tous vos projets de charpente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-amber-800 mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}