import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    setMobileMenuOpen(false); // Cerrar menú móvil al navegar
  };

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-background/80 backdrop-blur-md border-b border-border/50'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("servicios")}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium relative group"
              aria-label="Ver servicios"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavigation("nosotros")}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium relative group"
              aria-label="Conocer sobre nosotros"
            >
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavigation("etica")}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium relative group"
              aria-label="Ver principios éticos"
            >
              Ética
              <span className="absolute -bottom-1 left-0 w-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="default" 
              className="shadow-glow-primary hover:scale-105 transition-all duration-200 group"
              onClick={handleGetStarted}
              aria-label="Comenzar - Ir a contacto"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Comenzar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation("servicios")}
                className="text-foreground hover:text-primary transition-colors text-left py-2 px-4 rounded-lg hover:bg-card/50"
                aria-label="Ver servicios"
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavigation("nosotros")}
                className="text-foreground hover:text-primary transition-colors text-left py-2 px-4 rounded-lg hover:bg-card/50"
                aria-label="Conocer sobre nosotros"
              >
                Nosotros
              </button>
              <button
                onClick={() => handleNavigation("etica")}
                className="text-foreground hover:text-primary transition-colors text-left py-2 px-4 rounded-lg hover:bg-card/50"
                aria-label="Ver principios éticos"
              >
                Ética
              </button>
              <Button 
                variant="default" 
                className="w-full shadow-glow-primary"
                onClick={handleGetStarted}
                aria-label="Comenzar - Ir a contacto"
              >
                Comenzar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;