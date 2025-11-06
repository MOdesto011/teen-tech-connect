import { Wifi, Shield, Smartphone, GraduationCap, Wrench, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "Instalação de Redes Wi-Fi",
      description: "Instalação e otimização de redes Wi-Fi locais com foco em performance e cobertura."
    },
    {
      icon: Shield,
      title: "Segurança de Redes",
      description: "Monitoramento e segurança básica de redes domésticas e escolares."
    },
    {
      icon: Smartphone,
      title: "App de Monitoramento",
      description: "Sistema simplificado via app com alertas de segurança e uso de banda."
    },
    {
      icon: GraduationCap,
      title: "Educação Tecnológica",
      description: "Workshops e treinamentos sobre uso seguro e eficiente da internet."
    },
    {
      icon: Wrench,
      title: "Suporte Personalizado",
      description: "Atendimento humanizado e soluções sob medida para cada necessidade."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Reaproveitamento de equipamentos e uso consciente de energia."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas de rede com tecnologia acessível e suporte dedicado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1 bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
