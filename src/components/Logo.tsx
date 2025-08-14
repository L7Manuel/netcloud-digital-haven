import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/8a2ff37f-d78a-4e97-8cb6-d502ae4af3da.png" 
        alt="NETCLOUD Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;