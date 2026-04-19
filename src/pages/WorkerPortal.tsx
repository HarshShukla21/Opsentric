import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Calendar,
  Wallet,
  FileText,
  User,
  Bell,
  LogOut,
  Clock,
  MapPin,
} from "lucide-react";

const WorkerPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-30 glass border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon"><Bell className="h-4 w-4" /></Button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-bold">RK</div>
              <div className="hidden sm:block text-xs">
                <div className="font-semibold">Ravi Kumar</div>
                <div className="text-muted-foreground">Housekeeping</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" asChild><Link to="/"><LogOut className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </header>

      <main className="container py-8 animate-fade-in-up">
        {/* Welcome / status */}
        <div className="glass rounded-2xl p-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">Welcome back</p>
            <h1 className="text-2xl md:text-3xl font-bold">Hi, Ravi 👋</h1>
            <p className="text-sm text-muted-foreground mt-1">Here's your work summary for today.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-success/15 text-success">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-sm font-medium">Approved & Active</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: Calendar, label: "Days Present", value: "22 / 26" },
            { icon: Clock, label: "Hours This Month", value: "186 hrs" },
            { icon: Wallet, label: "Salary Due", value: "₹18,400" },
            { icon: FileText, label: "Documents", value: "4 / 4 ✓" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <s.icon className="h-5 w-5 text-accent mb-3" />
              <div className="text-xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current assignment */}
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Current Assignment</h3>
            <div className="rounded-xl bg-background/40 border border-border p-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-accent">Client</div>
                  <h4 className="text-lg font-semibold mt-1">Skyline Hotels</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" /> Andheri East, Mumbai
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-success/15 text-success font-medium">
                  On-going
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs text-muted-foreground">Shift</div>
                  <div className="font-medium">Morning (6am – 2pm)</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Started</div>
                  <div className="font-medium">12 Jan 2025</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Supervisor</div>
                  <div className="font-medium">Mr. Khan</div>
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <Button variant="hero" size="sm">Mark Attendance</Button>
                <Button variant="outline" size="sm">View Site Details</Button>
              </div>
            </div>

            <h3 className="font-semibold mt-8 mb-4">Recent Attendance</h3>
            <div className="space-y-2">
              {[
                { d: "Today", in: "06:02 AM", out: "—", status: "Working" },
                { d: "Yesterday", in: "06:00 AM", out: "02:08 PM", status: "Done" },
                { d: "12 Jan", in: "06:05 AM", out: "02:00 PM", status: "Done" },
                { d: "11 Jan", in: "—", out: "—", status: "Off" },
              ].map((a, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg px-4 py-3 bg-background/40 border border-border text-sm">
                  <div className="font-medium w-24">{a.d}</div>
                  <div className="text-muted-foreground hidden sm:block">In: {a.in}</div>
                  <div className="text-muted-foreground hidden sm:block">Out: {a.out}</div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    a.status === "Working" ? "bg-accent/20 text-accent" :
                    a.status === "Done" ? "bg-success/15 text-success" :
                    "bg-secondary text-muted-foreground"
                  }`}>{a.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Profile</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span className="text-muted-foreground">Name</span><span className="font-medium">Ravi Kumar</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">Mobile</span><span className="font-medium">+91 98765 *****</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">Skill</span><span className="font-medium">Housekeeping</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">Joined</span><span className="font-medium">12 Jan 2025</span></li>
              </ul>
              <Button variant="outline" className="w-full mt-5">
                <User className="h-4 w-4" /> Update profile
              </Button>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-3">Notifications</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0" />
                  <div>
                    <div>Salary credited for December</div>
                    <div className="text-xs text-muted-foreground">2 days ago</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="h-2 w-2 rounded-full bg-success mt-1.5 shrink-0" />
                  <div>
                    <div>Your application was approved</div>
                    <div className="text-xs text-muted-foreground">1 week ago</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkerPortal;
