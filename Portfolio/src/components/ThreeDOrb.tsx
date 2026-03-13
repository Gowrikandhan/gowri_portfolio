import { useEffect, useRef } from 'react';

interface ThreeDOrbProps {
  showInitials?: boolean;
}

const ThreeDOrb = ({ showInitials = false }: ThreeDOrbProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX = (e.clientX - centerX) / 20;
      mouseY = (e.clientY - centerY) / 20;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      const orb = container.querySelector('.orb-container') as HTMLElement;
      
      if (orb) {
        orb.style.transform = `rotateX(${-currentY}deg) rotateY(${currentX}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const orbSize = showInitials ? 'w-56 h-56 md:w-72 md:h-72' : 'w-80 h-80 md:w-96 md:h-96';

  return (
    <div ref={containerRef} className={`relative ${orbSize}`} style={{ perspective: '1000px' }}>
      {/* Outer glow effect */}
      <div 
        className="absolute -inset-8 rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(195 100% 60% / 0.2) 0%, transparent 70%)',
        }}
      />
      
      {/* Main orb container with 3D transform */}
      <div 
        className="orb-container absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Outer rotating ring 1 */}
        <div 
          className="absolute inset-0 rounded-full border-2 border-primary/40"
          style={{ 
            animation: 'spin 15s linear infinite',
          }}
        />
        
        {/* Outer rotating ring 2 - reverse */}
        <div 
          className="absolute inset-3 rounded-full border border-primary/30"
          style={{ 
            animation: 'spin 12s linear infinite reverse',
          }}
        />
        
        {/* Outer rotating ring 3 - dashed */}
        <div 
          className="absolute inset-6 rounded-full border-2 border-dashed border-primary/20"
          style={{ 
            animation: 'spin 20s linear infinite',
          }}
        />

        {/* Inner glowing sphere */}
        <div 
          className="absolute inset-10 rounded-full"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, hsl(195 100% 80% / 0.9) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, hsl(195 80% 50% / 0.5) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, hsl(195 100% 55%) 0%, hsl(200 90% 35%) 50%, hsl(210 80% 15%) 100%)
            `,
            boxShadow: `
              inset 0 0 40px hsl(195 100% 60% / 0.5),
              0 0 60px hsl(195 100% 60% / 0.4),
              0 0 100px hsl(195 100% 60% / 0.2)
            `,
          }}
        >
          {/* Glass highlight */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 60%)',
            }}
          />
        </div>

        {/* Inner rotating circle with GK */}
        {showInitials && (
          <div 
            className="absolute inset-12 rounded-full flex items-center justify-center"
            style={{
              animation: 'spin 8s linear infinite',
              background: 'radial-gradient(circle, hsl(195 100% 60% / 0.1) 0%, transparent 70%)',
            }}
          >
            {/* Inner decorative ring */}
            <div 
              className="absolute inset-2 rounded-full border border-primary/50"
            />
            
            {/* GK Text - counter-rotate to stay readable */}
            <span 
              className="text-5xl md:text-6xl font-display font-black z-10 tracking-wide"
              style={{
                animation: 'spin 8s linear infinite reverse',
                background: 'linear-gradient(135deg, hsl(195 100% 85%), hsl(195 100% 65%), hsl(200 90% 55%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px hsl(195 100% 60% / 0.6))',
                textShadow: '0 0 30px hsl(195 100% 60% / 0.8)',
              }}
            >
              GK
            </span>
          </div>
        )}

        {/* Orbiting particles */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full"
            style={{
              background: 'hsl(195 100% 70%)',
              animation: `orbit ${5 + i * 1.5}s linear infinite`,
              animationDelay: `${i * -1}s`,
              boxShadow: '0 0 10px hsl(195 100% 60% / 0.8), 0 0 20px hsl(195 100% 60% / 0.4)',
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
            animation: `floating ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: '0 0 8px hsl(195 100% 60% / 0.8)',
          }}
        />
      ))}
    </div>
  );
};

export default ThreeDOrb;
