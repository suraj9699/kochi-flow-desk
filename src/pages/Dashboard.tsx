import { useState } from "react";
import { Calendar, Users, FileText, Clock, TrendingUp, AlertTriangle, CheckCircle, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import MetricCard from "@/components/MetricCard";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [selectedDept, setSelectedDept] = useState("all");
  const { toast } = useToast();

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "finance", label: "Finance" },
    { value: "hr", label: "Human Resources" },
    { value: "engineering", label: "Engineering" },
    { value: "safety", label: "Safety" },
    { value: "operations", label: "Operations" },
  ];

  const metrics = [
    {
      title: "Total Documents",
      value: "2,847",
      change: "+12%",
      icon: FileText,
      trend: "up" as const,
    },
    {
      title: "Pending to View",
      value: "34",
      change: "-8%",
      icon: Clock,
      trend: "down" as const,
    },
    {
      title: "Pending Acknowledgment",
      value: "12",
      change: "+3%",
      icon: AlertTriangle,
      trend: "up" as const,
    },
    {
      title: "Active Members",
      value: "156",
      change: "+5%",
      icon: Users,
      trend: "up" as const,
    },
  ];

  const urgentActions = [
    {
      id: 1,
      title: "Safety Protocol Update - Bridge Inspection",
      department: "Safety",
      sender: "Chief Safety Officer",
      timestamp: "2 hours ago",
      priority: "critical" as const,
    },
    {
      id: 2,
      title: "Budget Allocation - Q4 Infrastructure",
      department: "Finance",
      sender: "Finance Manager",
      timestamp: "4 hours ago",
      priority: "high" as const,
    },
    {
      id: 3,
      title: "Staff Training Schedule - January 2024",
      department: "HR",
      sender: "HR Director",
      timestamp: "6 hours ago",
      priority: "medium" as const,
    },
  ];

  const approvalQueue = [
    {
      id: 1,
      title: "Emergency Response Protocol v3.2",
      sender: "Safety Team",
      department: "Safety",
      timestamp: "1 hour ago",
      description: "Updated emergency evacuation procedures for all stations",
    },
    {
      id: 2,
      title: "Vendor Agreement - Track Maintenance",
      sender: "Procurement",
      department: "Engineering",
      timestamp: "3 hours ago",
      description: "Annual maintenance contract for track infrastructure",
    },
    {
      id: 3,
      title: "Staff Performance Metrics Q4",
      sender: "HR Analytics",
      department: "HR",
      timestamp: "5 hours ago",
      description: "Quarterly performance review documentation",
    },
  ];

  const handleApprove = (id: number, title: string) => {
    toast({
      title: "Document Approved",
      description: `"${title}" has been approved successfully.`,
    });
  };

  const handleFlag = (id: number, title: string) => {
    toast({
      title: "Document Flagged",
      description: `"${title}" has been flagged for review.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-heading">Manager Dashboard</h1>
          <p className="text-caption">Central oversight and control panel</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={selectedDept} onValueChange={setSelectedDept}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept.value} value={dept.value}>
                  {dept.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            icon={metric.icon}
            trend={metric.trend}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Insights Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Urgent Actions */}
        <Card className="metro-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-warning-orange">
              <AlertTriangle className="w-5 h-5" />
              <span>Urgent Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {urgentActions.map((action) => (
              <div
                key={action.id}
                className="p-3 rounded-lg border border-border hover:bg-surface-grey transition-smooth"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm">{action.title}</h4>
                  <Badge
                    className={`text-xs ${
                      action.priority === "critical"
                        ? "bg-red-100 text-red-800"
                        : action.priority === "high"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {action.priority}
                  </Badge>
                </div>
                <p className="text-xs text-text-muted">{action.department} • {action.timestamp}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Today's Briefing */}
        <Card className="metro-card border-teal-accent/20">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-teal-accent">
              <TrendingUp className="w-5 h-5" />
              <span>Today's AI Briefing</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-surface-grey rounded-lg">
                <h4 className="font-medium mb-2">Key Insights</h4>
                <ul className="text-sm text-text-muted space-y-1">
                  <li>• 89% document processing efficiency today</li>
                  <li>• 3 critical safety alerts require attention</li>
                  <li>• Finance approvals 15% faster than average</li>
                </ul>
              </div>
              <Button className="w-full btn-secondary">
                View Full Briefing
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Due Work Tracker */}
        <Card className="metro-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Due Work Tracker</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Today</span>
                <Badge className="bg-red-100 text-red-800">8 pending</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>This Week</span>
                <Badge className="bg-orange-100 text-orange-800">23 pending</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Next Week</span>
                <Badge className="bg-blue-100 text-blue-800">15 scheduled</Badge>
              </div>
              <div className="mt-4 p-3 bg-surface-grey rounded-lg">
                <div className="grid grid-cols-7 gap-1 text-xs text-center">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="font-medium text-text-muted">{day}</div>
                  ))}
                  {Array.from({ length: 7 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded flex items-center justify-center ${
                        i === 2 ? 'bg-red-200 text-red-800' : 
                        i === 4 ? 'bg-orange-200 text-orange-800' : 
                        'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Approvals Queue */}
      <Card className="metro-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>Approvals Queue</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {approvalQueue.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between p-4 border border-border rounded-lg hover:bg-surface-grey transition-smooth"
              >
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-text-muted mb-2">{item.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-text-muted">
                    <span>{item.sender}</span>
                    <span>•</span>
                    <span>{item.department}</span>
                    <span>•</span>
                    <span>{item.timestamp}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button
                    size="sm"
                    className="btn-success"
                    onClick={() => handleApprove(item.id, item.title)}
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleFlag(item.id, item.title)}
                  >
                    <Flag className="w-4 h-4 mr-1" />
                    Flag
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;