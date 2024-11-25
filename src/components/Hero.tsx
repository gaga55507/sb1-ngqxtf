import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import BlueprintAnimation from './BlueprintAnimation';

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="accueil" className="relative min-h-screen bg-stone-50">
      <BlueprintAnimation />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-3xl">
          <div className="inline-block animate-bounce-slow bg-blue-600/90 text-white px-4 py-2 rounded-full mb-6">
            ✨ Plus de 35 ans d'expertise
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 opacity-0 animate-slide-up">
            Artisans Charpentiers depuis 1985
          </h1>
          <p className="text-xl text-stone-600 mb-8 opacity-0 animate-slide-up animation-delay-200">
            Excellence et savoir-faire traditionnel au service de vos projets de charpente, 
            couverture et zinguerie en Île-de-France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up animation-delay-400">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-stone-600 text-base font-medium rounded-md text-stone-600 hover:bg-stone-50 transition-all hover:scale-105"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-stone-600 animate-bounce cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </div>
  );
}