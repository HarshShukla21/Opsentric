import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/40 rounded-full blur-3xl animate-glow-pulse" aria-hidden />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to take full control of your workforce?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Join hundreds of operations teams running their entire business on Opsentric.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="glow" asChild>
                <Link to="/dashboard">
                  Open Master Dashboard <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/30" asChild>
                <Link to="/worker/register">Apply as Worker</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
