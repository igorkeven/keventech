import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Youtube, 
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    const payload = {
      ...formData,
      
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, 
      subject: `Novo Contato de ${formData.name} - site Keven Tech`,
      from_name: "Do site keven tech",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entrarei em contato em até 24 horas.",
        });
        // Limpa o formulário
        setFormData({ name: '', email: '', company: '', phone: '', project: '', message: '' });
      } else {
        console.error("Erro ao enviar formulário:", result);
        toast({
          variant: "destructive",
          title: "Erro ao enviar mensagem.",
          description: result.message || "Por favor, tente novamente mais tarde.",
        });
      }
    } catch (error) {
      console.error("Erro de rede ou na submissão:", error);
      toast({
        variant: "destructive",
        title: "Erro de conexão.",
        description: "Não foi possível enviar sua mensagem. Verifique sua conexão.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'igorkeven@hotmail.com',
      href: 'mailto:igorkeven@hotmail.com'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 (13) 99649-6884',
      href: 'https://wa.me/5513996496884'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Santa Catarina, Brasil',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg-Sex: 8h-18h',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/igorkeven', label: 'GitHub', color: 'hover:text-primary' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/igor-keven/', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Youtube, href: 'https://www.youtube.com/igorkeven', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: MessageCircle, href: 'https://wa.me/5513996496884', label: 'WhatsApp', color: 'hover:text-green-500' },
  ];

  return (
    <section id="contato" className="section-padding bg-card/20">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Contato
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Vamos <span className="text-gradient">Conversar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar sua ideia em realidade? Entre em contato conosco e 
              vamos discutir como a Keven Tech pode ajudar seu negócio a crescer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Solicite um Orçamento
                </h3>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário e nossa equipe retornará com uma proposta personalizada em até 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da empresa"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Tipo de Projeto *</Label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-primary focus:outline-none text-foreground"
                  >
                    <option value="">Selecione o tipo de projeto</option>
                    <option value="website">Website/Landing Page</option>
                    <option value="webapp">Aplicação Web</option>
                    <option value="mobile">App Mobile</option>
                    <option value="api">API/Backend</option>
                    <option value="erp">ERP-Planejamento de Recursos Empresariais</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="system">Sistema Empresarial</option>
                    <option value="consultoria">Consultoria Técnica</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto, objetivos e prazo desejado..."
                    rows={5}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Solicitar Orçamento
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Entre em Contato
                </h3>
                <p className="text-muted-foreground mb-8">
                  Prefere contato direto? Escolha a forma que for mais conveniente para você.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {info.label}
                      </h4>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold text-foreground mb-4">
                  Redes Sociais
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-lg border border-border hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 hover:scale-110 group ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-current transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="card-tech bg-primary/5 border-primary/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Resposta Garantida
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Todas as mensagens são respondidas em até 24 horas
                    </p>
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

export default ContactSection;