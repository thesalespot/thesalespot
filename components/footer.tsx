import { CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background" id="contact">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <CircuitBoard className="h-6 w-6" />
              <span className="font-bold text-lg">TheSaleSpot</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering sales teams with AI-driven insights and seamless collaboration.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0">
                  Features
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  How It Works
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  Pricing
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="h-auto p-0">
                  About Us
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  Blog
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  Careers
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@thesalespot.com" className="text-sm hover:underline">
                  contact@thesalespot.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                123 Sales Street
                <br />
                Pune
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-sm text-muted-foreground border-t border-muted">
          <p>&copy; {new Date().getFullYear()} TheSaleSpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
