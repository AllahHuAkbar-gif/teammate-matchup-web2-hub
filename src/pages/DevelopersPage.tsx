
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { DeveloperCard } from "@/components/developer/developer-card";
import { SearchFilters } from "@/components/search/search-filters";
import { developers } from "@/data/mock-data";
import { filterDevelopers } from "@/lib/utils";

const DevelopersPage = () => {
  const [filters, setFilters] = useState({
    query: "",
    skills: [],
    location: "",
    remote: false,
    hackathon: ""
  });
  
  const filteredDevelopers = filterDevelopers(developers, filters);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Find Teammates</h1>
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
              {filteredDevelopers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDevelopers.map(developer => (
                    <DeveloperCard key={developer.id} developer={developer} />
                  ))}
                </div>
              ) : (
                <div className="bg-background p-10 rounded-lg border text-center">
                  <h3 className="text-xl font-semibold mb-2">No developers found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to find more teammates.
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

export default DevelopersPage;
