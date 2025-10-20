import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, RotateCcw, Home } from "lucide-react";
import { useNubecita } from "@/hooks/useNubecita";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";
import ProgressBar from "./ProgressBar";
import { cn } from "@/lib/utils";

interface NubecitaChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const NubecitaChat = ({ isOpen, onClose }: NubecitaChatProps) => {
  const {
    messages,
    currentQuestion,
    progress,
    phase,
    isTyping,
    startConversation,
    handleUserResponse,
    submitLead,
    resetChat,
  } = useNubecita();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Manejar respuesta del usuario
  const handleSend = (value: string) => {
    if (phase === 'welcome') {
      startConversation();
    } else if (phase === 'collecting') {
      handleUserResponse(value);
    } else if (phase === 'confirmation') {
      // Confirmar y enviar
      submitLead();
    }
  };

  // Botones de confirmación
  const renderConfirmationButtons = () => {
    if (phase !== 'confirmation') return null;

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.type !== 'bot') return null;

    return (
      <div className="flex gap-2 p-4">
        <Button
          onClick={() => submitLead()}
          className="flex-1 bg-gradient-to-br from-[#87CEEB] to-[#4682B4] hover:from-[#4682B4] hover:to-[#87CEEB]"
        >
          ✅ Sí, enviar
        </Button>
        <Button
          onClick={() => resetChat()}
          variant="outline"
          className="flex-1 border-2 hover:border-[#87CEEB]"
        >
          ✏️ Corregir algo
        </Button>
      </div>
    );
  };

  // Botones de acción final
  const renderCompletionButtons = () => {
    if (phase !== 'completed') return null;

    return (
      <div className="flex gap-2 p-4">
        <Button
          onClick={() => {
            onClose();
            setTimeout(() => resetChat(), 300);
          }}
          className="flex-1 bg-gradient-to-br from-[#87CEEB] to-[#4682B4] hover:from-[#4682B4] hover:to-[#87CEEB]"
        >
          <Home className="mr-2 h-4 w-4" />
          Volver al inicio
        </Button>
        <Button
          onClick={onClose}
          variant="outline"
          className="flex-1 border-2 hover:border-[#87CEEB]"
        >
          <X className="mr-2 h-4 w-4" />
          Cerrar
        </Button>
      </div>
    );
  };

  // Botón de bienvenida
  const renderWelcomeButton = () => {
    if (phase !== 'welcome' || messages.length === 0) return null;

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.type !== 'bot') return null;

    return (
      <div className="flex gap-2 p-4">
        <Button
          onClick={() => handleSend("✨ ¡Sí, empecemos!")}
          className="flex-1 bg-gradient-to-br from-[#87CEEB] to-[#4682B4] hover:from-[#4682B4] hover:to-[#87CEEB]"
        >
          ✨ ¡Sí, empecemos!
        </Button>
        <Button
          onClick={onClose}
          variant="outline"
          className="flex-1 border-2 hover:border-[#87CEEB]"
        >
          Más tarde
        </Button>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={cn(
          "gap-0 p-0 sm:max-w-[450px]",
          "max-h-[90vh] sm:max-h-[650px]",
          "flex flex-col"
        )}
      >
        {/* Header */}
        <DialogHeader className="border-b border-border bg-gradient-to-r from-[#87CEEB] to-[#4682B4] p-4 text-white">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-lg font-bold">
              ☁️ Nubecita - Asistente Técnico
            </DialogTitle>
            <div className="flex gap-2">
              {messages.length > 0 && (
                <Button
                  onClick={resetChat}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  title="Reiniciar conversación"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              )}
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Messages Area */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 space-y-4 overflow-y-auto p-4"
          style={{ maxHeight: 'calc(650px - 200px)' }}
        >
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isTyping && <TypingIndicator />}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Progress Bar */}
        {phase === 'collecting' && (
          <ProgressBar
            current={progress.current}
            total={progress.total}
            percentage={progress.percentage}
            phase={phase}
          />
        )}

        {/* Input Area */}
        {phase === 'welcome' && renderWelcomeButton()}
        {phase === 'collecting' && !isTyping && (
          <ChatInput
            question={currentQuestion}
            onSend={handleSend}
            disabled={isTyping}
          />
        )}
        {renderConfirmationButtons()}
        {renderCompletionButtons()}
      </DialogContent>
    </Dialog>
  );
};

export default NubecitaChat;
