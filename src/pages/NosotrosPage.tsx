import { Suspense, lazy } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { AboutSectionSkeleton } from "@/components/SkeletonLoaders";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = lazy(() => import("@/components/AboutSection"));

const NosotrosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sobre Nosotros - NETCLOUD | Equipo de Expertos en Tecnología"
        description="Conoce al equipo detrás de NETCLOUD. Expertos en desarrollo web, IA y marketing digital comprometidos con la excelencia y valores cristianos."
        keywords="equipo NETCLOUD, sobre nosotros, expertos tecnología, desarrollo web Venezuela, equipo profesional"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-secondary/5 via-background to-background">
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
                Sobre Nosotros
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un equipo apasionado por la tecnología, comprometido con la excelencia 
              y guiado por principios de integridad y servicio.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 px-6">
        <Suspense fallback={<AboutSectionSkeleton />}>
          <AboutSection />
        </Suspense>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Nuestra Misión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empoderar a empresas y emprendedores con soluciones tecnológicas innovadoras, 
                accesibles y éticas que impulsen su crecimiento y generen un impacto positivo 
                en la sociedad.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-secondary">
                Nuestra Visión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser la empresa líder en soluciones tecnológicas en Venezuela y Latinoamérica, 
                reconocida por nuestra excelencia técnica, compromiso ético y capacidad de 
                transformar ideas en realidades digitales exitosas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres Trabajar con Nosotros?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Estamos listos para ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm />
            <Link to="/servicios">
              <Button variant="outline" size="lg">
                Ver Nuestros Servicios
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

export default NosotrosPage;
