import React, { useRef, useEffect, useState } from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setAnimate(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative z-10 py-24 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Tech Stack</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/20">
              <h3 className="text-xl font-bold mb-6 text-pink-400">{skill.category}</h3>
              <div className="space-y-4">
                {skill.items.map((item, i) => (
                  <div key={i} className="group">
                    <p className="text-gray-300 mb-2 text-sm font-semibold group-hover:text-white transition-colors">
                      {item}
                    </p>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse transition-all duration-1000`} 
                        style={{ width: animate ? `${85 + Math.random() * 15}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
