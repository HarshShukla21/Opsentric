import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  MoreVertical,
  Phone,
  MapPin,
  Briefcase,
  Star,
  Download,
  UserPlus,
} from "lucide-react";

const workers = [
  { id: "WRK-1042", name: "Ramesh Kumar", phone: "+91 98201 23456", skill: "Housekeeping", location: "Andheri, Mumbai", client: "Lodha One", status: "Active", rating: 4.8, joined: "Mar 2024" },
  { id: "WRK-1043", name: "Sunita Devi", phone: "+91 98765 11122", skill: "Cook", location: "Powai, Mumbai", client: "Hiranandani", status: "Active", rating: 4.9, joined: "Jan 2024" },
  { id: "WRK-1044", name: "Mohammed Aslam", phone: "+91 99887 65432", skill: "Security Guard", location: "Bandra, Mumbai", client: "Phoenix Mall", status: "Active", rating: 4.6, joined: "Oct 2023" },
  { id: "WRK-1045", name: "Priya Sharma", phone: "+91 90909 12345", skill: "Nanny", location: "Juhu, Mumbai", client: "Unassigned", status: "Idle", rating: 4.7, joined: "Apr 2024" },
  { id: "WRK-1046", name: "Vikram Singh", phone: "+91 91234 56789", skill: "Driver", location: "Worli, Mumbai", client: "Tata Group", status: "Active", rating: 4.5, joined: "Aug 2023" },
  { id: "WRK-1047", name: "Lakshmi Iyer", phone: "+91 98912 33445", skill: "Housekeeping", location: "Chembur, Mumbai", client: "Raheja Estate", status: "On Leave", rating: 4.4, joined: "Feb 2024" },
  { id: "WRK-1048", name: "Arjun Patel", phone: "+91 97700 11223", skill: "Loader", location: "Vasai, Mumbai", client: "Flipkart Hub", status: "Active", rating: 4.3, joined: "Nov 2023" },
  { id: "WRK-1049", name: "Fatima Khan", phone: "+91 98300 99887", skill: "Cook", location: "Mahim, Mumbai", client: "Unassigned", status: "Suspended", rating: 3.9, joined: "Jul 2023" },
];

const statusStyles: Record<string, string> = {
  Active: "bg-success/15 text-success border border-success/30",
  Idle: "bg-accent/15 text-accent border border-accent/30",
  "On Leave": "bg-muted text-muted-foreground border border-border",
  Suspended: "bg-destructive/15 text-destructive border border-destructive/30",
};

export const Workers = () => {
  const [query, setQuery] = useState("");
  const [skill, setSkill] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = workers.filter((w) => {
    const matchesQuery =
      w.name.toLowerCase().includes(query.toLowerCase()) ||
      w.id.toLowerCase().includes(query.toLowerCase()) ||
      w.client.toLowerCase().includes(query.toLowerCase());
    const matchesSkill = skill === "all" || w.skill === skill;
    const matchesStatus = status === "all" || w.status === status;
    return matchesQuery && matchesSkill && matchesStatus;
  });

  return (
    <AdminLayout
      title="Workers"
      subtitle="Filter, search and manage all your workers in one place."
      action={
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button variant="hero">
            <UserPlus className="h-4 w-4" /> Add Worker
          </Button>
        </div>
      }
    >
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Workers", value: "248", tone: "text-foreground" },
          { label: "Active Today", value: "201", tone: "text-success" },
          { label: "On Leave", value: "12", tone: "text-accent" },
          { label: "Unassigned", value: "35", tone: "text-primary" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-xl p-4">
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <div className={`text-2xl font-bold mt-1 ${s.tone}`}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="glass rounded-xl p-4 mb-4 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, ID or client..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 bg-secondary/50"
          />
        </div>
        <Select value={skill} onValueChange={setSkill}>
          <SelectTrigger className="md:w-48 bg-secondary/50">
            <SelectValue placeholder="Skill" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Skills</SelectItem>
            <SelectItem value="Housekeeping">Housekeeping</SelectItem>
            <SelectItem value="Cook">Cook</SelectItem>
            <SelectItem value="Security Guard">Security Guard</SelectItem>
            <SelectItem value="Driver">Driver</SelectItem>
            <SelectItem value="Loader">Loader</SelectItem>
            <SelectItem value="Nanny">Nanny</SelectItem>
          </SelectContent>
        </Select>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="md:w-44 bg-secondary/50">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Idle">Idle</SelectItem>
            <SelectItem value="On Leave">On Leave</SelectItem>
            <SelectItem value="Suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4" /> More
        </Button>
      </div>

      {/* Table */}
      <div className="glass rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-border">
              <TableHead>Worker</TableHead>
              <TableHead>Skill</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Assigned Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((w) => (
              <TableRow key={w.id} className="border-border">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {w.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{w.name}</div>
                      <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <Phone className="h-3 w-3" /> {w.phone} · {w.id}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-secondary/60">
                    <Briefcase className="h-3 w-3" /> {w.skill}
                  </span>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {w.location}
                  </span>
                </TableCell>
                <TableCell className="text-sm">{w.client}</TableCell>
                <TableCell>
                  <span className={`text-[11px] px-2 py-1 rounded-md font-medium ${statusStyles[w.status]}`}>
                    {w.status}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1 text-sm">
                    <Star className="h-3 w-3 fill-accent text-accent" /> {w.rating}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between p-4 text-xs text-muted-foreground border-t border-border">
          <span>Showing {filtered.length} of {workers.length} workers</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Workers;
