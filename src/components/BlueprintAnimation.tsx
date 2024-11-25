import React, { useEffect, useRef } from 'react';

export default function BlueprintAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.strokeStyle = '#2563eb'; // Modern blue color
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawTruss = (progress: number) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const width = Math.min(canvas.width * 0.8, 1000);
      const height = width * 0.35;

      // Define all the lines in the truss
      const lines = [
        // Bottom chord
        [[centerX - width/2, centerY + height/2], [centerX + width/2, centerY + height/2]],
        // Top chords
        [[centerX - width/2, centerY + height/2], [centerX, centerY - height/2]],
        [[centerX + width/2, centerY + height/2], [centerX, centerY - height/2]],
        // King post
        [[centerX, centerY - height/2], [centerX, centerY + height/2]],
        // Main diagonal braces
        [[centerX - width/4, centerY], [centerX, centerY + height/2]],
        [[centerX + width/4, centerY], [centerX, centerY + height/2]],
        // Secondary braces
        [[centerX - width/3, centerY + height/4], [centerX - width/6, centerY]],
        [[centerX + width/3, centerY + height/4], [centerX + width/6, centerY]],
        // Support blocks
        [[centerX - width/2 - 20, centerY + height/2], [centerX - width/2 + 20, centerY + height/2 + 20]],
        [[centerX + width/2 - 20, centerY + height/2], [centerX + width/2 + 20, centerY + height/2 + 20]]
      ];

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each line with progress
      const linesToDraw = Math.floor(lines.length * progress);
      
      for (let i = 0; i < linesToDraw; i++) {
        const [[x1, y1], [x2, y2]] = lines[i];
        const lineProgress = i === linesToDraw - 1 ? 
          (progress * lines.length % 1) : 1;

        // Draw main line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(
          x1 + (x2 - x1) * lineProgress,
          y1 + (y2 - y1) * lineProgress
        );
        ctx.stroke();

        // Draw joint circles at endpoints if line is complete
        if (lineProgress === 1) {
          ctx.fillStyle = '#2563eb';
          ctx.beginPath();
          ctx.arc(x1, y1, 4, 0, Math.PI * 2);
          ctx.arc(x2, y2, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Add dimension lines and measurements when complete
      if (progress === 1) {
        ctx.font = '14px monospace';
        ctx.fillStyle = '#2563eb';
        ctx.textAlign = 'center';
        
        // Width measurement
        ctx.fillText(`${Math.round(width/10)}m`, centerX, centerY + height/2 + 40);
        
        // Height measurement
        ctx.save();
        ctx.translate(centerX + width/2 + 40, centerY);
        ctx.rotate(Math.PI/2);
        ctx.fillText(`${Math.round(height/10)}m`, 0, 0);
        ctx.restore();
      }
    };

    let progress = 0;
    let lastTime = 0;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      progress = Math.min(progress + delta * 0.3, 1);
      drawTruss(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="absolute inset-0 bg-stone-50">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent" />
    </div>
  );
}