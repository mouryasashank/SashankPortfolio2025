import React from 'react';
import { PublicationCard } from './PublicationCard';
import { publications } from '../data/portfolio';

export const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications & Research
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Contributing to the advancement of AI and machine learning through peer-reviewed research
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication, index) => (
            <div
              key={publication.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PublicationCard publication={publication} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};