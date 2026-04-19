import { ReactNode } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

interface PlaceholderModuleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  bullets: string[];
}

export const PlaceholderModule = ({ title, subtitle, icon, bullets }: PlaceholderModuleProps) => {
  return (
    <AdminLayout
      title={title}
      subtitle={subtitle}
      action={<Button variant="hero">+ New</Button>}
    >
      <div className="glass rounded-2xl p-10 text-center max-w-2xl mx-auto">
        <div className="h-14 w-14 rounded-xl bg-gradient-primary mx-auto flex items-center justify-center shadow-glow-sm mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">Module preview</h3>
        <p className="text-sm text-muted-foreground mb-6">
          This screen would normally show the full {title.toLowerCase()} workspace.
          For this static preview, here's what it includes:
        </p>
        <ul className="text-sm text-left max-w-md mx-auto space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <Construction className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  );
};
