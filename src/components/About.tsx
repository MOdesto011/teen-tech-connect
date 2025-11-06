import { Users, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sobre a ConectTeen
            </h2>
            <p className="text-xl text-muted-foreground">
              Transformando o acesso à tecnologia através da visão jovem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Quem Somos</h3>
                <p className="text-muted-foreground">
                  Grupo de 5 adolescentes entre 14 e 17 anos, estudantes de escola técnica 
                  com paixão por redes de computadores e tecnologia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Oferecer soluções inteligentes e acessíveis de rede para escolas, 
                  pequenos negócios e comunidades.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Democratizar o acesso à tecnologia e inspirar outros jovens a 
                  empreenderem e inovarem no mundo tech.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
