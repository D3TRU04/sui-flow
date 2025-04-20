import { FiGithub, FiZap } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <FiZap className="h-5 w-5 text-blue-600" />
            <span className="text-xl font-semibold">
              <span className="text-blue-600">Sui</span>Flow
            </span>
          </div>

          {/* Credit */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-gray-600">
              Made by Dan Truong
            </p>
            <span className="text-gray-300">|</span>
            <a
              href="https://github.com/D3TRU04/beepsInterviewAssignment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FiGithub className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © 2025 SuiFlow. Made for beeps.
          </div>
        </div>
      </div>
    </footer>
  );
}; 