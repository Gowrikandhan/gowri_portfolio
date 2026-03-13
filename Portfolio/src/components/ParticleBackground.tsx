import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  type: 'star' | 'square' | 'circle';
  rotation: number;
  rotationSpeed: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 80;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const types: ('star' | 'square' | 'circle')[] = ['star', 'square', 'circle'];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedY: Math.random() * 0.5 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const drawStar = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = `rgba(56, 189, 248, ${opacity})`;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
      ctx.shadowBlur = 10;
      
      for (let i = 0; i < 4; i++) {
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size * 0.3, y);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x - size * 0.3, y);
        ctx.closePath();
        ctx.rotate(Math.PI / 4);
      }
      ctx.fill();
      ctx.restore();
    };

    const drawSquare = (x: number, y: number, size: number, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = `rgba(125, 211, 252, ${opacity})`;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
      ctx.shadowBlur = 5;
      ctx.fillRect(-size / 2, -size / 2, size, size);
      ctx.restore();
    };

    const drawCircle = (x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${opacity})`;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
      ctx.shadowBlur = 8;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        particle.rotation += particle.rotationSpeed;

        // Reset particle when it goes off screen
        if (particle.y > canvas.height + 10) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;

        // Twinkle effect
        particle.opacity += (Math.random() - 0.5) * 0.02;
        particle.opacity = Math.max(0.1, Math.min(0.7, particle.opacity));

        // Draw based on type
        switch (particle.type) {
          case 'star':
            drawStar(particle.x, particle.y, particle.size, particle.opacity);
            break;
          case 'square':
            drawSquare(particle.x, particle.y, particle.size * 2, particle.opacity, particle.rotation);
            break;
          case 'circle':
            drawCircle(particle.x, particle.y, particle.size * 1.5, particle.opacity);
            break;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;