
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HackathonCard } from "@/components/hackathon/hackathon-card";
import { SearchFilters } from "@/components/search/search-filters";
import { hackathons } from "@/data/mock-data";
import { filterHackathons } from "@/lib/utils";

const HackathonsPage = () => {
  const [filters, setFilters] = useState({
    query: "",
    skills: [],
    location: "",
    remote: false,
    hackathon: ""
  });
  
  const filteredHackathons = filterHackathons(hackathons, filters);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Browse Hackathons</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-background p-4 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <SearchFilters 
                  filters={filters} 
                  onFilterChange={setFilters} 
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              {filteredHackathons.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredHackathons.map(hackathon => (
                    <HackathonCard key={hackathon.id} hackathon={hackathon} />
                  ))}
                </div>
              ) : (
                <div className="bg-background p-10 rounded-lg border text-center">
                  <h3 className="text-xl font-semibold mb-2">No hackathons found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to find more hackathons.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HackathonsPage;
