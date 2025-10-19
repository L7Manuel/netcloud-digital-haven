import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  // Obtener variables de entorno con valores por defecto
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "contacto@netcloud.com";
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || "+58 412-1234567";
  const contactAddress = import.meta.env.VITE_CONTACT_ADDRESS || "San Diego, Carabobo";
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/company/netcloud";
  const twitterUrl = import.meta.env.VITE_TWITTER_URL || "https://twitter.com/netcloud";
  const githubUrl = import.meta.env.VITE_GITHUB_URL || "https://github.com/L7Manuel";

  return (
    <footer id="contacto" className="bg-card/50 backdrop-blur-sm border-t border-border py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              Transformamos tu negocio con tecnología de vanguardia y soluciones innovadoras.
            </p>
            <div className="flex space-x-4">
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={twitterUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sitios Web Corporativos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Aplicaciones Web</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chatbots con IA</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Marketing Digital</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carreras</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Soporte</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${contactEmail}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {contactPhone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">{contactAddress}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 NETCLOUD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;