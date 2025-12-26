import { Bot, Brain, Code2, Rocket, Sparkles, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Bot,
      title: 'AI Agent Architect',
      description: 'Building autonomous agents that handle complex tasks without human intervention',
    },
    {
      icon: Brain,
      title: 'Prompt Engineer',
      description: 'Mastering context engineering and few-shot techniques for optimal AI performance',
    },
    {
      icon: Zap,
      title: 'Full-Stack Dev',
      description: 'MERN, Python, and cloud-native architectures that scale',
    },
    {
      icon: Rocket,
      title: 'Tech Lead',
      description: 'Leading teams, mentoring engineers, and driving technical strategy',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="text-gradient">AI-First</span>
            <span className="text-foreground"> Developer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I don't just use AI—I build with it, for it, and sometimes against it when debugging. 
            From autonomous agents to full-stack platforms, I'm obsessed with pushing what's possible 
            in AI-assisted development.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-2xl glass hover:bg-card/60 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border" />
              
              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Stat */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              <span className="text-foreground font-semibold">3+ years</span> of shipping production code
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              <span className="text-foreground font-semibold">∞</span> cups of coffee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
