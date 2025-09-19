import React, { useEffect, useRef, useState } from 'react';

const AnimatedConnection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const connectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (connectionRef.current) {
      observer.observe(connectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={connectionRef}
      className="relative flex items-center justify-center py-16 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-blue-900/5"></div>
      
      {/* Main connection container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          
          {/* Top connection points (representing the 3 pricing cards) */}
          <div className="flex justify-center space-x-16 md:space-x-32 lg:space-x-48 mb-12">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`relative transition-all duration-1000`}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Pulsing connection point */}
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-1000 ${
                    isVisible 
                      ? 'bg-blue-500 shadow-lg shadow-blue-500/50 scale-100' 
                      : 'bg-gray-300 scale-0'
                  }`}
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
                
                {/* Ripple effect */}
                <div
                  className={`absolute inset-0 w-4 h-4 rounded-full border-2 border-blue-400 transition-all duration-2000 ${
                    isVisible ? 'scale-300 opacity-0' : 'scale-100 opacity-100'
                  }`}
                  style={{ animationDelay: `${i * 200 + 500}ms` }}
                ></div>
              </div>
            ))}
          </div>

          {/* Convergence lines */}
          <div className="relative mb-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute top-0"
                style={{ 
                  left: `${-200 + i * 200}px`,
                  transformOrigin: 'top',
                }}
              >
                <div
                  className={`w-0.5 h-16 bg-gradient-to-b from-blue-400 to-transparent transition-all duration-1500 origin-top ${
                    isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${i * 300 + 800}ms`,
                    transform: `rotate(${-30 + i * 30}deg) scaleY(${isVisible ? 1 : 0})`,
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Central energy beam */}
          <div className="relative w-full max-w-md h-20 flex items-center justify-center mb-8">
            
            {/* Outer glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transition-all duration-2000 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{
                filter: 'blur(20px)',
                animationDelay: '1000ms'
              }}
            ></div>

            {/* Main beam */}
            <div
              className={`relative w-full h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 transition-all duration-1500 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{
                animationDelay: '1200ms',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
              }}
            ></div>

            {/* Energy particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-1000 ${
                  isVisible ? 'animate-pulse opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${45 + Math.sin(i) * 10}%`,
                  animationDelay: `${1500 + i * 150}ms`,
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
                }}
              ></div>
            ))}

            {/* Flowing orbs */}
            <div
              className={`absolute w-3 h-3 bg-blue-300 rounded-full transition-all duration-3000 ${
                isVisible ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}
              style={{
                left: '-6px',
                top: '50%',
                transform: `translateY(-50%) ${isVisible ? 'translateX(400px)' : 'translateX(0)'}`,
                animationDelay: '1800ms',
                boxShadow: '0 0 15px rgba(147, 197, 253, 0.8)',
              }}
            ></div>
          </div>

       

          {/* Bottom connection point */}
          <div className="mt-8">
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 transition-all duration-1000 ${
                isVisible ? 'scale-100 shadow-xl shadow-purple-500/50' : 'scale-0'
              }`}
              style={{ animationDelay: '2500ms' }}
            ></div>
            
            {/* Final ripple */}
            <div
              className={`absolute w-6 h-6 rounded-full border-2 border-purple-400 transition-all duration-2000 ${
                isVisible ? 'scale-500 opacity-0' : 'scale-100 opacity-100'
              }`}
              style={{ 
                animationDelay: '2800ms',
                marginTop: '-24px'
              }}
            ></div>
          </div>

        </div>
      </div>

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-300 rounded-full transition-all duration-4000 ${
              isVisible ? 'animate-bounce opacity-60' : 'opacity-0'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + Math.sin(i * 2) * 40}%`,
              animationDelay: `${2000 + i * 400}ms`,
              animationDuration: '3s',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedConnection;