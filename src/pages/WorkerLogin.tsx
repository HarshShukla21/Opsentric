import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Lock } from "lucide-react";
import { toast } from "sonner";

const WorkerLogin = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"phone" | "otp">("phone");

  const onPhone = (e: FormEvent) => {
    e.preventDefault();
    setStep("otp");
    toast.success("OTP sent to your mobile");
  };

  const onOtp = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Welcome back!");
    navigate("/worker/portal");
  };

  return (
    <AuthLayout
      title="Worker Login"
      subtitle="Sign in to your worker portal."
      footer={
        <>
          Not registered yet?{" "}
          <Link to="/worker/register" className="text-accent hover:underline">
            Apply for a job
          </Link>
        </>
      }
    >
      {step === "phone" ? (
        <form className="space-y-4" onSubmit={onPhone}>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Mobile number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="phone" type="tel" placeholder="+91 98765 43210" className="pl-9" required />
            </div>
          </div>
          <Button type="submit" variant="hero" className="w-full">
            Send OTP
          </Button>
        </form>
      ) : (
        <form className="space-y-4" onSubmit={onOtp}>
          <div className="space-y-1.5">
            <Label htmlFor="otp">Enter 6-digit OTP</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="otp" inputMode="numeric" maxLength={6} placeholder="••••••" className="pl-9 tracking-[0.5em] text-center" required />
            </div>
            <button
              type="button"
              onClick={() => setStep("phone")}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              ← Change number
            </button>
          </div>
          <Button type="submit" variant="hero" className="w-full">
            Verify & Login
          </Button>
        </form>
      )}
    </AuthLayout>
  );
};

export default WorkerLogin;
