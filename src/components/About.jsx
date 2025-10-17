import React from 'react';

export default function About() {
  return (
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a fullstack developer passionate about creating digital experiences that feel fast, smooth, and delightful. With 5+ years of experience, I specialize in modern React patterns and cutting-edge animation techniques.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">What I Do</h3>
            <p className="text-gray-300 leading-relaxed">
              From concept to deployment, I build web applications with attention to performance, accessibility, and user experience. I love working with cutting-edge tools and solving complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
