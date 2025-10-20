import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Cloud, Users, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  ServicesSectionSkeleton, 
  AboutSectionSkeleton, 
  EthicsSectionSkeleton 
} from "@/components/SkeletonLoaders";

// Lazy loading de secciones para mejor rendimiento
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const EthicsSection = lazy(() => import("@/components/EthicsSection"));

// Datos estáticos fuera del componente para evitar recreación
const SECTIONS_DATA = [
  {
    id: "servicios",
    title: "Nuestros Servicios",
    icon: Cloud,
    description: "Soluciones completas para tu presencia digital",
    details: ["Sitios Web", "E-commerce", "Chatbots IA", "Automatización", "Marketing Digital"],
    color: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700"
  },
  {
    id: "nosotros",
    title: "Sobre Nosotros",
    icon: Users,
    description: "Conoce nuestro equipo y valores",
    details: ["Desarrollo Web + IA", "Equipo especializado", "Misión y Visión", "Trabajo colaborativo"],
    color: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700"
  },
  {
    id: "etica",
    title: "Ética y Principios",
    icon: Shield,
    description: "Nuestro compromiso ético",
    details: ["Información veraz", "Protección de datos", "Valor real", "Impacto social"],
    color: "bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700"
  }
] as const;

const SCROLL_THRESHOLD = 400;

const Index = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Scroll animations para diferentes secciones
  const heroAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1 });

  // Función memoizada para el evento de scroll con throttling implícito
  const handleScroll = useCallback(() => {
    setShowBackToTop(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  // Función memoizada para scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Función memoizada para abrir modales
  const handleModalOpen = useCallback((sectionId: string) => {
    setOpenModal(sectionId);
  }, []);

  // Función memoizada para renderizar contenido de modales con lazy loading
  const renderModalContent = useCallback((sectionId: string) => {
    switch (sectionId) {
      case "servicios":
        return (
          <Suspense fallback={<ServicesSectionSkeleton />}>
            <ServicesSection />
          </Suspense>
        );
      case "nosotros":
        return (
          <Suspense fallback={<AboutSectionSkeleton />}>
            <AboutSection />
          </Suspense>
        );
      case "etica":
        return (
          <Suspense fallback={<EthicsSectionSkeleton />}>
            <EthicsSection />
          </Suspense>
        );
      default:
        return null;
    }
  }, []);

  // Efecto optimizado con cleanup
  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Memoizar datos de secciones para evitar recreación
  const sections = useMemo(() => SECTIONS_DATA, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link para accesibilidad */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Saltar al contenido principal
      </a>
      
      <Header onNavigate={handleModalOpen} />

      {/* Hero Section - Compact */}
      <section 
        ref={heroAnimation.ref}
        id="main-content"
        className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          heroAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
        aria-label="Sección principal"
      >
        <div className="absolute inset-0 bg-hero-gradient"></div>

        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary/40 rounded-full animate-ping"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-accent/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-ping"></div>
          <div className="absolute top-80 left-1/2 w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-60 right-1/4 w-1.5 h-1.5 bg-accent/40 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-tech-gradient bg-clip-text text-transparent drop-shadow-lg">
              NETCLOUD
            </span>
            <br />
            <span className="text-foreground text-3xl md:text-5xl lg:text-6xl font-light">
              Tecnología del Futuro
            </span>
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 mb-8 leading-relaxed font-light">
              Innovación tecnológica y estrategias de marketing de crecimiento para generar 
              <span className="text-primary font-medium"> impacto positivo</span> en las personas, 
              guiados por principios cristianos de 
              <span className="text-secondary font-medium"> integridad</span>, 
              <span className="text-accent font-medium"> servicio</span> y 
              <span className="text-primary font-medium"> excelencia</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-background text-muted-foreground">✦</span>
        </div>
      </div>

      {/* Interactive Cards Section */}
      <section 
        ref={cardsAnimation.ref}
        className={`py-16 px-6 transition-all duration-1000 ${
          cardsAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
        aria-label="Secciones informativas"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                ¿Qué podemos hacer por ti?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestros servicios, conoce nuestro equipo y nuestro compromiso ético con cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Dialog key={section.id} open={openModal === section.id} onOpenChange={(open) => setOpenModal(open ? section.id : null)}>
                <DialogTrigger asChild>
                  <Card className="group hover:shadow-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer border-border bg-card/50 backdrop-blur-sm">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto mb-4 ${section.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <section.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-center leading-relaxed mb-4">
                        {section.description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {section.details.map((detail, index) => (
                          <span
                            key={`${section.id}-${index}`}
                            className="px-2 py-1 text-xs bg-background/50 text-muted-foreground rounded-full border border-border/50"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                      {section.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {renderModalContent(section.id)}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section - Always visible */}
      <Footer />

      {/* Floating Action Buttons */}
      <WhatsAppButton />
      
      {/* Contact Form Modal - Positioned in footer for easy access */}
      <div className="fixed bottom-8 left-8 z-40 hidden md:block">
        <ContactForm />
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Volver arriba"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Index;
