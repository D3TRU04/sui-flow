"use client";

import { FiZap, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const variants = {
    initial: { 
      y: 0,
      borderRadius: "0px",
    },
    floating: { 
      y: 10,
      borderRadius: "16px",
      transition: {
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 pt-4 max-w-7xl">
        <motion.nav
          variants={variants}
          animate={isScrolled ? "floating" : "initial"}
          className={`
            w-full transition-colors duration-200
            ${isScrolled 
              ? 'bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg' 
              : 'bg-transparent'
            }
          `}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link 
                  href="/"
                  className="group flex items-center hover:bg-white/20 transition-all duration-300 relative overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <FiZap className="h-6 w-6 text-blue-600 animate-pulse group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="ml-2 text-xl font-semibold text-gray-800 relative">
                    <span className="text-blue-600 group-hover:text-blue-500 transition-colors duration-300">Sui</span>Flow
                  </span>
                </Link>
              </div>
              <div className="flex items-center">
                <a
                  href="https://github.com/D3TRU04/beepsInterviewAssignment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white/20 transition-all duration-200 rounded-lg"
                >
                  <FiGithub className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
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