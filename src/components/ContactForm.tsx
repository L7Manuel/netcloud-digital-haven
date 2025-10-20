import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío (aquí integrarías con tu backend o servicio de email)
    try {
      // Ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      // Simulación de delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mostrar toast de éxito
      toast.success("¡Mensaje enviado!", {
        description: "Nos pondremos en contacto contigo pronto.",
        duration: 5000,
      });

      // Resetear formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Cerrar modal
      setIsOpen(false);
    } catch (error) {
      toast.error("Error al enviar", {
        description: "Por favor, intenta nuevamente o contáctanos directamente.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          className="shadow-glow-primary hover:scale-105 transition-all duration-300 group"
        >
          <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
          Contáctanos
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Contáctanos
            </span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Juan Pérez"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="juan@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+58 412-1234567"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Cuéntanos sobre tu proyecto..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={4}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full shadow-glow-primary hover:scale-105 transition-transform duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar mensaje
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Al enviar este formulario, aceptas que procesemos tu información de acuerdo a nuestra política de privacidad.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
