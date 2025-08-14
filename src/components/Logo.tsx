import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/netcloud-digital-haven/logo.png" 
        alt="NETCLOUD Logo" 
        className="h-10 w-auto"
        onError={(e) => {
          // Si la imagen no se carga, mostrar texto como respaldo
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const textLogo = document.createElement('div');
          textLogo.textContent = 'NETCLOUD';
          textLogo.className = 'text-xl font-bold text-primary';
          target.parentNode?.insertBefore(textLogo, target.nextSibling);
        }}
      />
    </div>
  );
};

export default Logo;