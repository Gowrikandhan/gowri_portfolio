import { ArrowLeft, MessageCircle, Target, AlertTriangle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';


const SyncSpace = () => {
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
            type="button"
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
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400">
                Web Development
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 mt-6">
              <span className="text-gradient">
                SyncSpace
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A real-time communication and collaboration platform
            </p>
          </div>


          {/* Project Image Placeholder */}
          {/* Project Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-video rounded-2xl glass-card overflow-hidden">
              <img
                src="/syncSpaceImg.png"
                alt="SyncSpace Real-Time Communication App"
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
                <h2 className="text-2xl font-display font-bold">
                  The Goal
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                The primary goal of SyncSpace was to design and develop a real-time communication platform that enables users to exchange instant messages, collaborate seamlessly, and stay connected through a secure and responsive application. The system aims to provide a smooth communication experience with real-time updates, an intuitive user interface, and a scalable backend architecture.
              </p>
            </div>


            {/* The Challenges */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-display font-bold">
                  The Challenges
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  'Designing a responsive and intuitive communication interface for different screen sizes.',
                  'Implementing real-time messaging and instant updates between users.',
                  'Managing private and group conversations while maintaining smooth communication.',
                  'Building secure user authentication and protecting user communication data.',
                  'Ensuring reliable real-time communication and scalable backend performance.',
                ].map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
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
                <h2 className="text-2xl font-display font-bold">
                  The Result
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  'Successfully developed a functional real-time communication platform with a modern and responsive interface.',
                  'Delivered seamless instant messaging and real-time communication between users.',
                  'Implemented private and group conversations with efficient message management.',
                  'Provided secure user authentication and a reliable communication experience.',
                  'The final system demonstrated strong web development skills in building interactive and real-time applications.',
                ].map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>


            {/* Technologies Used */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-6">
                Technologies Used
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  'React',
                  'TypeScript',
                  'Node.js',
                  'Express.js',
                  'Socket.io',
                  'CSS'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full glass-card text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>


          {/* Back to Projects Button */}
          <div className="text-center mt-16 pb-16">
            <button
              type="button"
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


export default SyncSpace;