import { useState } from "react";
import { Plus, MessageSquare, Users, Bell, Pin, ChevronDown, ChevronUp, AtSign, Flag, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
const Communication = () => {
  const [selectedDept, setSelectedDept] = useState("all");
  const [expandedThread, setExpandedThread] = useState<number | null>(null);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [newComment, setNewComment] = useState("");
  const {
    toast
  } = useToast();
  const announcements = [{
    id: 1,
    title: "New Safety Protocol Implementation",
    content: "All departments must review and acknowledge the updated safety protocols by January 20th, 2024.",
    author: "Safety Manager",
    department: "Safety",
    timestamp: "2024-01-15 09:00",
    urgency: "High",
    pinned: true,
    acknowledgments: 89,
    totalStaff: 156
  }, {
    id: 2,
    title: "Q1 Budget Planning Meeting",
    content: "Department heads are requested to attend the quarterly budget planning session scheduled for January 25th.",
    author: "Finance Director",
    department: "Finance",
    timestamp: "2024-01-14 16:30",
    urgency: "Medium",
    pinned: false,
    acknowledgments: 12,
    totalStaff: 25
  }, {
    id: 3,
    title: "Track Maintenance Schedule Update",
    content: "Revised maintenance schedule for Line 1 has been uploaded to the documents section. All concerned teams please review.",
    author: "Engineering Manager",
    department: "Engineering",
    timestamp: "2024-01-14 11:15",
    urgency: "Medium",
    pinned: false,
    acknowledgments: 34,
    totalStaff: 45
  }];
  const discussions = [{
    id: 1,
    documentTitle: "Emergency Response Protocol v3.2",
    department: "Safety",
    initiatedBy: "Safety Officer Raj",
    timestamp: "2024-01-15 10:30",
    commentsCount: 8,
    participants: 12,
    urgency: "High",
    lastActivity: "2 hours ago",
    comments: [{
      id: 1,
      author: "Safety Officer Raj",
      content: "This protocol needs review from all department heads. Please check Section 4.2 regarding evacuation procedures.",
      timestamp: "2024-01-15 10:30",
      language: "English",
      mentions: ["@Engineering", "@Operations"]
    }, {
      id: 2,
      author: "Operations Manager",
      content: "Reviewed. The timing mentioned in 4.2 might be too optimistic for peak hours. Suggest 5-minute buffer.",
      timestamp: "2024-01-15 11:45",
      language: "English",
      mentions: []
    }, {
      id: 3,
      author: "HR Representative",
      content: "സ്റ്റാഫ് ട്രെയിനിംഗ് ഷെഡ്യൂൾ അപ്‌ഡേറ്റ് ചെയ്യേണ്ടതുണ്ട്. എമർജൻസി പ്രോട്ടോക്കോൾ അനുസരിച്ച്.",
      timestamp: "2024-01-15 12:20",
      language: "Malayalam",
      mentions: ["@Training Team"]
    }],
    acknowledged: ["Operations", "HR", "Finance"],
    pendingAck: ["Engineering", "Maintenance"]
  }, {
    id: 2,
    documentTitle: "Budget Allocation Report Q4-2024",
    department: "Finance",
    initiatedBy: "Finance Analyst",
    timestamp: "2024-01-14 14:20",
    commentsCount: 5,
    participants: 8,
    urgency: "Medium",
    lastActivity: "1 day ago",
    comments: [{
      id: 1,
      author: "Finance Analyst",
      content: "Budget allocation for infrastructure projects needs departmental input. Please review pages 15-20.",
      timestamp: "2024-01-14 14:20",
      language: "English",
      mentions: ["@Engineering", "@Operations"]
    }, {
      id: 2,
      author: "Engineering Head",
      content: "Infrastructure budget seems adequate. However, we need additional allocation for track monitoring systems.",
      timestamp: "2024-01-14 15:30",
      language: "English",
      mentions: []
    }],
    acknowledged: ["Engineering", "Safety"],
    pendingAck: ["Operations", "HR"]
  }];
  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const handlePostAnnouncement = () => {
    if (!newAnnouncement.trim()) return;
    toast({
      title: "Announcement Posted",
      description: "Your announcement has been posted successfully."
    });
    setNewAnnouncement("");
  };
  const handleAddComment = (threadId: number) => {
    if (!newComment.trim()) return;
    toast({
      title: "Comment Added",
      description: "Your comment has been added to the discussion."
    });
    setNewComment("");
  };
  const handleEscalate = (threadId: number, title: string) => {
    toast({
      title: "Discussion Escalated",
      description: `"${title}" has been escalated to management.`,
      variant: "destructive"
    });
  };
  return <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-heading">Cross-Department Communication</h1>
          <p className="text-caption">Break silos, enable structured conversations</p>
        </div>
        <div className="flex items-center space-x-3">
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
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Announcements Board */}
        <div className="space-y-6">
          <Card className="metro-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Announcements Board</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* New Announcement */}
              <div className="space-y-3 mb-6 p-4 bg-surface-grey rounded-lg">
                <Textarea placeholder="Post a new announcement (English/മലയാളം)..." value={newAnnouncement} onChange={e => setNewAnnouncement(e.target.value)} className="min-h-20" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="medium">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High Priority</SelectItem>
                        <SelectItem value="medium">Medium Priority</SelectItem>
                        <SelectItem value="low">Low Priority</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Pin className="w-4 h-4 mr-1" />
                      Pin
                    </Button>
                  </div>
                  <Button onClick={handlePostAnnouncement} className="btn-primary">
                    <Plus className="w-4 h-4 mr-1" />
                    Post
                  </Button>
                </div>
              </div>

              {/* Announcements List */}
              <div className="space-y-4">
                {announcements.map(announcement => <div key={announcement.id} className={`p-4 border rounded-lg transition-smooth ${announcement.pinned ? 'border-primary-blue bg-metro-light' : 'border-border hover:bg-surface-grey'}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {announcement.pinned && <Pin className="w-4 h-4 text-primary-blue" />}
                          <h4 className="font-medium">{announcement.title}</h4>
                          <Badge className={getUrgencyColor(announcement.urgency)}>
                            {announcement.urgency}
                          </Badge>
                        </div>
                        <p className="text-sm text-text-muted mb-2">{announcement.content}</p>
                        <div className="flex items-center space-x-4 text-xs text-text-muted">
                          <span>{announcement.author}</span>
                          <span>•</span>
                          <span>{announcement.department}</span>
                          <span>•</span>
                          <span>{announcement.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Acknowledgment Progress */}
                    <div className="mt-3 p-3 bg-white rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Acknowledgments</span>
                        <span className="text-sm text-text-muted">
                          {announcement.acknowledgments}/{announcement.totalStaff}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-success-green h-2 rounded-full" style={{
                      width: `${announcement.acknowledgments / announcement.totalStaff * 100}%`
                    }}></div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Threaded Discussions */}
        <div className="space-y-6">
          <Card className="metro-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Threaded Discussions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {discussions.map(discussion => <div key={discussion.id} className="border border-border rounded-lg overflow-hidden">
                    {/* Discussion Header */}
                    <div className="p-4 bg-surface-grey">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-medium text-primary-blue mb-1 text-zinc-950">
                            {discussion.documentTitle}
                          </h4>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className="bg-teal-100 text-teal-800">
                              {discussion.department}
                            </Badge>
                            <Badge className={getUrgencyColor(discussion.urgency)}>
                              {discussion.urgency}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-text-muted">
                            <span>Started by {discussion.initiatedBy}</span>
                            <span>•</span>
                            <span>{discussion.commentsCount} comments</span>
                            <span>•</span>
                            <span>{discussion.participants} participants</span>
                            <span>•</span>
                            <span>Last activity: {discussion.lastActivity}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setExpandedThread(expandedThread === discussion.id ? null : discussion.id)}>
                          {expandedThread === discussion.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </Button>
                      </div>

                      {/* Acknowledgment Status */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs font-medium text-success-green">Acknowledged:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {discussion.acknowledged.map((dept, index) => <Badge key={index} className="text-xs text-green-800 bg-neutral-50 mx-0">
                                {dept}
                              </Badge>)}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-warning-orange">Pending:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {discussion.pendingAck.map((dept, index) => <Badge key={index} className="text-xs text-orange-800 bg-neutral-50">
                                {dept}
                              </Badge>)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Comments */}
                    {expandedThread === discussion.id && <div className="p-4 space-y-4">
                        {discussion.comments.map(comment => <div key={comment.id} className="flex space-x-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs">
                                {comment.author.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium text-sm">{comment.author}</span>
                                <Badge variant="outline" className="text-xs">
                                  {comment.language}
                                </Badge>
                                <span className="text-xs text-text-muted">{comment.timestamp}</span>
                              </div>
                              <p className="text-sm text-text-dark mb-2">{comment.content}</p>
                              {comment.mentions.length > 0 && <div className="flex items-center space-x-1">
                                  <AtSign className="w-3 h-3 text-text-muted" />
                                  {comment.mentions.map((mention, index) => <Badge key={index} variant="outline" className="text-xs">
                                      {mention}
                                    </Badge>)}
                                </div>}
                            </div>
                          </div>)}

                        {/* Add Comment */}
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="space-y-3">
                            <Textarea placeholder="Add your comment (English/മലയാളം)..." value={newComment} onChange={e => setNewComment(e.target.value)} className="min-h-16" />
                            <div className="flex items-center justify-between">
                              <Button variant="outline" size="sm">
                                <AtSign className="w-4 h-4 mr-1" />
                                Mention Dept
                              </Button>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm" onClick={() => handleEscalate(discussion.id, discussion.documentTitle)}>
                                  <Flag className="w-4 h-4 mr-1" />
                                  Escalate
                                </Button>
                                <Button size="sm" onClick={() => handleAddComment(discussion.id)} className="btn-secondary">
                                  Comment
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>}
                  </div>)}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>;
};
export default Communication;