
import React from "react";

const RobotMascot: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 300 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Leaf on Head */}
        <path 
          d="M150 40C180 10 220 20 230 40C240 60 230 90 210 100C190 110 160 100 150 80" 
          fill="#4ADE80" 
          stroke="#166534" 
          strokeWidth="2"
        />
        
        {/* Robot Head */}
        <rect 
          x="110" 
          y="100" 
          width="80" 
          height="70" 
          rx="10" 
          fill="#16A34A" 
          stroke="#166534" 
          strokeWidth="2"
        />
        
        {/* Robot Eyes */}
        <circle cx="130" cy="125" r="10" fill="white" />
        <circle cx="170" cy="125" r="10" fill="white" />
        <circle cx="130" cy="125" r="5" fill="#166534" />
        <circle cx="170" cy="125" r="5" fill="#166534" />
        
        {/* Robot Mouth */}
        <rect 
          x="125" 
          y="145" 
          width="50" 
          height="10" 
          rx="5" 
          fill="white"
        />
        
        {/* Robot Body */}
        <rect 
          x="120" 
          y="170" 
          width="60" 
          height="50" 
          rx="5" 
          fill="#22C55E" 
          stroke="#166534" 
          strokeWidth="2"
        />
        
        {/* Robot Arms */}
        <rect 
          x="90" 
          y="175" 
          width="30" 
          height="10" 
          rx="5" 
          fill="#22C55E" 
          stroke="#166534" 
          strokeWidth="2"
        />
        <rect 
          x="180" 
          y="175" 
          width="30" 
          height="10" 
          rx="5" 
          fill="#22C55E" 
          stroke="#166534" 
          strokeWidth="2"
        />
        
        {/* Robot Legs */}
        <rect 
          x="130" 
          y="220" 
          width="10" 
          height="30" 
          rx="5" 
          fill="#16A34A" 
          stroke="#166534" 
          strokeWidth="2"
        />
        <rect 
          x="160" 
          y="220" 
          width="10" 
          height="30" 
          rx="5" 
          fill="#16A34A" 
          stroke="#166534" 
          strokeWidth="2"
        />
        
        {/* Robot Controls */}
        <circle cx="135" cy="190" r="5" fill="#BBF7D0" />
        <circle cx="150" cy="190" r="5" fill="#BBF7D0" />
        <circle cx="165" cy="190" r="5" fill="#BBF7D0" />
      </svg>
    </div>
  );
};

export default RobotMascot;
