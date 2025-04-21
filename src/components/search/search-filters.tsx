
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge-list";
import { Search, X } from "lucide-react";
import { useState } from "react";

export interface SearchFilters {
  query: string;
  skills: string[];
  location: string;
  remote: boolean;
  hackathon: string;
}

const SKILL_OPTIONS = [
  "JavaScript", "TypeScript", "React", "Angular", "Vue", "Node.js", "Python", 
  "Java", "Ruby", "Go", "PHP", "C#", ".NET", "Firebase", "AWS", "Azure", 
  "GCP", "Docker", "Kubernetes", "GraphQL", "REST API", "MongoDB", "PostgreSQL",
  "MySQL", "UI/UX Design", "Figma", "Product Management", "DevOps", "Mobile", 
  "Flutter", "React Native", "iOS", "Android", "ML/AI", "Blockchain"
];

const LOCATION_OPTIONS = [
  "San Francisco", "New York", "London", "Berlin", "Toronto", "Tokyo", 
  "Paris", "Sydney", "Singapore", "Bangalore", "Austin", "Seattle", 
  "Chicago", "Boston", "Amsterdam", "Remote"
];

const HACKATHON_OPTIONS = [
  "HackMIT", "TreeHacks", "HackNY", "PennApps", "HackGT", "CalHacks", 
  "HackTX", "HackDuke", "HackIllinois", "MHacks", "YHack", "HackRice", 
  "HackUCI", "HackingEDU", "AngelHack", "Global Hackathon Seoul", "ETHGlobal"
];

interface SearchFiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export function SearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  const [skillInput, setSkillInput] = useState("");
  const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);
  
  const handleAddSkill = (skill: string) => {
    if (!skill.trim() || filters.skills.includes(skill)) return;
    
    onFilterChange({
      ...filters,
      skills: [...filters.skills, skill]
    });
    setSkillInput("");
  };
  
  const handleRemoveSkill = (skill: string) => {
    onFilterChange({
      ...filters,
      skills: filters.skills.filter(s => s !== skill)
    });
  };
  
  const filteredSkills = SKILL_OPTIONS.filter(skill => 
    skill.toLowerCase().includes(skillInput.toLowerCase()) && 
    !filters.skills.includes(skill)
  ).slice(0, 5);
  
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder="Search developers or hackathons..."
          className="pl-10"
          value={filters.query}
          onChange={(e) => onFilterChange({ ...filters, query: e.target.value })}
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Skills</label>
        <div className="relative">
          <Input
            placeholder="Add skills..."
            value={skillInput}
            onChange={(e) => {
              setSkillInput(e.target.value);
              setShowSkillSuggestions(true);
            }}
            onFocus={() => setShowSkillSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSkillSuggestions(false), 200)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && skillInput) {
                handleAddSkill(skillInput);
              }
            }}
          />
          {showSkillSuggestions && filteredSkills.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-md">
              {filteredSkills.map(skill => (
                <div
                  key={skill}
                  className="px-3 py-2 cursor-pointer hover:bg-muted"
                  onClick={() => handleAddSkill(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {filters.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {filters.skills.map(skill => (
              <Badge key={skill} variant="tech" className="pr-1">
                {skill}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-4 w-4 ml-1"
                  onClick={() => handleRemoveSkill(skill)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Select 
            value={filters.location} 
            onValueChange={(value) => onFilterChange({ ...filters, location: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any location</SelectItem>
              {LOCATION_OPTIONS.map(location => (
                <SelectItem key={location} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Hackathon</label>
          <Select 
            value={filters.hackathon} 
            onValueChange={(value) => onFilterChange({ ...filters, hackathon: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select hackathon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any hackathon</SelectItem>
              {HACKATHON_OPTIONS.map(hackathon => (
                <SelectItem key={hackathon} value={hackathon}>{hackathon}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="sm"
          className={filters.remote ? "bg-primary text-primary-foreground" : ""}
          onClick={() => onFilterChange({ ...filters, remote: !filters.remote })}
        >
          Remote Only
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => onFilterChange({
            query: "",
            skills: [],
            location: "",
            remote: false,
            hackathon: ""
          })}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
