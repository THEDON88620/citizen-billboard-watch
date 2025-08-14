import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, MapPin, AlertTriangle, Users } from "lucide-react";
import heroImage from "@/assets/hero-billboard.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Smart Billboard{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Compliance
              </span>{" "}
              Monitoring
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Leverage AI-powered detection to ensure billboard compliance, engage citizens in reporting, and maintain city regulations in real-time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-smooth">
              <Camera className="h-5 w-5 mr-2" />
              Start Detection
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
              <MapPin className="h-5 w-5 mr-2" />
              View Map
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-border/50">
              <AlertTriangle className="h-8 w-8 text-warning mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Violation Detection</h3>
              <p className="text-sm text-muted-foreground">AI-powered analysis</p>
            </Card>
            <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-border/50">
              <Users className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Citizen Reports</h3>
              <p className="text-sm text-muted-foreground">Community engagement</p>
            </Card>
            <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-border/50">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Real-time Tracking</h3>
              <p className="text-sm text-muted-foreground">Live monitoring</p>
            </Card>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img 
              src={heroImage} 
              alt="Billboard monitoring dashboard interface"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          
          {/* Floating stats cards */}
          <Card className="absolute -top-4 -left-4 p-4 bg-card shadow-glow border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">98.5%</div>
              <div className="text-sm text-muted-foreground">Compliance Rate</div>
            </div>
          </Card>
          
          <Card className="absolute -bottom-4 -right-4 p-4 bg-card shadow-glow border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">Monitored Billboards</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;