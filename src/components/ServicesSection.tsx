import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Network, Code, Shield, Database, Cpu } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Migración y gestión de infraestructura en la nube con AWS, Azure y Google Cloud."
    },
    {
      icon: Network,
      title: "Redes Inteligentes",
      description: "Diseño e implementación de redes corporativas seguras y escalables."
    },
    {
      icon: Code,
      title: "Desarrollo de Software",
      description: "Aplicaciones web y móviles personalizadas con tecnologías de vanguardia."
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protección integral de datos y sistemas contra amenazas digitales."
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Análisis inteligente de datos para toma de decisiones estratégicas."
    },
    {
      icon: Cpu,
      title: "IA & Machine Learning",
      description: "Soluciones de inteligencia artificial para automatización y predicción."
    }
  ];

  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para empresas que buscan 
            innovar y crecer en la era digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow-primary transition-all duration-300 hover:scale-105 border-border bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-tech-gradient rounded-lg flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-secondary transition-all duration-300">
                  <service.icon className="w-8 h-8 text-background" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;