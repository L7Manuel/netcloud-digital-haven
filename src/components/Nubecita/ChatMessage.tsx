import { ChatMessage as ChatMessageType } from "@/types/nubecita";
import { Cloud, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.type === 'bot';
  const time = message.timestamp.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div
      className={cn(
        "flex gap-3 animate-in slide-in-from-bottom-2 duration-300",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {/* Avatar - Solo para bot */}
      {isBot && (
        <div className="flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#87CEEB] to-[#4682B4] shadow-md">
            <Cloud className="h-5 w-5 text-white" fill="white" />
          </div>
        </div>
      )}

      {/* Mensaje */}
      <div className={cn("flex max-w-[85%] flex-col gap-1", !isBot && "items-end")}>
        {/* Nombre */}
        <span className="text-xs font-medium text-muted-foreground">
          {isBot ? "☁️ Nubecita" : "Tú"}
        </span>

        {/* Contenido del mensaje */}
        <div
          className={cn(
            "rounded-2xl px-4 py-3 shadow-sm",
            isBot
              ? "rounded-tl-sm bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] text-[#1e293b]"
              : "rounded-tr-sm bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white"
          )}
        >
          <p className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content}
          </p>
        </div>

        {/* Timestamp */}
        <span className="text-[10px] text-muted-foreground">{time}</span>
      </div>

      {/* Avatar - Solo para usuario */}
      {!isBot && (
        <div className="flex-shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] shadow-md">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
