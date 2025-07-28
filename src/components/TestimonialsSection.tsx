import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import douglas from '@/assets/douglasAMABA.jpg';


const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'CEO, TechCorp',
      company: 'TechCorp Solutions',
      content: 'Igor entregou nosso sistema ERP 2 semanas antes do prazo. A qualidade do código e a atenção aos detalhes foram excepcionais. Nosso faturamento aumentou 40% após a implementação.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Douglas ',
      role: 'Presidente e fundador',
      company: 'AMABA',
      content: 'O app de mobilidade que Igor desenvolveu superou todas as expectativas. Interface intuitiva, performance excelente e integração perfeita com nossos sistemas. Recomendo sem hesitar.',
      rating: 5,
      avatar: `${douglas}`
    },
    {
      name: 'Roberto Costa',
      role: 'Fundador',
      company: 'StartupX',
      content: 'Igor não é apenas um desenvolvedor, é um parceiro estratégico. Sua visão técnica e business nos ajudou a evitar armadilhas e acelerar nosso crescimento. Profissional excepcional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Marina Oliveira',
      role: 'Product Manager',
      company: 'DigitalFlow',
      content: 'A API que Igor desenvolveu processa milhares de transações por segundo sem falhas. O nível de documentação e testes é impressionante. Definitivamente um expert em seu campo.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Depoimentos
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O que dizem meus <span className="text-gradient">Clientes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A satisfação dos clientes é minha maior prioridade. Veja alguns 
              depoimentos de empresas que transformaram seus negócios comigo.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-tech group hover:scale-105 transition-all duration-500 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-2 -right-2 p-2 bg-primary/10 rounded-full">
                  <Quote className="h-5 w-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="card-tech max-w-4xl mx-auto tech-border">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Projetos Entregues no Prazo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24h</div>
                  <div className="text-sm text-muted-foreground">Tempo Médio de Resposta</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">5★</div>
                  <div className="text-sm text-muted-foreground">Avaliação Média</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;