
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Badge, BadgeList } from "@/components/ui/badge-list";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, MapPin } from "lucide-react";
import { developers } from "@/data/mock-data";

const DeveloperDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const developer = developers.find(dev => dev.id === id);
  
  if (!developer) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Developer Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The developer you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/developers">Back to Developers</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }
  
  const initials = developer.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-6">
            <Link to="/developers" className="text-primary hover:underline">
              &larr; Back to Developers
            </Link>
          </div>
          
          <div className="bg-background rounded-lg border overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-hackathon-500 to-tech-500 h-32"></div>
            <div className="px-6 py-4 flex flex-col md:flex-row gap-6">
              <Avatar className="h-24 w-24 border-4 border-background -mt-12">
                <AvatarImage src={developer.avatar} alt={developer.name} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">{developer.name}</h1>
                    <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{developer.location}</span>
                      {developer.isRemote && (
                        <Badge variant="location" className="ml-1">Remote</Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button className="gap-2" asChild>
                    <Link to={`/messages/new/${developer.id}`}>
                      <MessageCircle className="h-5 w-5" />
                      Message
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-3">About</h2>
                  <p className="text-muted-foreground whitespace-pre-wrap">{developer.bio}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Skills</h2>
                  <BadgeList items={developer.skills} variant="tech" className="gap-2" />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Interested Hackathons</h2>
                  {developer.hackathons.length > 0 ? (
                    <BadgeList items={developer.hackathons} variant="location" className="gap-2" />
                  ) : (
                    <p className="text-muted-foreground">No hackathons listed</p>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Contact</h2>
                  <Button className="w-full gap-2" asChild>
                    <Link to={`/messages/new/${developer.id}`}>
                      <MessageCircle className="h-4 w-4" />
                      Send Message
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeveloperDetailPage;
