import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface DarkModeToggleProps {
  position?: 'top-right' | 'top-left';
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ position = 'top-right' }) => {
  const { isDark, toggleTheme } = useTheme();

  const positionClasses = {
    'top-right': 'fixed top-24 right-6 z-50',
    'top-left': 'fixed top-24 left-6 z-50'
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${positionClasses[position]} flex items-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label="Toggle theme"
    >
      {/* Background slider */}
      <div className={`absolute inset-1 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform duration-300 ${isDark ? 'translate-x-8' : 'translate-x-0'}`}></div>
      
      {/* Sun icon */}
      <div className="relative z-10 p-1">
        <Sun className={`h-4 w-4 transition-colors duration-300 ${!isDark ? 'text-yellow-500' : 'text-gray-400'}`} />
      </div>
      
      {/* Moon icon */}
      <div className="relative z-10 p-1">
        <Moon className={`h-4 w-4 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-gray-400'}`} />
      </div>
    </button>
  );
};