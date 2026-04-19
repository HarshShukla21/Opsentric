import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Wallet, Download, Send, CheckCircle2, Clock } from "lucide-react";

const payroll = [
  { id: "WRK-1042", name: "Ramesh Kumar", role: "Housekeeping", days: 26, base: 18000, ot: 1800, deduct: 400, net: 19400, status: "Paid" },
  { id: "WRK-1043", name: "Sunita Devi", role: "Cook", days: 28, base: 22000, ot: 2200, deduct: 500, net: 23700, status: "Paid" },
  { id: "WRK-1044", name: "Mohammed Aslam", role: "Security", days: 27, base: 20000, ot: 1500, deduct: 0, net: 21500, status: "Pending" },
  { id: "WRK-1045", name: "Priya Sharma", role: "Nanny", days: 24, base: 21000, ot: 0, deduct: 800, net: 20200, status: "Pending" },
  { id: "WRK-1046", name: "Vikram Singh", role: "Driver", days: 28, base: 24000, ot: 3200, deduct: 0, net: 27200, status: "Processing" },
  { id: "WRK-1047", name: "Lakshmi Iyer", role: "Housekeeping", days: 22, base: 18000, ot: 600, deduct: 1200, net: 17400, status: "Paid" },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-success/15 text-success border-success/30",
  Pending: "bg-accent/15 text-accent border-accent/30",
  Processing: "bg-primary/20 text-primary border-primary/40",
};

export const Salary = () => (
  <AdminLayout
    title="Salary & Payroll"
    subtitle="Auto-calculated payroll with overtime, deductions and one-click payslips."
    action={
      <div className="flex gap-2">
        <Button variant="outline"><Download className="h-4 w-4" /> Payslips ZIP</Button>
        <Button variant="hero"><Send className="h-4 w-4" /> Run Payroll</Button>
      </div>
    }
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {[
        { label: "April Payroll", value: "₹47.8L", tone: "text-foreground" },
        { label: "Paid", value: "₹32.4L", tone: "text-success" },
        { label: "Pending", value: "₹11.2L", tone: "text-accent" },
        { label: "Overtime Total", value: "₹4.2L", tone: "text-primary" },
      ].map((s) => (
        <div key={s.label} className="glass rounded-xl p-4">
          <div className="text-xs text-muted-foreground">{s.label}</div>
          <div className={`text-2xl font-bold mt-1 ${s.tone}`}>{s.value}</div>
        </div>
      ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-4 mb-6">
      <div className="glass rounded-xl p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-lg bg-success/20 text-success flex items-center justify-center"><CheckCircle2 className="h-5 w-5" /></div>
          <div>
            <div className="text-sm font-semibold">Payroll Cycle</div>
            <div className="text-xs text-muted-foreground">Ends in 4 days</div>
          </div>
        </div>
        <div className="h-2 rounded-full bg-secondary mt-4 overflow-hidden">
          <div className="h-full bg-gradient-primary" style={{ width: "78%" }} />
        </div>
        <div className="text-xs text-muted-foreground mt-2">78% of workers processed</div>
      </div>
      <div className="glass rounded-xl p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center"><Clock className="h-5 w-5" /></div>
          <div>
            <div className="text-sm font-semibold">Pending Approvals</div>
            <div className="text-xs text-muted-foreground">14 workers awaiting</div>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4">Review &amp; Approve</Button>
      </div>
      <div className="glass rounded-xl p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center"><Wallet className="h-5 w-5" /></div>
          <div>
            <div className="text-sm font-semibold">Bank Transfer</div>
            <div className="text-xs text-muted-foreground">NEFT batch ready</div>
          </div>
        </div>
        <Button variant="hero" className="w-full mt-4">Initiate Transfer</Button>
      </div>
    </div>

    <div className="glass rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold">April 2025 Payroll</h3>
        <span className="text-xs text-muted-foreground">Auto-generated from attendance</span>
      </div>
      <table className="w-full text-sm">
        <thead className="text-xs text-muted-foreground bg-secondary/30">
          <tr>
            <th className="text-left p-3">Worker</th>
            <th className="text-left p-3">Role</th>
            <th className="text-right p-3">Days</th>
            <th className="text-right p-3">Base</th>
            <th className="text-right p-3">Overtime</th>
            <th className="text-right p-3">Deductions</th>
            <th className="text-right p-3">Net Pay</th>
            <th className="text-left p-3">Status</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {payroll.map((r) => (
            <tr key={r.id} className="border-t border-border">
              <td className="p-3">
                <div className="font-medium">{r.name}</div>
                <div className="text-[11px] text-muted-foreground">{r.id}</div>
              </td>
              <td className="p-3 text-muted-foreground">{r.role}</td>
              <td className="p-3 text-right">{r.days}</td>
              <td className="p-3 text-right">₹{r.base.toLocaleString("en-IN")}</td>
              <td className="p-3 text-right text-primary">+₹{r.ot.toLocaleString("en-IN")}</td>
              <td className="p-3 text-right text-destructive">-₹{r.deduct.toLocaleString("en-IN")}</td>
              <td className="p-3 text-right font-bold text-success">₹{r.net.toLocaleString("en-IN")}</td>
              <td className="p-3">
                <span className={`text-[11px] px-2 py-1 rounded-md border font-medium ${statusStyles[r.status]}`}>{r.status}</span>
              </td>
              <td className="p-3 text-right">
                <Button variant="ghost" size="sm">Slip</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </AdminLayout>
);

export default Salary;
