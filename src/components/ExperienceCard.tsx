import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Experience } from '../types';
import { VideoEmbed } from './VideoEmbed';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-up">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600 flex-shrink-0">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {experience.company}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {experience.duration}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {experience.location}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              {item}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Video Embed */}
        {experience.videoUrl && (
          <VideoEmbed
            src={experience.videoUrl}
            caption={`${experience.company} demo`}
          />
        )}
      </div>
    </div>
  );
};