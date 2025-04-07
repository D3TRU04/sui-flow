"use client";

import { FiZap, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isBubbling, setIsBubbling] = useState(false);

  const handleBubble = () => {
    setIsBubbling(true);
    setTimeout(() => setIsBubbling(false), 3000); // Reset after animation
  };

  return (
    <nav className={`sticky top-0 bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200 shadow-sm z-50 ${isBubbling ? 'animate-bubble' : ''}`} onClick={handleBubble}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/"
              className="group flex items-center px-3 py-1.5 hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <FiZap className="h-6 w-6 text-blue-600 animate-pulse group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-800 relative">
                <span className="text-blue-600 group-hover:text-blue-500 transition-colors duration-300">Event</span>Pulse
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/D3TRU04/beepsInterviewAssignment"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white/20 transition-all duration-200"
            >
              <FiGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

<style jsx>{`
  @keyframes bubble {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  .animate-bubble {
    animation: bubble 3s ease-in-out;
  }
`}</style> 