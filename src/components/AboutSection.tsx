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
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Usar la innovación tecnológica y estrategias de marketing de crecimiento para generar 
                un impacto positivo en las personas, guiados por principios cristianos de integridad, 
                servicio y excelencia.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">Nuestra Visión</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ser una empresa referente en tecnología y marketing ético, reconocida por transformar 
                negocios y comunidades con soluciones creativas, responsables y de alta calidad.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">Nuestros Valores</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-foreground font-semibold">Integridad</span>
                    <span className="text-muted-foreground"> — actuar con honestidad en todas las transacciones</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-foreground font-semibold">Servicio</span>
                    <span className="text-muted-foreground"> — priorizar las necesidades de clientes, socios y equipo</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-foreground font-semibold">Excelencia</span>
                    <span className="text-muted-foreground"> — hacer el trabajo con dedicación y calidad</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-foreground font-semibold">Respeto</span>
                    <span className="text-muted-foreground"> — valorar la dignidad y diversidad de cada persona</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-foreground font-semibold">Colaboración</span>
                    <span className="text-muted-foreground"> — fomentar el trabajo en equipo y el apoyo mutuo</span>
                  </div>
                </div>
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