import { Cloud } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="flex gap-3 animate-in slide-in-from-bottom-2 duration-300">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#87CEEB] to-[#4682B4] shadow-md">
          <Cloud className="h-5 w-5 text-white" fill="white" />
        </div>
      </div>

      {/* Typing animation */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">
          ☁️ Nubecita
        </span>
        <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] px-4 py-3 shadow-sm">
          <span className="text-sm italic text-[#64748b]">está escribiendo</span>
          <div className="flex gap-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-[#87CEEB]" style={{ animationDelay: '0ms' }}></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-[#87CEEB]" style={{ animationDelay: '150ms' }}></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-[#87CEEB]" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
