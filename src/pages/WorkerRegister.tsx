import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Upload, ShieldCheck, FileText, User, Phone } from "lucide-react";
import { toast } from "sonner";

const steps = ["Personal", "Skills", "Documents", "Review"] as const;
type Step = (typeof steps)[number];

const WorkerRegister = () => {
  const [step, setStep] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Application submitted successfully!");
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center p-4 pt-24">
          <div className="glass rounded-2xl p-10 max-w-lg text-center shadow-elegant animate-fade-in-up">
            <div className="h-16 w-16 mx-auto rounded-full bg-success/15 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Application received!</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Your application is now <span className="text-warning font-medium">Pending Review</span>.
              You'll get an SMS once an admin approves your account.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" asChild>
                <Link to="/worker/login">Go to Worker Login</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 pb-16 relative">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="container relative max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              Join as a Worker
            </h1>
            <p className="text-sm text-muted-foreground">
              Fill in your details — admin review usually takes less than 24 hours.
            </p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between mb-8 max-w-xl mx-auto">
            {steps.map((s, i) => (
              <div key={s} className="flex-1 flex items-center">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all ${
                      i <= step
                        ? "bg-gradient-primary border-accent text-primary-foreground shadow-glow-sm"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                  </div>
                  <span className="text-[10px] mt-1.5 text-muted-foreground hidden sm:block">{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`h-px flex-1 mx-1 transition-all ${
                      i < step ? "bg-accent" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 md:p-8 shadow-card">
            {step === 0 && (
              <div className="space-y-5 animate-fade-in-up">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-accent" />
                  <h2 className="font-semibold">Personal details</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full name *</Label>
                    <Input id="name" placeholder="Ravi Kumar" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="28" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone">Mobile number * (OTP verified)</Label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="pl-9" required />
                    </div>
                    <Button
                      type="button"
                      variant={otpSent ? "success" : "outline"}
                      onClick={() => {
                        setOtpSent(true);
                        toast.success("OTP sent");
                      }}
                    >
                      {otpSent ? "OTP Sent ✓" : "Send OTP"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea id="address" placeholder="House no, area, city, state, pincode" required />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5 animate-fade-in-up">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <h2 className="font-semibold">Skills & experience</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Primary skill *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select skill" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="housekeeping">Housekeeping</SelectItem>
                        <SelectItem value="loader">Loader</SelectItem>
                        <SelectItem value="security">Security Guard</SelectItem>
                        <SelectItem value="helper">Helper</SelectItem>
                        <SelectItem value="driver">Driver</SelectItem>
                        <SelectItem value="electrician">Electrician</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="exp">Experience (years)</Label>
                    <Input id="exp" type="number" placeholder="3" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="prev">Previous employers</Label>
                  <Textarea id="prev" placeholder="List 1-2 previous employers (optional)" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5 animate-fade-in-up">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-accent" />
                  <h2 className="font-semibold">Documents</h2>
                </div>
                {[
                  { label: "Profile photo", hint: "JPG/PNG, max 2MB" },
                  { label: "Aadhaar card", hint: "PDF/Image, max 5MB" },
                  { label: "Address proof", hint: "Utility bill or rent agreement" },
                  { label: "Bank passbook / cheque", hint: "For salary credit" },
                ].map((d) => (
                  <div key={d.label} className="border border-dashed border-border rounded-xl p-4 hover:border-accent/60 transition cursor-pointer bg-background/40">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Upload className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{d.label}</div>
                        <div className="text-xs text-muted-foreground">{d.hint}</div>
                      </div>
                      <Button type="button" variant="outline" size="sm">Upload</Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-fade-in-up text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <h2 className="font-semibold">Review & submit</h2>
                </div>
                <p className="text-muted-foreground">
                  Please make sure all your details are correct. Once submitted, an admin will
                  review your profile and approve / reject within 24 hours.
                </p>
                <div className="rounded-xl bg-background/50 border border-border p-4 space-y-2">
                  <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="text-warning font-medium">Pending review</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Documents</span><span className="text-success font-medium">4 / 4 attached</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Mobile verification</span><span className="text-success font-medium">Verified</span></div>
                </div>
                <label className="flex items-start gap-2 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-1 accent-accent" />
                  I confirm all the information provided is true and accurate.
                </label>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button type="button" variant="ghost" onClick={prev} disabled={step === 0}>
                ← Back
              </Button>
              {step < steps.length - 1 ? (
                <Button type="button" variant="hero" onClick={next}>
                  Continue →
                </Button>
              ) : (
                <Button type="submit" variant="hero">
                  Submit application
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkerRegister;
