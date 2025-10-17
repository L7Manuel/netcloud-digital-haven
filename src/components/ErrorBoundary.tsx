import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
    
    // Aquí puedes enviar el error a un servicio de monitoreo como Sentry
    // if (import.meta.env.VITE_SENTRY_DSN) {
    //   Sentry.captureException(error, { extra: errorInfo });
    // }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      // Si se proporciona un fallback personalizado, usarlo
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Fallback por defecto
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Algo salió mal
              </h1>
              <p className="text-muted-foreground mb-2">
                Lo sentimos, ha ocurrido un error inesperado.
              </p>
              {this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                    Detalles técnicos
                  </summary>
                  <pre className="mt-2 p-4 bg-card rounded-lg text-xs overflow-auto max-h-40">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
            <div className="space-y-3">
              <Button 
                onClick={this.handleReset}
                className="w-full"
                variant="default"
              >
                Volver al inicio
              </Button>
              <Button 
                onClick={() => window.location.reload()}
                className="w-full"
                variant="outline"
              >
                Recargar página
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
