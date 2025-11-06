import { Button } from "@/components/ui/button";
import { Wifi, Network, Shield } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Network className="w-16 h-16 text-primary animate-pulse" />
              <Wifi className="w-8 h-8 text-secondary absolute top-0 right-0 animate-bounce" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
            ConectTeen
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
            Conectando o futuro, criado por quem vai viver nele.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções inteligentes e acessíveis de rede para escolas, pequenos negócios e comunidades. 
            Criado por adolescentes, para transformar o acesso à tecnologia.
          </p>

          {/* Features badges */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border">
              <Network className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Redes Wi-Fi</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Segurança</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border">
              <Wifi className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Monitoramento</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="text-lg"
            >
              Conheça Nossos Serviços
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="text-lg"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
