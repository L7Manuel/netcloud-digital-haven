import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Consulta",
    description: "Entendemos tu visión",
    details: "Escuchamos tus necesidades y objetivos para diseñar la solución perfecta.",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Estrategia",
    description: "Diseñamos la solución ideal",
    details: "Creamos un plan detallado con tecnologías y metodologías probadas.",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    icon: Code,
    title: "Desarrollo",
    description: "Construimos con excelencia",
    details: "Desarrollamos tu proyecto con código limpio, escalable y optimizado.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Lanzamiento",
    description: "Desplegamos y acompañamos",
    details: "Lanzamos tu proyecto y te brindamos soporte continuo para tu éxito.",
    color: "from-green-500 to-green-600",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Cómo Trabajamos Contigo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De la idea a la realidad en 4 pasos transparentes y eficientes
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 to-green-500 opacity-20" 
               style={{ width: 'calc(100% - 8rem)', left: '4rem' }}
          />

          {processSteps.map((step, index) => (
            <Card 
              key={step.id}
              className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center font-bold text-sm text-primary group-hover:scale-110 transition-transform">
                  {step.id}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 mt-2 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground font-medium mb-3">
                  {step.description}
                </p>

                {/* Details */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.details}
                </p>

                {/* Hover Arrow (decorative) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-muted-foreground/30 group-hover:text-primary/50 transition-colors">
                    →
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es único. Adaptamos nuestro proceso a tus necesidades específicas, 
            manteniendo siempre la{" "}
            <span className="text-primary font-semibold">transparencia</span>,{" "}
            <span className="text-secondary font-semibold">calidad</span> y{" "}
            <span className="text-accent font-semibold">comunicación constante</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
