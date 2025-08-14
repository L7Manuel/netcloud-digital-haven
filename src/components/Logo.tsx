import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/1469d588-ea6a-40c4-b2f2-70ec9308b154.png" 
        alt="NETCLOUD Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;