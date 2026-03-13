import ThreeDOrb from '../ThreeDOrb';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-12 text-center">
          {/* 3D Orb with GK initials - positioned above text */}
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <ThreeDOrb showInitials={true} />
          </div>

          {/* Text Content - added more top margin for spacing */}
          <div className="z-10 mt-8">
            <p className="text-primary font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Hello, I'm
            </p>
            <h1 
              className="text-5xl md:text-7xl font-display font-bold mb-4 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="text-gradient">GOWRI K</span>
            </h1>
            <h2 
              className="text-2xl md:text-3xl text-muted-foreground font-light mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.8s' }}
            >
              Frontend Developer & UI/UX Designer
            </h2>
            <p 
              className="text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10 animate-fade-in-up"
              style={{ animationDelay: '1s' }}
            >
              Crafting pixel-perfect interfaces and seamless user experiences 
              with modern web technologies and creative design thinking.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up mb-24"
              style={{ animationDelay: '1.2s' }}
            >
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-primary-foreground"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - centered */}
      <div className="w-full flex justify-center">
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-12 text-primary animate-bounce cursor-pointer flex flex-col items-center"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
