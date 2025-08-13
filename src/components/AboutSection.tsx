import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clientes Satisfechos" },
    { icon: Award, value: "15+", label: "Años de Experiencia" },
    { icon: Globe, value: "25+", label: "Países Atendidos" },
    { icon: Zap, value: "1000+", label: "Proyectos Completados" }
  ];

  return (
    <section id="nosotros" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Sobre NETCLOUD
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos una empresa líder en soluciones tecnológicas con más de 15 años 
              de experiencia transformando negocios a través de la innovación digital.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro equipo de expertos se especializa en cloud computing, desarrollo 
              de software, ciberseguridad e inteligencia artificial, ayudando a empresas 
              de todos los tamaños a alcanzar sus objetivos tecnológicos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Certificaciones internacionales</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Soporte 24/7 multiidioma</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Metodologías ágiles y DevOps</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 mx-auto mb-4 bg-tech-gradient rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;