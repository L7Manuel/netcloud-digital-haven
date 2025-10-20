import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useWebVitals } from "@/hooks/useWebVitals";
import Index from "./pages/Index";
import ServiciosPage from "./pages/ServiciosPage";
import NosotrosPage from "./pages/NosotrosPage";
import EticaPage from "./pages/EticaPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  // Monitor Web Vitals for performance tracking
  useWebVitals({ enabled: true, debug: false });

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/servicios" element={<ServiciosPage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/etica" element={<EticaPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
