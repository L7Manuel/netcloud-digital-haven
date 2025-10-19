import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

const AboutSection = () => {
  const team = [
    {
      name: "Manuel López",
      role: "Fundador & CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manuel",
      linkedin: "#",
      github: "https://github.com/L7Manuel"
    },
    {
      name: "Equipo de Desarrollo",
      role: "Desarrolladores Full Stack",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Team",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <section id="nosotros" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        {/* Sección Principal */}
        <div className="max-w-5xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6 md:mb-8">
            Desarrollo web + Automatizaciones IA que funcionan.
          </h2>
          <div className="max-w-4xl">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed">
              En NETCLOUD creamos sitios web modernos, rápidos y profesionales, y automatizamos procesos con IA para que tu negocio ahorre tiempo y recursos. No importa si necesitás un e-commerce completo, una landing que convierta o un sistema que integre tus herramientas: trabajamos contigo de principio a fin, con comunicación clara y entregas rápidas.
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Nuestra Misión</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Usar la innovación tecnológica y estrategias de marketing de crecimiento para generar 
                un impacto positivo en las personas, guiados por principios cristianos de integridad, 
                servicio y excelencia.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-secondary transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Nuestra Visión</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Ser una empresa referente en tecnología y marketing ético, reconocida por transformar 
                negocios y comunidades con soluciones creativas, responsables y de alta calidad.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Conoce Nuestro Equipo */}
        <div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Conoce Nuestro Equipo
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-primary">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-base md:text-lg text-primary mb-4">
                    {member.role}
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
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