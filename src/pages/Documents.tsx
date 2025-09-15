import { useState } from "react";
import { Search, Filter, Download, Eye, MessageSquare, Calendar, Building2, AlertCircle, FileText, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "safety", label: "Safety" },
    { value: "finance", label: "Finance" },
    { value: "hr", label: "Human Resources" },
    { value: "engineering", label: "Engineering" },
    { value: "operations", label: "Operations" },
  ];

  const categories = [
    { label: "Safety Docs", count: 89, color: "bg-red-100 text-red-800", critical: true },
    { label: "High Priority", count: 34, color: "bg-orange-100 text-orange-800" },
    { label: "Recent Updates", count: 67, color: "bg-blue-100 text-blue-800" },
    { label: "Regulatory", count: 45, color: "bg-gray-100 text-gray-800" },
  ];

  const documents = [
    {
      id: 1,
      title: "Emergency Response Protocol v3.2",
      department: "Safety",
      summary: "Updated emergency evacuation procedures for all metro stations with new safety protocols and communication channels.",
      priority: "Critical",
      uploadDate: "2024-01-15",
      size: "2.4 MB",
      type: "PDF",
      complianceImpact: true,
      tags: ["Emergency", "Safety", "Protocol"],
    },
    {
      id: 2,
      title: "Budget Allocation Report Q4-2024",
      department: "Finance",
      summary: "Comprehensive quarterly budget analysis with departmental allocations and expenditure tracking.",
      priority: "High",
      uploadDate: "2024-01-14",
      size: "1.8 MB",
      type: "Excel",
      complianceImpact: false,
      tags: ["Budget", "Finance", "Q4"],
    },
    {
      id: 3,
      title: "Track Maintenance Schedule - January",
      department: "Engineering",
      summary: "Monthly maintenance schedule for track infrastructure including inspection dates and repair protocols.",
      priority: "Medium",
      uploadDate: "2024-01-13",
      size: "956 KB",
      type: "PDF",
      complianceImpact: true,
      tags: ["Maintenance", "Track", "Schedule"],
    },
    {
      id: 4,
      title: "Staff Training Module - Customer Service",
      department: "HR",
      summary: "Comprehensive training materials for customer service excellence in both English and Malayalam.",
      priority: "Medium",
      uploadDate: "2024-01-12",
      size: "3.2 MB",
      type: "PowerPoint",
      complianceImpact: false,
      tags: ["Training", "Customer Service", "Bilingual"],
    },
  ];

  const complianceStats = {
    received: 10,
    completed: 8,
    pending: 2,
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-heading">Documents Hub</h1>
          <p className="text-caption">Smart document discovery and compliance oversight</p>
        </div>
      </div>

      {/* Semantic Search */}
      <Card className="metro-card">
        <CardContent className="p-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
            <Input
              placeholder="Semantic Search: 'Show safety circulars issued in last 3 months' or 'Documents about bridge maintenance in Malayalam'"
              className="pl-12 pr-4 h-12 text-lg bg-surface-grey border-none focus:ring-2 focus:ring-teal-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Select value={selectedDept} onValueChange={setSelectedDept}>
              <SelectTrigger className="w-48">
                <Building2 className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.value} value={dept.value}>
                    {dept.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="safety">Safety Documents</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="recent">Recent Updates</SelectItem>
                <SelectItem value="regulatory">Regulatory</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Date Range</span>
            </Button>

            <Button variant="outline" className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4" />
              <span>Compliance Impact</span>
            </Button>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex items-center space-x-2 h-auto py-2 px-4"
              >
                <div className={`w-3 h-3 rounded-full ${
                  category.critical ? 'bg-red-500' : 'bg-blue-500'
                }`} />
                <span>{category.label}</span>
                <Badge className={category.color}>
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Tracker */}
      <Card className="metro-card border-teal-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-teal-accent">
            <AlertCircle className="w-5 h-5" />
            <span>Compliance Tracker</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span className="font-medium">Government Directives This Month:</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-text-dark">{complianceStats.received}</div>
                <div className="text-xs text-text-muted">Received</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success-green">{complianceStats.completed}</div>
                <div className="text-xs text-text-muted">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning-orange">{complianceStats.pending}</div>
                <div className="text-xs text-text-muted">Pending</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="metro-card">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-blue mb-1">{doc.title}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className="bg-teal-100 text-teal-800">
                      {doc.department}
                    </Badge>
                    <Badge className={getPriorityColor(doc.priority)}>
                      {doc.priority}
                    </Badge>
                    {doc.complianceImpact && (
                      <Badge className="bg-red-100 text-red-800">
                        Compliance
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right text-sm text-text-muted">
                  <div>{doc.uploadDate}</div>
                  <div>{doc.size} • {doc.type}</div>
                </div>
              </div>

              <p className="text-sm text-text-muted mb-4 line-clamp-2">
                {doc.summary}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {doc.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" className="btn-secondary">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Ask AI
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Insights */}
      <Card className="metro-card border-teal-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-teal-accent">
            <FileText className="w-5 h-5" />
            <span>AI Document Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Duplicate Detection</h4>
              <div className="p-3 bg-surface-grey rounded-lg">
                <p className="text-sm text-text-muted">
                  Found 2 potentially overlapping documents across Safety & Engineering departments
                </p>
                <Button size="sm" variant="outline" className="mt-2">
                  Review Duplicates
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Processing Statistics</h4>
              <div className="p-3 bg-surface-grey rounded-lg">
                <div className="flex justify-between text-sm mb-1">
                  <span>Average Processing Time</span>
                  <span className="font-medium">2.3 minutes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>AI Classification Accuracy</span>
                  <span className="font-medium text-success-green">94.7%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;