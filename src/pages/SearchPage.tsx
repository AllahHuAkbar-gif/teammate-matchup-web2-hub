
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DeveloperCard } from "@/components/developer/developer-card";
import { HackathonCard } from "@/components/hackathon/hackathon-card";
import { SearchFilters } from "@/components/search/search-filters";
import { developers, hackathons } from "@/data/mock-data";
import { filterDevelopers, filterHackathons } from "@/lib/utils";

const SearchPage = () => {
  const [filters, setFilters] = useState({
    query: "",
    skills: [],
    location: "",
    remote: false,
    hackathon: ""
  });
  
  const filteredDevelopers = filterDevelopers(developers, filters);
  const filteredHackathons = filterHackathons(hackathons, filters);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-bold mb-8">Search</h1>
          
          <div className="bg-background p-6 rounded-lg border mb-8">
            <SearchFilters 
              filters={filters} 
              onFilterChange={setFilters} 
            />
          </div>
          
          <Tabs defaultValue="developers">
            <TabsList className="mb-6">
              <TabsTrigger value="developers">Developers ({filteredDevelopers.length})</TabsTrigger>
              <TabsTrigger value="hackathons">Hackathons ({filteredHackathons.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="developers">
              {filteredDevelopers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDevelopers.map(developer => (
                    <DeveloperCard key={developer.id} developer={developer} />
                  ))}
                </div>
              ) : (
                <div className="bg-background p-10 rounded-lg border text-center">
                  <h3 className="text-xl font-semibold mb-2">No developers found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search filters.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="hackathons">
              {filteredHackathons.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHackathons.map(hackathon => (
                    <HackathonCard key={hackathon.id} hackathon={hackathon} />
                  ))}
                </div>
              ) : (
                <div className="bg-background p-10 rounded-lg border text-center">
                  <h3 className="text-xl font-semibold mb-2">No hackathons found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search filters.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
