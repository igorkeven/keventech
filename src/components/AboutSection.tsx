import { Badge } from '@/components/ui/badge';
import { Code2, Database, Smartphone, Globe, Server, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Python', category: 'Backend', icon: Code2 },
    { name: 'Flask/Django', category: 'Framework', icon: Server },
    { name: 'JavaScript', category: 'Frontend', icon: Globe },
    { name: 'Node.js/Express', category: 'Backend', icon: Server },
    { name: 'Flutter', category: 'Mobile', icon: Smartphone },
    { name: 'Java', category: 'Backend', icon: Code2 },
    { name: 'MySQL', category: 'Database', icon: Database },
    { name: 'SQLite', category: 'Database', icon: Database },
  ];

  const highlights = [
    { number: '5+', label: 'Anos de Experiência' },
    { number: '100+', label: 'Projetos Entregues' },
    { number: '50+', label: 'Clientes Satisfeitos' },
    { number: '24/7', label: 'Suporte Dedicado' },
  ];

  return (
    <section id="empresa" className="section-padding bg-card/20">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              A Empresa
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Keven Tech</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empresa especializada em desenvolvimento de software sob medida, 
              focada em soluções eficientes que geram resultados reais para 
              empresas de todos os tamanhos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Transformando Negócios com Tecnologia
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Keven Tech é uma empresa de desenvolvimento de software especializada 
                  em criar soluções tecnológicas que impulsionam o crescimento dos negócios. 
                  Nossa abordagem combina expertise técnica com visão estratégica empresarial.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso foco está em desenvolver sistemas robustos, sites responsivos 
                  e aplicativos mobile que não apenas funcionam perfeitamente, mas 
                  também oferecem experiências excepcionais e resultados mensuráveis.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {highlights.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {item.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Tecnologias & Especialidades
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="card-tech group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {skill.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {skill.category}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <div className="card-tech bg-primary/5 border-primary/20">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-primary animate-pulse" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        Pronto para seu projeto?
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Vamos conversar sobre suas necessidades empresariais
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;