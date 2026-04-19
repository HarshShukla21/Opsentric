import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Password reset link sent");
  };

  return (
    <AuthLayout
      title="Reset password"
      subtitle="We'll email you a secure reset link."
      footer={
        <>
          Remembered it?{" "}
          <Link to="/login" className="text-accent hover:underline">
            Back to login
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="text-center py-6">
          <div className="h-12 w-12 mx-auto rounded-full bg-success/15 flex items-center justify-center mb-3">
            <Mail className="h-5 w-5 text-success" />
          </div>
          <p className="text-sm text-muted-foreground">
            Check your inbox for instructions to reset your password.
          </p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="email" type="email" placeholder="admin@Opsentric.app" className="pl-9" required />
            </div>
          </div>
          <Button type="submit" variant="hero" className="w-full">
            Send reset link
          </Button>
        </form>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
