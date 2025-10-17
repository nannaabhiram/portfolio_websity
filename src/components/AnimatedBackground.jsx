import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    </div>
  );
}
