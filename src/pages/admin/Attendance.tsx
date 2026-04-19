import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, QrCode, Search, Download, CheckCircle2, XCircle, Clock, Timer, MapPin, Smartphone, UserCheck, FileSpreadsheet } from "lucide-react";

const today = [
  { id: "WRK-1042", name: "Ramesh Kumar", client: "Lodha One", checkIn: "08:02 AM", checkOut: "—", hours: "5h 14m", status: "Present" },
  { id: "WRK-1043", name: "Sunita Devi", client: "Hiranandani", checkIn: "07:55 AM", checkOut: "—", hours: "5h 21m", status: "Present" },
  { id: "WRK-1044", name: "Mohammed Aslam", client: "Phoenix Mall", checkIn: "09:32 AM", checkOut: "—", hours: "3h 44m", status: "Late" },
  { id: "WRK-1045", name: "Priya Sharma", client: "—", checkIn: "—", checkOut: "—", hours: "—", status: "Absent" },
  { id: "WRK-1046", name: "Vikram Singh", client: "Tata Group", checkIn: "06:50 AM", checkOut: "—", hours: "6h 26m", status: "Overtime" },
  { id: "WRK-1047", name: "Lakshmi Iyer", client: "Raheja Estate", checkIn: "—", checkOut: "—", hours: "—", status: "On Leave" },
];

const statusStyles: Record<string, { cls: string; icon: typeof CheckCircle2 }> = {
  Present: { cls: "bg-success/15 text-success border-success/30", icon: CheckCircle2 },
  Late: { cls: "bg-accent/15 text-accent border-accent/30", icon: Clock },
  Absent: { cls: "bg-destructive/15 text-destructive border-destructive/30", icon: XCircle },
  Overtime: { cls: "bg-primary/20 text-primary border-primary/40", icon: Timer },
  "On Leave": { cls: "bg-muted text-muted-foreground border-border", icon: Calendar },
};

const week = [
  { day: "Mon", present: 198, absent: 12 },
  { day: "Tue", present: 205, absent: 8 },
  { day: "Wed", present: 210, absent: 5 },
  { day: "Thu", present: 195, absent: 14 },
  { day: "Fri", present: 201, absent: 10 },
  { day: "Sat", present: 188, absent: 22 },
  { day: "Sun", present: 145, absent: 65 },
];

