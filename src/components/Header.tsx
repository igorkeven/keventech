import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Zap } from 'lucide-react';
import logo from '@/assets/logo.png';
import { Link , useNavigate, useLocation } from 'react-router-dom';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

 const goToSection = (hash: string) => {
  const id = hash.replace('#', '');

  const scrollTo = () => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80; // 80px = altura do header
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  if (window.location.pathname !== '/') {
    navigate('/', { replace: false });
    setTimeout(scrollTo, 80); // dá tempo da Home montar
  } else {
    scrollTo();
  }
};


  const menuItems = [
    { href: '#empresa', label: 'Empresa', onClick: () => goToSection('#empresa') },
    { href: '#servicos', label: 'Serviços', onClick: () => goToSection('#servicos') },
    { href: '/projetos', label: 'Portfólio', link: true },
    { href: '#contato', label: 'Contato', onClick: () => goToSection('#contato') },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
<div className="flex items-center space-x-3">
  <Link to="/" aria-label="Ir para a página inicial" className="inline-flex items-center">
    <img 
      src={logo} 
      alt="Keven Tech" 
      className="h-10 w-auto"
    />
  </Link>
</div>


          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
  {menuItems.map((item) =>
    item.link ? (
      <Link
        key={item.href}
        to={item.href}
        className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative group"
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
      </Link>
    ) : (
      <button
        key={item.href}
        onClick={item.onClick}
        className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative group"
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
      </button>
    )
  )}
</nav>


          {/* CTA Button */}
<div className="hidden md:block">
  <Button
    className="btn-primary"
    onClick={() => goToSection('#contato')} // <--- usa a navegação + scroll
  >
    Solicitar Orçamento
  </Button>
</div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

    {/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border">
    <nav className="container-padding py-4 space-y-4">
      {menuItems.map((item) =>
        item.link ? (
          <Link
            key={item.href}
            to={item.href}
            className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ) : (
          <button
            key={item.href}
            className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2"
            onClick={() => {
              setIsMenuOpen(false);
              item.onClick?.();           // <--- usa goToSection internamente
            }}
          >
            {item.label}
          </button>
        )
      )}

      <Button
        className="btn-primary w-full mt-4"
        onClick={() => {
          setIsMenuOpen(false);
          goToSection('#contato');        // <--- idem aqui
        }}
      >
        Solicitar Orçamento
      </Button>
    </nav>
  </div>
)}

      </div>
    </header>
  );
};

export default Header;