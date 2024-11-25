import React, { useState } from 'react';
import { Menu, X, Home, Wrench, Image, MessageSquare, Phone, ArrowRight } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Accueil', href: '#accueil' },
  { icon: Wrench, label: 'Services', href: '#services' },
  { icon: Image, label: 'Réalisations', href: '#realisations' },
  { icon: MessageSquare, label: 'Témoignages', href: '#temoignages' },
  { icon: Phone, label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 rounded-full shadow-lg md:hidden hover:scale-110 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav 
        className={`fixed top-0 left-0 h-full w-[300px] z-40 transition-all duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-stone-50 opacity-95" />
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-stone-200 to-transparent" />

        <div className="relative h-full flex flex-col">
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-stone-700 to-stone-900 bg-clip-text text-transparent">
              Charpente Pro
            </h1>
            <div className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" />
          </div>

          <div className="flex-1 px-4 py-8 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => {
                  setActiveItem(index);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                className={`relative flex items-center px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeItem === index 
                    ? 'text-stone-900 bg-stone-100/50' 
                    : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                {isHovered === index && (
                  <div className="absolute inset-0 bg-stone-100/50 rounded-xl animate-scale-up" />
                )}
                
                <div className={`relative transition-transform duration-300 ${
                  isHovered === index ? 'scale-110' : ''
                }`}>
                  <item.icon className={`h-5 w-5 ${
                    activeItem === index ? 'text-blue-600' : 'text-blue-500'
                  }`} />
                </div>

                <span className="relative ml-4 flex-1 font-medium">{item.label}</span>

                <ArrowRight className={`relative h-4 w-4 transition-all duration-300 ${
                  isHovered === index 
                    ? 'opacity-100 translate-x-0 text-blue-500' 
                    : 'opacity-0 -translate-x-4'
                }`} />
              </a>
            ))}
          </div>

          <div className="p-6">
            <a
              href="tel:+33123456789"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-200/50"
            >
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
              <span className="font-medium">01 23 45 67 89</span>
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-500 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}