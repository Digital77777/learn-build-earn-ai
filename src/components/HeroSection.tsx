
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            World's First Learn-Build-Earn AI Ecosystem
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Master AI.{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Build Solutions.
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Earn Revenue.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of innovators transforming their careers with AI. Learn cutting-edge skills, 
          build game-changing solutions, and earn while you grow in the digital intelligence revolution.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Start Your AI Journey Free
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-10 py-4 text-lg h-auto border-2 hover:bg-gray-50 font-semibold group"
          >
            <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            Watch 2-Min Demo
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-2 border">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=600&fit=crop" 
              alt="AI Dashboard Preview"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
            100% Free to Start
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
