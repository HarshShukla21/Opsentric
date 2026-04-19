import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Receipt, Plus, Download, AlertCircle, CheckCircle2, Clock } from "lucide-react";

const invoices = [
  { id: "INV-2025-0421", client: "Lodha One Realty", date: "01 Apr 2025", due: "15 Apr 2025", amount: 480000, gst: 86400, status: "Paid" },
  { id: "INV-2025-0422", client: "Hiranandani Group", date: "01 Apr 2025", due: "15 Apr 2025", amount: 320000, gst: 57600, status: "Paid" },
  { id: "INV-2025-0423", client: "Phoenix Mall", date: "01 Apr 2025", due: "20 Apr 2025", amount: 640000, gst: 115200, status: "Pending" },
  { id: "INV-2025-0424", client: "Tata Consultancy", date: "01 Apr 2025", due: "10 Apr 2025", amount: 280000, gst: 50400, status: "Overdue" },
  { id: "INV-2025-0425", client: "Flipkart Logistics", date: "01 Apr 2025", due: "30 Apr 2025", amount: 820000, gst: 147600, status: "Pending" },
  { id: "INV-2025-0426", client: "Raheja Estate", date: "01 Apr 2025", due: "15 Apr 2025", amount: 180000, gst: 32400, status: "Paid" },
];

const statusStyles: Record<string, { cls: string; icon: typeof CheckCircle2 }> = {
  Paid: { cls: "bg-success/15 text-success border-success/30", icon: CheckCircle2 },
  Pending: { cls: "bg-accent/15 text-accent border-accent/30", icon: Clock },
  Overdue: { cls: "bg-destructive/15 text-destructive border-destructive/30", icon: AlertCircle },
};

export const Billing = () => (
  <AdminLayout
    title="Billing & Invoicing"
    subtitle="GST-compliant invoices, payment tracking and overdue alerts."
    action={
      <Button variant="hero"><Plus className="h-4 w-4" /> New Invoice</Button>
    }
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {[
        { label: "Invoiced (Apr)", value: "₹27.4L", tone: "text-foreground" },
        { label: "Collected", value: "₹14.8L", tone: "text-success" },
        { label: "Outstanding", value: "₹10.4L", tone: "text-accent" },
        { label: "Overdue", value: "₹2.8L", tone: "text-destructive" },
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
            <h3 className="font-semibold">Collection Trend</h3>
            <p className="text-xs text-muted-foreground">Last 6 months</p>
          </div>
          <span className="text-xs text-success">+12.4% MoM</span>
        </div>
        <div className="flex items-end gap-2 h-40">
          {[48, 52, 61, 58, 67, 74].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full rounded-md bg-gradient-primary shadow-glow-sm" style={{ height: `${h}%` }} />
              <span className="text-[10px] text-muted-foreground">{["Nov","Dec","Jan","Feb","Mar","Apr"][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="glass rounded-xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-lg bg-destructive/20 text-destructive flex items-center justify-center"><AlertCircle className="h-5 w-5" /></div>
          <div>
            <div className="text-sm font-semibold">Overdue Alerts</div>
            <div className="text-xs text-muted-foreground">3 invoices need attention</div>
          </div>
        </div>
        <ul className="text-xs space-y-2 mt-3">
          <li className="flex justify-between border-b border-border pb-2"><span>Tata Consultancy</span><span className="text-destructive">₹2.8L</span></li>
          <li className="flex justify-between border-b border-border pb-2"><span>Vendor Solutions</span><span className="text-destructive">₹1.4L</span></li>
          <li className="flex justify-between"><span>BlueOak Hotels</span><span className="text-destructive">₹0.9L</span></li>
        </ul>
        <Button variant="outline" className="w-full mt-4">Send Reminders</Button>
      </div>
    </div>

    <div className="glass rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold flex items-center gap-2"><Receipt className="h-4 w-4 text-accent" /> All Invoices</h3>
        <span className="text-xs text-muted-foreground">April 2025</span>
      </div>
      <table className="w-full text-sm">
        <thead className="text-xs text-muted-foreground bg-secondary/30">
          <tr>
            <th className="text-left p-3">Invoice</th>
            <th className="text-left p-3">Client</th>
            <th className="text-left p-3">Issue Date</th>
            <th className="text-left p-3">Due Date</th>
            <th className="text-right p-3">Amount</th>
            <th className="text-right p-3">GST (18%)</th>
            <th className="text-right p-3">Total</th>
            <th className="text-left p-3">Status</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => {
            const s = statusStyles[inv.status];
            const Icon = s.icon;
            return (
              <tr key={inv.id} className="border-t border-border">
                <td className="p-3 font-medium">{inv.id}</td>
                <td className="p-3 text-muted-foreground">{inv.client}</td>
                <td className="p-3">{inv.date}</td>
                <td className="p-3">{inv.due}</td>
                <td className="p-3 text-right">₹{inv.amount.toLocaleString("en-IN")}</td>
                <td className="p-3 text-right text-muted-foreground">₹{inv.gst.toLocaleString("en-IN")}</td>
                <td className="p-3 text-right font-bold">₹{(inv.amount + inv.gst).toLocaleString("en-IN")}</td>
                <td className="p-3">
                  <span className={`inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-md border font-medium ${s.cls}`}>
                    <Icon className="h-3 w-3" /> {inv.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </AdminLayout>
);

export default Billing;
