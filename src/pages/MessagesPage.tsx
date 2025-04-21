
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { MessagePreview } from "@/components/messages/message-preview";
import { MessageThread } from "@/components/messages/message-thread";
import { Separator } from "@/components/ui/separator";
import { generateId } from "@/lib/utils";
import { messagePreviews, messageThreads, currentUser } from "@/data/mock-data";
import { useParams } from "react-router-dom";

const MessagesPage = () => {
  const { threadId } = useParams();
  const [selectedThreadId, setSelectedThreadId] = useState(threadId || messagePreviews[0]?.id);
  const [threads, setThreads] = useState(messageThreads);
  const [previews, setPreviews] = useState(messagePreviews);
  
  const selectedThread = threads[selectedThreadId];
  
  const handleSendMessage = (text: string) => {
    if (!selectedThreadId || !text.trim()) return;
    
    const newMessage = {
      id: generateId(),
      senderId: currentUser.id,
      text,
      timestamp: new Date()
    };
    
    // Update threads
    setThreads(prev => ({
      ...prev,
      [selectedThreadId]: {
        ...prev[selectedThreadId],
        messages: [...prev[selectedThreadId].messages, newMessage]
      }
    }));
    
    // Update previews
    setPreviews(prev => 
      prev.map(preview => 
        preview.id === selectedThreadId
          ? {
              ...preview,
              lastMessage: text,
              timestamp: new Date(),
              unread: false
            }
          : preview
      )
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-80 border-r">
          <div className="py-4 px-6 border-b">
            <h2 className="font-semibold">Messages</h2>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-120px)]">
            {previews.length > 0 ? (
              previews.map(preview => (
                <div key={preview.id}>
                  <MessagePreview 
                    message={preview} 
                    isSelected={selectedThreadId === preview.id}
                    onClick={() => setSelectedThreadId(preview.id)}
                  />
                  <Separator />
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-muted-foreground">
                No messages yet
              </div>
            )}
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden">
          {selectedThread ? (
            <MessageThread 
              contact={selectedThread.contact}
              messages={selectedThread.messages}
              currentUserId={currentUser.id}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              Select a conversation or start a new one
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MessagesPage;
