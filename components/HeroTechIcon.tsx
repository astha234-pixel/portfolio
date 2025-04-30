import React from 'react';
import Image from 'next/image';

const HeroTechIcon = () => {
  return (
    <div className="relative flex items-center justify-center w-80 h-80 mx-auto">
      {/* Neon light effect behind the image */}
      <div className="absolute inset-0 rounded-full z-0 pointer-events-none animate-neon-glow bg-gradient-to-br from-secondary/40 via-blue-500/30 to-purple-500/30 blur-2xl" />
      {/* Floating profile image */}
      <div className="relative w-64 h-64 rounded-full overflow-hidden z-20 bg-primary animate-float">
        <Image
          src="/profile.jpg"
          alt="Astha"
          fill
          className="object-cover rounded-full"
          sizes="256px"
          priority
        />
      </div>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        @keyframes neon-glow {
          0%, 100% { filter: blur(32px) brightness(1.1); opacity: 0.85; }
          50% { filter: blur(40px) brightness(1.3); opacity: 1; }
        }
        .animate-neon-glow {
          animation: neon-glow 2.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroTechIcon;

/* Add this to your global CSS (e.g., styles/globals.css):
.animate-spin-slow {
  animation: spin 6s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
*/ 