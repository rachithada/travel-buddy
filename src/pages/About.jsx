import React, { useState, useEffect } from 'react';
import { Globe, Plane, Heart, Users, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`animate-bounce ${className}`}
      style={{ 
        animationDelay: `${delay}s`, 
        animationDuration: '3s',
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingElement delay={0} className="absolute top-20 left-10 text-purple-400 opacity-20">
          <Plane size={40} />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute top-40 right-20 text-blue-400 opacity-20">
          <Globe size={60} />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute bottom-40 left-20 text-indigo-400 opacity-20">
          <Heart size={35} />
        </FloatingElement>
        <FloatingElement delay={1.5} className="absolute bottom-20 right-40 text-cyan-400 opacity-20">
          <Users size={45} />
        </FloatingElement>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad1" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgb(147,51,234,0.3);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(59,130,246,0.1);stop-opacity:0" /></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23grad1)"/><circle cx="800" cy="300" r="150" fill="url(%23grad1)"/><circle cx="400" cy="700" r="120" fill="url(%23grad1)"/></svg>')`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="transform transition-all duration-1000 hover:scale-105">
            <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Travel Buddy
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-200 mb-12 animate-fade-in">
              Your Gateway to Extraordinary Adventures
            </p>
            <div className="flex justify-center space-x-8 text-6xl animate-bounce">
              <Globe className="text-cyan-400" />
              <Plane className="text-purple-400" />
              <Heart className="text-pink-400" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible['who-we-are'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center mb-16">
              <Globe className="mx-auto text-cyan-400 mb-6" size={80} />
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                🌍 Who We Are
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                Travel Buddy is your ultimate companion for discovering the world's hidden gems and creating unforgettable memories. 
                We're a passionate team of travel enthusiasts, tech innovators, and adventure seekers who believe that every journey 
                should be as unique as the traveler taking it. Our platform connects wanderers with local experiences, 
                authentic accommodations, and fellow adventurers who share the same passion for exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 bg-gradient-to-r from-purple-800/30 to-blue-800/30">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible['mission'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center mb-16">
              <Plane className="mx-auto text-purple-400 mb-6" size={80} />
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ✈️ Our Mission
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                To inspire and empower every traveler to explore the world with confidence, curiosity, and connection. 
                We exist to transform the way people discover, plan, and experience travel by eliminating the stress and 
                uncertainty that often comes with exploring new destinations. Through cutting-edge technology, personalized 
                recommendations, and a vibrant community of travelers, we make every journey seamless, safe, and spectacular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible['values'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center mb-16">
              <Heart className="mx-auto text-pink-400 mb-6" size={80} />
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                🤝 Our Values
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-3xl backdrop-blur-sm border border-cyan-400/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="text-center">
                  <Heart className="mx-auto text-pink-400 mb-4" size={50} />
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4">Trust</h3>
                  <p className="text-gray-200">
                    Your safety and security are our top priorities. We verify every partner, 
                    secure every transaction, and protect your personal information with military-grade encryption.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-3xl backdrop-blur-sm border border-purple-400/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="text-center">
                  <Users className="mx-auto text-purple-400 mb-4" size={50} />
                  <h3 className="text-2xl font-bold text-purple-300 mb-4">Support</h3>
                  <p className="text-gray-200">
                    Our dedicated support team is available 24/7 to assist you before, during, 
                    and after your travels. From booking help to emergency assistance, we've got your back.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 p-8 rounded-3xl backdrop-blur-sm border border-indigo-400/30 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25">
                <div className="text-center">
                  <Plane className="mx-auto text-indigo-400 mb-4" size={50} />
                  <h3 className="text-2xl font-bold text-indigo-300 mb-4">Passion</h3>
                  <p className="text-gray-200">
                    We live and breathe travel. Our team's genuine passion for exploration drives us to 
                    constantly innovate and improve your travel experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-indigo-800/30 to-purple-800/30">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible['contact'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center mb-16">
              <Mail className="mx-auto text-indigo-400 mb-6" size={80} />
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-200 mb-12">
                Ready to start your next adventure? We'd love to hear from you!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-cyan-400/30 hover:scale-105 transition-all duration-300">
                  <Mail className="text-cyan-400" size={30} />
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-300">Email</h3>
                    <p className="text-gray-200">hello@travelbuddy.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-400/30 hover:scale-105 transition-all duration-300">
                  <Phone className="text-purple-400" size={30} />
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300">Phone</h3>
                    <p className="text-gray-200">+1 (555) 123-TRAVEL</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-indigo-400/30 hover:scale-105 transition-all duration-300">
                  <MapPin className="text-indigo-400" size={30} />
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-300">Address</h3>
                    <p className="text-gray-200">123 Adventure Lane, Wanderlust City, WL 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl backdrop-blur-sm border border-gray-600/30">
                <div className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows="4" 
                      className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                    ></textarea>
                  </div>
                  <button 
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                    onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transform hover:scale-125 transition-all duration-300">
              <Instagram size={30} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transform hover:scale-125 transition-all duration-300">
              <Twitter size={30} />
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300 transform hover:scale-125 transition-all duration-300">
              <Facebook size={30} />
            </a>
          </div>
          <p className="text-gray-400 text-lg">
            © 2025 Travel Buddy. Making every journey extraordinary.
          </p>
        </div>
      </footer>
    </div>
  );
}