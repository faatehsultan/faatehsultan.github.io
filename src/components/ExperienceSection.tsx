import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'remote' | 'onsite';
  highlights: string[];
  isCurrent?: boolean;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      company: 'Fair Inc (XStack Ventures UK)',
      role: 'Lead Software Engineer',
      period: 'Jan 2025 – Present',
      location: 'United Kingdom',
      type: 'remote',
      isCurrent: true,
      highlights: [
        'Leading development, architecture, and DevOps for a vehicle claim platform',
        'Built AI service using OpenAI for data extraction from emails and documents',
        'Designed async email processing pipeline using RabbitMQ',
        'Distributed architecture to microservices and microfrontends',
      ],
    },
    {
      company: 'Trilogy (by Crossover)',
      role: 'AI-First Software Engineer II',
      period: 'Oct 2025 – Dec 2025',
      location: 'Remote',
      type: 'remote',
      highlights: [
        'Built autonomous AI agents for accessibility issue resolution',
        'Used Claude Code sub-agents for multi-agent architecture',
        'Applied prompt and context engineering for large codebases',
      ],
    },
    {
      company: 'Educative',
      role: 'Software Engineer E2',
      period: 'Jan 2024 – Dec 2024',
      location: 'Lahore, Pakistan',
      type: 'onsite',
      highlights: [
        'Full-stack work on live executions, VM provisioning, cloud labs',
        'Migrated real-time systems to Socket.io at scale',
        'Built AI-powered features for course context and knowledge base',
        'On-call support for incident triaging and hotfixes',
      ],
    },
    {
      company: 'Arbisoft',
      role: 'Software Engineer E1',
      period: 'Jul 2022 – Dec 2023',
      location: 'Lahore, Pakistan',
      type: 'onsite',
      highlights: [
        'Built client onboarding automation and freemium model for Edly',
        'Frontend development for Chatly, a Gen-AI SaaS platform',
        'Mentored interns and developed roadmaps',
        'Delivered features using React.js and Django in microservices',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-6">
            <Briefcase className="w-4 h-4" />
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Where I've </span>
            <span className="text-gradient">Built</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary glow-box md:-translate-x-1/2 -translate-x-1/2 mt-8">
                {exp.isCurrent && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className="group p-6 rounded-2xl glass hover:bg-card/60 transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    {exp.isCurrent && (
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
