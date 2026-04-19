import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, CheckCircle2, XCircle, Eye } from "lucide-react";
import { toast } from "sonner";

const initialRequests = [
  { id: 1, n: "Ravi Kumar", s: "Housekeeping", l: "Mumbai", exp: "3 yrs", t: "2h ago", status: "pending" },
  { id: 2, n: "Suresh Patel", s: "Loader", l: "Ahmedabad", exp: "5 yrs", t: "4h ago", status: "pending" },
  { id: 3, n: "Anita Singh", s: "Helper", l: "Delhi", exp: "1 yr", t: "6h ago", status: "pending" },
  { id: 4, n: "Mohammed Iqbal", s: "Security", l: "Bengaluru", exp: "7 yrs", t: "1d ago", status: "pending" },
  { id: 5, n: "Priya Sharma", s: "Housekeeping", l: "Pune", exp: "2 yrs", t: "1d ago", status: "pending" },
  { id: 6, n: "Rajesh Yadav", s: "Driver", l: "Jaipur", exp: "8 yrs", t: "2d ago", status: "pending" },
  { id: 7, n: "Sunita Devi", s: "Helper", l: "Lucknow", exp: "4 yrs", t: "2d ago", status: "pending" },
  { id: 8, n: "Vikas Mehta", s: "Electrician", l: "Surat", exp: "6 yrs", t: "3d ago", status: "pending" },
];

const WorkerRequests = () => {
  const [requests, setRequests] = useState(initialRequests);

  const update = (id: number, status: "approved" | "rejected") => {
    setRequests((r) => r.filter((x) => x.id !== id));
    toast.success(status === "approved" ? "Worker approved" : "Application rejected");
  };

  return (
    <AdminLayout
      title="Worker Requests"
      subtitle={`${requests.length} pending applications awaiting review.`}
    >
      <div className="glass rounded-2xl p-5 mb-5 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by name or city..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
                <th className="text-left px-5 py-3">Worker</th>
                <th className="text-left px-5 py-3 hidden md:table-cell">Skill</th>
                <th className="text-left px-5 py-3 hidden md:table-cell">Location</th>
                <th className="text-left px-5 py-3 hidden lg:table-cell">Experience</th>
                <th className="text-left px-5 py-3 hidden lg:table-cell">Applied</th>
                <th className="text-right px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {requests.map((r) => (
                <tr key={r.id} className="hover:bg-secondary/30 transition">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                        {r.n.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{r.n}</div>
                        <div className="text-xs text-muted-foreground md:hidden">
                          {r.s} • {r.l}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm hidden md:table-cell">{r.s}</td>
                  <td className="px-5 py-4 text-sm hidden md:table-cell text-muted-foreground">{r.l}</td>
                  <td className="px-5 py-4 text-sm hidden lg:table-cell">{r.exp}</td>
                  <td className="px-5 py-4 text-xs hidden lg:table-cell text-muted-foreground">{r.t}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => toast("Viewing profile")}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="success" size="sm" onClick={() => update(r.id, "approved")}>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Approve</span>
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => update(r.id, "rejected")}>
                        <XCircle className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Reject</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {requests.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-sm text-muted-foreground">
                    🎉 All caught up — no pending requests!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default WorkerRequests;
