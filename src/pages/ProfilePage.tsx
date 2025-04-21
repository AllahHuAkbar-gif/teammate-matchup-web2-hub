
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { currentUser } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge-list";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePage = () => {
  const [user, setUser] = useState({ ...currentUser });
  const [newSkill, setNewSkill] = useState("");
  const [newHackathon, setNewHackathon] = useState("");
  
  const handleAddSkill = () => {
    if (!newSkill.trim() || user.skills.includes(newSkill)) return;
    setUser({ ...user, skills: [...user.skills, newSkill] });
    setNewSkill("");
  };
  
  const handleRemoveSkill = (skill: string) => {
    setUser({ ...user, skills: user.skills.filter(s => s !== skill) });
  };
  
  const handleAddHackathon = () => {
    if (!newHackathon.trim() || user.hackathons.includes(newHackathon)) return;
    setUser({ ...user, hackathons: [...user.hackathons, newHackathon] });
    setNewHackathon("");
  };
  
  const handleRemoveHackathon = (hackathon: string) => {
    setUser({ ...user, hackathons: user.hackathons.filter(h => h !== hackathon) });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
          
          <div className="bg-background rounded-lg border p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">Change Photo</Button>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={user.location}
                      onChange={(e) => setUser({ ...user, location: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    value={user.bio}
                    onChange={(e) => setUser({ ...user, bio: e.target.value })}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remote"
                    checked={user.isRemote}
                    onCheckedChange={(checked) => 
                      setUser({ ...user, isRemote: checked as boolean })
                    }
                  />
                  <Label htmlFor="remote">Available for remote hackathons</Label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills Section */}
            <div className="bg-background rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
                  />
                  <Button onClick={handleAddSkill}>Add</Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {user.skills.map(skill => (
                    <Badge key={skill} variant="tech" className="pr-1 py-1">
                      {skill}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-4 w-4 ml-1"
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        ×
                      </Button>
                    </Badge>
                  ))}
                  
                  {user.skills.length === 0 && (
                    <p className="text-muted-foreground text-sm">No skills added yet</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Hackathons Section */}
            <div className="bg-background rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Interested Hackathons</h2>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a hackathon..."
                    value={newHackathon}
                    onChange={(e) => setNewHackathon(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddHackathon()}
                  />
                  <Button onClick={handleAddHackathon}>Add</Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {user.hackathons.map(hackathon => (
                    <Badge key={hackathon} variant="location" className="pr-1 py-1">
                      {hackathon}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-4 w-4 ml-1"
                        onClick={() => handleRemoveHackathon(hackathon)}
                      >
                        ×
                      </Button>
                    </Badge>
                  ))}
                  
                  {user.hackathons.length === 0 && (
                    <p className="text-muted-foreground text-sm">No hackathons added yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button size="lg">Save Profile</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
