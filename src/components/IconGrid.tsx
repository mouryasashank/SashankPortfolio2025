import React from 'react';
import { Skill } from '../types';

interface IconGridProps {
  skills: Skill[];
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

export const IconGrid: React.FC<IconGridProps> = ({ skills, columns = 4, className = '' }) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-5'
  };

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className={className}>
      {categories.map((category, categoryIndex) => {
        const categorySkills = skills.filter(skill => skill.category === category);
        
        return (
          <div 
            key={category} 
            className="mb-12 animate-slide-in-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {category}
            </h3>
            <div className={`grid ${gridCols[columns]} gap-6`}>
              {categorySkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                  style={{ animationDelay: `${(categoryIndex * categorySkills.length + index) * 0.05}s` }}
                  title={skill.name}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};