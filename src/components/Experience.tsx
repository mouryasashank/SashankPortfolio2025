import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import { experiences } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building cutting-edge AI solutions that drive business transformation
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};