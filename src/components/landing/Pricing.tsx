import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter",
    price: "₹2,999",
    desc: "For small staffing teams getting started.",
    features: [
      "Up to 100 workers",
      "Worker self-registration",
      "Attendance & basic reports",
      "Email notifications",
    ],
    cta: "Start free trial",
    variant: "outline" as const,
  },
  {
    name: "Business",
    price: "₹7,999",
    desc: "Most popular for growing operations.",
    features: [
      "Up to 1,000 workers",
      "Full ERP/CRM",
      "Salary & invoicing with GST",
      "QR attendance",
      "Priority support",
    ],
    cta: "Go Business",
    variant: "hero" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large workforce operations.",
    features: [
      "Unlimited workers",
      "Multi-admin roles",
      "Live location tracking",
      "AI worker–client matching",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    variant: "outline" as const,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 gradient-text">
            Simple plans. Premium power.
          </h2>
          <p className="text-muted-foreground">Per month, billed annually. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`glass rounded-2xl p-7 relative ${
                t.highlight
                  ? "border-accent/60 shadow-glow"
                  : "hover:border-accent/40 transition"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-bold bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full shadow-glow-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">{t.price}</span>
                {t.price !== "Custom" && (
                  <span className="text-sm text-muted-foreground">/mo</span>
                )}
              </div>
              <ul className="space-y-2.5 mb-7">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={t.variant} className="w-full" asChild>
                <Link to="/login">{t.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
