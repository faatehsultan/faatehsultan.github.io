import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Cloud, Bot, Layers, Terminal } from 'lucide-react';
import GlassCard from './ui/GlassCard';

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
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-accent/5 to-transparent blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
            03_Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            <span className="text-foreground">SKILLS & </span>
            <span className="text-gradient glow-text">TECH.</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
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
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-8 max-w-2xl mx-auto" hover={false}>
              <div className="flex items-center gap-3 mb-8">
                {(() => {
                  const Icon = categories[activeCategory].icon;
                  return <Icon className="w-6 h-6 text-primary" />;
                })()}
                <h3 className="text-2xl font-bold text-foreground">
                  {categories[activeCategory].title}
                </h3>
              </div>

              <div className="space-y-6">
                {categories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${categories[activeCategory].color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* Quick Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
