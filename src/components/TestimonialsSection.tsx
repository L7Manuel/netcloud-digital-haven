import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "CEO, TechStart Venezuela",
    content: "NETCLOUD transformó completamente nuestra infraestructura cloud. Su equipo es profesional, ético y siempre dispuesto a ayudar. Los resultados superaron nuestras expectativas.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "CTO, Innovatech Solutions",
    content: "La implementación de IA y machine learning que hicieron para nosotros fue excepcional. Su enfoque ético y transparente nos dio total confianza en el proyecto.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Directora de Marketing, EcoVerde",
    content: "Trabajar con NETCLOUD ha sido una experiencia increíble. Su compromiso con la excelencia y los valores cristianos se refleja en cada interacción. Altamente recomendados.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  },
  {
    id: 4,
    name: "Luis Hernández",
    role: "Fundador, StartupHub",
    content: "La ciberseguridad que implementaron nos dio paz mental. Su equipo es experto, confiable y siempre va más allá de lo esperado. Excelente servicio.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luis",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Lo Que Dicen Nuestros Clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-primary">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-10 h-10 text-primary/30 mb-4 mx-auto md:mx-0" />
                  
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <p className="font-bold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full hover:scale-110 transition-transform"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full hover:scale-110 transition-transform"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {isAutoPlaying ? "⏸ Pausar" : "▶ Reproducir"} rotación automática
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
