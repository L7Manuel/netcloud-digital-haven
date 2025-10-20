import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Skeleton para tarjetas de servicios
export const ServiceCardSkeleton = () => (
  <Card className="border-border bg-card/50 backdrop-blur-sm animate-pulse">
    <CardHeader className="text-center">
      <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-lg animate-shimmer" />
      <Skeleton className="h-6 w-3/4 mx-auto animate-shimmer" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full mb-2 animate-shimmer" />
      <Skeleton className="h-4 w-5/6 animate-shimmer" />
    </CardContent>
  </Card>
);

// Skeleton para sección completa de servicios
export const ServicesSectionSkeleton = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-64 mx-auto mb-6" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
);

// Skeleton para sección About
export const AboutSectionSkeleton = () => (
  <section className="py-20 px-6 bg-card/30">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Skeleton className="h-12 w-64 mb-6" />
          <div className="mb-8">
            <Skeleton className="h-8 w-48 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="mb-8">
            <Skeleton className="h-8 w-48 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="text-center p-6 bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-0">
                <Skeleton className="w-12 h-12 mx-auto mb-4 rounded-lg" />
                <Skeleton className="h-8 w-16 mx-auto mb-2" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Skeleton para sección de Ética
export const EthicsSectionSkeleton = () => (
  <section className="py-20 px-6 bg-card/20">
    <div className="container mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-80 mx-auto mb-6" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border-border bg-card/50 backdrop-blur-sm text-center">
            <CardHeader>
              <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-lg" />
              <Skeleton className="h-6 w-3/4 mx-auto" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mx-auto" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// Skeleton genérico para contenido de modal
export const ModalContentSkeleton = () => (
  <div className="space-y-4 py-8">
    <Skeleton className="h-8 w-3/4 mx-auto mb-8" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-32 w-full rounded-lg" />
      ))}
    </div>
  </div>
);
