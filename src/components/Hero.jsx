import React from 'react';
import { Code2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ scrollY }) {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl w-full text-center">
        {/* Profile Photo with glow */}
        <div className="mb-8 flex justify-center" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                <Code2 size={64} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {personalInfo.title}
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.description}
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              View My Work <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 border border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
