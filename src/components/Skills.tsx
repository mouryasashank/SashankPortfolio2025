import React from 'react';
import { IconGrid } from './IconGrid';
import { skills } from '../data/portfolio';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expertise across the full spectrum of AI, cloud technologies, and modern development frameworks
          </p>
        </div>
        
        <IconGrid skills={skills} columns={4} />
      </div>
    </section>
  );
};