"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  forwardRef,
} from "react";
import { OctagonAlert, CircleCheckBig } from "lucide-react";

type ToastType = "normal" | "success" | "error";
type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface Toast {
  id: string;
  message: React.ReactNode;
  type: ToastType;
  duration?: number;
  createdAt: number;
  isExiting?: boolean;
}

const ToastContext = React.createContext<{
  toasts: Toast[];
  addToast: (
    message: React.ReactNode,
    type: ToastType,
    duration?: number,
  ) => void;
  removeToast: (id: string) => void;
  startExitAnimation: (id: string) => void;
}>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  startExitAnimation: () => {},
});

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (message: React.ReactNode, type: ToastType, duration = 4000) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: Toast = {
        id,
        message,
        type,
        duration,
        createdAt: Date.now(),
      };

      setToasts((prev) => [...prev, newToast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const startExitAnimation = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, isExiting: true } : toast,
      ),
    );
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, startExitAnimation }}
    >
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

const ToastContainer = () => {
  const { toasts, removeToast, startExitAnimation } =
    React.useContext(ToastContext);
  const [position] = useState<Position>("top-right");
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const getPositionStyle = (): React.CSSProperties => {
    const positions: Record<Position, React.CSSProperties> = {
      "top-right": { top: "1rem", right: "1rem" },
      "top-left": { top: "1rem", left: "1rem" },
      "bottom-right": { bottom: "1rem", right: "1rem" },
      "bottom-left": { bottom: "1rem", left: "1rem" },
    };
    return positions[position];
  };

  const animationStyles = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    
    .toast-slide-in {
      animation: slideIn 0.5s ease forwards;
    }
    
    .toast-slide-out {
      animation: slideOut 0.5s ease forwards;
    }
  `;

  return (
    <div
      className="toast-container"
      style={{
        position: "fixed",
        zIndex: 9999,
        ...getPositionStyle(),
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <style>{animationStyles}</style>
      {toasts.map((toast) => (
        <ToastNotification
          key={toast.id}
          toast={toast}
          onDismiss={() => startExitAnimation(toast.id)}
          onRemove={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

interface ToastNotificationProps {
  toast: Toast;
  onDismiss: () => void;
  onRemove: () => void;
}

const ToastNotification = forwardRef<HTMLDivElement, ToastNotificationProps>(
  ({ toast, onDismiss, onRemove }, ref) => {
    const { type, message, isExiting } = toast;
    const [isVisible, setIsVisible] = useState(false);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
      animationRef.current = requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (isExiting) {
        const timer = setTimeout(() => {
          onRemove();
        }, 500);

        return () => clearTimeout(timer);
      }
    }, [isExiting, onRemove]);

    useEffect(() => {
      if (toast.duration && !isExiting) {
        const timer = setTimeout(() => {
          onDismiss();
        }, toast.duration);

        return () => clearTimeout(timer);
      }
    }, [toast, onDismiss, isExiting]);

    const getToastStyle = (): React.CSSProperties => {
      const baseStyle: React.CSSProperties = {
        padding: "1rem",
        paddingInline: "1.5rem",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        transform: "translateX(100%)",
        opacity: 0,
      };

      const typeStyles: Record<ToastType, React.CSSProperties> = {
        normal: {
          backgroundColor: "#161a30",
          color: "#ffffff",
        },
        success: {
          backgroundColor: "#388e3c",
          color: "#ffffff",
        },
        error: {
          backgroundColor: "#fee2e2",
          color: "#b91c1c",
        },
      };

      return { ...baseStyle, ...typeStyles[type] };
    };

    const getIcon = () => {
      if (type === "success") {
        return <CircleCheckBig className="h-5 w-5 text-white" />;
      }

      if (type === "error") {
        return <OctagonAlert className="h-5 w-5 text-[#b91c1c]" />;
      }

      return null;
    };

    return (
      <div
        ref={ref}
        className={`toast-notification ${isExiting ? "toast-slide-out" : isVisible ? "toast-slide-in" : ""}`}
        style={getToastStyle()}
        onClick={onDismiss}
      >
        {getIcon()}
        <div className="toast-message" style={{ flex: 1 }}>
          {message}
        </div>
        <button
          onClick={onDismiss}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "inherit",
            opacity: 0.7,
          }}
        >
          ×
        </button>
      </div>
    );
  },
);
ToastNotification.displayName = "ToastNotification";

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const toast = useCallback(
    (
      message: React.ReactNode,
      options?: { type?: ToastType; duration?: number },
    ) => {
      context.addToast(message, options?.type || "normal", options?.duration);
    },
    [context],
  );

  return {
    toast,
    success: (message: React.ReactNode, duration?: number) =>
      context.addToast(message, "success", duration),
    error: (message: React.ReactNode, duration?: number) =>
      context.addToast(message, "error", duration),
    dismiss: context.startExitAnimation,
    toasts: context.toasts,
  };
};
