import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  percentage: number;
  phase: string;
}

const ProgressBar = ({ current, total, percentage, phase }: ProgressBarProps) => {
  const getPhaseLabel = () => {
    switch (phase) {
      case 'welcome':
        return '👋 Bienvenida';
      case 'collecting':
        return '📝 Recopilando información';
      case 'confirmation':
        return '✅ Confirmación';
      case 'completed':
        return '🎉 ¡Completado!';
      default:
        return '';
    }
  };

  return (
    <div className="border-t border-border bg-card/50 p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">
          Progreso: {current}/{total}
        </span>
        <span className="text-xs text-muted-foreground">{getPhaseLabel()}</span>
      </div>
      
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-[#87CEEB] to-[#4682B4] transition-all duration-500 ease-out",
            percentage === 100 && "animate-pulse"
          )}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
