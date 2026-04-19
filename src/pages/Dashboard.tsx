import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Users,
  Building2,
  UserPlus2,
  CircleDollarSign,
  TrendingUp,
  Wallet,
  Calendar,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

const kpis = [
  { icon: Users, label: "Total Employees", value: "1,284", delta: "+12.4%", color: "from-blue-500 to-indigo-500" },
  { icon: Building2, label: "Active Clients", value: "187", delta: "+5 new", color: "from-indigo-500 to-purple-500" },
  { icon: UserPlus2, label: "New Worker Requests", value: "42", delta: "+18 today", color: "from-purple-500 to-pink-500" },
  { icon: CircleDollarSign, label: "Monthly Revenue", value: "₹84.6L", delta: "+9.2%", color: "from-emerald-500 to-teal-500" },
];

const requests = [
  { n: "Ravi Kumar", s: "Housekeeping", l: "Mumbai", t: "2h ago" },
  { n: "Suresh Patel", s: "Loader", l: "Ahmedabad", t: "4h ago" },
  { n: "Anita Singh", s: "Helper", l: "Delhi", t: "6h ago" },
  { n: "Mohammed Iqbal", s: "Security", l: "Bengaluru", t: "1d ago" },
  { n: "Priya Sharma", s: "Housekeeping", l: "Pune", t: "1d ago" },
];

const Dashboard = () => {
  return (
    <AdminLayout
      title="Master Dashboard"
      subtitle="Snapshot of your entire workforce business."
      action={
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button variant="hero">+ Add Worker</Button>
        </div>
      }
    >
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {kpis.map((k) => (
          <div key={k.label} className="glass rounded-2xl p-5 hover:border-accent/40 transition">
            <div className="flex items-center justify-between mb-4">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${k.color} flex items-center justify-center shadow-glow-sm`}>
                <k.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs flex items-center gap-1 text-success font-medium">
                <TrendingUp className="h-3 w-3" /> {k.delta}
              </span>
            </div>
            <div className="text-2xl md:text-3xl font-bold">{k.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Two-column area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Worker requests */}
        <div className="lg:col-span-2 glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-semibold">New Worker Requests</h3>
              <p className="text-xs text-muted-foreground">Approve or reject pending applications</p>
            </div>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <ul className="divide-y divide-border">
            {requests.map((w) => (
              <li key={w.n} className="flex flex-col sm:flex-row sm:items-center gap-3 py-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {w.n.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{w.n}</div>
                    <div className="text-xs text-muted-foreground">
                      {w.s} • {w.l} • {w.t}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 sm:justify-end">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => toast.success(`Approved ${w.n}`)}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast.error(`Rejected ${w.n}`)}
                  >
                    Reject
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Side widgets */}
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Pending Payments</h3>
              <Wallet className="h-4 w-4 text-accent" />
            </div>
            <div className="text-3xl font-bold gradient-text">₹6.4L</div>
            <p className="text-xs text-muted-foreground mb-4">across 23 invoices</p>
            <div className="space-y-3 text-sm">
              {[
                { c: "Acme Logistics", a: "₹1.2L", d: "Due in 3d", warn: false },
                { c: "Skyline Hotels", a: "₹84K", d: "Overdue", warn: true },
                { c: "GreenFields", a: "₹1.8L", d: "Due in 7d", warn: false },
              ].map((p) => (
                <div key={p.c} className="flex items-center justify-between">
                  <div>
                    <div>{p.c}</div>
                    <div className={`text-[11px] ${p.warn ? "text-destructive" : "text-muted-foreground"}`}>
                      {p.d}
                    </div>
                  </div>
                  <div className="font-semibold">{p.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Today's Attendance</h3>
              <Calendar className="h-4 w-4 text-accent" />
            </div>
            <div className="flex items-end gap-2 mb-3">
              <div className="text-3xl font-bold">1,142</div>
              <div className="text-xs text-muted-foreground mb-1">/ 1,284 present</div>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-gradient-primary" style={{ width: "89%" }} />
            </div>
            <div className="grid grid-cols-3 mt-4 text-center">
              <div>
                <div className="text-sm font-bold text-success">1,142</div>
                <div className="text-[10px] text-muted-foreground">Present</div>
              </div>
              <div>
                <div className="text-sm font-bold text-warning">87</div>
                <div className="text-[10px] text-muted-foreground">Late</div>
              </div>
              <div>
                <div className="text-sm font-bold text-destructive">55</div>
                <div className="text-[10px] text-muted-foreground">Absent</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="h-4 w-4 text-warning" />
              <h3 className="font-semibold text-sm">Alerts</h3>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• 3 worker contracts expiring this week</li>
              <li>• Skyline Hotels invoice overdue by 5 days</li>
              <li>• 12 workers haven't marked attendance</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
