import React from 'react';
import { ExternalLink, Calendar, Users } from 'lucide-react';
import { Publication } from '../types';

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-up">
      {/* Cover Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={publication.coverImage}
          alt={publication.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
          {publication.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {publication.description}
        </p>

        {/* Authors */}
        <div className="mb-4">
          <div className="flex items-start">
            <Users className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Authors:</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {publication.authors.join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Journal */}
        {publication.journal && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Published in: <span className="font-normal text-blue-600 dark:text-blue-400">{publication.journal}</span>
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(publication.publishedDate)}
          </div>
          
          {publication.url && (
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Read Paper
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};