import { ChatQuestion } from '@/types/nubecita';

export const chatFlow: ChatQuestion[] = [
  {
    id: 1,
    question: "¡Perfecto! Para empezar, ¿cómo te llamas?",
    field: "client_name",
    type: "text",
    placeholder: "Ej: Juan Pérez",
    validation: (value) => value.trim().length >= 2,
    errorMessage: "Por favor, ingresa tu nombre completo"
  },
  {
    id: 2,
    question: "Encantado, {name}! ¿Cuál es tu email?",
    field: "client_email",
    type: "email",
    placeholder: "tu@email.com",
    validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    errorMessage: "Por favor, ingresa un email válido"
  },
  {
    id: 3,
    question: "¿Y tu número de teléfono? (para contactarte rápido)",
    field: "client_phone",
    type: "tel",
    placeholder: "+58 412-1234567",
    validation: (value) => value.replace(/\D/g, '').length >= 10,
    errorMessage: "Por favor, ingresa un teléfono válido"
  },
  {
    id: 4,
    question: "Ahora cuéntame, ¿qué tipo de proyecto necesitas?",
    field: "project_type",
    type: "select",
    options: [
      "💼 Sitio Web Corporativo",
      "🛒 E-commerce",
      "🤖 Chatbot con IA",
      "⚡ Automatización",
      "🌐 Aplicación Web",
      "📱 App Móvil"
    ]
  },
  {
    id: 5,
    question: "¡{project_type}! Excelente elección. ¿Cuál es tu timeline ideal?",
    field: "timeline",
    type: "select",
    options: [
      "🚀 Urgente (1-2 semanas)",
      "⚡ Rápido (3-4 semanas)",
      "📅 Normal (1-2 meses)",
      "🎯 Flexible (2+ meses)"
    ]
  },
  {
    id: 6,
    question: "Perfecto. ¿Cuál es tu presupuesto aproximado?",
    field: "budget",
    type: "select",
    options: [
      "💰 $500 - $1,000",
      "💎 $1,000 - $3,000",
      "🏆 $3,000 - $5,000",
      "🚀 $5,000+",
      "💬 Prefiero discutirlo"
    ]
  },
  {
    id: 7,
    question: "Cuéntame más sobre tu proyecto. ¿Qué funcionalidades específicas necesitas?",
    field: "project_description",
    type: "textarea",
    placeholder: "Describe tu proyecto en detalle...",
    validation: (value) => value.trim().length >= 20,
    errorMessage: "Por favor, describe tu proyecto con al menos 20 caracteres"
  },
  {
    id: 8,
    question: "¿Necesitas integraciones especiales? (Pagos, CRM, APIs, etc.)",
    field: "integrations",
    type: "textarea",
    placeholder: "Ej: PayPal, Stripe, WhatsApp API, Google Analytics...",
    validation: () => true, // Opcional
  }
];

export const welcomeMessage = "¡Hola! Soy Nubecita ☁️, tu asistente técnico en NETCLOUD. Voy a ayudarte a definir tu proyecto digital paso a paso. ¿Listo para comenzar?";

export const confirmationMessage = (data: any) => `
¡Perfecto! Déjame resumir tu proyecto:

📋 **Resumen:**
• **Nombre:** ${data.client_name}
• **Email:** ${data.client_email}
• **Teléfono:** ${data.client_phone}
• **Proyecto:** ${data.project_type}
• **Timeline:** ${data.timeline}
• **Presupuesto:** ${data.budget}
• **Descripción:** ${data.project_description.substring(0, 100)}${data.project_description.length > 100 ? '...' : ''}

¿Todo correcto?
`;

export const completionMessage = (name: string, email: string) => `
🎯 ¡Listo! Tu proyecto está en nuestras manos expertas.

📧 Te enviaremos un email de confirmación a **${email}**
📞 Nuestro equipo te contactará en las próximas **24 horas**

¡Gracias por confiar en NETCLOUD, ${name}! 🚀
`;

// Función para reemplazar variables en las preguntas
export const interpolateQuestion = (question: string, data: any): string => {
  return question.replace(/\{(\w+)\}/g, (match, key) => {
    return data[key] || match;
  });
};
