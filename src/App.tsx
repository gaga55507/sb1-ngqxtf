import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white md:pl-[280px]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Charpente Pro</h3>
              <p className="text-sm">
                Artisans charpentiers depuis 1985, nous mettons notre expertise au service
                de vos projets en Île-de-France.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm">75001 Paris, France</p>
              <p className="text-sm">01 23 45 67 89</p>
              <p className="text-sm">contact@charpentepro.fr</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Horaires</h3>
              <p className="text-sm">Lundi - Vendredi: 8h - 18h</p>
              <p className="text-sm">Samedi: Sur rendez-vous</p>
              <p className="text-sm">Dimanche: Fermé</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
            © {new Date().getFullYear()} Charpente Pro. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;