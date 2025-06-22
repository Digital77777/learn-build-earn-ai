
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI Tools Directory',
      description: 'Discover and access thousands of cutting-edge AI tools for every use case.',
      stats: '10,000+ Tools',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: '📚',
      title: 'Learning Hub',
      description: 'Master AI skills with interactive courses, tutorials, and hands-on projects.',
      stats: '500+ Courses',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: '📡',
      title: 'AI Streams',
      description: 'Stay updated with live AI demonstrations, webinars, and expert discussions.',
      stats: 'Live 24/7',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: '🛒',
      title: 'Marketplace',
      description: 'Buy, sell, and trade AI solutions, templates, and digital products.',
      stats: '1,000+ Products',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: '💬',
      title: 'Community Forum',
      description: 'Connect with AI enthusiasts, share insights, and collaborate on projects.',
      stats: '50K+ Members',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      icon: '🎯',
      title: 'AI Assistant',
      description: 'Get personalized guidance and support for your AI learning journey.',
      stats: 'Always Available',
      color: 'bg-cyan-50 border-cyan-200'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
            Freemium Features
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access powerful AI tools and learning resources completely free. 
            No credit card required, no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`${feature.color} hover:shadow-lg transition-shadow duration-300 border-2`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <Badge variant="secondary" className="text-xs">
                    {feature.stats}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
