import { Logo } from "@/components/Logo";
import { Github, Linkedin, Twitter, Instagram, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

          {/* Logo + Description */}
          <div className="col-span-2">
            <Logo />
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Premium command center for workforce, ERP/CRM and worker self-service —
              built for staffing & service businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#workflow" className="hover:text-foreground">Workflow</a></li>
              <li><a href="#dashboard" className="hover:text-foreground">Dashboard</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          {/* About Developer */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">About Developer</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              
              <li>Name: Harsh Shukla</li>

              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a 
                  href="https://instagram.com/harsh_shukla_21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  @harsh_shukla_21
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a 
                  href="tel:8108728060" 
                  className="hover:text-foreground"
                >
                  +91 8108728060
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <a 
                  href="https://github.com/harshShukla21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  harshShukla21
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border pt-6 gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Opsentric Workforce OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};