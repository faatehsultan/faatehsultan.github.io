import { useState } from 'react';
import { Code2, Database, Cloud, Bot, Layers, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  color: string;
  skills: Skill[];
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories: SkillCategory[] = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'from-primary to-cyan-400',
      skills: [
        { name: 'TypeScript', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      icon: Layers,
      title: 'Frontend',
      color: 'from-blue-400 to-primary',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Socket.io', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'from-accent to-pink-400',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'Express.js', level: 90 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps',
      color: 'from-orange-400 to-amber-400',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'GCP', level: 75 },
      ],
    },
    {
      icon: Bot,
      title: 'AI/ML',
      color: 'from-primary to-accent',
      skills: [
        { name: 'OpenAI API', level: 95 },
        { name: 'Claude API', level: 90 },
        { name: 'LangChain', level: 85 },
        { name: 'Prompt Engineering', level: 95 },
      ],
    },
    {
      icon: Terminal,
      title: 'Tools',
      color: 'from-emerald-400 to-primary',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'RabbitMQ', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-accent/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-6">
            <Terminal className="w-4 h-4" />
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Skills & </span>
            <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-primary text-primary-foreground glow-box'
                  : 'glass hover:bg-card/60 text-muted-foreground hover:text-foreground'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl glass">
            <div className="flex items-center gap-3 mb-8">
              {(() => {
                const Icon = categories[activeCategory].icon;
                return <Icon className="w-6 h-6 text-primary" />;
              })()}
              <h3 className="text-2xl font-semibold text-foreground">
                {categories[activeCategory].title}
              </h3>
            </div>

            <div className="space-y-6">
              {categories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm font-mono text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${categories[activeCategory].color} transition-all duration-1000 ease-out`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Tech Tags */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {['MERN Stack', 'AI Agents', 'Microservices', 'Real-time Systems', 'Cloud Native', 'Gen-AI'].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full glass text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
