import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
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

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <SEO />
      
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

      {/* Process Section - How We Work */}
      <ProcessSection />

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
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 animate-in slide-in-from-bottom-5"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          {/* Tooltip */}
          <span className="absolute right-16 bg-card text-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg border border-border">
            Volver arriba
          </span>
        </button>
      )}
    </div>
  );
};

export default Index;
