import React, { useEffect, useState } from 'react';

interface PuzzlePiece {
  x: number;
  y: number;
  delay: number;
}

export default function PuzzleImage() {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const gridSize = 10; // 5x5 grid for puzzle pieces

  useEffect(() => {
    const newPieces: PuzzlePiece[] = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        newPieces.push({
          x,
          y,
          delay: Math.random() * 3, // Random delay between 0-0.5s
        });
      }
    }
    setPieces(newPieces.sort(() => Math.random() - 3)); // Randomize animation order
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full">
        {pieces.map((piece, index) => (
          <div
            key={index}
            className="absolute opacity-0 animate-puzzle-piece"
            style={{
              width: `${100 / gridSize}%`,
              height: `${100 / gridSize}%`,
              left: `${(piece.x * 100) / gridSize}%`,
              top: `${(piece.y * 100) / gridSize}%`,
              animationDelay: `${piece.delay}s`,
              backgroundImage:
                'url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80)',
              backgroundSize: `${gridSize * 100}%`,
              backgroundPosition: `${-piece.x * 100}% ${-piece.y * 100}%`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      </div>
    </div>
  );
}
