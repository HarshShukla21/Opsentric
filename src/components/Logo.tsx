import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: "h-6 w-6", text: "text-base" },
    md: { icon: "h-8 w-8", text: "text-xl" },
    lg: { icon: "h-10 w-10", text: "text-2xl" },
  };
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-accent/40 blur-lg group-hover:bg-accent/60 transition-all" />
        <div className="relative bg-gradient-primary p-2 rounded-lg shadow-glow-sm">
          <Shield className={`${sizes[size].icon} text-primary-foreground`} strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${sizes[size].text} font-bold gradient-text`}>Opsentric</span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Workforce OS</span>
      </div>
    </Link>
  );
};
