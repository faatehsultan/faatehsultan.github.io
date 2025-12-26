import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-gradient">FS<span className="text-primary">.</span></span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Faateh Sultan
            </span>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            <span>&</span>
            <Sparkles className="w-4 h-4 text-accent" />
            <span>using AI</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
