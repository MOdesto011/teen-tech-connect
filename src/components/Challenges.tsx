import { AlertCircle, DollarSign, Building2, Unplug, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Challenges = () => {
  const challenges = [
    {
      icon: AlertCircle,
      title: "Falta de confiança no potencial jovem",
      description: "Muitos podem subestimar nossa capacidade técnica por sermos adolescentes."
    },
    {
      icon: DollarSign,
      title: "Recursos limitados",
      description: "Desafios para adquirir equipamentos de ponta e investir em expansão."
    },
    {
      icon: Building2,
      title: "Competição com empresas estabelecidas",
      description: "Concorrer com provedores mais experientes é um obstáculo constante."
    },
    {
      icon: Unplug,
      title: "Desigualdade no acesso",
      description: "Comunidades sem infraestrutura exigem soluções adaptadas de baixo custo."
    },
    {
      icon: Users,
      title: "Suporte institucional limitado",
      description: "Necessidade de mais apoio de parceiros e instituições educacionais."
    }
  ];

  const innovations = [
    {
      title: "Educação Acessível",
      description: "Workshops sobre uso seguro da internet para professores, alunos e empreendedores."
    },
    {
      title: "Pacotes Personalizados",
      description: "Planos sob medida com foco em baixo custo e alto desempenho."
    },
    {
      title: "App de Monitoramento",
      description: "Sistema simplificado com alertas de segurança e controle de banda."
    },
    {
      title: "Atendimento Humanizado",
      description: "Soluções empáticas criadas por quem entende a realidade escolar."
    },
    {
      title: "Sustentabilidade Digital",
      description: "Reaproveitamento de equipamentos e uso consciente de energia."
    },
    {
      title: "Inspiração para Jovens",
      description: "Incentivamos outros adolescentes a empreenderem em tecnologia."
    }
  ];

  return (
    <section id="desafios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="desafios" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nosso Caminho
              </h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="desafios" className="text-base">Desafios</TabsTrigger>
                <TabsTrigger value="inovacoes" className="text-base">Inovações</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="desafios" className="space-y-8">
              <p className="text-center text-xl text-muted-foreground max-w-2xl mx-auto">
                Transparência sobre os obstáculos que enfrentamos
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card 
                    key={index}
                    className="border-2 hover:border-destructive/50 transition-all hover:shadow-lg"
                  >
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <challenge.icon className="w-6 h-6 text-destructive" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">{challenge.title}</h3>
                          <p className="text-muted-foreground text-sm">{challenge.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="inovacoes" className="space-y-8">
              <p className="text-center text-xl text-muted-foreground max-w-2xl mx-auto">
                Como estamos transformando desafios em soluções inovadoras
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {innovations.map((innovation, index) => (
                  <Card 
                    key={index}
                    className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-card to-primary/5"
                  >
                    <CardContent className="pt-6 space-y-3">
                      <div className="w-2 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
                      <h3 className="text-lg font-semibold">{innovation.title}</h3>
                      <p className="text-muted-foreground text-sm">{innovation.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
