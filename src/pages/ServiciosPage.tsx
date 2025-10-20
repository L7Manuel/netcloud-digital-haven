import { Suspense, lazy } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { ServicesSectionSkeleton } from "@/components/SkeletonLoaders";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));

const ServiciosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Nuestros Servicios - NETCLOUD | Desarrollo Web, IA y Marketing Digital"
        description="Descubre nuestros servicios de desarrollo web, e-commerce, chatbots con IA, automatización y marketing digital. Soluciones tecnológicas innovadoras para tu negocio."
        keywords="desarrollo web, e-commerce, chatbots IA, automatización, marketing digital, sitios web, aplicaciones web, NETCLOUD"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver al Inicio
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Nuestros Servicios
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluciones tecnológicas completas para llevar tu negocio al siguiente nivel. 
              Desde desarrollo web hasta inteligencia artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 px-6" id="servicios-section">
        <Suspense fallback={<ServicesSectionSkeleton />}>
          <ServicesSection />
        </Suspense>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm />
            <Link to="/">
              <Button variant="outline" size="lg">
                Conocer Más Sobre Nosotros
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiciosPage;
