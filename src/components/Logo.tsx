import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center space-x-2 relative", className)}>
      {/* Lightning effects */}
      <div className="absolute -inset-2 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-3 bg-gradient-to-b from-purple-400 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-2 bg-gradient-to-t from-purple-500 to-transparent transform -rotate-12 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 -left-1 w-2 h-px bg-gradient-to-r from-purple-400 to-transparent transform rotate-45 animate-pulse delay-150"></div>
        <div className="absolute top-1/2 -right-1 w-2 h-px bg-gradient-to-l from-purple-500 to-transparent transform -rotate-45 animate-pulse delay-450"></div>
      </div>
      
      {/* Main logo */}
      <div className="w-8 h-8 bg-tech-gradient rounded-lg shadow-glow-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent"></div>
        <div className="absolute top-1 right-1 w-1 h-1 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse delay-200"></div>
      </div>
      
      <h1 className="text-2xl font-bold bg-tech-gradient bg-clip-text text-transparent relative">
        NETCLOUD
        {/* Subtle electric glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-transparent to-purple-400/10 blur-sm"></div>
      </h1>
    </div>
  );
};

export default Logo;