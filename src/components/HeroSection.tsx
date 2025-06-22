
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            World's First Learn-Build-Earn AI Ecosystem
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Digital Intelligence{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Marketplace
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your AI journey with our comprehensive ecosystem. Learn cutting-edge skills, 
          build innovative solutions, and earn while you grow in the digital intelligence revolution.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
          >
            Start Free Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 text-lg border-2 hover:bg-gray-50"
          >
            Watch Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">AI Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Learners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">$2M+</div>
            <div className="text-gray-600">Earned</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
