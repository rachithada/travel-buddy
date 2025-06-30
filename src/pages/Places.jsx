import React from 'react'
import { MapPin } from 'lucide-react'

export default function Places() {
  const destinations = [
    {
      id: 1,
      name: "Santorini",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Bali",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=400&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Machu Picchu",
      location: "Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500&h=400&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Tokyo",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=400&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "Iceland",
      location: "Reykjavik",
      image: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 6,
      name: "Swiss Alps",
      location: "Switzerland",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&crop=center"
    },
    {
      id: 7,
      name: "Maldives",
      location: "Indian Ocean",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&h=400&fit=crop&crop=center"
    },
    {
      id: 8,
      name: "New York",
      location: "United States",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=400&fit=crop&crop=center"
    },
    {
      id: 9,
      name: "Dubai",
      location: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=400&fit=crop&crop=center"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-6 mt-14">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover Amazing Places
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore breathtaking destinations around the world and create unforgettable memories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer hover:border-blue-500/30"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm border border-gray-600/50 rounded-full px-3 py-1 text-sm font-medium text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Explore
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {destination.name}
                </h3>
                <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                  <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-medium">{destination.location}</span>
                </div>
              </div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 transition-colors duration-300" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}