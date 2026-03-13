import { useState } from 'react';
import { 
  Globe, 
  Palette, 
  Zap, 
  Atom, 
  Triangle, 
  Server, 
  Database, 
  HardDrive, 
  GitBranch, 
  Github,
  Figma, 
  PenTool, 
  Layout, 
  MousePointer, 
  Film, 
  Users,
  Eye
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skills: Skill[] = [
  { name: 'HTML', icon: Globe },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Zap },
  { name: 'Angular', icon: Triangle },
  { name: 'Node.js', icon: Server },
  { name: 'React', icon: Atom },
  { name: 'SQL', icon: Database },
  { name: 'PostgreSQL', icon: HardDrive },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Github },
  { name: 'Figma', icon: Figma },
  { name: 'UI Design', icon: Layout },
  { name: 'UX Design', icon: Users },
  { name: 'Sketch', icon: PenTool },
  { name: 'Wireframing', icon: Eye },
  { name: 'Prototyping', icon: MousePointer },
  { name: 'Adobe Express', icon: Film },
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend development, backend technologies, 
            and UI/UX design to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="skill-card group flex flex-col items-center"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                {/* Icon */}
                <div className="text-primary mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10" />
                </div>
                
                {/* Name */}
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center text-sm">
                  {skill.name}
                </h3>

                {/* Glow effect on hover */}
                {hoveredSkill === skill.name && (
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-20 blur-xl -z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