export const Attendance = () => {
  const max = Math.max(...week.map((w) => w.present + w.absent));

  return (
    <AdminLayout
      title="Attendance"
      subtitle="Daily check-ins, overtime tracking and monthly reports."
      action={
        <div className="flex gap-2">
          <Button variant="outline">
            <QrCode className="h-4 w-4" /> QR Mode
          </Button>
          <Button variant="hero">
            <Download className="h-4 w-4" /> Export Report
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Present Today", value: "201", tone: "text-success" },
          { label: "Late Arrivals", value: "14", tone: "text-accent" },
          { label: "Absent", value: "12", tone: "text-destructive" },
          { label: "Overtime Hours", value: "47h", tone: "text-primary" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-xl p-4">
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <div className={`text-2xl font-bold mt-1 ${s.tone}`}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="glass rounded-xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">This Week</h3>
              <p className="text-xs text-muted-foreground">Present vs absent breakdown</p>
            </div>
            <span className="text-xs text-muted-foreground">Apr 14 – Apr 20</span>
          </div>
          <div className="flex items-end gap-3 h-44">
            {week.map((w) => {
              const total = w.present + w.absent;
              const presentH = (w.present / max) * 100;
              const absentH = (w.absent / max) * 100;
              return (
                <div key={w.day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="flex flex-col-reverse w-full gap-0.5 h-36">
                    <div className="w-full bg-gradient-primary rounded-sm" style={{ height: `${presentH}%` }} />
                    <div className="w-full bg-destructive/40 rounded-sm" style={{ height: `${absentH}%` }} />
                  </div>
                  <div className="text-[10px] text-muted-foreground">{w.day}</div>
                  <div className="text-[10px] font-semibold">{total}</div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 text-xs">
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-gradient-primary" /> Present</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-destructive/40" /> Absent</span>
          </div>
        </div>

        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold mb-4">Quick Mark</h3>
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search worker by ID..." className="pl-9 bg-secondary/50" />
            </div>
            <Button variant="success" className="w-full"><CheckCircle2 className="h-4 w-4" /> Mark Present</Button>
            <Button variant="outline" className="w-full"><Clock className="h-4 w-4" /> Mark Late</Button>
            <Button variant="destructive" className="w-full"><XCircle className="h-4 w-4" /> Mark Absent</Button>
          </div>
        </div>
      </div>

      {/* How attendance works */}
      <div className="glass rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-accent" /> How Attendance is Marked
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              4 ways workers and admins can record daily presence.
            </p>
          </div>
          <span className="text-[10px] px-2 py-1 rounded-md border bg-success/15 text-success border-success/30">
            All methods active
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              icon: QrCode,
              title: "QR Scan",
              tone: "text-accent",
              steps: [
                "Worker opens portal app",
                "Scans site QR code",
                "Auto check-in/out logged",
              ],
              tag: "Fastest",
            },
            {
              icon: MapPin,
              title: "Geo Check-in",
              tone: "text-primary",
              steps: [
                "Worker taps Check-In",
                "GPS verifies site (50m)",
                "Selfie photo captured",
              ],
              tag: "Most secure",
            },
            {
              icon: Smartphone,
              title: "SMS / Missed Call",
              tone: "text-success",
              steps: [
                "Worker dials toll-free",
                "Auto-disconnects in 2s",
                "Mobile matched & marked",
              ],
              tag: "No internet needed",
            },
            {
              icon: UserCheck,
              title: "Admin Manual",
              tone: "text-foreground",
              steps: [
                "Open Quick Mark panel",
                "Search worker by ID",
                "Tap Present / Late / Absent",
              ],
              tag: "Fallback",
            },
          ].map((m) => (
            <div
              key={m.title}
              className="rounded-lg border border-border p-4 hover:border-accent/40 hover:shadow-glow-sm transition bg-secondary/20"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`h-9 w-9 rounded-lg bg-secondary/60 flex items-center justify-center ${m.tone}`}>
                  <m.icon className="h-4 w-4" />
                </div>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground">{m.tag}</span>
              </div>
              <div className="text-sm font-semibold mb-2">{m.title}</div>
              <ol className="space-y-1.5">
                {m.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                    <span className="h-4 w-4 rounded-full bg-secondary/60 text-foreground flex items-center justify-center text-[9px] font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-5 grid md:grid-cols-3 gap-3">
          {[
            { label: "Late after", value: "9:15 AM", icon: Clock, tone: "text-accent" },
            { label: "Overtime after", value: "9 hrs/day", icon: Timer, tone: "text-primary" },
            { label: "Auto-mark absent", value: "12:00 PM", icon: XCircle, tone: "text-destructive" },
          ].map((r) => (
            <div key={r.label} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-secondary/20">
              <r.icon className={`h-4 w-4 ${r.tone}`} />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{r.label}</div>
                <div className="text-sm font-semibold">{r.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between p-3 rounded-lg border border-accent/30 bg-accent/5">
          <div className="flex items-center gap-2 text-xs">
            <FileSpreadsheet className="h-4 w-4 text-accent" />
            <span>Monthly attendance auto-syncs to <strong className="text-foreground">Salary module</strong> for payroll calculation.</span>
          </div>
          <Button variant="outline" size="sm">View Rules</Button>
        </div>
      </div>

      <div className="glass rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold">Today's Roster</h3>
          <span className="text-xs text-muted-foreground">{new Date().toDateString()}</span>
        </div>
        <table className="w-full text-sm">
          <thead className="text-xs text-muted-foreground bg-secondary/30">
            <tr>
              <th className="text-left p-3">Worker</th>
              <th className="text-left p-3">Client Site</th>
              <th className="text-left p-3">Check-In</th>
              <th className="text-left p-3">Check-Out</th>
              <th className="text-left p-3">Hours</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {today.map((row) => {
              const s = statusStyles[row.status];
              const Icon = s.icon;
              return (
                <tr key={row.id} className="border-t border-border">
                  <td className="p-3">
                    <div className="font-medium">{row.name}</div>
                    <div className="text-[11px] text-muted-foreground">{row.id}</div>
                  </td>
                  <td className="p-3 text-muted-foreground">{row.client}</td>
                  <td className="p-3">{row.checkIn}</td>
                  <td className="p-3">{row.checkOut}</td>
                  <td className="p-3">{row.hours}</td>
                  <td className="p-3">
                    <span className={`inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-md border font-medium ${s.cls}`}>
                      <Icon className="h-3 w-3" /> {row.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Attendance;
