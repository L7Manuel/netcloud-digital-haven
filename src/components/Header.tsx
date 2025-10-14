import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const handleNavigation = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => handleNavigation("nosotros")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => handleNavigation("etica")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Ética
            </button>
          </nav>

          <Button variant="default" className="shadow-glow-primary">
            Comenzar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;