import React from 'react';
import { Timeline } from './Timeline';
import { education } from '../data/portfolio';

export const Education: React.FC = () => {
  const timelineItems = education.map(edu => ({
    id: edu.id,
    title: `${edu.degree} in ${edu.field}`,
    subtitle: edu.institution,
    date: edu.duration,
    location: edu.location,
    description: edu.description,
    logo: edu.logo
  }));

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic foundation in data science and engineering excellence
          </p>
        </div>
        
        <Timeline items={timelineItems} />
      </div>
    </section>
  );
};