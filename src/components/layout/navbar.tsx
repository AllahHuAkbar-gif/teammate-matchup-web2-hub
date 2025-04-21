
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Users, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight text-primary">HackMate</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium mx-6">
            <Link to="/developers" className="transition-colors hover:text-foreground/80 text-foreground/60">Developers</Link>
            <Link to="/hackathons" className="transition-colors hover:text-foreground/80 text-foreground/60">Hackathons</Link>
            <Link to="/messages" className="transition-colors hover:text-foreground/80 text-foreground/60">Messages</Link>
          </nav>
        </div>
        
        {isMobile && (
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight text-primary">HackMate</span>
          </Link>
        )}
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-1">
            <Link to="/search">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </Link>
            <Link to="/developers">
              <Button variant="ghost" size="icon">
                <Users className="h-5 w-5" />
                <span className="sr-only">Developers</span>
              </Button>
            </Link>
            <Link to="/messages">
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Messages</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="outline" className="ml-2">Profile</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
