import { ArrowUpRight, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'faatehsultan@gmail.com',
      href: 'mailto:faatehsultan@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 336 452 3139',
      href: 'tel:+923364523139',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'faatehsultan',
      href: 'https://github.com/faatehsultan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'faatehsultankazmi',
      href: 'https://linkedin.com/in/faatehsultankazmi',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-2/3 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-primary mb-6">
            <Send className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Let's </span>
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got a project idea? Want to collaborate on something cool? 
            Or just want to chat about AI and tech? Hit me up!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative p-6 rounded-2xl glass hover:bg-card/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                  <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:faatehsultan@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 glow-box hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Let's Build Something Amazing
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
