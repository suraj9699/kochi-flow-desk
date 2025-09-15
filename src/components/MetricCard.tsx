import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
  delay?: number;
}

const MetricCard = ({ title, value, change, icon: Icon, trend, delay = 0 }: MetricCardProps) => {
  const isPositive = trend === "up";
  
  return (
    <Card 
      className="metro-card animate-bounce-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-caption font-medium">{title}</p>
            <p className="text-3xl font-bold text-text-dark mt-2 mb-1">{value}</p>
            <div className="flex items-center space-x-1">
              <span
                className={`text-sm font-medium ${
                  isPositive ? "text-success-green" : "text-warning-orange"
                }`}
              >
                {change}
              </span>
              <span className="text-caption">vs last month</span>
            </div>
          </div>
          <div className={`p-3 rounded-lg ${
            isPositive ? "bg-green-100" : "bg-orange-100"
          }`}>
            <Icon className={`w-6 h-6 ${
              isPositive ? "text-success-green" : "text-warning-orange"
            }`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;