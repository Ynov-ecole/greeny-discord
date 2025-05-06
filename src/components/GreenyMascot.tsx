
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface GreenyMascotProps {
  className?: string;
}

const GreenyMascot: React.FC<GreenyMascotProps> = ({ className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the viewport
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className={cn("relative", className)}>
      <img 
        src="/lovable-uploads/greeny-no-bg.png" 
        alt="Greeny Mascot" 
        className="w-full max-w-md"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default GreenyMascot;
