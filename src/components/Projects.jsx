import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              isHovered={hoveredProject === idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
