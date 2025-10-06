// src/pages/Projetos.tsx
import PortfolioSection from '@/components/PortfolioSection';
import { projects } from '@/data/projects';

export default function Projetos() {
  return (
    <main className="section-padding">
      <h1 className="text-3xl md:text-4xl font-bold mb-6"> Projetos</h1>
      <PortfolioSection projects={projects} showHeader={false} showViewAll={false} />
    </main>
  );
}
