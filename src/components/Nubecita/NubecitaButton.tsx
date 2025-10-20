import { Cloud, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NubecitaButtonProps {
  onClick: () => void;
  hasNewMessage?: boolean;
}

const NubecitaButton = ({ onClick, hasNewMessage = false }: NubecitaButtonProps) => {
  return (
    <div className="fixed bottom-24 left-8 z-40">
      <Button
        onClick={onClick}
        className="nubecita-float-button group relative h-16 w-16 rounded-full bg-gradient-to-br from-[#87CEEB] to-[#4682B4] p-0 shadow-[0_4px_20px_rgba(70,130,180,0.4)] transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-[0_6px_30px_rgba(70,130,180,0.6)]"
        aria-label="Abrir Nubecita - Asistente Técnico"
      >
        {/* Ícono de nube con mensaje */}
        <div className="relative flex items-center justify-center">
          <Cloud className="h-8 w-8 text-white" fill="white" />
          <MessageCircle className="absolute bottom-0 right-0 h-4 w-4 text-white" />
        </div>

        {/* Badge de nuevo mensaje */}
        {hasNewMessage && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white animate-pulse">
            !
          </span>
        )}

        {/* Tooltip */}
        <span className="absolute left-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          💬 Habla con Nubecita
        </span>
      </Button>

      {/* Texto debajo del botón */}
      <div className="mt-2 text-center">
        <p className="text-xs font-medium text-[#4682B4]">Nubecita</p>
      </div>
    </div>
  );
};

export default NubecitaButton;
