
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BadgeList } from "@/components/ui/badge-list";
import { Calendar, Globe, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

export interface Hackathon {
  id: string;
  name: string;
  location: string;
  isRemote: boolean;
  startDate: string;
  endDate: string;
  description: string;
  category: string;
  technologies: string[];
  participantsCount: number;
}

interface HackathonCardProps {
  hackathon: Hackathon;
  compact?: boolean;
}

export function HackathonCard({ hackathon, compact = false }: HackathonCardProps) {
  return (
    <Card className={`overflow-hidden ${compact ? 'h-full' : ''}`}>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{hackathon.name}</h3>
            <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
              {hackathon.isRemote ? (
                <><Globe className="h-3 w-3" /> Remote</>
              ) : (
                <><MapPin className="h-3 w-3" /> {hackathon.location}</>
              )}
            </div>
          </div>
          <div className="bg-primary/10 rounded-md px-2 py-1 text-xs text-primary font-medium">
            {hackathon.category}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        {!compact && <p className="text-muted-foreground text-sm mb-3">{hackathon.description}</p>}
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{hackathon.participantsCount} participants</span>
          </div>
          {!compact && (
            <div>
              <h4 className="text-xs font-medium mb-1">Technologies</h4>
              <BadgeList items={hackathon.technologies} variant="tech" />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" asChild>
          <Link to={`/hackathon/${hackathon.id}`}>View Hackathon</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
