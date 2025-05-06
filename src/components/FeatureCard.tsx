
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className }) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-lg border border-greeny-100 hover:shadow-xl transition-shadow duration-300 hover:border-greeny-200",
        className
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-greeny-100 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
