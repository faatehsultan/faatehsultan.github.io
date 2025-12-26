import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'cyan' | 'purple' | 'white' | 'orange' | 'green' | 'pink';
  className?: string;
}

const Badge = ({ children, color = "cyan", className }: BadgeProps) => {
  const colorMap = {
    cyan: "bg-primary/10 text-primary border-primary/20",
    purple: "bg-accent/10 text-accent border-accent/20",
    white: "bg-foreground/10 text-foreground border-foreground/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  };
  
  return (
    <span
      className={cn(
        "px-3 py-1.5 text-xs font-mono font-semibold tracking-wider border rounded-full uppercase",
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
