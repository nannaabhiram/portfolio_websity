import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const socialLinks = [
    { icon: Github, label: 'GitHub', url: personalInfo.github },
    { icon: Linkedin, label: 'LinkedIn', url: personalInfo.linkedin },
    { icon: Mail, label: 'Email', url: `mailto:${personalInfo.email}` }
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400">© 2025 {personalInfo.name}. All rights reserved.</p>
          
          <div className="flex gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-white/10 p-3 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/0 hover:border-white/20"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
