import React, { useState } from 'react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
    title: 'Charpente Traditionnelle',
    description: 'Rénovation complète d\'une ferme du XVIIIe siècle',
    stats: { surface: '280m²', durée: '3 mois', budget: '45K€' }
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    title: 'Villa Contemporaine',
    description: 'Création d\'une charpente moderne pour une villa d\'architecte',
    stats: { surface: '320m²', durée: '2 mois', budget: '65K€' }
  },
  {
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80',
    title: 'Rénovation Historique',
    description: 'Restauration d\'une charpente classée monument historique',
    stats: { surface: '450m²', durée: '6 mois', budget: '95K€' }
  },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="realisations" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nos Réalisations
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez quelques-uns de nos projets récents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 p-6 w-full">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-amber-400 font-semibold">{project.stats.surface}</div>
                      <div className="text-gray-300">Surface</div>
                    </div>
                    <div className="text-center">
                      <div className="text-amber-400 font-semibold">{project.stats.durée}</div>
                      <div className="text-gray-300">Durée</div>
                    </div>
                    <div className="text-center">
                      <div className="text-amber-400 font-semibold">{project.stats.budget}</div>
                      <div className="text-gray-300">Budget</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}