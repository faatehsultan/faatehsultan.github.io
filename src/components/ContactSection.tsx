import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="text-gradient glow-text">LET'S BUILD.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to synthesize something extraordinary?
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {/* Email - Featured */}
          <a 
            href="mailto:faatehsultan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3"
          >
            <GlassCard className="p-8 flex flex-col items-center gap-4 border-primary/20 group cursor-pointer">
              <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Email Protocol
              </span>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                faatehsultan@gmail.com
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </span>
            </GlassCard>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/faatehsultankazmi"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-1"
          >
            <GlassCard className="p-6 flex flex-col items-center gap-3 group cursor-pointer h-full">
              <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Professional Log
              </span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                faatehsultankazmi
              </span>
            </GlassCard>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/faatehsultan"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2"
          >
            <GlassCard className="p-6 flex flex-col items-center gap-3 group cursor-pointer h-full">
              <Github className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Public Repository
              </span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                github.com/faatehsultan
              </span>
            </GlassCard>
          </a>
        </motion.div>

        {/* Location & Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <p className="text-sm text-muted-foreground">
            Based in <span className="text-foreground font-medium">Lahore</span>, shipping worldwide 🌍
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
