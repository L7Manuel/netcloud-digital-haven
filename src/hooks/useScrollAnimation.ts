import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook personalizado para animaciones al hacer scroll usando Intersection Observer
 * @param options - Opciones de configuración
 * @returns ref para el elemento y estado de visibilidad
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

/**
 * Hook para múltiples elementos con stagger (delay escalonado)
 */
export const useStaggerAnimation = (count: number, delay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (isVisible) {
      const timers: NodeJS.Timeout[] = [];
      
      for (let i = 0; i < count; i++) {
        const timer = setTimeout(() => {
          setVisibleItems((prev) => new Set(prev).add(i));
        }, i * delay);
        timers.push(timer);
      }

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [isVisible, count, delay]);

  return { ref, visibleItems };
};
