// Tipos para Nubecita - Asistente Técnico

export interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

export interface ChatQuestion {
  id: number;
  question: string;
  field: keyof LeadData;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  options?: string[];
  placeholder?: string;
  validation?: (value: string) => boolean;
  errorMessage?: string;
}

export interface LeadData {
  client_name: string;
  client_email: string;
  client_phone: string;
  project_type: string;
  timeline: string;
  budget: string;
  project_description: string;
  integrations: string;
}

export interface WebhookPayload extends LeadData {
  timestamp: string;
  source: string;
}

export type ChatPhase = 'welcome' | 'collecting' | 'confirmation' | 'completed';

export interface ChatState {
  phase: ChatPhase;
  currentQuestionIndex: number;
  messages: ChatMessage[];
  leadData: Partial<LeadData>;
  isOpen: boolean;
  isTyping: boolean;
}
