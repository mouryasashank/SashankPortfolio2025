import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400/10 dark:bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 px-6 animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/20 hover:ring-blue-500/40 dark:hover:ring-blue-400/40 transition-all duration-300">
            <img
              src="/api/placeholder/400/400"
              alt="Mourya Sashank Sure - AI/ML Engineer"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
          Mourya Sashank Sure
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-6">
          AI/ML Engineer & Data Scientist
        </h2>

        {/* Enhanced Description */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
          3+ years building enterprise AI solutions across <span className="font-semibold text-blue-600 dark:text-blue-400">federal, healthcare, and education sectors</span>. 
          Specialized in LLMs, Conversational AI, and multi-cloud deployments serving <span className="font-semibold text-orange-600 dark:text-orange-400">2M+ queries/month</span>.
        </p>
        
        {/* Key Achievements */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
            ⚡ 87% efficiency improvement
          </span>
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
            🏥 HIPAA-compliant solutions
          </span>
          <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full">
            ☁️ Multi-cloud architecture
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Me
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};