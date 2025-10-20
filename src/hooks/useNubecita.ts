import { useState, useCallback, useEffect } from 'react';
import { ChatMessage, ChatState, LeadData, ChatPhase } from '@/types/nubecita';
import { chatFlow, welcomeMessage, confirmationMessage, completionMessage, interpolateQuestion } from '@/utils/chatFlow';

const TYPING_DELAY = 1000; // Delay para simular que Nubecita está escribiendo

export const useNubecita = () => {
  const [state, setState] = useState<ChatState>({
    phase: 'welcome',
    currentQuestionIndex: -1,
    messages: [],
    leadData: {},
    isOpen: false,
    isTyping: false,
  });

  // Agregar mensaje al chat
  const addMessage = useCallback((content: string, type: 'bot' | 'user') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      isTyping: false,
    }));
  }, []);

  // Simular typing indicator
  const showTyping = useCallback(() => {
    setState(prev => ({ ...prev, isTyping: true }));
  }, []);

  // Enviar mensaje de bienvenida
  const sendWelcomeMessage = useCallback(() => {
    showTyping();
    setTimeout(() => {
      addMessage(welcomeMessage, 'bot');
    }, TYPING_DELAY);
  }, [addMessage, showTyping]);

  // Hacer la siguiente pregunta
  const askNextQuestion = useCallback(() => {
    setState(prev => {
      const nextIndex = prev.currentQuestionIndex + 1;
      
      if (nextIndex >= chatFlow.length) {
        // Todas las preguntas respondidas, mostrar confirmación
        return { ...prev, phase: 'confirmation' };
      }

      const question = chatFlow[nextIndex];
      const interpolatedQuestion = interpolateQuestion(question.question, prev.leadData);

      showTyping();
      setTimeout(() => {
        addMessage(interpolatedQuestion, 'bot');
      }, TYPING_DELAY);

      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        phase: 'collecting',
      };
    });
  }, [addMessage, showTyping]);

  // Procesar respuesta del usuario
  const handleUserResponse = useCallback((value: string) => {
    const currentQuestion = chatFlow[state.currentQuestionIndex];
    
    // Validar respuesta
    if (currentQuestion.validation && !currentQuestion.validation(value)) {
      showTyping();
      setTimeout(() => {
        addMessage(currentQuestion.errorMessage || "Por favor, verifica tu respuesta.", 'bot');
      }, TYPING_DELAY);
      return false;
    }

    // Agregar mensaje del usuario
    addMessage(value, 'user');

    // Guardar en leadData
    setState(prev => ({
      ...prev,
      leadData: {
        ...prev.leadData,
        [currentQuestion.field]: value,
      },
    }));

    // Hacer siguiente pregunta
    setTimeout(() => {
      askNextQuestion();
    }, 500);

    return true;
  }, [state.currentQuestionIndex, addMessage, askNextQuestion, showTyping]);

  // Iniciar conversación
  const startConversation = useCallback(() => {
    addMessage("✨ ¡Sí, empecemos!", 'user');
    setTimeout(() => {
      askNextQuestion();
    }, 500);
  }, [addMessage, askNextQuestion]);

  // Mostrar confirmación
  const showConfirmation = useCallback(() => {
    showTyping();
    setTimeout(() => {
      const message = confirmationMessage(state.leadData);
      addMessage(message, 'bot');
    }, TYPING_DELAY);
  }, [state.leadData, addMessage, showTyping]);

  // Enviar datos al webhook
  const submitLead = useCallback(async () => {
    try {
      // TODO: Reemplazar con tu webhook real de n8n
      const webhookUrl = process.env.VITE_NUBECITA_WEBHOOK_URL || 'https://webhook.site/your-webhook-id';
      
      const payload = {
        ...state.leadData,
        timestamp: new Date().toISOString(),
        source: 'netcloud-website',
      };

      // Por ahora solo log, cuando tengas el webhook descomenta esto:
      console.log('📤 Enviando lead a n8n:', payload);
      
      // await fetch(webhookUrl, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload),
      // });

      // Mostrar mensaje de completado
      showTyping();
      setTimeout(() => {
        const message = completionMessage(
          state.leadData.client_name || 'Cliente',
          state.leadData.client_email || ''
        );
        addMessage(message, 'bot');
        setState(prev => ({ ...prev, phase: 'completed' }));
      }, TYPING_DELAY);

      return true;
    } catch (error) {
      console.error('Error enviando lead:', error);
      addMessage('Ups, hubo un error. Por favor intenta de nuevo o contáctanos directamente.', 'bot');
      return false;
    }
  }, [state.leadData, addMessage, showTyping]);

  // Abrir/cerrar chat
  const toggleChat = useCallback(() => {
    setState(prev => {
      const newIsOpen = !prev.isOpen;
      
      // Si se abre por primera vez, enviar mensaje de bienvenida
      if (newIsOpen && prev.messages.length === 0) {
        setTimeout(() => sendWelcomeMessage(), 300);
      }
      
      return { ...prev, isOpen: newIsOpen };
    });
  }, [sendWelcomeMessage]);

  const closeChat = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false }));
  }, []);

  // Reiniciar chat
  const resetChat = useCallback(() => {
    setState({
      phase: 'welcome',
      currentQuestionIndex: -1,
      messages: [],
      leadData: {},
      isOpen: true,
      isTyping: false,
    });
    setTimeout(() => sendWelcomeMessage(), 300);
  }, [sendWelcomeMessage]);

  // Efecto para mostrar confirmación cuando se completan todas las preguntas
  useEffect(() => {
    if (state.phase === 'confirmation' && state.messages[state.messages.length - 1]?.type === 'user') {
      showConfirmation();
    }
  }, [state.phase, state.messages, showConfirmation]);

  return {
    ...state,
    currentQuestion: state.currentQuestionIndex >= 0 ? chatFlow[state.currentQuestionIndex] : null,
    progress: {
      current: state.currentQuestionIndex + 1,
      total: chatFlow.length,
      percentage: ((state.currentQuestionIndex + 1) / chatFlow.length) * 100,
    },
    toggleChat,
    closeChat,
    startConversation,
    handleUserResponse,
    submitLead,
    resetChat,
  };
};
