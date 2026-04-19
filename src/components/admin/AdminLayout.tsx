import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/Logo";
import {
  LayoutDashboard,
  Users,
  Building2,
  UserPlus,
  Calendar,
  Wallet,
  Receipt,
  BarChart3,
  Globe,
  Settings,
  Bell,
  Search,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Worker Requests", to: "/admin/worker-requests", icon: UserPlus, badge: "8" },
  { label: "Workers", to: "/admin/workers", icon: Users },
  { label: "Clients", to: "/admin/clients", icon: Building2 },
  { label: "Attendance", to: "/admin/attendance", icon: Calendar },
  { label: "Salary", to: "/admin/salary", icon: Wallet },
  { label: "Billing", to: "/admin/billing", icon: Receipt },
  { label: "Reports", to: "/admin/reports", icon: BarChart3 },
  { label: "Website CMS", to: "/admin/cms", icon: Globe },
  { label: "Settings", to: "/admin/settings", icon: Settings },
];

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export const AdminLayout = ({ children, title, subtitle, action }: AdminLayoutProps) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-sidebar-border">
          <Logo />
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 mb-2">
            Main
          </div>
          {nav.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                  active
                    ? "bg-gradient-primary text-primary-foreground shadow-glow-sm"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    active ? "bg-primary-foreground/20" : "bg-accent text-accent-foreground"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-sidebar-border">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent transition"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Link>
        </div>
      </aside>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-20 h-16 bg-background/80 backdrop-blur-xl border-b border-border flex items-center px-4 md:px-6 gap-3">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="relative hidden md:block flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search workers, clients, invoices..." className="pl-9 bg-secondary/50" />
          </div>

          <div className="flex-1 lg:flex-none" />

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive animate-glow-pulse" />
          </Button>

          <div className="flex items-center gap-2 pl-3 border-l border-border">
            <div className="h-8 w-8 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
              AD
            </div>
            <div className="hidden md:block">
              <div className="text-xs font-semibold">Admin User</div>
              <div className="text-[10px] text-muted-foreground">Super Admin</div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
            </div>
            {action}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};
