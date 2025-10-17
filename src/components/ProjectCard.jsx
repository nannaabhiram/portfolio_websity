import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, isHovered, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
        isHovered ? 'scale-105 shadow-2xl' : ''
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
      
      <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-white/20 p-8 h-full flex flex-col transition-all duration-500">
        <h3 className="text-2xl font-bold mb-3 text-white">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-6 flex-grow">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a 
            href={project.demoUrl}
            className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={16} /> View
          </a>
          <a 
            href={project.codeUrl}
            className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </div>
  );
}
