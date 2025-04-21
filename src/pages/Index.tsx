
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { DeveloperCard } from "@/components/developer/developer-card";
import { HackathonCard } from "@/components/hackathon/hackathon-card";
import { developers, hackathons } from "@/data/mock-data";
import { Link } from "react-router-dom";
import { Search, Users, Calendar } from "lucide-react";

const Index = () => {
  // Take a few developers and hackathons for the homepage
  const featuredDevelopers = developers.slice(0, 4);
  const featuredHackathons = hackathons.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hackathon-500 to-tech-500 text-white py-20">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Hackathon Team</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Connect with developers, designers, and innovators who share your passion for building amazing projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/developers">Find Teammates</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/hackathons">Browse Hackathons</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-hackathon-100 text-hackathon-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discover</h3>
                <p className="text-muted-foreground">
                  Browse profiles of talented developers, designers, and project managers looking for hackathon teammates.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-tech-100 text-tech-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect</h3>
                <p className="text-muted-foreground">
                  Message potential teammates, discuss ideas, and form the perfect team based on complementary skills.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-hackathon-100 text-hackathon-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compete</h3>
                <p className="text-muted-foreground">
                  Join hackathons together and build amazing projects that showcase your combined talents and creativity.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Developers */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured Developers</h2>
              <Button variant="outline" asChild>
                <Link to="/developers">View All</Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDevelopers.map(developer => (
                <DeveloperCard key={developer.id} developer={developer} compact />
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Hackathons */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Upcoming Hackathons</h2>
              <Button variant="outline" asChild>
                <Link to="/hackathons">View All</Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {featuredHackathons.map(hackathon => (
                <HackathonCard key={hackathon.id} hackathon={hackathon} compact />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-tech-500 text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to find your dream team?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Create your profile today and connect with like-minded developers for your next hackathon.
            </p>
            <Button size="lg" className="bg-white text-tech-500 hover:bg-white/90" asChild>
              <Link to="/profile">Create Your Profile</Link>
            </Button>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">HackMate</h2>
              <p className="text-gray-400 mt-2">Find your perfect hackathon teammates</p>
            </div>
            <div className="flex gap-8">
              <div>
                <h3 className="font-semibold mb-2">Platform</h3>
                <ul className="space-y-1 text-gray-400">
                  <li><Link to="/developers" className="hover:text-white">Find Teammates</Link></li>
                  <li><Link to="/hackathons" className="hover:text-white">Browse Hackathons</Link></li>
                  <li><Link to="/search" className="hover:text-white">Search</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Account</h3>
                <ul className="space-y-1 text-gray-400">
                  <li><Link to="/profile" className="hover:text-white">My Profile</Link></li>
                  <li><Link to="/messages" className="hover:text-white">Messages</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 HackMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
