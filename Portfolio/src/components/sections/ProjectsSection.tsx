import { ExternalLink, Github, ShoppingBag, Coffee, ClipboardList, MessageCircle, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  image: string;
  tags: string[];
  type: 'fullstack' | 'design' | 'web development';
  features: string[];
  route: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Shopping Mall Order Module',
    description: 'A fully functional e-commerce order management system',
    longDescription: 'End-to-end shopping mall order module featuring product browsing, cart management, checkout flow, and order tracking. Built with modern frontend technologies and a robust backend API.',
    icon: <ShoppingBag className="w-8 h-8" />,
    image: "/shoppingMallImg.png",
    tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST API', 'TypeScript'],
    type: 'fullstack',
    features: [
      'Product catalog with filtering',
      'Shopping cart functionality',
      'Secure checkout process',
      'Order tracking system',
      'Admin dashboard',
    ],
    route: '/project/shopping-mall',
    github: "https://github.com/Gowrikandhan/TNSIF_GOWRI-K",
  },
  {
    title: 'Coffee Shop App UI/UX',
    description: 'Complete UI/UX design for a modern coffee shop application',
    longDescription: 'Comprehensive UI/UX design project for a coffee shop mobile application. Designed entirely in Figma with complete user flows, interactive prototypes, and a cohesive design system.',
    icon: <Coffee className="w-8 h-8" />,
    image: "/coffeeShopImg.png",
    tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Design System'],
    type: 'design',
    features: [
      'User research & personas',
      'Information architecture',
      'Wireframes & mockups',
      'Interactive prototype',
      'Design system documentation',
    ],
    route: '/project/coffee-shop',
  },
  {
    title: 'FlowBoard Project Manager',
    description: 'A collaborative project management platform for teams',
    longDescription: 'FlowBoard Project Manager is a web development project management application that enables teams to organize projects, assign tasks, track progress, collaborate through comments, and manage workflows using an intuitive Kanban board interface. Built with modern frontend technologies and a scalable backend architecture.',
    icon: <ClipboardList className="w-8 h-8" />,
    image: "/flowBoardImg.png",
    tags: ['React', 'TypeScript','Node.js','Express.js','Tailwind CSS',],
    type: 'web development',
    features: [
        'Kanban board for task management',
        'Project and team collaboration',
        'Task assignment and progress tracking',
        'User authentication and role-based access',
        'Comments and real-time workflow updates',
    ],
    route:  '/project/flowboard-project-manager',
    github: "https://github.com/Gowrikandhan/CodeAlpha_Project-Management-Tool",
  },
  {
    title: 'SyncSpace',
    description: 'A real-time communication and collaboration platform',
    longDescription:  'SyncSpace is a web development application that enables users to exchange instant messages, collaborate in real time, and stay connected through a secure and responsive platform. The application delivers seamless communication with a modern user interface and scalable backend architecture.',
    icon: <MessageCircle className="w-8 h-8" />,
    image: "/syncSpaceImg.png",
    tags: ['React','TypeScript', 'Node.js', 'Express.js', 'Socket.io',],
    type: 'web development',
    features: [
        'Real-time messaging',
        'Private and group conversations',
        'Instant notifications',
        'User authentication and secure access',
        'Responsive communication interface',
    ],
    route:  '/project/syncspace',
    github: "https://github.com/Gowrikandhan/CodeAlpha_Real-Time-Communication-App",
  },
  {
    title: 'Nexus Social Platform',
    description: 'A modern mini social media platform for connecting users',
    longDescription:  'Nexus Social Platform is a web development application that enables users to create profiles, share posts, interact with others through likes and comments, and build connections in a secure and responsive environment. The application delivers an engaging social networking experience with a modern user interface and scalable backend architecture.',
    icon: <Users className="w-8 h-8" />,
    image: "/nexusSocialImg.png",
    tags: ['React','TypeScript', 'Node.js', 'Express.js'],
    type: 'web development',
    features: [
        'User registration and authentication',
        'Create, edit, and delete posts',
        'Like and comment on posts',
        'User profiles and social interactions',
        'Responsive and user-friendly interface',
    ],
    route:  '/project/nexus-social-platform',
    github: "https://github.com/Gowrikandhan/CodeAlpha_Mini-Social-Media-App",
  },

];

const ProjectsSection = () => {
  const navigate = useNavigate();


  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through development and design with real-world projects 
            that demonstrate both technical skills and creative problem-solving.
          </p>
        </div>


        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Preview */}
              <div className="flex-1 w-full">
                <div className="project-card aspect-video relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  
                  {/* Project icon and type badge */}
                  <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                  /> 

                  <div className="absolute top-4 right-4"> 
                      <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                          project.type === 'fullstack'
                            ? 'bg-green-500/20 text-green-400'
                            : project.type === 'web development'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-purple-500/20 text-purple-400'
                      }`}> 
                        {project.type === 'fullstack'
                            ? 'Full Stack Development'
                            : project.type === 'web development'
                            ? 'Web Development'
                            : 'UI/UX Design'}
                      </span> 
                  </div>


                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gradient">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <p className="text-muted-foreground/80 text-sm mb-6">
                  {project.longDescription}
                </p>


                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full glass-card text-primary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>


                {/* Action buttons */}
                <div className="flex gap-4">
                  {/* View Project */}
                  <button
                    type="button"
                    onClick={() => {
                      if (project.route) {
                        navigate(project.route);
                      }
                    }}
                    className="btn-primary text-primary-foreground flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Project
                  </button>

                  {/* GitHub / Source Code */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProjectsSection;
