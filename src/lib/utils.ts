
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Generate a random ID
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

// Filter developers based on search criteria
export function filterDevelopers(developers: any[], filters: any) {
  return developers.filter(dev => {
    // Filter by query (name or bio)
    if (filters.query && 
        !dev.name.toLowerCase().includes(filters.query.toLowerCase()) &&
        !dev.bio.toLowerCase().includes(filters.query.toLowerCase())) {
      return false;
    }
    
    // Filter by skills
    if (filters.skills.length > 0 && 
        !filters.skills.some((skill: string) => dev.skills.includes(skill))) {
      return false;
    }
    
    // Filter by location
    if (filters.location && 
        dev.location !== filters.location && 
        !(filters.location === "Remote" && dev.isRemote)) {
      return false;
    }
    
    // Filter by remote only
    if (filters.remote && !dev.isRemote) {
      return false;
    }
    
    // Filter by hackathon interest
    if (filters.hackathon && !dev.hackathons.includes(filters.hackathon)) {
      return false;
    }
    
    return true;
  });
}

// Filter hackathons based on search criteria
export function filterHackathons(hackathons: any[], filters: any) {
  return hackathons.filter(hackathon => {
    // Filter by query (name or description)
    if (filters.query && 
        !hackathon.name.toLowerCase().includes(filters.query.toLowerCase()) &&
        !hackathon.description.toLowerCase().includes(filters.query.toLowerCase())) {
      return false;
    }
    
    // Filter by technologies (skills)
    if (filters.skills.length > 0 && 
        !filters.skills.some((skill: string) => hackathon.technologies.includes(skill))) {
      return false;
    }
    
    // Filter by location
    if (filters.location && 
        hackathon.location !== filters.location && 
        !(filters.location === "Remote" && hackathon.isRemote)) {
      return false;
    }
    
    // Filter by remote only
    if (filters.remote && !hackathon.isRemote) {
      return false;
    }
    
    // Filter by specific hackathon
    if (filters.hackathon && hackathon.name !== filters.hackathon) {
      return false;
    }
    
    return true;
  });
}
