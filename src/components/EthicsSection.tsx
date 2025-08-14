import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Heart, CheckCircle } from "lucide-react";

const EthicsSection = () => {
  const principles = [
    {
      icon: Shield,
      title: "Información Veraz",
      description: "Prohibido el uso de información falsa o prácticas engañosas."
    },
    {
      icon: Lock,
      title: "Protección de Datos",
      description: "Protección estricta de datos personales y confidenciales."
    },
    {
      icon: Heart,
      title: "Valor Real",
      description: "Priorización de productos y campañas que aporten valor real al cliente."
    },
    {
      icon: CheckCircle,
      title: "Impacto Social",
      description: "Evaluación de impacto social y ético en cada proyecto."
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Ética en Marketing y Tecnología
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro compromiso con la transparencia, responsabilidad y el impacto positivo 
            en cada proyecto que desarrollamos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow-primary transition-all duration-300 hover:scale-105 border-border bg-card/50 backdrop-blur-sm text-center"
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-tech-gradient rounded-lg flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-secondary transition-all duration-300">
                  <principle.icon className="w-8 h-8 text-background" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {principle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;