import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Settings as SettingsIcon,
  Shield,
  Bell,
  Palette,
  Database,
  UserCog,
  Plus,
  MoreVertical,
  Upload,
  Download,
  KeyRound,
  Smartphone,
  Globe,
  Mail,
  MessageSquare,
  HardDrive,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Eye,
  Image as ImageIcon,
} from "lucide-react";

type TabKey = "general" | "roles" | "notifications" | "branding" | "security" | "backup";

const admins = [
  { name: "Rahul Verma", email: "rahul@Opsentric.in", role: "Super Admin", initials: "RV", status: "Active" },
  { name: "Anita Desai", email: "anita@Opsentric.in", role: "Operations", initials: "AD", status: "Active" },
  { name: "Sameer Khan", email: "sameer@Opsentric.in", role: "Finance", initials: "SK", status: "Active" },
  { name: "Priya Joshi", email: "priya@Opsentric.in", role: "HR Manager", initials: "PJ", status: "Invited" },
];

const rolePermissions = [
  { module: "Workers", superAdmin: true, operations: true, finance: false, hr: true },
  { module: "Clients", superAdmin: true, operations: true, finance: true, hr: false },
  { module: "Attendance", superAdmin: true, operations: true, finance: false, hr: true },
  { module: "Salary & Payroll", superAdmin: true, operations: false, finance: true, hr: true },
  { module: "Billing & Invoices", superAdmin: true, operations: false, finance: true, hr: false },
  { module: "Reports", superAdmin: true, operations: true, finance: true, hr: true },
  { module: "Website CMS", superAdmin: true, operations: false, finance: false, hr: false },
  { module: "Settings", superAdmin: true, operations: false, finance: false, hr: false },
];

const tabs: { key: TabKey; label: string; icon: typeof SettingsIcon }[] = [
  { key: "general", label: "General", icon: SettingsIcon },
  { key: "roles", label: "Admin & Roles", icon: UserCog },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "branding", label: "Branding", icon: Palette },
  { key: "security", label: "Security", icon: Shield },
  { key: "backup", label: "Data & Backup", icon: Database },
];

