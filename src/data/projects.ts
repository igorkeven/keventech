// centraliza os dados para reutilizar em Home e /projetos
export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status: string;
  results?: string;
};
import erpImage from '@/assets/erp.jpeg'; 
import pitagorasImage from '@/assets/pitagoras.png';
import primeCarImage from '@/assets/primecar.png';

export const projects: Project[] = [
  {
      title: 'Sistema ERP Empresarial',
      category: 'Web Application',
      description: 'Sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e relatórios avançados.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'React'],
      image: erpImage,
      liveUrl: '#',
      githubUrl: '#',
      status: 'Em Produção',
      results: '40% aumento na produtividade'
    },
    {
      title: 'App de mobilidade Multiplataforma',
      category: 'Mobile App',
      description: 'Aplicativo de mobilidade com interface moderna, sistema de pagamento integrado e tracking em tempo real.',
      technologies: ['Flutter', 'Python', 'SQLite', 'Firebase'], // <- corrigi SQLite
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
    },

    /* ====== NOVOS TRABALHOS ADICIONADOS ====== */
    {
      title: 'Auto Elite Lava Car',
      category: 'Website + Admin',
      description: 'Site institucional com vitrine de serviços, tabela de preços/promos e painel administrativo simples para atualizar conteúdos.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Firebase'],
      liveUrl: 'https://autoelitelavacar.netlify.app/',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1515922753166-9b2c87794205?w=600&h=400&fit=crop',
      status: 'Concluído & Lançado',
      results: 'Gestão simplificada de serviços e captação de leads locais.'
    },
    {
      title: 'AMABA – Portal da Associação',
      category: 'Plataforma Associativa',
      description: 'Portal para associação de motoristas com cadastro/login, vitrine de parcerias/benefícios e fluxo de associação online.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Firebase Auth', 'Firestore'],
      liveUrl: 'https://amaba.com.br/',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
      status: 'Concluído & Em Evolução',
      results: 'Centralização de informações e facilitação do onboarding de associados.'
    },
    {
      title: 'Landing Page – Suelen Villanchisky',
      category: 'Landing Page',
      description: 'Landing otimizada para conversão com CTAs diretos, links de contato e carregamento rápido hospedado na Netlify.',
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Netlify'],
      liveUrl: 'https://suelenvillanchisky.netlify.app/',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1510511336377-1a9caa095849?w=600&h=400&fit=crop',
      status: 'Concluído & Lançado',
      results: 'Página leve, objetiva e focada em redirecionamentos.'
    }
];
