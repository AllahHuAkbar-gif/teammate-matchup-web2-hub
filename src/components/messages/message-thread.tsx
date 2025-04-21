
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { DeveloperProfile } from "@/components/developer/developer-card";

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

interface MessageThreadProps {
  contact: DeveloperProfile;
  messages: Message[];
  currentUserId: string;
  onSendMessage: (text: string) => void;
}

export function MessageThread({ contact, messages, currentUserId, onSendMessage }: MessageThreadProps) {
  const [newMessage, setNewMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    onSendMessage(newMessage);
    setNewMessage("");
  };
  
  const contactInitials = contact.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  
  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={contact.avatar} alt={contact.name} />
            <AvatarFallback>{contactInitials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{contact.name}</h3>
            <p className="text-sm text-muted-foreground">{contact.location}</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isCurrentUser = message.senderId === currentUserId;
          return (
            <div 
              key={message.id} 
              className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  isCurrentUser 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary"
                }`}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${
                  isCurrentUser ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                </p>
              </div>
            </div>
          );
        })}
        
        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center">
            <p className="text-muted-foreground text-center">
              No messages yet. Send a message to start the conversation!
            </p>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex gap-2">
          <Textarea 
            placeholder="Type your message..."
            className="min-h-[80px]"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button type="submit" size="icon" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
