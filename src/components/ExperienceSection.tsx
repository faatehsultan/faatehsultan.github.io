import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import Badge from './ui/CustomBadge';

interface Job {
  role: string;
  company: string;
  time: string;
  desc: string;
  isCurrent?: boolean;
}

const ExperienceSection = () => {
  const resumeSkills = [
    "React", "Node.js", "Python", "Django", "GraphQL", 
    "SaaS", "AWS", "DevOps", "Docker", "TypeScript", 
    "Flask", "gRPC", "CI/CD"
  ];

  const jobs: Job[] = [
    {
      role: "AI-First Software Engineer II",
      company: "Trilogy (by Crossover)",
      time: "2025 - Present",
      desc: "Architecting autonomous agents for ticket resolution. Mastering agentic pipelines.",
      isCurrent: true
    },
    {
      role: "Lead Software Engineer",
      company: "Fair Inc (UK)",
      time: "2025",
      desc: "Built vehicle claim systems and AI extraction engines using OpenAI & on-prem models."
    },
    {
      role: "Software Engineer E2",
      company: "Educative",
      time: "2024",
      desc: "Managed platform vertical executions, cloud labs, and AI-powered internal knowledge systems."
    },
    {
      role: "Software Engineer E1",
      company: "Arbisoft",
      time: "2022 - 2023",
      desc: "Spearheaded Chatly (Gen-AI SaaS) and automated onboarding for ed-tech platforms."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Header + Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
              02_Chronicles
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8">
              <span className="text-foreground">THE</span>
              <br />
              <span className="text-gradient glow-text">HISTORY.</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              {resumeSkills.map((skill) => (
                <Badge key={skill} color="cyan">{skill}</Badge>
              ))}
            </div>
          </motion.div>

          {/* Right: Jobs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            {jobs.map((job, idx) => (
              <motion.div key={job.company} variants={itemVariants}>
                <GlassCard className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{job.role}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {job.isCurrent && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                      )}
                      <span className="text-xs font-mono text-muted-foreground">{job.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{job.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
