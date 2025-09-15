import { useState } from "react";
import { Search, Download, Shield, Clock, User, Building2, FileText, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const Audit = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAction, setSelectedAction] = useState("all");
  const [selectedDept, setSelectedDept] = useState("all");
  const routingLogs = [{
    id: 1,
    document: "Emergency Response Protocol v3.2",
    primaryDept: "Safety",
    secondaryDepts: ["Operations", "HR"],
    confidence: 94.7,
    processingTime: "2.3 min",
    reasoning: "Contains safety audit findings requiring compliance review and operational coordination",
    status: "approved",
    timestamp: "2024-01-15 14:30"
  }, {
    id: 2,
    document: "Budget Request - Infrastructure",
    primaryDept: "Finance",
    secondaryDepts: ["Engineering"],
    confidence: 98.2,
    processingTime: "1.8 min",
    reasoning: "Financial document with engineering cost implications for infrastructure projects",
    status: "approved",
    timestamp: "2024-01-15 13:45"
  }, {
    id: 3,
    document: "Track Maintenance Protocol",
    primaryDept: "Engineering",
    secondaryDepts: ["Safety", "Operations"],
    confidence: 89.5,
    processingTime: "3.1 min",
    reasoning: "Technical maintenance procedure requiring safety compliance and operational scheduling",
    status: "modified",
    timestamp: "2024-01-15 12:20"
  }];
  const auditLogs = [{
    id: 1,
    timestamp: "2024-01-15 15:30:00",
    action: "Document Uploaded",
    document: "Emergency Protocol v2",
    user: "Rajesh Kumar",
    department: "Safety",
    status: "Completed",
    details: "Original file uploaded with bilingual content"
  }, {
    id: 2,
    timestamp: "2024-01-15 15:28:45",
    action: "AI Classification",
    document: "Emergency Protocol v2",
    user: "System AI",
    department: "System",
    status: "Completed",
    details: "Classified as Safety-Critical with 94.7% confidence"
  }, {
    id: 3,
    timestamp: "2024-01-15 15:25:12",
    action: "Document Viewed",
    document: "Budget Allocation Q4",
    user: "Priya Nair",
    department: "Finance",
    status: "Completed",
    details: "Full document review completed"
  }, {
    id: 4,
    timestamp: "2024-01-15 15:20:00",
    action: "Approval Given",
    document: "Staff Training Module",
    user: "Manager Sarah",
    department: "HR",
    status: "Completed",
    details: "Approved with manager notes"
  }, {
    id: 5,
    timestamp: "2024-01-15 15:15:33",
    action: "Comment Added",
    document: "Track Maintenance Guide",
    user: "Engineer John",
    department: "Engineering",
    status: "Completed",
    details: "Technical review comment added"
  }];
  const anomalies = [{
    id: 1,
    type: "Unusual Access",
    description: "Document accessed outside normal hours",
    severity: "Medium",
    time: "2024-01-15 02:30",
    user: "System Admin"
  }, {
    id: 2,
    type: "Processing Delay",
    description: "Document processing took 3x longer than average",
    severity: "Low",
    time: "2024-01-15 11:45",
    user: "Auto-Detected"
  }];
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "status-success";
      case "pending":
        return "status-warning";
      case "failed":
        return "status-error";
      default:
        return "status-neutral";
    }
  };
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-heading">Audit & Traceability</h1>
          <p className="text-caption">Full accountability and AI-powered routing oversight</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Audit Log</span>
          </Button>
          <Button className="btn-primary flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Security Report</span>
          </Button>
        </div>
      </div>

      {/* AI Routing Intelligence */}
      <Card className="metro-card border-teal-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-teal-accent">
            <TrendingUp className="w-5 h-5" />
            <span className="text-neutral-950">Intelligent Document Routing</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {routingLogs.map(log => <div key={log.id} className="p-4 border border-border rounded-lg hover:bg-surface-grey transition-smooth">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-primary-blue">{log.document}</h4>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-text-muted">
                      <span>Processing Time: {log.processingTime}</span>
                      <span>•</span>
                      <span>Confidence: {log.confidence}%</span>
                      <span>•</span>
                      <span>{log.timestamp}</span>
                    </div>
                  </div>
                  <Badge className={log.status === 'approved' ? 'status-success' : 'status-warning'}>
                    {log.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <span className="text-sm font-medium">Primary Department:</span>
                    <Badge className="ml-2 bg-teal-100 text-teal-800">{log.primaryDept}</Badge>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Secondary Departments:</span>
                    <div className="ml-2 inline-flex space-x-1">
                      {log.secondaryDepts.map((dept, index) => <Badge key={index} variant="outline" className="text-xs">
                          {dept}
                        </Badge>)}
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-surface-grey rounded-lg">
                  <span className="text-sm font-medium">AI Reasoning:</span>
                  <p className="text-sm text-text-muted mt-1">{log.reasoning}</p>
                </div>
                
                <div className="flex items-center justify-end space-x-2 mt-3">
                  <Button size="sm" variant="outline">Modify Routing</Button>
                  <Button size="sm" className="btn-secondary">View Details</Button>
                </div>
              </div>)}
          </div>
        </CardContent>
      </Card>

      {/* Audit Log Table */}
      <Card className="metro-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Detailed Audit Log</span>
          </CardTitle>
          <div className="flex items-center space-x-4 mt-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
              <Input placeholder="Search audit logs..." className="pl-10" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
            <Select value={selectedAction} onValueChange={setSelectedAction}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="upload">Upload</SelectItem>
                <SelectItem value="view">View</SelectItem>
                <SelectItem value="approve">Approve</SelectItem>
                <SelectItem value="comment">Comment</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedDept} onValueChange={setSelectedDept}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="safety">Safety</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-40">Timestamp</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Document</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map(log => <TableRow key={log.id} className="hover:bg-surface-grey">
                    <TableCell className="font-mono text-xs">
                      {log.timestamp}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {log.action === "Document Uploaded" && <FileText className="w-4 h-4 text-blue-500" />}
                        {log.action === "Document Viewed" && <User className="w-4 h-4 text-green-500" />}
                        {log.action === "Approval Given" && <CheckCircle className="w-4 h-4 text-green-500" />}
                        {log.action === "Comment Added" && <AlertTriangle className="w-4 h-4 text-orange-500" />}
                        {log.action === "AI Classification" && <TrendingUp className="w-4 h-4 text-teal-500" />}
                        <span className="text-sm">{log.action}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{log.document}</TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{log.department}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(log.status)}>
                        {log.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-text-muted max-w-xs truncate">
                      {log.details}
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

    </div>;
};
export default Audit;