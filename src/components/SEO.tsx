import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = 'NETCLOUD - Tecnología del Futuro | Soluciones Cloud, IA y Desarrollo',
  description = 'NETCLOUD: Empresa líder en soluciones tecnológicas. Cloud computing, desarrollo software, ciberseguridad e IA para transformar tu negocio con integridad y excelencia.',
  keywords = 'tecnología, cloud computing, desarrollo software, ciberseguridad, inteligencia artificial, machine learning, NETCLOUD, Venezuela, San Diego, Carabobo, transformación digital, marketing digital',
  image = 'https://l7manuel.github.io/netcloud-vlza/placeholder.svg',
  url = 'https://l7manuel.github.io/netcloud-vlza/',
  type = 'website',
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="NETCLOUD" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
