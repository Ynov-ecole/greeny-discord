
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  linkTo?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className, linkTo }) => {
  const cardContent = (
    <>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-greeny-100 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </>
  );

  if (linkTo) {
    return (
      <Link 
        to={linkTo}
        className={cn(
          "block bg-white rounded-xl p-6 shadow-lg border border-greeny-100 hover:shadow-xl transition-all duration-300",
          "hover:bg-greeny-50 hover:-translate-y-2 hover:border-greeny-300",
          className
        )}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-lg border border-greeny-100 hover:shadow-xl transition-all duration-300",
        "hover:bg-greeny-50 hover:-translate-y-2 hover:border-greeny-300",
        className
      )}
    >
      {cardContent}
    </div>
  );
};

export default FeatureCard;
