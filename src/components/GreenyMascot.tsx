
import React from 'react';
import { cn } from "@/lib/utils";

interface GreenyMascotProps {
  className?: string;
}

const GreenyMascot: React.FC<GreenyMascotProps> = ({ className }) => {
  return (
    <img 
      src="/lovable-uploads/4ff86065-0a20-4160-9be1-640268498c7f.png" 
      alt="Greeny Mascot" 
      className={cn("w-full max-w-md", className)}
    />
  );
};

export default GreenyMascot;
