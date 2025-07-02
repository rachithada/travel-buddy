import React, { useState, useMemo } from 'react';
import { MapPin, Calendar, Users, Plus, Minus, Search, Plane } from 'lucide-react';

const places = [
  {
    id: 1,
    name: "Paris",
    location: "France",
    image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "Tokyo",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "New York",
    location: "USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "London",
    location: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Barcelona",
    location: "Spain",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Dubai",
    location: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Sydney",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    name: "Mumbai",
    location: "India",
    image: "https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVtYmFpfGVufDB8fDB8fHww"
  },
  {
    id: 11,
    name: "Rome",
    location: "Italy",
    image: "https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9tZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 12,
    name: "Cape Town",
    location: "South Africa",
    image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 13,
    name: "Rio de Janeiro",
    location: "Brazil",
    image: "https://plus.unsplash.com/premium_photo-1679689962301-adfa3c77d624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmlvJTIwZGUlMjBqYW5lcmlvfGVufDB8fDB8fHww"
  },
  
  
];

export default function PlanTrip() {
  const [searchTerm, setSearchTerm] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const filteredPlaces = useMemo(() => {
    return places.filter(place =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleTravelersChange = (increment) => {
    setTravelers(prev => Math.max(1, prev + increment));
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setSearchTerm(place.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 mt-13">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="w-8 h-8 text-slate-600 animate-bounce" />
            <h1 className="text-4xl font-bold text-slate-800">Plan Your Trip</h1>
          </div>
          <p className="text-slate-600 text-lg">Discover amazing destinations and plan your perfect getaway</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 animate-slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Where to?
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 bg-white/80"
                />
              </div>
            </div>

            {/* Date Inputs */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                From
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 bg-white/80"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                To
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 bg-white/80"
                />
              </div>
            </div>
          </div>

          {/* Travelers Counter */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Travelers
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleTravelersChange(-1)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
                disabled={travelers <= 1}
              >
                <Minus className="w-4 h-4 text-slate-600" />
              </button>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl border border-slate-200">
                <Users className="w-5 h-5 text-slate-400" />
                <span className="text-lg font-medium text-slate-700 min-w-[2rem] text-center">
                  {travelers}
                </span>
              </div>
              <button
                onClick={() => handleTravelersChange(1)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Plus className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlaces.map((place, index) => (
            <div
              key={place.id}
              onClick={() => handlePlaceSelect(place)}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {place.name}
                </h3>
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{place.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-slate-400 mb-4">
              <Search className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No destinations found</h3>
            <p className="text-slate-500">Try searching for a different location</p>
          </div>
        )}

        {/* Selected Place Info */}
        {selectedPlace && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-md mx-4 animate-slide-up">
            <div className="flex items-center gap-4">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800">{selectedPlace.name}</h4>
                <p className="text-slate-600 text-sm flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {selectedPlace.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedPlace(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}