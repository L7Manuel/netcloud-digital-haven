import { Suspense, lazy } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { EthicsSectionSkeleton } from "@/components/SkeletonLoaders";
import { ArrowLeft, Heart, Shield, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EthicsSection = lazy(() => import("@/components/EthicsSection"));

const EticaPage = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia en cada proyecto y relación.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la confiabilidad y el respeto.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Buscamos la perfección en cada línea de código y cada estrategia.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Servicio",
      description: "Ponemos las necesidades de nuestros clientes en el centro de todo.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Nuestra Ética - NETCLOUD | Valores y Principios Cristianos"
        description="Conoce los principios éticos y valores cristianos que guían cada proyecto en NETCLOUD. Integridad, transparencia, excelencia y compromiso."
        keywords="ética empresarial, valores cristianos, integridad, transparencia, excelencia, NETCLOUD, principios"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-accent/5 via-background to-background">
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
                Nuestra Ética
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Principios cristianos y valores sólidos que guían cada decisión, 
              cada línea de código y cada relación con nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Valores Fundamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Content */}
      <section className="py-12 px-6">
        <Suspense fallback={<EthicsSectionSkeleton />}>
          <EthicsSection />
        </Suspense>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestro Compromiso Contigo
            </h2>
          </div>
          <div className="space-y-6">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Transparencia Total
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mantenemos una comunicación abierta y honesta en cada etapa del proyecto. 
                  Sin sorpresas, sin costos ocultos, sin promesas vacías.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-secondary">
                  Calidad Garantizada
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada proyecto es tratado con el máximo cuidado y atención al detalle. 
                  Nuestro trabajo habla por sí mismo y respaldamos cada entrega.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-accent">
                  Responsabilidad Social
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creemos en usar la tecnología para el bien. Parte de nuestros ingresos 
                  se destinan a proyectos sociales y educativos en nuestra comunidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trabajemos Juntos con Confianza
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nuestros valores no son solo palabras, son el fundamento de cada proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm />
            <Link to="/servicios">
              <Button variant="outline" size="lg">
                Conocer Nuestros Servicios
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

export default EticaPage;
