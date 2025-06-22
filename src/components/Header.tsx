
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavigationButton from './NavigationButton';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const features = [
    { id: 'ai-tools', name: 'AI Tools Directory', icon: '🤖' },
    { id: 'learning', name: 'Learning Hub', icon: '📚' },
    { id: 'streams', name: 'AI Streams', icon: '📡' },
    { id: 'marketplace', name: 'Marketplace', icon: '🛒' },
    { id: 'community', name: 'Community Forum', icon: '💬' },
    { id: 'assistant', name: 'AI Assistant', icon: '🎯' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Intelligence
            </h1>
            <span className="hidden sm:block text-sm text-gray-600 px-3 py-1 bg-blue-100 rounded-full">
              Freemium
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
            
            <div 
              ref={scrollRef}
              className="flex-1 flex space-x-2 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {features.map((feature) => (
                <NavigationButton 
                  key={feature.id}
                  feature={feature}
                />
              ))}
            </div>
            
            <button 
              onClick={() => scroll('right')}
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-3"
              >
                <span className="text-xl">{feature.icon}</span>
                <span className="font-medium">{feature.name}</span>
              </button>
            ))}
            <div className="pt-3 border-t space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
