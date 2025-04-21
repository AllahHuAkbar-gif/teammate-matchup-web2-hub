
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";

export interface MessagePreview {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  lastMessage: string;
  timestamp: Date;
  unread: boolean;
}

interface MessagePreviewProps {
  message: MessagePreview;
  isSelected?: boolean;
  onClick?: () => void;
}

export function MessagePreview({ message, isSelected, onClick }: MessagePreviewProps) {
  const initials = message.senderName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
    
  const timeAgo = formatDistanceToNow(message.timestamp, { addSuffix: true });

  return (
    <div 
      className={cn(
        "flex items-start gap-3 p-3 cursor-pointer transition-colors",
        isSelected ? "bg-muted" : "hover:bg-muted/50",
        message.unread && "font-medium"
      )}
      onClick={onClick}
    >
      <Avatar>
        <AvatarImage src={message.senderAvatar} alt={message.senderName} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <p className="text-sm font-medium truncate">{message.senderName}</p>
          <span className="text-xs text-muted-foreground shrink-0">{timeAgo}</span>
        </div>
        <p className="text-sm text-muted-foreground truncate">{message.lastMessage}</p>
      </div>
      {message.unread && (
        <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2"></div>
      )}
    </div>
  );
}
