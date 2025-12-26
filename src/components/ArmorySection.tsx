import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Wind,
  Layers,
  Search,
  Terminal,
  Cloud,
  Code2,
  Box
} from 'lucide-react';
import GlassCard from './ui/GlassCard';

const ArmorySection = () => {
  const tools = [
    { name: "Claude Code", category: "Agentic Dev", Icon: Brain, color: "text-orange-400", desc: "My primary synthetic engineer." },
    { name: "Cursor AI", category: "IDE Sync", Icon: Code2, color: "text-cyan-400", desc: "Elite orchestration & speed." },
    { name: "Windsurf", category: "IDE Sync", Icon: Wind, color: "text-blue-400", desc: "The intelligent developer flow." },
    { name: "Ollama", category: "Local LLMs", Icon: Box, color: "text-purple-400", desc: "Private, on-prem inference." },
    { name: "Gemini 2.0 Flash", category: "Multimodal", Icon: Zap, color: "text-red-400", desc: "Long-context architecture analysis." },
    { name: "v0.dev", category: "UI Synthesis", Icon: Layers, color: "text-pink-400", desc: "Instant visual component generation." },
    { name: "OpenAI o1", category: "Reasoning", Icon: Cpu, color: "text-green-400", desc: "Complex logic & algorithm design." },
    { name: "Groq", category: "Inference", Icon: Zap, color: "text-yellow-400", desc: "LPU accelerated real-time response." },
    { name: "Perplexity", category: "Intelligence", Icon: Search, color: "text-blue-300", desc: "Real-time tech stack research." },
    { name: "GitHub Copilot", category: "Autocomplete", Icon: Terminal, color: "text-white", desc: "Secondary pair programming." },
    { name: "Replicate", category: "Model Hosting", Icon: Cloud, color: "text-white/60", desc: "Deploying custom AI models." },
    { name: "LangChain", category: "Framework", Icon: Layers, color: "text-teal-400", desc: "Autonomous agent chaining." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="armory" className="relative py-32 px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(112,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(112,0,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
            01_The Armory
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient glow-text">AI ARSENAL.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Every build is supported by a high-frequency selection of autonomous tools.
            I build <span className="text-primary">with agents</span>, <span className="text-accent">for agents</span>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {tools.map((tool) => (
            <motion.div key={tool.name} variants={itemVariants}>
              <GlassCard className="p-5 h-full">
                <div className={`${tool.color} mb-3`}>
                  <tool.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{tool.name}</h3>
                <p className="text-xs font-mono text-primary mb-2">{tool.category}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArmorySection;
