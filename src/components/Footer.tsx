import { Code, Zap, ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { href: '#empresa', label: 'Empresa' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#contato', label: 'Contato' },
  ];

  const services = [
    { href: '#', label: 'Desenvolvimento Web' },
    { href: '#', label: 'Apps Mobile' },
    { href: '#', label: 'APIs & Backend' },
    { href: '#', label: 'Banco de Dados' },
    { href: '#', label: 'ERP-Planejamento de Recursos Empresariais' },
    { href: '#', label: 'Consultoria Técnica' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={logo} 
                  alt="Keven Tech Logo" 
                  className="h-10 w-auto"
                />
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Empresa especializada em desenvolvimento de software sob medida. 
                Transformamos ideias em soluções tecnológicas que impulsionam 
                o crescimento dos negócios há mais de 5 anos.
              </p>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">
                    Disponível para novos projetos
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    Resposta em até 24h
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Serviços
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                © 2024 Keven Tech. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <span>Feito com</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>e muito</span>
                <Code className="h-4 w-4 text-primary" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <a 
                  href="https://keventechacademy.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Keven Tech Academy
                </a>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;