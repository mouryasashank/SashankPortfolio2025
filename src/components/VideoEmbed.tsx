import React from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  src: string;
  caption?: string;
  className?: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, caption, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden aspect-video group cursor-pointer">
        {/* Placeholder thumbnail */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <div className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 text-blue-600 ml-1" />
          </div>
        </div>
        
        {/* Video title overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white">
            <p className="font-medium">Video Demo</p>
            <p className="text-sm opacity-80">Click to play</p>
          </div>
        </div>
      </div>
      
      {caption && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
          {caption}
        </p>
      )}
    </div>
  );
};