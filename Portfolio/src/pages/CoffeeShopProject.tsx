import { ArrowLeft, Coffee, Target, AlertTriangle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';

const CoffeeShopProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      
      {/* Background gradient overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-card mb-8">
              <Coffee className="w-10 h-10 text-primary" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400">
                UI/UX Design
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 mt-6">
              <span className="text-gradient">Coffee Shop App UI/UX</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete UI/UX design for a modern coffee shop application
            </p>
          </div>

          {/* Project Image Placeholder */}
          {/* Project Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-video rounded-2xl glass-card overflow-hidden">
              <img
              src="/coffeeShopImg.png"
              alt="Shopping Mall Project"
              className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* The Goal */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-display font-bold">The Goal</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The goal of the Coffee Shop Mobile App UI was to design a visually appealing and user-friendly mobile application interface that enhances the coffee ordering experience. The focus was on creating an intuitive user flow, clear navigation, and an engaging design that reflects a modern coffee brand, using Figma as the primary UI/UX design tool.
              </p>
            </div>

            {/* The Challenges */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-display font-bold">The Challenges</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Designing a complete mobile app UI with consistent visual language across all screens.',
                  'Creating smooth and logical user flows from browsing the menu to placing an order.',
                  'Maintaining design consistency in colors, typography, icons, and spacing.',
                  'Balancing aesthetic appeal and usability to ensure a clean and clutter-free interface.',
                  'Designing interactive elements and layouts suitable for different mobile screen sizes.',
                ].map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* The Result */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-2xl font-display font-bold">The Result</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Delivered a fully designed Coffee Shop mobile app UI using Figma.',
                  'Created well-structured screens including onboarding, menu browsing, product details, cart, and order confirmation.',
                  'Achieved a modern, user-centric design with consistent components and reusable design elements.',
                  'Improved overall user experience through clear navigation, readable layouts, and engaging visuals.',
                  'The final UI effectively represents a real-world coffee shop app and showcases strong UI/UX design and prototyping skills.',
                ].map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-6">Design Tools & Skills</h2>
              <div className="flex flex-wrap gap-3">
                {['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Wireframing', 'Design System'].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full glass-card text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Back to Projects Button */}
          <div className="text-center mt-16 pb-16">
            <button
              onClick={() => navigate('/')}
              className="btn-primary text-primary-foreground"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeShopProject;
