import React from 'react';

export default function WoodenTitle() {
  return (
    <div className="relative mb-6">
      {/* SVG Filter for wood texture */}
      <svg className="hidden">
        <defs>
          <filter id="wood-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="1" />
            <feDisplacementMap in="SourceGraphic" scale="5" />
          </filter>
        </defs>
      </svg>

      <h1 className="text-4xl md:text-6xl font-bold">
        <span className="block wooden-text opacity-0 animate-slide-up">
          Artisans Charpentiers
        </span>
        <span className="block wooden-text opacity-0 animate-slide-up animation-delay-200 mt-2">
          depuis 1985
        </span>
      </h1>
    </div>
  );
}