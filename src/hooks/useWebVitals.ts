import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

interface WebVitalsConfig {
  enabled?: boolean;
  debug?: boolean;
}

export const useWebVitals = (config: WebVitalsConfig = {}) => {
  const { enabled = true, debug = false } = config;

  useEffect(() => {
    if (!enabled) return;

    const handleMetric = (metric: Metric) => {
      // Log to console in development
      if (debug || import.meta.env.DEV) {
        console.log(`[Web Vitals] ${metric.name}:`, {
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
        });
      }

      // Send to analytics in production
      if (import.meta.env.PROD) {
        // You can send to Google Analytics, custom endpoint, etc.
        // Example: gtag('event', metric.name, { value: metric.value });
        
        // For now, we'll just log it
        console.log(`📊 ${metric.name}: ${Math.round(metric.value)}ms (${metric.rating})`);
      }
    };

    // Measure all Web Vitals (Core Web Vitals + additional metrics)
    onCLS(handleMetric);  // Cumulative Layout Shift
    onINP(handleMetric);  // Interaction to Next Paint (replaces FID)
    onFCP(handleMetric);  // First Contentful Paint
    onLCP(handleMetric);  // Largest Contentful Paint
    onTTFB(handleMetric); // Time to First Byte
  }, [enabled, debug]);
};

export default useWebVitals;
