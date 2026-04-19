import {
  Users,
  Building2,
  UserPlus2,
  Wallet,
  TrendingUp,
  TrendingDown,
  CircleDollarSign,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Total Employees",
    value: "1,284",
    delta: "+12.4%",
    up: true,
    chart: [20, 35, 28, 45, 42, 60, 75],
  },
  {
    icon: Building2,
    label: "Active Clients",
    value: "187",
    delta: "+5 new",
    up: true,
    chart: [10, 18, 22, 30, 28, 40, 48],
  },
  {
    icon: UserPlus2,
    label: "New Worker Requests",
    value: "42",
    delta: "+18 today",
    up: true,
    chart: [5, 10, 8, 14, 22, 30, 42],
  },
  {
    icon: CircleDollarSign,
    label: "Monthly Revenue",
    value: "₹84.6L",
    delta: "+9.2%",
    up: true,
    chart: [40, 55, 50, 70, 65, 80, 95],
  },
];

const Sparkline = ({ data, up }: { data: number[]; up: boolean }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data
    .map((d, i) => `${(i / (data.length - 1)) * 100},${100 - ((d - min) / range) * 90 - 5}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" className="w-full h-12" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`g-${up}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <polygon
        points={`0,100 ${points} 100,100`}
        fill={`url(#g-${up})`}
      />
    </svg>
  );
};

export const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">
            Master Dashboard
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 gradient-text">
            See everything. Decide faster.
          </h2>
          <p className="text-muted-foreground">
            A live snapshot of your business — workforce, clients, revenue and pending dues
            in one glance.
          </p>
        </div>

        <div className="glass rounded-3xl p-4 md:p-6 shadow-elegant">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 mb-4">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-warning/70" />
            <span className="h-3 w-3 rounded-full bg-success/70" />
            <span className="ml-3 text-xs text-muted-foreground">Opsentric.app/admin</span>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-background/40 border border-border p-4 hover:border-accent/40 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <s.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span
                    className={`text-xs font-medium flex items-center gap-1 ${
                      s.up ? "text-success" : "text-destructive"
                    }`}
                  >
                    {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {s.delta}
                  </span>
                </div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                <div className="mt-2">
                  <Sparkline data={s.chart} up={s.up} />
                </div>
              </div>
            ))}
          </div>

          {/* Lower row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-2xl bg-background/40 border border-border p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Pending Worker Approvals</h4>
                <span className="text-xs text-muted-foreground">8 pending</span>
              </div>
              <ul className="divide-y divide-border">
                {[
                  { n: "Ravi Kumar", s: "Housekeeping", l: "Mumbai" },
                  { n: "Suresh Patel", s: "Loader", l: "Ahmedabad" },
                  { n: "Anita Singh", s: "Helper", l: "Delhi" },
                  { n: "Mohammed Iqbal", s: "Security", l: "Bengaluru" },
                ].map((w) => (
                  <li key={w.n} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        {w.n.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{w.n}</div>
                        <div className="text-xs text-muted-foreground">
                          {w.s} • {w.l}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-xs px-3 py-1 rounded-md bg-success/15 text-success hover:bg-success/25 transition">
                        Approve
                      </button>
                      <button className="text-xs px-3 py-1 rounded-md bg-destructive/15 text-destructive hover:bg-destructive/25 transition">
                        Reject
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-background/40 border border-border p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Pending Payments</h4>
                <Wallet className="h-4 w-4 text-accent" />
              </div>
              <div className="text-3xl font-bold gradient-text">₹6.4L</div>
              <p className="text-xs text-muted-foreground mb-4">across 23 invoices</p>

              <div className="space-y-3">
                {[
                  { c: "Acme Logistics", a: "₹1.2L", d: "Due in 3d" },
                  { c: "Skyline Hotels", a: "₹84K", d: "Overdue" },
                  { c: "GreenFields Farms", a: "₹1.8L", d: "Due in 7d" },
                ].map((p) => (
                  <div
                    key={p.c}
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <div>{p.c}</div>
                      <div className="text-[11px] text-muted-foreground">{p.d}</div>
                    </div>
                    <div className="font-semibold">{p.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
