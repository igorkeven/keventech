import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, Github, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import heroTechBg from '@/assets/hero-tech-bg.jpg';

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroTechBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/50 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-secondary/50 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-slide-up">
            <span className="text-sm font-medium text-primary">
              🚀 Transformando negócios através da tecnologia
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Keven Tech</span>
            <br />
            <span className="text-foreground">Soluções Tecnológicas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up">
            Desenvolvimento de Software Sob Medida
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in">
            Desenvolvemos sistemas, sites e aplicativos sob medida que impulsionam 
            o crescimento dos negócios. Tecnologia que transforma ideias em resultados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              className="btn-primary group"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              className="btn-secondary group"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nossos Projetos
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 rounded-full border border-border hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 hover:scale-110 hover:shadow-glow-primary group"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        
      </div>
      {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;