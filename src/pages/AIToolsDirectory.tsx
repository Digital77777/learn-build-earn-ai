
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Star, ExternalLink, Filter } from 'lucide-react';

const AIToolsDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Writing', 'Design', 'Code', 'Marketing', 'Analytics', 'Video', 'Audio'];
  
  const tools = [
    {
      name: 'GPT-4 Turbo',
      category: 'Writing',
      description: 'Advanced language model for content creation, coding, and analysis',
      rating: 4.9,
      price: 'Freemium',
      image: '🤖',
      features: ['Text Generation', 'Code Assistance', 'Analysis']
    },
    {
      name: 'Midjourney',
      category: 'Design',
      description: 'AI-powered image generation from text descriptions',
      rating: 4.8,
      price: 'Paid',
      image: '🎨',
      features: ['Image Generation', 'Art Creation', 'Style Transfer']
    },
    {
      name: 'GitHub Copilot',
      category: 'Code',
      description: 'AI pair programmer that helps you write code faster',
      rating: 4.7,
      price: 'Paid',
      image: '💻',
      features: ['Code Completion', 'Documentation', 'Refactoring']
    },
    {
      name: 'Jasper AI',
      category: 'Marketing',
      description: 'AI copywriting tool for marketing content and campaigns',
      rating: 4.6,
      price: 'Paid',
      image: '📝',
      features: ['Copywriting', 'SEO Content', 'Social Media']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Tools Directory</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover and access thousands of cutting-edge AI tools for every use case
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  placeholder="Search AI tools..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={20} />
                Filters
              </Button>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant="secondary"
                  className="cursor-pointer hover:bg-blue-100 whitespace-nowrap"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{tool.image}</span>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">{tool.category}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tool.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{tool.description}</CardDescription>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tool.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge className={tool.price === 'Freemium' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                      {tool.price}
                    </Badge>
                    <Button size="sm" className="flex items-center gap-2">
                      Try Now
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIToolsDirectory;
