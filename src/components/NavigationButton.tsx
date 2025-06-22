
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationButtonProps {
  feature: {
    id: string;
    name: string;
    icon: string;
  };
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ feature }) => {
  const navigate = useNavigate();

  const getRouteForFeature = (id: string) => {
    const routes = {
      'ai-tools': '/ai-tools',
      'learning': '/learning-hub',
      'streams': '/ai-streams',
      'marketplace': '/marketplace',
      'community': '/community',
      'assistant': '/ai-assistant'
    };
    return routes[id] || '/';
  };

  const handleClick = () => {
    navigate(getRouteForFeature(feature.id));
  };

  return (
    <button 
      onClick={handleClick}
      className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-200 group"
    >
      <span className="text-lg">{feature.icon}</span>
      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 whitespace-nowrap">
        {feature.name}
      </span>
    </button>
  );
};

export default NavigationButton;
