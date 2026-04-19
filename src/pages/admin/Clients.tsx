import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Search, Users, FileText, MoreVertical, Plus, Phone, Mail } from "lucide-react";

const clients = [
  { id: "CLT-201", name: "Lodha One Realty", logo: "L1", contact: "Rohan Mehta", phone: "+91 98201 11122", email: "rohan@lodha.com", workers: 24, contract: "12 Months", value: "₹4,80,000/mo", status: "Active" },
  { id: "CLT-202", name: "Hiranandani Group", logo: "HG", contact: "Anita Rao", phone: "+91 99887 33445", email: "anita@hiranandani.com", workers: 18, contract: "24 Months", value: "₹3,20,000/mo", status: "Active" },
  { id: "CLT-203", name: "Phoenix Mall", logo: "PM", contact: "Karan Shah", phone: "+91 91234 88990", email: "ops@phoenix.com", workers: 32, contract: "36 Months", value: "₹6,40,000/mo", status: "Active" },
  { id: "CLT-204", name: "Tata Consultancy", logo: "TC", contact: "Meera Iyer", phone: "+91 90011 22334", email: "meera@tcs.com", workers: 14, contract: "12 Months", value: "₹2,80,000/mo", status: "Renewal Due" },
  { id: "CLT-205", name: "Flipkart Logistics", logo: "FL", contact: "Sandeep Joshi", phone: "+91 98800 55667", email: "sandeep@flipkart.com", workers: 41, contract: "6 Months", value: "₹8,20,000/mo", status: "Active" },
  { id: "CLT-206", name: "Raheja Estate", logo: "RE", contact: "Pooja Nair", phone: "+91 97766 12345", email: "pooja@raheja.com", workers: 9, contract: "12 Months", value: "₹1,80,000/mo", status: "On Hold" },
];

const statusStyles: Record<string, string> = {
  Active: "bg-success/15 text-success border-success/30",
  "Renewal Due": "bg-accent/15 text-accent border-accent/30",
  "On Hold": "bg-muted text-muted-foreground border-border",
};

export const Clients = () => (
  <AdminLayout
    title="Clients"
    subtitle="Manage corporate accounts, contracts and assigned workers."
    action={
      <Button variant="hero">
        <Plus className="h-4 w-4" /> New Client
      </Button>
    }
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {[
        { label: "Total Clients", value: "42" },
        { label: "Active Contracts", value: "38", tone: "text-success" },
        { label: "Renewal This Month", value: "6", tone: "text-accent" },
        { label: "Monthly Revenue", value: "₹27.4L", tone: "text-primary" },
      ].map((s) => (
        <div key={s.label} className="glass rounded-xl p-4">
          <div className="text-xs text-muted-foreground">{s.label}</div>
          <div className={`text-2xl font-bold mt-1 ${s.tone ?? ""}`}>{s.value}</div>
        </div>
      ))}
    </div>

    <div className="glass rounded-xl p-4 mb-4 flex flex-col md:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search clients, contracts, contacts..." className="pl-9 bg-secondary/50" />
      </div>
      <Button variant="outline">All Industries</Button>
      <Button variant="outline">All Statuses</Button>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {clients.map((c) => (
        <div key={c.id} className="glass rounded-xl p-5 hover:shadow-glow-sm transition group">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold">
                {c.logo}
              </div>
              <div>
                <div className="font-semibold">{c.name}</div>
                <div className="text-[11px] text-muted-foreground">{c.id} · {c.contract}</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-2"><Users className="h-3 w-3" /> Contact: <span className="text-foreground">{c.contact}</span></div>
            <div className="flex items-center gap-2"><Phone className="h-3 w-3" /> {c.phone}</div>
            <div className="flex items-center gap-2"><Mail className="h-3 w-3" /> {c.email}</div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div>
              <div className="text-[10px] text-muted-foreground uppercase">Workers</div>
              <div className="text-sm font-bold flex items-center gap-1">
                <Building2 className="h-3 w-3 text-accent" /> {c.workers}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground uppercase">Value</div>
              <div className="text-sm font-bold text-success">{c.value}</div>
            </div>
            <span className={`text-[10px] px-2 py-1 rounded-md border font-medium ${statusStyles[c.status]}`}>
              {c.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </AdminLayout>
);

export default Clients;
