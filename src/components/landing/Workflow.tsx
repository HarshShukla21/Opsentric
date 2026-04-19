import { UserPlus, ShieldCheck, Users2, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Worker Applies",
    desc: "Worker visits the site, fills the registration form with documents & photo.",
    tag: "Step 01",
  },
  {
    icon: ShieldCheck,
    title: "Admin Reviews",
    desc: "Admin gets a notification, reviews the documents, and approves or rejects.",
    tag: "Step 02",
  },
  {
    icon: Users2,
    title: "Client Assignment",
    desc: "Approved worker is assigned to a client with shift, location & salary details.",
    tag: "Step 03",
  },
  {
    icon: BadgeCheck,
    title: "System Tracks Everything",
    desc: "Attendance, salary, billing & reports are tracked automatically end-to-end.",
    tag: "Step 04",
  },
];

export const Workflow = () => {
  return (
    <section id="workflow" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">
            Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 gradient-text">
            From application to payroll — automated.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="glass rounded-2xl p-6 h-full hover:border-accent/50 transition-all">
                <div className="text-[10px] tracking-widest uppercase text-accent font-bold mb-3">
                  {s.tag}
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow-sm mb-4">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-accent/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
