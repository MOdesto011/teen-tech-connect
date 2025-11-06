import { Network, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Network className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ConectTeen
              </span>
            </div>
            <p className="text-muted-foreground">
              Conectando o futuro, criado por quem vai viver nele.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contato@conectteen.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@conectteen.com
              </a>
              <a 
                href="tel:+5585984133989" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (85) 98413-3989
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Fortaleza, CE - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#servicos" className="block text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#desafios" className="block text-muted-foreground hover:text-primary transition-colors">
                Nosso Caminho
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ConectTeen. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
