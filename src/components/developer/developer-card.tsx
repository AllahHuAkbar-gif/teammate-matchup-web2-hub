
import { Badge, BadgeList } from "@/components/ui/badge-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export interface DeveloperProfile {
  id: string;
  name: string;
  avatar?: string;
  location: string;
  bio: string;
  skills: string[];
  hackathons: string[];
  isRemote: boolean;
}

interface DeveloperCardProps {
  developer: DeveloperProfile;
  compact?: boolean;
}

export function DeveloperCard({ developer, compact = false }: DeveloperCardProps) {
  const initials = developer.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className={`overflow-hidden ${compact ? 'h-full' : ''}`}>
      <CardHeader className="p-4 pb-0 flex flex-row items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={developer.avatar} alt={developer.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg leading-none">{developer.name}</h3>
              <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
                <MapPin className="h-3 w-3" />
                <span>{developer.location}</span>
                {developer.isRemote && (
                  <Badge variant="location" className="ml-1 text-[10px] py-0">Remote</Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        {!compact && <p className="text-muted-foreground text-sm mb-3">{developer.bio}</p>}
        <div className="space-y-2">
          <div>
            <h4 className="text-xs font-medium mb-1">Skills</h4>
            <BadgeList items={developer.skills} variant="tech" />
          </div>
          {!compact && developer.hackathons.length > 0 && (
            <div>
              <h4 className="text-xs font-medium mb-1">Interested in Hackathons</h4>
              <BadgeList items={developer.hackathons} variant="location" />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/developer/${developer.id}`}>View Profile</Link>
        </Button>
        <Button size="sm" className="gap-1" asChild>
          <Link to={`/messages/new/${developer.id}`}>
            <MessageCircle className="h-4 w-4" />
            Message
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
