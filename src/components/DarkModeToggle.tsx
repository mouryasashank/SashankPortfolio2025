import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface DarkModeToggleProps {
  position?: 'top-right' | 'top-left';
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ position = 'top-right' }) => {
  const { isDark, toggleTheme } = useTheme();

  const positionClasses = {
    'top-right': 'fixed top-28 right-6 z-50',
    'top-left': 'fixed top-28 left-6 z-50'
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${positionClasses[position]} p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-110 group`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};