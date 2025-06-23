
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Star, ExternalLink, Filter, Zap, Image, FileText, BarChart3, Bot, Brain, MessageSquare } from 'lucide-react';

const AIToolsDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Image Generation', 'Text Tools', 'Productivity', 'Data Analysis', 'Automation', 'Machine Learning', 'Collaboration'];
  
  const tools = [
    {
      name: 'AI Image Generator',
      category: 'Image Generation',
      description: 'Generate stunning images from text descriptions with advanced AI technology. Perfect for creative projects, marketing materials, and artistic exploration.',
      rating: 4.8,
      price: 'Freemium',
      icon: <Image className="w-8 h-8 text-purple-600" />,
      features: ['Text to Image', 'Style Transfer', 'High Resolution', 'Multiple Formats'],
      useCases: ['Marketing', 'Design', 'Social Media', 'Art Creation'],
      demoContent: 'Transform your ideas into stunning visuals with just a text description. Our AI understands context, style, and artistic elements to create professional-quality images.',
      pricing: { free: '10 images/month', pro: 'Unlimited + HD quality' }
    },
    {
      name: 'AI Text Summarizer',
      category: 'Text Tools',
      description: 'Instantly summarize long documents and articles with AI precision. Save time by getting key insights from lengthy content.',
      rating: 4.7,
      price: 'Freemium',
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      features: ['Document Summary', 'Key Points', 'Multiple Formats', 'Bulk Processing'],
      useCases: ['Research', 'Content Creation', 'News Analysis', 'Academic Work'],
      demoContent: 'Upload documents, paste text, or provide URLs to get concise, accurate summaries that capture the essence of your content.',
      pricing: { free: '5 summaries/day', pro: 'Unlimited + API access' }
    },
    {
      name: 'AI Presentation Maker',
      category: 'Productivity',
      description: 'Create professional presentations automatically from your content. Perfect for business meetings, educational content, and project proposals.',
      rating: 4.6,
      price: 'Freemium',
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      features: ['Auto Design', 'Smart Layout', 'Export Options', 'Template Library'],
      useCases: ['Business', 'Education', 'Sales', 'Training'],
      demoContent: 'Just input your topic or upload content, and watch as AI creates professionally designed slides with relevant layouts and graphics.',
      pricing: { free: '3 presentations/month', pro: 'Unlimited + premium templates' }
    },
    {
      name: 'AI Language Translator',
      category: 'Text Tools',
      description: 'Translate text between 100+ languages with contextual accuracy. Perfect for global communication and content localization.',
      rating: 4.9,
      price: 'Freemium',
      icon: <MessageSquare className="w-8 h-8 text-indigo-600" />,
      features: ['100+ Languages', 'Context Aware', 'Real-time Translation', 'Document Support'],
      useCases: ['Global Business', 'Travel', 'Education', 'Content Localization'],
      demoContent: 'Experience accurate translations that understand context, idioms, and technical terminology across diverse languages.',
      pricing: { free: '1000 characters/day', pro: 'Unlimited + document translation' }
    },
    {
      name: 'InsightLite',
      category: 'Data Analysis',
      description: 'Analyze data patterns and generate insights from your datasets. Transform raw data into actionable business intelligence.',
      rating: 4.5,
      price: 'Freemium',
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      features: ['Pattern Recognition', 'Visual Charts', 'Export Reports', 'Predictive Analytics'],
      useCases: ['Business Intelligence', 'Market Research', 'Performance Analysis', 'Trend Forecasting'],
      demoContent: 'Upload your data and discover hidden patterns, trends, and correlations with interactive visualizations and detailed reports.',
      pricing: { free: '1 dataset/week', pro: 'Unlimited datasets + advanced analytics' }
    },
    {
      name: 'TaskBot Mini',
      category: 'Automation',
      description: 'Automate repetitive tasks and workflows with simple AI commands. Boost productivity by eliminating manual work.',
      rating: 4.4,
      price: 'Freemium',
      icon: <Bot className="w-8 h-8 text-red-600" />,
      features: ['Task Automation', 'Workflow Builder', 'Schedule Tasks', 'Integration Hub'],
      useCases: ['Email Management', 'Data Entry', 'Report Generation', 'Social Media'],
      demoContent: 'Set up automated workflows with drag-and-drop simplicity. Connect your favorite apps and let AI handle the routine tasks.',
      pricing: { free: '5 automations', pro: 'Unlimited + advanced triggers' }
    },
    {
      name: 'CopyCraft Free',
      category: 'Text Tools',
      description: 'Generate compelling copy for marketing, emails, and social media. AI-powered writing assistant for all your content needs.',
      rating: 4.6,
      price: 'Freemium',
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      features: ['Marketing Copy', 'Email Templates', 'Social Media', 'SEO Optimization'],
      useCases: ['Digital Marketing', 'Content Creation', 'Email Campaigns', 'Social Media'],
      demoContent: 'Create engaging headlines, persuasive product descriptions, and compelling ad copy that converts visitors into customers.',
      pricing: { free: '1000 words/month', pro: 'Unlimited + advanced templates' }
    },
    {
      name: 'AI Basic Simulator',
      category: 'Machine Learning',
      description: 'Simple ML model training and testing environment for beginners. Learn machine learning with hands-on experimentation.',
      rating: 4.3,
      price: 'Freemium',
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      features: ['Model Training', 'Data Visualization', 'Easy Interface', 'Tutorial Guides'],
      useCases: ['Education', 'Prototyping', 'Research', 'Skill Development'],
      demoContent: 'Build, train, and test machine learning models without coding. Perfect for students and professionals learning AI.',
      pricing: { free: '3 models/month', pro: 'Unlimited + advanced algorithms' }
    },
    {
      name: 'Forum Assistant',
      category: 'Collaboration',
      description: 'AI-powered forum moderation and community management tools. Keep your online communities healthy and engaging.',
      rating: 4.5,
      price: 'Freemium',
      icon: <MessageSquare className="w-8 h-8 text-cyan-600" />,
      features: ['Auto Moderation', 'Topic Suggestions', 'User Engagement', 'Analytics Dashboard'],
      useCases: ['Community Management', 'Customer Support', 'Online Forums', 'Social Platforms'],
      demoContent: 'Automatically moderate discussions, suggest relevant topics, and boost community engagement with AI-driven insights.',
      pricing: { free: '1 community', pro: 'Unlimited communities + advanced features' }
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Tools Directory</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover and access cutting-edge AI tools for every use case. All tools are production-ready and optimized for professional use.
            </p>
          </div>

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

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-blue-100 whitespace-nowrap"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {tool.icon}
                      <div>
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </CardTitle>
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
                    {tool.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {tool.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{tool.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-100 text-green-800">
                      {tool.price}
                    </Badge>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <div className="flex items-center gap-3 mb-2">
                              {tool.icon}
                              <DialogTitle>{tool.name}</DialogTitle>
                            </div>
                            <DialogDescription>
                              {tool.demoContent}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Features:</h4>
                              <div className="flex flex-wrap gap-1">
                                {tool.features.map((feature, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Use Cases:</h4>
                              <div className="flex flex-wrap gap-1">
                                {tool.useCases.map((useCase, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {useCase}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Pricing:</h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                  <p className="font-medium text-sm">Free Plan</p>
                                  <p className="text-xs text-gray-600">{tool.pricing.free}</p>
                                </div>
                                <div className="p-3 bg-blue-50 rounded-lg">
                                  <p className="font-medium text-sm">Pro Plan</p>
                                  <p className="text-xs text-gray-600">{tool.pricing.pro}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" className="flex items-center gap-2">
                        Try Now
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No tools found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIToolsDirectory;
