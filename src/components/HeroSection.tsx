import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import TypeWriter from './TypeWriter';

const HeroSection = () => {
  const roles = [
    'AI Software Engineer',
    'Full-Stack Developer',
    'AI Agent Builder',
    'Tech Lead',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-foreground">Hey, I'm </span>
          <span className="text-gradient glow-text">Faateh</span>
        </h1>

        {/* Typewriter Role */}
        <div 
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-8 h-12 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <TypeWriter texts={roles} speed={80} deleteSpeed={40} pauseDuration={2500} />
        </div>

        {/* Tagline */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up leading-relaxed"
          style={{ animationDelay: '0.4s' }}
        >
          Building the future with <span className="text-primary font-semibold">AI-first development</span>. 
          I craft autonomous agents, lead engineering teams, and ship products that scale.
        </p>

        {/* Location */}
        <div 
          className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm">Lahore, Pakistan</span>
        </div>

        {/* Social Links */}
        <div 
          className="flex items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <a 
            href="https://github.com/faatehsultan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-3 rounded-xl glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/faatehsultankazmi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-3 rounded-xl glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="mailto:faatehsultan@gmail.com"
            className="group p-3 rounded-xl glass hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in-up cursor-pointer"
          style={{ animationDelay: '0.7s' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
