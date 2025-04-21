
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Badge, BadgeList } from "@/components/ui/badge-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Globe, MapPin, Users } from "lucide-react";
import { hackathons, developers } from "@/data/mock-data";
import { DeveloperCard } from "@/components/developer/developer-card";

const HackathonDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const hackathon = hackathons.find(hack => hack.id === id);
  
  // Find developers interested in this hackathon
  const interestedDevelopers = developers.filter(
    dev => dev.hackathons.includes(hackathon?.name || "")
  ).slice(0, 4);
  
  if (!hackathon) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Hackathon Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The hackathon you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/hackathons">Back to Hackathons</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="mb-6">
            <Link to="/hackathons" className="text-primary hover:underline">
              &larr; Back to Hackathons
            </Link>
          </div>
          
          <div className="bg-background rounded-lg border overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-hackathon-500 to-tech-500 h-32"></div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">{hackathon.name}</h1>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {hackathon.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-muted-foreground">
                    {hackathon.isRemote ? (
                      <><Globe className="h-4 w-4" /> Remote</>
                    ) : (
                      <><MapPin className="h-4 w-4" /> {hackathon.location}</>
                    )}
                  </div>
                </div>
                
                <Button>Register Interest</Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-3">About this Hackathon</h2>
                  <p className="text-muted-foreground whitespace-pre-wrap mb-6">
                    {hackathon.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Dates</p>
                        <p className="text-muted-foreground">
                          {new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Participants</p>
                        <p className="text-muted-foreground">
                          {hackathon.participantsCount} registered
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Technologies</h2>
                  <BadgeList items={hackathon.technologies} variant="tech" className="gap-2" />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Interested Developers</h2>
                    <Link to="/developers" className="text-primary text-sm hover:underline">
                      View all
                    </Link>
                  </div>
                  
                  {interestedDevelopers.length > 0 ? (
                    <div className="space-y-4">
                      {interestedDevelopers.map(developer => (
                        <div key={developer.id} className="flex items-center gap-3">
                          <Link to={`/developer/${developer.id}`}>
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={developer.avatar} alt={developer.name} />
                              <AvatarFallback>
                                {developer.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                          </Link>
                          <div className="flex-1 min-w-0">
                            <Link to={`/developer/${developer.id}`} className="hover:underline">
                              <p className="font-medium truncate">{developer.name}</p>
                            </Link>
                            <p className="text-xs text-muted-foreground truncate">
                              {developer.skills.slice(0, 2).join(", ")}
                              {developer.skills.length > 2 && " + more"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No interested developers yet</p>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Registration</h2>
                  <Button className="w-full">Register for Hackathon</Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Registering will allow other participants to find you as a potential teammate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HackathonDetailPage;
