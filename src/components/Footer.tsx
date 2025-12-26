import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-border/30">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-black text-primary-foreground">
              F
            </div>
            <div>
              <span className="text-sm font-bold text-foreground">FAATEH.SULTAN</span>
              <span className="text-xs text-muted-foreground block">© {currentYear}</span>
            </div>
          </div>

          {/* Built with AI */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span>Synthesized by AI</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