export const SettingsPage = () => {
  const [active, setActive] = useState<TabKey>("general");

  return (
    <AdminLayout
      title="Settings"
      subtitle="System preferences, admin roles, branding and integrations."
    >
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar nav */}
        <div className="glass rounded-xl p-3 h-fit lg:sticky lg:top-4">
          {tabs.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition mb-1 ${
                active === s.key
                  ? "bg-gradient-primary text-primary-foreground shadow-glow-sm"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <s.icon className="h-4 w-4" />
              {s.label}
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 space-y-6">
          {active === "general" && <GeneralTab />}
          {active === "roles" && <RolesTab />}
          {active === "notifications" && <NotificationsTab />}
          {active === "branding" && <BrandingTab />}
          {active === "security" && <SecurityTab />}
          {active === "backup" && <BackupTab />}
        </div>
      </div>
    </AdminLayout>
  );
};

/* ---------------- GENERAL ---------------- */
const GeneralTab = () => (
  <>
    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <SettingsIcon className="h-4 w-4 text-accent" /> Organisation
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: "Company Name", value: "Opsentric Workforce Pvt Ltd" },
          { label: "GSTIN", value: "27AABCS1234A1Z5" },
          { label: "PAN", value: "AABCS1234A" },
          { label: "Registered Address", value: "Andheri East, Mumbai 400069" },
          { label: "Currency", value: "INR (₹)" },
          { label: "Timezone", value: "Asia/Kolkata (IST)" },
          { label: "Financial Year Start", value: "April" },
          { label: "Default Language", value: "English" },
        ].map((f) => (
          <div key={f.label}>
            <label className="text-xs text-muted-foreground">{f.label}</label>
            <Input defaultValue={f.value} className="bg-secondary/50 mt-1" />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-2 mt-5">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button variant="hero" size="sm">Save Changes</Button>
      </div>
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Globe className="h-4 w-4 text-accent" /> Localization & Working Hours
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted-foreground">Date Format</label>
          <Input defaultValue="DD-MM-YYYY" className="bg-secondary/50 mt-1" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Time Format</label>
          <Input defaultValue="12-Hour (AM/PM)" className="bg-secondary/50 mt-1" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Shift Start</label>
          <Input defaultValue="08:00 AM" className="bg-secondary/50 mt-1" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Shift End</label>
          <Input defaultValue="06:00 PM" className="bg-secondary/50 mt-1" />
        </div>
      </div>
    </div>
  </>
);

/* ---------------- ADMIN & ROLES ---------------- */
const RolesTab = () => (
  <>
    <div className="glass rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <UserCog className="h-4 w-4 text-accent" /> Admin Team
        </h3>
        <Button variant="hero" size="sm">
          <Plus className="h-3 w-3" /> Invite Admin
        </Button>
      </div>
      <ul className="space-y-2">
        {admins.map((a) => (
          <li
            key={a.email}
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary/30"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                {a.initials}
              </div>
              <div>
                <div className="text-sm font-medium">{a.name}</div>
                <div className="text-[11px] text-muted-foreground">{a.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 rounded-md bg-secondary/60">{a.role}</span>
              <span
                className={`text-[10px] px-2 py-1 rounded-md border ${
                  a.status === "Active"
                    ? "bg-success/15 text-success border-success/30"
                    : "bg-accent/15 text-accent border-accent/30"
                }`}
              >
                {a.status}
              </span>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="glass rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <Lock className="h-4 w-4 text-accent" /> Role Permissions Matrix
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Toggle module access for each role. Super Admin has full access.
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Plus className="h-3 w-3" /> New Role
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-muted-foreground bg-secondary/30">
            <tr>
              <th className="text-left p-3">Module</th>
              <th className="text-center p-3">Super Admin</th>
              <th className="text-center p-3">Operations</th>
              <th className="text-center p-3">Finance</th>
              <th className="text-center p-3">HR Manager</th>
            </tr>
          </thead>
          <tbody>
            {rolePermissions.map((r) => (
              <tr key={r.module} className="border-t border-border">
                <td className="p-3 font-medium">{r.module}</td>
                {[r.superAdmin, r.operations, r.finance, r.hr].map((v, i) => (
                  <td key={i} className="p-3 text-center">
                    {v ? (
                      <CheckCircle2 className="h-4 w-4 text-success inline" />
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
);

/* ---------------- NOTIFICATIONS ---------------- */
const NotificationsTab = () => (
  <>
    <div className="grid sm:grid-cols-3 gap-4">
      {[
        { icon: Mail, label: "Email", value: "ON", tone: "text-success" },
        { icon: MessageSquare, label: "SMS", value: "ON", tone: "text-success" },
        { icon: Smartphone, label: "Push", value: "OFF", tone: "text-muted-foreground" },
      ].map((c) => (
        <div key={c.label} className="glass rounded-xl p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-secondary/60 flex items-center justify-center">
            <c.icon className="h-5 w-5 text-accent" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">{c.label} Channel</div>
            <div className={`text-lg font-bold ${c.tone}`}>{c.value}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Bell className="h-4 w-4 text-accent" /> Admin Notifications
      </h3>
      <div className="space-y-3">
        {[
          { label: "New worker applications", desc: "Email me when a worker registers", on: true },
          { label: "Attendance anomalies", desc: "Daily summary of late / absent workers", on: true },
          { label: "Invoice paid", desc: "Notify finance team on payment", on: true },
          { label: "Overdue invoices", desc: "Weekly overdue invoice digest", on: false },
          { label: "Client contract expiry", desc: "Alert 30 days before contract end", on: true },
          { label: "Salary processing", desc: "Notify when payroll is generated", on: true },
        ].map((n) => (
          <div key={n.label} className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <div className="text-sm font-medium">{n.label}</div>
              <div className="text-[11px] text-muted-foreground">{n.desc}</div>
            </div>
            <Switch defaultChecked={n.on} />
          </div>
        ))}
      </div>
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Smartphone className="h-4 w-4 text-accent" /> Worker Notifications
      </h3>
      <div className="space-y-3">
        {[
          { label: "SMS shift reminders", desc: "Send SMS 1 hour before shift", on: true },
          { label: "Salary credited alert", desc: "SMS on salary payment", on: true },
          { label: "Assignment update", desc: "Push notification on client change", on: true },
          { label: "Attendance reminder", desc: "Remind to check-in if not done by 9 AM", on: false },
        ].map((n) => (
          <div key={n.label} className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <div className="text-sm font-medium">{n.label}</div>
              <div className="text-[11px] text-muted-foreground">{n.desc}</div>
            </div>
            <Switch defaultChecked={n.on} />
          </div>
        ))}
      </div>
    </div>
  </>
);

/* ---------------- BRANDING ---------------- */
const BrandingTab = () => (
  <>
    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <ImageIcon className="h-4 w-4 text-accent" /> Logo & Favicon
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-dashed border-border p-6 flex flex-col items-center justify-center gap-2 bg-secondary/20">
          <div className="h-16 w-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-black text-xl shadow-glow-sm">
            S
          </div>
          <div className="text-xs text-muted-foreground">Primary Logo · 512×512</div>
          <Button variant="outline" size="sm" className="mt-2">
            <Upload className="h-3 w-3" /> Upload Logo
          </Button>
        </div>
        <div className="rounded-lg border border-dashed border-border p-6 flex flex-col items-center justify-center gap-2 bg-secondary/20">
          <div className="h-10 w-10 rounded-md bg-gradient-primary flex items-center justify-center text-primary-foreground font-black text-sm">
            S
          </div>
          <div className="text-xs text-muted-foreground">Favicon · 64×64</div>
          <Button variant="outline" size="sm" className="mt-2">
            <Upload className="h-3 w-3" /> Upload Favicon
          </Button>
        </div>
      </div>
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Palette className="h-4 w-4 text-accent" /> Color Palette
      </h3>
      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: "Background", color: "hsl(222 47% 7%)" },
          { label: "Primary", color: "hsl(225 67% 33%)" },
          { label: "Accent", color: "hsl(239 84% 67%)" },
          { label: "Success", color: "hsl(160 84% 39%)" },
          { label: "Foreground", color: "hsl(220 14% 91%)" },
          { label: "Border", color: "hsl(222 30% 18%)" },
        ].map((c) => (
          <div key={c.label} className="rounded-lg border border-border p-3">
            <div className="h-12 w-full rounded-md mb-2" style={{ background: c.color }} />
            <div className="text-xs font-medium">{c.label}</div>
            <div className="text-[10px] text-muted-foreground">{c.color}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Eye className="h-4 w-4 text-accent" /> Email Template Preview
      </h3>
      <div className="rounded-lg border border-border p-5 bg-secondary/20">
        <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-black mb-3">
          S
        </div>
        <div className="text-sm font-semibold mb-1">Welcome to Opsentric Workforce</div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          Your application has been received. Our team will review your documents within 24 hours and get back to
          you over SMS and email.
        </div>
        <Button variant="hero" size="sm" className="mt-3">View Status</Button>
      </div>
    </div>
  </>
);

/* ---------------- SECURITY ---------------- */
const SecurityTab = () => (
  <>
    <div className="grid sm:grid-cols-3 gap-4">
      {[
        { label: "2FA Enabled", value: "3 / 4", tone: "text-success", icon: Shield },
        { label: "Active Sessions", value: "7", tone: "text-accent", icon: Smartphone },
        { label: "Failed Logins (24h)", value: "2", tone: "text-destructive", icon: AlertTriangle },
      ].map((s) => (
        <div key={s.label} className="glass rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <s.icon className={`h-4 w-4 ${s.tone}`} />
          </div>
          <div className={`text-2xl font-bold mt-1 ${s.tone}`}>{s.value}</div>
        </div>
      ))}
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <KeyRound className="h-4 w-4 text-accent" /> Password Policy
      </h3>
      <div className="space-y-3">
        {[
          { label: "Minimum 8 characters", on: true },
          { label: "Require uppercase + lowercase", on: true },
          { label: "Require number", on: true },
          { label: "Require special character", on: false },
          { label: "Force password reset every 90 days", on: true },
          { label: "Block last 5 used passwords", on: true },
        ].map((p) => (
          <div key={p.label} className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div className="text-sm">{p.label}</div>
            <Switch defaultChecked={p.on} />
          </div>
        ))}
      </div>
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Smartphone className="h-4 w-4 text-accent" /> Two-Factor Authentication
      </h3>
      <div className="space-y-3">
        {[
          { label: "SMS OTP", desc: "Send 6-digit code on login", on: true },
          { label: "Authenticator App", desc: "Google Authenticator / Authy", on: true },
          { label: "Email OTP fallback", desc: "Backup if phone unavailable", on: false },
        ].map((p) => (
          <div key={p.label} className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <div className="text-sm font-medium">{p.label}</div>
              <div className="text-[11px] text-muted-foreground">{p.desc}</div>
            </div>
            <Switch defaultChecked={p.on} />
          </div>
        ))}
      </div>
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Eye className="h-4 w-4 text-accent" /> Recent Login Activity
      </h3>
      <ul className="space-y-2">
        {[
          { user: "Rahul Verma", device: "Chrome · Mumbai", time: "2 min ago", ok: true },
          { user: "Anita Desai", device: "Safari · Pune", time: "1 hr ago", ok: true },
          { user: "Unknown", device: "Firefox · Delhi", time: "3 hr ago", ok: false },
          { user: "Sameer Khan", device: "Edge · Bangalore", time: "Yesterday", ok: true },
        ].map((l, i) => (
          <li key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div className="flex items-center gap-3">
              <div
                className={`h-2 w-2 rounded-full ${l.ok ? "bg-success" : "bg-destructive animate-pulse"}`}
              />
              <div>
                <div className="text-sm font-medium">{l.user}</div>
                <div className="text-[11px] text-muted-foreground">{l.device}</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">{l.time}</div>
          </li>
        ))}
      </ul>
    </div>
  </>
);

/* ---------------- DATA & BACKUP ---------------- */
const BackupTab = () => (
  <>
    <div className="grid sm:grid-cols-3 gap-4">
      {[
        { label: "Storage Used", value: "12.4 GB", sub: "of 100 GB", tone: "text-accent", icon: HardDrive },
        { label: "Last Backup", value: "2 hr ago", sub: "Successful", tone: "text-success", icon: CheckCircle2 },
        { label: "Backup Frequency", value: "Daily", sub: "03:00 AM IST", tone: "text-primary", icon: RefreshCw },
      ].map((s) => (
        <div key={s.label} className="glass rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <s.icon className={`h-4 w-4 ${s.tone}`} />
          </div>
          <div className={`text-2xl font-bold mt-1 ${s.tone}`}>{s.value}</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">{s.sub}</div>
        </div>
      ))}
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Database className="h-4 w-4 text-accent" /> Backup Configuration
      </h3>
      <div className="space-y-3">
        {[
          { label: "Automatic daily backup", desc: "Runs every night at 03:00 AM", on: true },
          { label: "Cloud sync (encrypted)", desc: "AES-256 encrypted off-site copy", on: true },
          { label: "Include uploaded documents", desc: "Worker IDs, contracts, invoices", on: true },
          { label: "Email backup report", desc: "Daily summary to super admin", on: false },
        ].map((p) => (
          <div key={p.label} className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <div className="text-sm font-medium">{p.label}</div>
              <div className="text-[11px] text-muted-foreground">{p.desc}</div>
            </div>
            <Switch defaultChecked={p.on} />
          </div>
        ))}
      </div>
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Download className="h-4 w-4 text-accent" /> Export & Restore
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <Button variant="outline">
          <Download className="h-4 w-4" /> Export Workers (CSV)
        </Button>
        <Button variant="outline">
          <Download className="h-4 w-4" /> Export Clients (CSV)
        </Button>
        <Button variant="outline">
          <Download className="h-4 w-4" /> Export Attendance (XLSX)
        </Button>
        <Button variant="outline">
          <Download className="h-4 w-4" /> Full Database Snapshot
        </Button>
      </div>
      <div className="mt-5 p-4 rounded-lg border border-destructive/30 bg-destructive/5 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <div className="text-sm font-semibold text-destructive">Danger Zone</div>
          <div className="text-xs text-muted-foreground mt-1">
            Restoring a backup will overwrite all current data. This action cannot be undone.
          </div>
          <div className="flex gap-2 mt-3">
            <Button variant="outline" size="sm">
              <Upload className="h-3 w-3" /> Restore from Backup
            </Button>
            <Button variant="destructive" size="sm">
              Purge Old Records
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="glass rounded-xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <RefreshCw className="h-4 w-4 text-accent" /> Recent Backups
      </h3>
      <ul className="space-y-2">
        {[
          { date: "19 Apr 2026 · 03:00 AM", size: "412 MB", status: "Success" },
          { date: "18 Apr 2026 · 03:00 AM", size: "408 MB", status: "Success" },
          { date: "17 Apr 2026 · 03:00 AM", size: "405 MB", status: "Success" },
          { date: "16 Apr 2026 · 03:00 AM", size: "—", status: "Failed" },
        ].map((b, i) => (
          <li key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div className="flex items-center gap-3">
              <Database className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">{b.date}</div>
                <div className="text-[11px] text-muted-foreground">{b.size}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`text-[10px] px-2 py-1 rounded-md border ${
                  b.status === "Success"
                    ? "bg-success/15 text-success border-success/30"
                    : "bg-destructive/15 text-destructive border-destructive/30"
                }`}
              >
                {b.status}
              </span>
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default SettingsPage;
