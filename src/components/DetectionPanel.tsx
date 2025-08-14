import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, MapPin, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const DetectionPanel = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionResult, setDetectionResult] = useState<any>(null);

  const handleCameraCapture = () => {
    setIsDetecting(true);
    
    // Simulate detection process
    setTimeout(() => {
      setDetectionResult({
        violations: [
          { type: "Size Violation", severity: "high", description: "Billboard exceeds permitted dimensions by 15%" },
          { type: "Location Issue", severity: "medium", description: "Placement too close to intersection" }
        ],
        compliant: [
          { type: "Content Approval", description: "Advertisement content meets guidelines" },
          { type: "Structural Safety", description: "Installation appears secure" }
        ],
        location: { lat: 40.7128, lng: -74.0060 },
        timestamp: new Date().toISOString(),
        confidence: 94
      });
      setIsDetecting(false);
    }, 3000);
  };

  const handleFileUpload = () => {
    // Create file input programmatically
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,video/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        handleCameraCapture(); // Simulate the same detection process
      }
    };
    input.click();
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Billboard Detection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capture images or upload files to instantly analyze billboard compliance with city regulations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Capture Interface */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-5 w-5 mr-2 text-primary" />
                Detection Interface
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                {isDetecting ? (
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Analyzing billboard...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Camera preview will appear here</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleCameraCapture}
                  disabled={isDetecting}
                  className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  {isDetecting ? "Analyzing..." : "Capture & Analyze"}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleFileUpload}
                  disabled={isDetecting}
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                  Detection Results
                </span>
                {detectionResult && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {detectionResult.confidence}% Confidence
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!detectionResult ? (
                <div className="text-center py-8">
                  <AlertTriangle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Capture or upload an image to see detection results</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Violations */}
                  {detectionResult.violations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-destructive mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Violations Detected ({detectionResult.violations.length})
                      </h4>
                      <div className="space-y-2">
                        {detectionResult.violations.map((violation: any, index: number) => (
                          <div key={index} className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-medium text-destructive">{violation.type}</p>
                                <p className="text-sm text-muted-foreground">{violation.description}</p>
                              </div>
                              <Badge 
                                variant={violation.severity === 'high' ? 'destructive' : 'secondary'}
                                className="text-xs"
                              >
                                {violation.severity}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Compliant Items */}
                  {detectionResult.compliant.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-success mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Compliant Items ({detectionResult.compliant.length})
                      </h4>
                      <div className="space-y-2">
                        {detectionResult.compliant.map((item: any, index: number) => (
                          <div key={index} className="p-3 rounded-lg bg-success/5 border border-success/20">
                            <p className="font-medium text-success">{item.type}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Metadata */}
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Detection Metadata
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">{detectionResult.location.lat}, {detectionResult.location.lng}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Timestamp</p>
                        <p className="font-medium flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {new Date(detectionResult.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-accent hover:shadow-glow transition-smooth">
                    Submit Report to Authorities
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DetectionPanel;