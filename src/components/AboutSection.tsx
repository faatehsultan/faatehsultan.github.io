import { motion } from 'framer-motion';
import { Rocket, Timer, Sparkles, Zap } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Content */}
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4 block">
              00_The Sprint Manifesto
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8">
              <span className="text-foreground">FROM IDEA</span>
              <br />
              <span className="text-foreground">TO SHIP IN</span>
              <br />
              <span className="text-gradient glow-text">24 HOURS.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bring me your vision. I will architect, develop, and deploy a high-fidelity 
              functional prototype in less than 24 hours. This isn't a promise—it's my 
              <span className="text-primary font-semibold"> standard operating procedure</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Ultra Speed</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass">
                <Rocket className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Production Ready</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8 relative" hover={false}>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20 animate-gradient bg-[length:200%_100%]" />
              </div>
              
              <div className="relative flex flex-col items-center text-center">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 30px hsl(175 100% 50% / 0.3)',
                      '0 0 60px hsl(175 100% 50% / 0.5)',
                      '0 0 30px hsl(175 100% 50% / 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
                >
                  <Timer className="w-12 h-12 text-primary-foreground" />
                </motion.div>
                
                <div className="text-7xl font-black text-gradient mb-2">24H</div>
                <div className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                  DEPLOYMENT_WINDOW
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3+', label: 'Years Shipping' },
            { value: '50+', label: 'Projects Deployed' },
            { value: '∞', label: 'Coffee Consumed' },
            { value: '0', label: 'Bugs in Prod (jk)' },
          ].map((stat, idx) => (
            <GlassCard key={stat.label} className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
