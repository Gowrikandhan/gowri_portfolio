import { Sparkles, Briefcase, Code } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Code, value: '10+', label: 'Skills' },
    { icon: Briefcase, value: '2+', label: 'Projects' },
    { icon: Sparkles, value: '100%', label: 'Dedication' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
              <div className="absolute -inset-2 rounded-3xl border-2 border-primary/20 rotate-6" />
              <div className="absolute -inset-2 rounded-3xl border-2 border-accent/20 -rotate-6" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden glass-card">
                <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
                />
              </div>

              {/* Availability badge */}
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="section-title">About Me</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a passionate Frontend Developer and UI/UX Designer with a keen eye for 
              creating beautiful, functional, and user-centered digital experiences. 
              With expertise in modern web technologies and design tools, I bridge the 
              gap between design and development to deliver exceptional products.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My journey in tech has equipped me with a diverse skill set spanning from 
              crafting responsive interfaces with React to designing intuitive user flows 
              in Figma. I'm constantly learning and adapting to new technologies to stay 
              at the forefront of web development.
            </p>

            {/* Stats - Fixed for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-gradient whitespace-nowrap">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
                Get Connected
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
