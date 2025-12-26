import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => (
  <motion.div
    whileHover={hover ? { scale: 1.02, y: -4 } : {}}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={cn(
      "relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 backdrop-blur-2xl",
      className
    )}
  >
    {/* Glass shine effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    
    {/* Noise texture */}
    <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
    />
    
    {children}
  </motion.div>
);

export default GlassCard;
