import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Globe, Smartphone, ShoppingCart, Bot, Zap, TrendingUp, Settings, Search } from "lucide-react";

const ServicesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const services = [
    {
      icon: Globe,
      title: "Sitios Web Corporativos",
      description: "Landing pages y sitios institucionales que convierten visitantes en clientes."
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Web",
      description: "Plataformas web complejas con interfaces intuitivas y rendimiento óptimo."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Tiendas online completas con pasarelas de pago y gestión de inventario."
    },
    {
      icon: Bot,
      title: "Chatbots con IA",
      description: "Asistentes virtuales inteligentes que mejoran la atención al cliente 24/7."
    },
    {
      icon: Zap,
      title: "Automatización",
      description: "Sistemas que automatizan procesos repetitivos y ahorran tiempo valioso."
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Estrategias de marketing digital para aumentar tu presencia online y ventas."
    },
    {
      icon: Settings,
      title: "Optimización",
      description: "Mejoramos el rendimiento y SEO de tu sitio web existente."
    }
  ];

  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones completas para tu{" "}
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              presencia digital
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Desde sitios web corporativos hasta aplicaciones con inteligencia artificial, tenemos 
            la solución perfecta para tu negocio.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar servicios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 border-border focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services
            .filter((service) =>
              service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              service.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((service, index) => (
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