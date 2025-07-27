import React from 'react';
import { ArrowDown, MapPin, Coffee, Mail, Phone } from 'lucide-react';
import beachPhoto from '../assets/images/beach-photo2.jpg'; // Updated to use the better zoomed photo

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Decorations - Adding more ground elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric patterns for ground effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-200/10 dark:bg-orange-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-200/10 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid pattern for ground texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        
        {/* Subtle dots pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Floating elements for depth */}
        <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-blue-400/20 dark:bg-blue-500/10 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-orange-400/20 dark:bg-orange-500/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/6 w-5 h-5 bg-purple-400/20 dark:bg-purple-500/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        
        {/* Hexagon pattern elements */}
        <div className="absolute top-1/6 right-1/3 w-8 h-8 border border-blue-300/20 dark:border-blue-600/10 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-6 h-6 border border-orange-300/20 dark:border-orange-600/10 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center z-10 px-6 animate-fade-in mt-32">
        {/* Profile Image */}
        <div className="mb-12 relative inline-block">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/20 hover:ring-blue-500/40 dark:hover:ring-blue-400/40 transition-all duration-300">
            <img
              src={beachPhoto}
              alt="Mourya Sashank Sure - AI/ML Engineer at the beach"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              style={{
                objectPosition: '50% 30%',
                filter: 'brightness(1.1) contrast(1.05) saturate(1.1)'
              }}
            />
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-700 animate-pulse shadow-lg"></div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Mourya Sashank Sure
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          AI/ML Engineer & Data Scientist
        </h2>

        {/* Bio */}
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Transforming enterprise challenges into intelligent solutions with 3+ years of experience across 
          federal agencies, healthcare, and education sectors. Specialized in cutting-edge AI/ML systems that deliver measurable impact.
        </p>

        {/* Achievement Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
            <span className="mr-2">🚀</span>2M+ Voice Queries/Month
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
            <span className="mr-2">⚡</span>87% Latency Reduction
          </div>
          <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
            <span className="mr-2">🎯</span>6+ Enterprise Solutions
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Baltimore, MD</span>
          </div>
          <div className="flex items-center">
            <Coffee className="w-4 h-4 mr-2" />
            <span>Available for opportunities</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('#contact')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </button>
          <button
            onClick={() => scrollToSection('#projects')}
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 opacity-75 group-hover:opacity-100 transition-opacity">
            Discover More
          </span>
          <div className="w-8 h-12 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors">
            <ArrowDown className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors animate-pulse" />
          </div>
        </div>
      </button>
    </section>
  );
};