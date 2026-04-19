import {
  ShieldCheck,
  LayoutDashboard,
  UserPlus,
  Users,
  Calendar,
  Wallet,
  Receipt,
  BarChart3,
  Bell,
  QrCode,
  FileText,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Admin Panel",
    desc: "Login with password reset, multi-admin roles ready, granular permissions.",
  },
  {
    icon: LayoutDashboard,
    title: "Master Dashboard",
    desc: "Total employees, active clients, new requests, monthly revenue & pending dues.",
  },
  {
    icon: UserPlus,
    title: "Worker Self-Registration",
    desc: "OTP-verified mobile signup, document & photo upload, status tracking.",
  },
  {
    icon: Users,
    title: "Worker Approvals",
    desc: "Review applications, approve / reject, attach notes, manual add option.",
  },
  {
    icon: Calendar,
    title: "Attendance",
    desc: "Self-check, QR attendance, monthly reports, missing-attendance alerts.",
  },
  {
    icon: Wallet,
    title: "Salary Management",
    desc: "Auto calculation, overtime, payment status, payslip auto-generation.",
  },
  {
    icon: Receipt,
    title: "Billing & Invoicing",
    desc: "Generate invoices, track payments, GST support, client agreements.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Employee, client and profit reports with beautiful visual breakdowns.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Admin & worker alerts for assignments, salary, attendance & payments.",
  },
  {
    icon: QrCode,
    title: "QR Attendance",
    desc: "Workers scan a site QR to mark in/out — no fraud, no friction.",
  },
  {
    icon: FileText,
    title: "Document Vault",
    desc: "Aadhaar, ID, address & bank docs stored securely with version history.",
  },
  {
    icon: MapPin,
    title: "Live Location (Pro)",
    desc: "Optional worker location tracking for field operations & safety.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 gradient-text">
            One platform. Total control.
          </h2>
          <p className="text-muted-foreground">
            Everything an admin needs to run a modern workforce business — without juggling
            five different tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group glass rounded-2xl p-6 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-primary shadow-glow-sm mb-4 group-hover:shadow-glow transition-all">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
