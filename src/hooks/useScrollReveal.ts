import { useEffect, useRef, useState } from 'react';

export type AnimationVariant = 
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-up'
  | 'slide-left'
  | 'slide-right';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
}

/**
 * Hook avanzado para animaciones de scroll con múltiples variantes
 */
export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0,
    duration = 600,
    variant = 'fade-up',
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  // Generar clases de animación basadas en la variante
  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration}`;
    
    const variants: Record<AnimationVariant, { initial: string; animate: string }> = {
      'fade-up': {
        initial: 'opacity-0 translate-y-8',
        animate: 'opacity-100 translate-y-0',
      },
      'fade-down': {
        initial: 'opacity-0 -translate-y-8',
        animate: 'opacity-100 translate-y-0',
      },
      'fade-left': {
        initial: 'opacity-0 translate-x-8',
        animate: 'opacity-100 translate-x-0',
      },
      'fade-right': {
        initial: 'opacity-0 -translate-x-8',
        animate: 'opacity-100 translate-x-0',
      },
      'zoom-in': {
        initial: 'opacity-0 scale-90',
        animate: 'opacity-100 scale-100',
      },
      'zoom-out': {
        initial: 'opacity-0 scale-110',
        animate: 'opacity-100 scale-100',
      },
      'flip-up': {
        initial: 'opacity-0 rotate-x-90',
        animate: 'opacity-100 rotate-x-0',
      },
      'slide-left': {
        initial: 'translate-x-full',
        animate: 'translate-x-0',
      },
      'slide-right': {
        initial: '-translate-x-full',
        animate: 'translate-x-0',
      },
    };

    const { initial, animate } = variants[variant];
    return `${baseClasses} ${isVisible ? animate : initial}`;
  };

  return {
    ref,
    isVisible,
    className: getAnimationClasses(),
  };
};

export default useScrollReveal;
