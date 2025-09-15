import { useState } from "react";
import { MessageCircle, X, Send, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  id: number;
  type: "ai" | "user";
  content: string;
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your KMRL AI Assistant. Ask me anything about your documents, pending approvals, or departmental insights.",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "ai",
        content: "I understand your query. Let me analyze the current data and provide you with relevant insights...",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-floating bg-teal-accent hover:bg-teal-accent/90 transition-smooth z-50 ${
          isOpen ? "hidden" : "flex"
        } items-center justify-center animate-pulse-glow`}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-floating z-50 flex flex-col animate-bounce-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-teal-accent rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">KMRL AI Assistant</h3>
                <p className="text-xs text-white/80">Bilingual Document Intelligence</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === "user"
                      ? "bg-primary-blue text-white"
                      : "bg-surface-grey text-text-dark"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about documents, approvals..."
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button size="icon" variant="ghost">
                <Mic className="w-4 h-4" />
              </Button>
              <Button size="icon" onClick={handleSendMessage} className="bg-teal-accent hover:bg-teal-accent/90">
                <Send className="w-4 h-4 text-white" />
              </Button>
            </div>
            <p className="text-xs text-text-muted mt-2">
              Try: "Summarize HR pending docs" or "Show urgent safety alerts"
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default AIChat;