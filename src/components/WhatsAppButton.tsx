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
      className="fixed bottom-24 right-8 z-40 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group animate-in slide-in-from-bottom-5 hover:scale-110"
      aria-label="Contactar por WhatsApp"
      title="Chatea con nosotros"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      
      {/* Enhanced Tooltip */}
      <span className="absolute right-20 bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-white/20 group-hover:right-[4.5rem]">
        💬 ¡Chatea con nosotros!
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#20BA5A]"></span>
      </span>
    </button>
  );
};

export default WhatsAppButton;
