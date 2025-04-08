"use client";

import { FiZap, FiGithub } from 'react-icons/fi';
import Link from 'next/link';

export const StreamNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex justify-between items-center h-full px-6">
          <div className="flex items-center">
            <Link 
              href="/"
              className="group flex items-center hover:bg-gray-50 transition-all duration-300 relative overflow-hidden rounded-lg"
            >
              <div className="relative">
                <FiZap className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-800">
                <span className="text-blue-600">Event</span>Pulse
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/D3TRU04/beepsInterviewAssignment"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 rounded-lg"
            >
              <FiGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}; 