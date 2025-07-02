import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TravelHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const infoCards = [
    {
      id: 1,
      icon: MapPin,
      title: "Destinations",
      subtitle: "200+ locations worldwide",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Calendar,
      title: "Dates",
      subtitle: "Flexible scheduling",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Users,
      title: "People",
      subtitle: "Solo or group travel",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms] ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Logo/Brand */}
        <div className={`mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight transform transition-all duration-1200 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Travel Buddy
          </span>
        </h1>

        {/* Subheading */}
        <p className={`text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed transform transition-all duration-1200 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          Discover your next adventure and create memories that last a lifetime
        </p>

        {/* CTA Button */}
        <div className={`mb-16 transform transition-all duration-1200 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <button onClick={() => navigate('/plane')} className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Info Cards */}
        <div className={`flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl w-full transform transition-all duration-1200 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`flex-1 group cursor-pointer transform transition-all duration-500 hover:scale-105 ${activeCard === card.id ? 'scale-105' : ''}`}
                style={{ animationDelay: `${1000 + index * 200}ms` }}
              >
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative mb-4 flex justify-center">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${card.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Hover Effect Lines */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          75% { transform: translateY(-30px) rotate(270deg); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}