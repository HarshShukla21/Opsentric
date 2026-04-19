import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, TrendingDown, Download, Users, Building2, Wallet } from "lucide-react";

const revenueMonths = [
  { m: "Nov", v: 18.4 }, { m: "Dec", v: 19.2 }, { m: "Jan", v: 22.1 },
  { m: "Feb", v: 21.4 }, { m: "Mar", v: 24.8 }, { m: "Apr", v: 27.4 },
];

const topClients = [
  { name: "Flipkart Logistics", value: 8.2, growth: 12.4 },
  { name: "Phoenix Mall", value: 6.4, growth: 8.1 },
  { name: "Lodha One", value: 4.8, growth: -2.3 },
  { name: "Hiranandani", value: 3.2, growth: 4.7 },
  { name: "Tata Consultancy", value: 2.8, growth: -1.2 },
];

const skillDist = [
  { name: "Housekeeping", value: 38, color: "bg-primary" },
  { name: "Security", value: 22, color: "bg-accent" },
  { name: "Cook", value: 14, color: "bg-success" },
  { name: "Driver", value: 12, color: "bg-primary/60" },
  { name: "Loader", value: 9, color: "bg-accent/60" },
  { name: "Other", value: 5, color: "bg-muted" },
];

export const Reports = () => {
  const max = Math.max(...revenueMonths.map((r) => r.v));
  return (
    <AdminLayout
      title="Reports & Analytics"
      subtitle="Visual analytics across workforce, clients and revenue."
      action={
        <div className="flex gap-2">
          <Button variant="outline">Last 6 Months</Button>
          <Button variant="hero"><Download className="h-4 w-4" /> Export PDF</Button>
        </div>
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Revenue (YTD)", value: "₹1.32 Cr", trend: "+18.4%", up: true, icon: Wallet },
          { label: "Active Workers", value: "248", trend: "+12", up: true, icon: Users },
          { label: "Active Clients", value: "38", trend: "+4", up: true, icon: Building2 },
          { label: "Worker Churn", value: "3.2%", trend: "-0.8%", up: true, icon: TrendingDown },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="glass rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <Icon className="h-4 w-4 text-accent" />
              </div>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className={`text-[11px] flex items-center gap-1 mt-1 ${s.up ? "text-success" : "text-destructive"}`}>
                {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {s.trend} vs last period
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="glass rounded-xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold flex items-center gap-2"><BarChart3 className="h-4 w-4 text-accent" /> Monthly Revenue</h3>
              <p className="text-xs text-muted-foreground">In ₹ lakhs</p>
            </div>
            <span className="text-xs text-success">+12.4% MoM</span>
          </div>
          <div className="flex items-end gap-3 h-44">
            {revenueMonths.map((r) => (
              <div key={r.m} className="flex-1 flex flex-col items-center gap-2">
                <div className="text-[10px] font-semibold">₹{r.v}L</div>
                <div className="w-full rounded-md bg-gradient-primary shadow-glow-sm" style={{ height: `${(r.v / max) * 100}%` }} />
                <span className="text-[10px] text-muted-foreground">{r.m}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold mb-4">Workforce by Skill</h3>
          <div className="flex h-3 w-full rounded-full overflow-hidden mb-4">
            {skillDist.map((s) => (
              <div key={s.name} className={s.color} style={{ width: `${s.value}%` }} />
            ))}
          </div>
          <ul className="space-y-2 text-xs">
            {skillDist.map((s) => (
              <li key={s.name} className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-sm ${s.color}`} />
                  {s.name}
                </span>
                <span className="text-muted-foreground">{s.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold mb-4">Top Clients by Revenue</h3>
          <ul className="space-y-3">
            {topClients.map((c) => (
              <li key={c.name}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-muted-foreground">₹{c.value}L/mo</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-gradient-primary" style={{ width: `${(c.value / 8.2) * 100}%` }} />
                </div>
                <div className={`text-[10px] mt-1 ${c.growth > 0 ? "text-success" : "text-destructive"}`}>
                  {c.growth > 0 ? "▲" : "▼"} {Math.abs(c.growth)}%
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold mb-4">Operational Highlights</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Attendance Rate", value: "94.2%" },
              { label: "Avg. Tenure", value: "11.4 mo" },
              { label: "Client Retention", value: "96%" },
              { label: "Profit Margin", value: "28.1%" },
              { label: "Disputes Open", value: "3" },
              { label: "NPS Score", value: "62" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-border p-3">
                <div className="text-[10px] text-muted-foreground uppercase">{m.label}</div>
                <div className="text-lg font-bold mt-1">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Reports;
