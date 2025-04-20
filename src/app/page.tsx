"use client"

import React, { useState, useEffect } from 'react'
import { FiZap, FiArrowRight, FiActivity, FiTrendingUp, FiMessageSquare } from 'react-icons/fi'
import Link from 'next/link'
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
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
      
      {/* Background Elements */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
      </div>

      {/* Content */}
      <div className="relative z-30">
        <Navbar />
        
        {/* Hero Section */}
        <div className="min-h-[80vh] max-w-7xl mx-auto px-8 flex items-center mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center w-full">
            {/* Left Column - Text Content */}
            <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    Visual Builder for
                  </span>
                  <br />
                  <span className="text-gray-800">Sui Smart Contracts</span>
                </h2>
                <p className="text-lg text-gray-600 animate-fade-in max-w-xl leading-relaxed">
                  Build and deploy Sui smart contracts with a drag-and-drop interface. No coding required.
                </p>
              </div>
              
              <div>
                <Link
                  href="/builder"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-lg font-medium">Start Building</span>
                  <FiArrowRight 
                    className={`ml-2 h-5 w-5 relative transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    }`}
                  />
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border-2 border-blue-200 shadow-2xl bg-white p-2" style={{ animation: 'border-glow 3s infinite' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiZap className="h-24 w-24 text-blue-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-32 mt-24 mb-24 bg-gradient-to-b from-transparent to-blue-50/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gray-800">
                  Powerful Features
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Experience smart contract development reimagined</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Visual Builder */}
              <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl w-fit group-hover:from-blue-200 group-hover:to-blue-100 transition-colors duration-300 mb-6">
                    <FiActivity className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Drag & Drop Interface</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Build smart contracts visually with an intuitive drag-and-drop interface. No coding required.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                      Visual workflow builder
                    </div>
                    <div className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                      Pre-built contract templates
                    </div>
                    <div className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                      Real-time code preview
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Contract Templates */}
              <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl w-fit group-hover:from-blue-200 group-hover:to-blue-100 transition-colors duration-300 mb-6">
                    <FiTrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Contract Templates</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Start with pre-built templates for common use cases like NFTs, tokens, and more.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                      NFT minting
                    </div>
                    <div className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                      Token creation
                    </div>
                    <div className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                      Custom logic blocks
                    </div>
                  </div>
                </div>
              </div>

              {/* One-Click Deployment */}
              <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl w-fit group-hover:from-blue-200 group-hover:to-blue-100 transition-colors duration-300 mb-6">
                    <FiMessageSquare className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">One-Click Deployment</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Deploy your smart contracts to Sui with a single click. No complex setup required.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                      Instant deployment
                    </div>
                    <div className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                      Transaction monitoring
                    </div>
                    <div className="flex items-center">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                      Contract verification
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
} 