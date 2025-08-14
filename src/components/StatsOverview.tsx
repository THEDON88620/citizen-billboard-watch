import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Users, MapPin } from "lucide-react";

const StatsOverview = () => {
  const stats = [
    {
      title: "Total Billboards Monitored",
      value: "1,247",
      change: "+23",
      changeType: "increase" as const,
      icon: MapPin,
      color: "text-primary"
    },
    {
      title: "Compliance Rate",
      value: "98.5%",
      change: "+2.1%",
      changeType: "increase" as const,
      icon: CheckCircle,
      color: "text-success"
    },
    {
      title: "Active Violations",
      value: "18",
      change: "-5",
      changeType: "decrease" as const,
      icon: AlertTriangle,
      color: "text-warning"
    },
    {
      title: "Citizen Reports",
      value: "342",
      change: "+12",
      changeType: "increase" as const,
      icon: Users,
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-Time Monitoring Dashboard
          </h2>
          <p className="text-lg text-muted-foreground">
            Live statistics and compliance tracking across the city
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-sm font-medium">
                    <span className="text-muted-foreground">{stat.title}</span>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          stat.changeType === 'increase' 
                            ? 'bg-success/10 text-success border-success/20' 
                            : 'bg-accent/10 text-accent border-accent/20'
                        }`}
                      >
                        {stat.changeType === 'increase' ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {stat.change}
                      </Badge>
                      <span className="text-xs text-muted-foreground">from last week</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Recent Detection Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  time: "2 minutes ago",
                  action: "Violation detected at Downtown Plaza",
                  type: "Size Violation",
                  severity: "high"
                },
                {
                  time: "15 minutes ago",
                  action: "Citizen report submitted",
                  type: "Structural Issue",
                  severity: "medium"
                },
                {
                  time: "32 minutes ago",
                  action: "Compliance verified at Main Street",
                  type: "Approved",
                  severity: "low"
                },
                {
                  time: "1 hour ago",
                  action: "New billboard registered",
                  type: "Registration",
                  severity: "low"
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.severity === 'high' ? 'bg-destructive' :
                      activity.severity === 'medium' ? 'bg-warning' :
                      'bg-success'
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={
                      activity.severity === 'high' ? 'destructive' :
                      activity.severity === 'medium' ? 'secondary' :
                      'outline'
                    }
                    className="text-xs"
                  >
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StatsOverview;