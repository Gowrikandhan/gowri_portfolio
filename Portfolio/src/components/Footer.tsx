import { Linkedin, Github, Mail } from 'lucide-react';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: 'https://linkedin.com/in/gowrikandhan',
  },
  { 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com/gowrikandhan',
  },
  { 
  name: 'Email', 
  icon: Mail, 
  url: 'mailto:gowrikandhan9@gmail.com',
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
            key={link.name}
            href={link.url}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
              </a>
            ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-muted-foreground text-sm">
            © {currentYear} GOWRI K. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Frontend Developer & UI/UX Designer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
