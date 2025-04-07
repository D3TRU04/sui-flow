import { FiGithub, FiZap } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-gray-50 border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center px-3 py-1.5">
              <FiZap className="h-5 w-5 text-blue-600 animate-pulse" />
              <span className="ml-2 text-sm text-gray-700">
                Real-time event stream with AI-powered summaries
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/D3TRU04/beepsInterviewAssignment"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-3 py-1.5 hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <div className="px-3 py-1.5">
              <span className="text-sm text-gray-700">
                © {new Date().getFullYear()} <span className="text-blue-600">Event</span>Pulse
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 