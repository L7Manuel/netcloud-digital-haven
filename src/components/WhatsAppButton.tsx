import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "584121234567";
  const defaultMessage = "Hola! Me gustaría obtener más información sobre los servicios de NETCLOUD.";

  useEffect(() => {
    // Mostrar el botón después de un pequeño delay para mejor UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 right-8 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-in slide-in-from-bottom-5"
      aria-label="Contactar por WhatsApp"
      title="Chatea con nosotros"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-card text-foreground px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg border border-border">
        ¿Necesitas ayuda?
      </span>
    </button>
  );
};

export default WhatsAppButton;
