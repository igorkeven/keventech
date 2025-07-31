import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

// 1. Importe a imagem do seu projeto que está na pasta assets
import erpImage from '@/assets/erp.jpeg'; 
import pitagorasImage from '@/assets/pitagoras.png';
import primeCarImage from '@/assets/primecar.png';


const PortfolioSection = () => {
  const projects = [
    {
      title: 'Sistema ERP Empresarial',
      category: 'Web Application',
      description: 'Sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e relatórios avançados.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'React'],
      image: erpImage,
      liveUrl: '#', // <-- Coloque o link do projeto online aqui
      githubUrl: '#', // <-- Coloque o link do GitHub aqui
      status: 'Em Produção',
      results: '40% aumento na produtividade'
    },
    {
      title: 'App de mobilidade Multiplataforma',
      category: 'Mobile App',
      description: 'Aplicativo de mobilidade com interface moderna, sistema de pagamento integrado e tracking em tempo real.',
      technologies: ['Flutter', 'Python', 'SQLIte', 'Firebase'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.igor.amaba',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      status: 'Lançado',
      results: 'Melhora significativa na experiência do usuário'
    },
    {
      title: 'E-commerce B2B Avançado',
      category: 'E-commerce',
      description: 'Plataforma de vendas B2B com catálogo inteligente, sistema de cotações e integração com ERPs.',
      technologies: ['React', 'Node.js', 'MySQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      status: 'Em Desenvolvimento',
      results: 'R$ 2M+ em vendas projetadas'
    },
    {
      title: 'API de Integração Financeira',
      category: 'Backend API',
      description: 'API robusta para integração com múltiplos bancos e processamento de transações em tempo real.',
      technologies: ['Python', 'FastAPI', 'Redis', 'Docker'],
      // liveUrl: '#', // Pode omitir se não houver link ao vivo (ex: só API)
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      status: 'Produção',
      results: '99.9% de uptime'
    },
   {
  title: 'Site de Revenda de Veículos - Prime Car',
  category: 'E-commerce de Veículos',
  description: 'Plataforma de e-commerce para uma revenda de veículos, com catálogo de estoque dinâmico, filtros de busca, simulação de financiamento e páginas de detalhes para cada automóvel.',
  technologies: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
  liveUrl: 'https://primecarautomoveis.netlify.app/',
 
  image: primeCarImage,
  status: 'Concluído & Lançado',
  results: 'Digitalização completa do estoque, gerando leads qualificados através de simulações de financiamento.'
},
  {
  title: 'Landing Page Pitágoras Barbearia',
  category: 'Website Institucional',
  description: 'Landing page moderna e responsiva para uma barbearia, com foco em agendamentos. Inclui status de funcionamento dinâmico, links diretos para WhatsApp e um modal interativo de horários.',
  technologies: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Lucide React'],
  liveUrl: 'https://pitagorasbarbearia.netlify.app', 
  githubUrl: 'https://github.com/igorkeven/pitagoras-barbearia-guaramirim', 
  image: pitagorasImage,
  status: 'Concluído & Lançado',
  results: 'Presença online profissional que facilitou o agendamento de clientes.'
}
  ];

  return (
    <section id="portfolio" className="section-padding bg-card/20">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Portfólio
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Projetos que <span className="text-gradient">Geram Resultados</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma seleção dos meus trabalhos mais recentes, demonstrando expertise 
              técnica e foco em resultados empresariais concretos.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-tech group overflow-hidden hover:scale-105 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant={project.status === 'Em Produção' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-primary font-medium mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <p className="text-sm font-medium text-primary">
                      📈 {project.results}
                    </p>
                  </div>

                  {/* Actions */}
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
                <h3 className="text-2xl font-bold text-foreground">
                  Gostou dos resultados?
                </h3>
                <p className="text-muted-foreground text-center">
                  Estes são apenas alguns exemplos. Tenho muito mais projetos 
                  e cases de sucesso para compartilhar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="btn-primary group"
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Conversar sobre seu Projeto
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" className="group">
                    Ver Todos os Projetos
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
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