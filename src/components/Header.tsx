import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Shield, BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CitizenWatch</h1>
              <p className="text-xs text-muted-foreground">Billboard Compliance Monitor</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Camera className="h-4 w-4 mr-2" />
              Detect
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              Map View
            </Button>
          </nav>

          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="hidden sm:flex">
              Real-time Monitoring
            </Badge>
            <Button variant="default" size="sm">
              Report Issue
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;