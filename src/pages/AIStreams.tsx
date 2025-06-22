
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Users, Calendar, Clock, Mic, Video } from 'lucide-react';

const AIStreams = () => {
  const liveStreams = [
    {
      title: 'Building Your First AI Chatbot',
      host: 'Alex Thompson',
      viewers: 1250,
      status: 'live',
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop',
      category: 'Tutorial',
      duration: 'Started 45 min ago'
    },
    {
      title: 'AI in Healthcare: Real-world Applications',
      host: 'Dr. Maria Santos',
      viewers: 850,
      status: 'live',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=225&fit=crop',
      category: 'Discussion',
      duration: 'Started 20 min ago'
    }
  ];

  const upcomingStreams = [
    {
      title: 'Deep Dive: GPT-4 API Integration',
      host: 'Sarah Chen',
      scheduledFor: 'Today, 3:00 PM EST',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop',
      category: 'Workshop',
      expectedDuration: '2 hours'
    },
    {
      title: 'AI Ethics Panel Discussion',
      host: 'Multiple Experts',
      scheduledFor: 'Tomorrow, 11:00 AM EST',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop',
      category: 'Panel',
      expectedDuration: '90 minutes'
    },
    {
      title: 'Building AI SaaS Products',
      host: 'Mike Johnson',
      scheduledFor: 'Friday, 2:00 PM EST',
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=225&fit=crop',
      category: 'Masterclass',
      expectedDuration: '3 hours'
    }
  ];

  const categories = ['All', 'Tutorial', 'Workshop', 'Discussion', 'Panel', 'Masterclass'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Streams</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with live AI demonstrations, webinars, and expert discussions
            </p>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
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

          {/* Live Streams */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-gray-900">Live Now</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {liveStreams.map((stream, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={stream.thumbnail} 
                      alt={stream.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white">
                        🔴 LIVE
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        <Users size={12} className="mr-1" />
                        {stream.viewers.toLocaleString()}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                        <Play size={20} className="mr-2" />
                        Join Stream
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2">{stream.category}</Badge>
                        <CardTitle className="text-lg leading-tight">{stream.title}</CardTitle>
                        <CardDescription className="mt-2">Hosted by {stream.host}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <Clock size={16} />
                      {stream.duration}
                    </div>
                    <Button className="w-full">
                      <Video size={16} className="mr-2" />
                      Watch Live
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Streams */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Streams</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingStreams.map((stream, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={stream.thumbnail} 
                      alt={stream.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-500">
                        Upcoming
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <Badge variant="outline" className="mb-2 w-fit">{stream.category}</Badge>
                    <CardTitle className="text-lg leading-tight">{stream.title}</CardTitle>
                    <CardDescription className="mt-2">Hosted by {stream.host}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {stream.scheduledFor}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {stream.expectedDuration}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Mic size={16} className="mr-2" />
                      Set Reminder
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIStreams;
