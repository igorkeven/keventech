import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Smartphone, 
  Server, 
  Database, 
  Zap, 
  Shield,
  ArrowRight,
  Code,
  Settings,
  Users
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      subtitle: 'Front-end & Back-end',
      description: 'Sites responsivos, e-commerces e aplicações web completas com tecnologias modernas e performance otimizada.',
      features: ['React/Next.js', 'Node.js/Python', 'SEO Otimizado', 'Performance'],
      color: 'primary'
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      subtitle: 'Flutter & React Native',
      description: 'Apps nativos e híbridos para iOS e Android com interface intuitiva e funcionalidades avançadas.',
      features: ['UI/UX Moderno', 'Multiplataforma', 'Offline First', 'Push Notifications'],
      color: 'secondary'
    },
    {
      icon: Server,
      title: 'APIs & Microserviços',
      subtitle: 'Arquitetura Escalável',
      description: 'APIs RESTful robustas e microserviços para integração entre sistemas e escalabilidade empresarial.',
      features: ['REST/GraphQL', 'Documentação', 'Segurança', 'Monitoramento'],
      color: 'primary'
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      subtitle: 'Gestão & Otimização',
      description: 'Modelagem, otimização e migração de bancos de dados para máxima eficiência e confiabilidade.',
      features: ['MySQL/PostgreSQL', 'MongoDB', 'Backup/Recovery', 'Performance Tuning'],
      color: 'secondary'
    },
    {
      icon: Shield,
      title: 'Segurança & Deploy',
      subtitle: 'Infraestrutura Segura',
      description: 'Implementação de segurança avançada e deploy automatizado em infraestrutura cloud moderna.',
      features: ['SSL/HTTPS', 'CI/CD', 'Cloud Deploy', 'Backup Automático'],
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Consultoria Técnica',
      subtitle: 'Estratégia & Mentoria',
      description: 'Consultoria personalizada para otimização de processos, arquitetura de software e crescimento técnico.',
      features: ['Code Review', 'Arquitetura', 'Best Practices', 'Team Training'],
      color: 'secondary'
    }
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Serviços
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O que eu <span className="text-gradient">Desenvolvo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluções tecnológicas completas para impulsionar seu negócio. 
              Da concepção ao lançamento, com qualidade profissional.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-tech group hover:scale-105 transition-all duration-500"
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  service.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary/10 text-secondary'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${
                  service.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`}>
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-tech max-w-2xl mx-auto tech-border">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Pronto para começar seu projeto?
                </h3>
                <p className="text-muted-foreground text-center">
                  Vamos conversar sobre suas necessidades e criar a solução perfeita 
                  para o seu negócio.
                </p>
                <Button 
                  className="btn-primary group"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;