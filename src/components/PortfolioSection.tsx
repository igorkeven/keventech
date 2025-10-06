// src/components/PortfolioSection.tsx
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // <-- importe useNavigate
import type { Project } from '@/data/projects';

type Props = {
  projects: Project[];
  showHeader?: boolean;
  showViewAll?: boolean;
};

const PortfolioSection = ({ projects, showHeader = true, showViewAll = true }: Props) => {
  const navigate = useNavigate(); // <-- crie o navigate

  // <-- COPIE A FUNÇÃO AQUI
  const goToSection = (hash: string) => {
    const id = hash.replace('#', '');

    const scrollTo = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const HEADER_OFFSET = 80; // ajuste se seu header for maior/menor
      const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    if (window.location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(scrollTo, 80); // dá tempo da Home montar
    } else {
      scrollTo();
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-card/20">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {showHeader && (
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">Portfólio</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Projetos que <span className="text-gradient">Geram Resultados</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Uma seleção dos meus trabalhos mais recentes, demonstrando expertise 
                técnica e foco em resultados empresariais concretos.
              </p>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="card-tech group overflow-hidden hover:scale-105 transition-all duration-500">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img src={project.image} alt={project.title}
                       className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                       loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3">
                    <Badge variant={project.status === 'Em Produção' ? 'default' : 'secondary'} className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>

                  {project.results && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                      <p className="text-sm font-medium text-primary">📈 {project.results}</p>
                    </div>
                  )}

                  <div className="flex items-center space-x-2 pt-2">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" variant="outline" className="w-full group/btn">
                          <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                          Ver Projeto
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="group/btn" aria-label="Ver código no GitHub">
                          <Github className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-tech max-w-2xl mx-auto tech-border">
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Gostou dos resultados?</h3>
                <p className="text-muted-foreground text-center">
                  Estes são apenas alguns exemplos. Tenho muito mais projetos e cases de sucesso para compartilhar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary group" onClick={() => goToSection('#contato')}>
                    Conversar sobre seu Projeto
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  {showViewAll && (
                    <Link to="/projetos" className="w-full sm:w-auto">
                      <Button variant="outline" className="group w-full sm:w-auto">
                        Ver Todos os Projetos
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
