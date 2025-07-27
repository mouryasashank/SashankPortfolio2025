import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  location?: string;
  description?: string;
  logo?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-orange-600"></div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative flex items-start animate-slide-in-left"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 border-4 border-blue-600 rounded-full shadow-lg flex-shrink-0">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <Calendar className="w-6 h-6 text-blue-600" />
              )}
            </div>

            {/* Content */}
            <div className="ml-6 flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
              
              {item.subtitle && (
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {item.subtitle}
                </p>
              )}
              
              {item.location && (
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {item.location}
                </div>
              )}
              
              {item.description && (
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};