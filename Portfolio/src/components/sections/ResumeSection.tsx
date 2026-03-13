import { useState } from 'react';
import { Download, Award, GraduationCap, Briefcase, Star } from 'lucide-react';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

const internships: TimelineItem[] = [
  {
    title: 'Web Developer Intern',
    organization: 'Lemeniz Technologies Private Limited.',
    period: 'July 2024',
    description: 'Developed responsive web applications using React and collaborated with UI/UX team to implement design systems.',
  },
  {
    title: 'UI/UX Design Intern',
    organization: 'Cognifyz Technologies',
    period: 'Dec 2025 - Jan 2026',
    description: 'Created user interfaces and prototypes in Figma, conducted user research, and improved design workflows.',
  },
];

const education: TimelineItem[] = [
  {
    title: 'Bachelor of Computer Science and Engineering',
    organization: 'IFET College of Engineering',
    period: '2022 - 2026',
    description: 'Specialized in Building Scalable Web Applications with User-Centered UI/UX Design.',
  },
];

const certifications: TimelineItem[] = [
  {
    title: '30 Days MasterClass in UI/UX Design',
    organization: 'NoviTech R&D Private Limited',
    period: '2025',
    description: 'Professional certification in UI/UX Design, covering user research, wireframing, prototyping, usability principles, and industry best practices.',
  },
  {
    title: 'Intro to Graphic design with photoshop',
    organization: 'Great Learning',
    period: '2025',
    description: 'Certification in Graphic Design with Photoshop, emphasizing creative layout design, image retouching, visual storytelling, and industry-standard editing techniques.',
  },
  {
    title: 'Create and Design Digital Products using Canva',
    organization: 'Coursera',
    period: '2025',
    description: 'Advanced training in Digital Product Design using Canva, emphasizing creative asset development, brand consistency, and impactful visual communication strategies.',
  },
  {
    title: 'Python app using ChatGPT',
    organization: 'Great Learning',
    period: '2024',
    description: 'Practical training in building Python applications with ChatGPT, covering AI integration, prompt engineering, API usage, and intelligent automation solutions.',
  },
  {
    title: 'Python Zero to Hero',
    organization: 'Guvi',
    period: '2024',
    description: 'Comprehensive training in Python programming from fundamentals to advanced concepts, covering data structures, OOP, file handling, and real-world application development.',
  },
  {
    title: 'Generative AI',
    organization: 'Guvi',
    period: '2024',
    description: 'Specialized certification in Generative AI, covering model architectures, creative AI workflows, prompt engineering techniques, and responsible AI practices.',
  },
  {
    title: 'Introduction to Networks',
    organization: 'Cisco Networking Academy',
    period: '2024',
    description: 'Foundational course in Computer Networks, covering networking fundamentals, OSI and TCP/IP models, routing and switching concepts, IP addressing, and network security basics.',
  },

];

const highlights = [
  'Frontend Development Expert',
  'UI/UX Design Specialist',
  'Full Stack Capable',
  'Design System Creator',
];

type TabType = 'intern' | 'education' | 'certification';

const tabConfig = {
  intern: { label: 'Internships', icon: Briefcase, items: internships },
  education: { label: 'Education', icon: GraduationCap, items: education },
  certification: { label: 'Certifications', icon: Award, items: certifications },
};

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('intern');

  const activeConfig = tabConfig[activeTab];
  const ActiveIcon = activeConfig.icon;

  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Resume</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional journey, education, and certifications that have shaped 
            my expertise in frontend development and design.
          </p>
          
          {/* Download Button */}
          <a
          href="/resume.pdf"
          download="resume.pdf"
          className="btn-primary text-primary-foreground inline-flex items-center gap-2 mb-12"
          >
            <Download size={20} />
            Download Resume
            </a>
        </div>

        {/* Key Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="glass-card px-6 py-3 flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Star className="w-4 h-4 text-primary" />
              <span className="font-medium">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(tabConfig) as TabType[]).map((tab) => {
            const config = tabConfig[tab];
            const Icon = config.icon;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30'
                    : 'glass-card text-muted-foreground hover:text-foreground hover:scale-105'
                }`}
              >
                <Icon className="w-5 h-5" />
                {config.label}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

            {/* Timeline items */}
            <div className="space-y-8">
              {activeConfig.items.map((item, index) => (
                <div 
                  key={index}
                  className="relative pl-20 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="absolute left-4 w-8 h-8 rounded-full glass-card flex items-center justify-center border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
                    <ActiveIcon className="w-4 h-4 text-primary" />
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm text-primary px-3 py-1 rounded-full bg-primary/10">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-2">{item.organization}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
