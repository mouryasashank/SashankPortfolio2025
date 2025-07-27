import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface DarkModeToggleProps {
  position?: 'top-right' | 'top-left';
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ position = 'top-right' }) => {
  const { isDark, toggleTheme } = useTheme();

  const positionClasses = {
    'top-right': 'fixed top-4 right-4 z-[9999]',
    'top-left': 'fixed top-4 left-4 z-[9999]'
  };

  return (
    <div className={positionClasses[position]}>
      <button
        onClick={toggleTheme}
        className="flex items-center p-1 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden w-16 h-8"
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label="Toggle theme"
      >
        {/* Background slider */}
        <div className={`absolute inset-0.5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform duration-300 ${isDark ? 'translate-x-8' : 'translate-x-0.5'}`}></div>
        
        {/* Sun icon */}
        <div className="relative z-10 flex items-center justify-center w-8 h-6">
          <Sun className={`h-3.5 w-3.5 transition-colors duration-300 ${!isDark ? 'text-yellow-500' : 'text-gray-400'}`} />
        </div>
        
        {/* Moon icon */}
        <div className="relative z-10 flex items-center justify-center w-8 h-6">
          <Moon className={`h-3.5 w-3.5 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-gray-400'}`} />
        </div>
      </button>
    </div>
  );
};