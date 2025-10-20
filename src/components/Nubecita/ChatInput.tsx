import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { ChatQuestion } from "@/types/nubecita";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  question: ChatQuestion | null;
  onSend: (value: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ question, onSend, disabled = false }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() && !disabled) {
      onSend(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && question?.type !== 'textarea') {
      e.preventDefault();
      handleSend();
    }
  };

  const handleOptionClick = (option: string) => {
    if (!disabled) {
      onSend(option);
    }
  };

  // Si hay opciones, mostrar botones
  if (question?.type === 'select' && question.options) {
    return (
      <div className="flex flex-col gap-2 p-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={disabled}
            variant="outline"
            className={cn(
              "h-auto justify-start whitespace-normal py-3 text-left transition-all duration-200",
              "border-2 border-border hover:border-[#87CEEB] hover:bg-[#F0F8FF]",
              "active:bg-[#87CEEB] active:text-white"
            )}
          >
            {option}
          </Button>
        ))}
      </div>
    );
  }

  // Input de texto
  return (
    <div className="flex gap-2 border-t border-border bg-background p-4">
      {question?.type === 'textarea' ? (
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={question.placeholder || "Escribe tu respuesta..."}
          disabled={disabled}
          className="min-h-[80px] resize-none border-2 focus:border-[#87CEEB] focus:ring-[#87CEEB]"
        />
      ) : (
        <Input
          type={question?.type || 'text'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={question?.placeholder || "Escribe tu respuesta..."}
          disabled={disabled}
          className="border-2 focus:border-[#87CEEB] focus:ring-[#87CEEB]"
        />
      )}
      
      <Button
        onClick={handleSend}
        disabled={!inputValue.trim() || disabled}
        className="h-auto bg-gradient-to-br from-[#87CEEB] to-[#4682B4] px-4 hover:from-[#4682B4] hover:to-[#87CEEB]"
      >
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ChatInput;
