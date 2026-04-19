import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  footer?: ReactNode;
}

export const AuthLayout = ({ children, title, subtitle, footer }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] -z-10 animate-glow-pulse" aria-hidden />

      <div className="w-full max-w-md relative animate-fade-in-up">
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>
        <div className="glass rounded-2xl p-8 shadow-elegant">
          <h1 className="text-2xl font-bold mb-1">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}
          {children}
        </div>
        {footer && (
          <p className="text-center text-sm text-muted-foreground mt-6">{footer}</p>
        )}
        <p className="text-center text-xs text-muted-foreground mt-4">
          <Link to="/" className="hover:text-foreground">← Back to home</Link>
        </p>
      </div>
    </div>
  );
};
