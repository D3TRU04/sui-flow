"use client";
import React, { useState, useEffect } from 'react';
import { FiZap, FiArrowRight, FiActivity, FiTrendingUp, FiMessageSquare } from 'react-icons/fi';
import Link from 'next/link';
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from 'next/image';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <style jsx global>{`
        @keyframes border-glow {
          0% {
            border-color: rgba(191, 219, 254, 0.4);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
          }
          50% {
            border-color: rgba(59, 130, 246, 0.8);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
          }
          100% {
            border-color: rgba(191, 219, 254, 0.4);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          50%, 100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
      `}</style>
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      
      {/* Hero Section */}
      <div className="relative z-30 min-h-[80vh] max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <FiZap className="h-12 w-12 text-blue-600 animate-pulse relative" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <h1 className="text-5xl font-bold text-gray-800">
                <span className="text-blue-600">Event</span>Pulse
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 animate-fade-in max-w-xl">
              Experience real-time event streaming with AI-powered insights
            </p>
            
            <div>
              <Link
                href="/stream"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20">
                  <div className="absolute inset-0 bg-white/40 transform -skew-x-12 translate-x-full group-hover:animate-[shine_1.5s_infinite]"></div>
                </div>
                <span className="text-lg font-semibold relative">Enter Event Stream</span>
                <FiArrowRight className={`ml-2 h-5 w-5 relative transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border-2 border-blue-200 shadow-2xl bg-white p-2" style={{ animation: 'border-glow 3s infinite' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-lg" />
              <Image
                src="/event-stream-preview.png"
                alt="Event Stream Preview"
                fill
                className="object-contain bg-gray-50 rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-30 py-24 bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover how EventPulse transforms your event streaming experience with these powerful capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors duration-300 mb-4">
                  <FiActivity className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Updates</h3>
                <p className="text-gray-600">Get instant notifications for all events as they happen</p>
              </div>
            </div>
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors duration-300 mb-4">
                  <FiTrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Summaries</h3>
                <p className="text-gray-600">Smart insights and summaries powered by AI</p>
              </div>
            </div>
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors duration-300 mb-4">
                  <FiMessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Feed</h3>
                <p className="text-gray-600">Engage with events through our dynamic interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 