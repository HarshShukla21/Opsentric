import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Save, Image as ImageIcon, Plus, Trash2, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "Housekeeping", desc: "Trained, vetted housekeeping staff", icon: "🧹" },
  { name: "Security Guards", desc: "Licensed guards with background checks", icon: "🛡️" },
  { name: "Cooks & Chefs", desc: "Vegetarian, non-veg & multi-cuisine", icon: "👨‍🍳" },
  { name: "Drivers", desc: "Verified drivers with valid permits", icon: "🚗" },
];

const leads = [
  { name: "Anil Mehta", company: "Greenfield Developers", source: "Landing Form", status: "New", date: "2h ago" },
  { name: "Pooja R.", company: "Sunshine Hotels", source: "Phone", status: "In Talks", date: "Yesterday" },
  { name: "Rahul S.", company: "TechSpace Coworks", source: "Landing Form", status: "Quoted", date: "2 days ago" },
  { name: "Neha K.", company: "Citrus Cafe", source: "Referral", status: "Won", date: "1 week ago" },
];

const leadStatus: Record<string, string> = {
  New: "bg-accent/15 text-accent border-accent/30",
  "In Talks": "bg-primary/20 text-primary border-primary/40",
  Quoted: "bg-secondary text-foreground border-border",
  Won: "bg-success/15 text-success border-success/30",
};

export const CMS = () => (
  <AdminLayout
    title="Website CMS"
    subtitle="Edit your public landing site content and manage incoming leads."
    action={
      <div className="flex gap-2">
        <Button variant="outline"><ExternalLink className="h-4 w-4" /> Preview Site</Button>
        <Button variant="hero"><Save className="h-4 w-4" /> Publish Changes</Button>
      </div>
    }
  >
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Hero editor */}
      <div className="glass rounded-xl p-5 lg:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-4 w-4 text-accent" />
          <h3 className="font-semibold">Hero Section</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-muted-foreground">Headline</label>
            <Input defaultValue="India's most trusted workforce platform" className="bg-secondary/50 mt-1" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Subheadline</label>
            <Textarea
              defaultValue="Hire verified housekeeping, security, drivers and more — managed end-to-end with transparent billing."
              className="bg-secondary/50 mt-1 min-h-20"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground">Primary CTA</label>
              <Input defaultValue="Book a demo" className="bg-secondary/50 mt-1" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Secondary CTA</label>
              <Input defaultValue="Apply as Worker" className="bg-secondary/50 mt-1" />
            </div>
          </div>
          <div className="rounded-lg border border-dashed border-border p-6 text-center text-xs text-muted-foreground">
            <ImageIcon className="h-6 w-6 mx-auto mb-2 text-accent" />
            Drop new hero image or click to upload (1920×1080 recommended)
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="glass rounded-xl p-5">
        <h3 className="font-semibold mb-4">Contact Details</h3>
        <div className="space-y-3 text-sm">
          <div>
            <label className="text-xs text-muted-foreground flex items-center gap-1"><Mail className="h-3 w-3" /> Email</label>
            <Input defaultValue="hello@Opsentric.in" className="bg-secondary/50 mt-1" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground flex items-center gap-1"><Phone className="h-3 w-3" /> Phone</label>
            <Input defaultValue="+91 98201 00000" className="bg-secondary/50 mt-1" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> Address</label>
            <Textarea defaultValue="304, Lotus Tower, Andheri East, Mumbai 400069" className="bg-secondary/50 mt-1 min-h-16" />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="glass rounded-xl p-5 lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Services</h3>
          <Button variant="outline" size="sm"><Plus className="h-3 w-3" /> Add Service</Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {services.map((s) => (
            <div key={s.name} className="rounded-lg border border-border p-3 flex items-start gap-3 group">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-lg">{s.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{s.name}</div>
                <div className="text-xs text-muted-foreground truncate">{s.desc}</div>
              </div>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Leads */}
      <div className="glass rounded-xl p-5">
        <h3 className="font-semibold mb-4">Recent Leads</h3>
        <ul className="space-y-3">
          {leads.map((l) => (
            <li key={l.name} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{l.name}</div>
                  <div className="text-[11px] text-muted-foreground">{l.company} · {l.source}</div>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${leadStatus[l.status]}`}>{l.status}</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">{l.date}</div>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full mt-4">View All Leads</Button>
      </div>
    </div>
  </AdminLayout>
);

export default CMS;
