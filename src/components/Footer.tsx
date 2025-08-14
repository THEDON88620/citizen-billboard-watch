import { Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">CitizenWatch</h3>
                <p className="text-sm text-muted-foreground">Billboard Compliance Monitor</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              Empowering cities and citizens with AI-powered billboard monitoring for safer, 
              more compliant urban advertising environments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Smart Detection</li>
              <li>Real-time Monitoring</li>
              <li>Citizen Reporting</li>
              <li>Compliance Tracking</li>
              <li>Geographic Mapping</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Community Forum</li>
              <li>Contact Support</li>
              <li>System Status</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 CitizenWatch. Built for civic innovation and community safety.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-destructive mx-1" /> for better cities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;