import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ShieldCheck, Users, BarChart3 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-glow-pulse" aria-hidden />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium text-muted-foreground">
              All-in-one Workforce, ERP & Worker Self-Service
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text glow-text">Run your workforce</span>
            <br />
            <span className="text-foreground">like a fortress.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Opsentric is the secure command center for staffing & service businesses —
            CMS landing site, admin panel, ERP/CRM, and a worker self-registration portal,
            unified under one premium dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" asChild>
              <Link to="/dashboard">
                Open Master Dashboard
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/worker/register">Apply for Job / Join as Worker</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Users, k: "12,400+", v: "Workers managed" },
              { icon: ShieldCheck, k: "99.99%", v: "Secure uptime" },
              { icon: BarChart3, k: "₹48Cr", v: "Payroll processed" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-4">
                <s.icon className="h-5 w-5 text-accent mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold gradient-text">{s.k}</div>
                <div className="text-[11px] md:text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
