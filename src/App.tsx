import React, { useState } from 'react';
import { useProfileStore } from './store/profileStore';
import { ProfileCard } from './components/ProfileCard';
import { MapView } from './components/Map';
import { SearchBar } from './components/SearchBar';
import { AddProfileDialog } from './components/AddProfileDialog';
import { Users } from 'lucide-react';

function App() {
  const { profiles, selectedProfile, setSelectedProfile, searchQuery } = useProfileStore();
  const [showMap, setShowMap] = useState(false);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowSummary = (profile: typeof profiles[0]) => {
    setSelectedProfile(profile);
    setShowMap(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
            <div className="flex items-center">
            <img 
              src="src/components/searchmp.png" 
              alt="Profile Directory Logo" 
              className="w-12 h-12 mr-4"
            />
            </div>
            </div>
            <SearchBar />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {showMap && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] overflow-hidden">
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    {selectedProfile?.name}'s Location
                  </h2>
                  <button
                    onClick={() => setShowMap(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Close
                  </button>
                </div>
                <div className="h-[calc(100%-4rem)]">
                  <MapView profile={selectedProfile} />
                </div>
              </div>
            </div>
          )}
          
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onShowSummary={() => handleShowSummary(profile)}
            />
          ))}
        </div>
      </main>

      <AddProfileDialog />
    </div>
  );
}

export default App;