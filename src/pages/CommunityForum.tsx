
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Heart, User, Clock, TrendingUp } from 'lucide-react';

const CommunityForum = () => {
  const categories = [
    { name: 'General Discussion', posts: 1250, color: 'bg-blue-100 text-blue-800' },
    { name: 'AI Tools & Reviews', posts: 890, color: 'bg-green-100 text-green-800' },
    { name: 'Learning & Tutorials', posts: 2100, color: 'bg-purple-100 text-purple-800' },
    { name: 'Project Showcase', posts: 650, color: 'bg-orange-100 text-orange-800' },
    { name: 'Job Board', posts: 340, color: 'bg-pink-100 text-pink-800' },
    { name: 'Technical Support', posts: 780, color: 'bg-red-100 text-red-800' }
  ];

  const trendingTopics = [
    {
      title: 'How to get started with GPT-4 API integration?',
      author: 'Sarah Chen',
      replies: 23,
      likes: 45,
      timeAgo: '2 hours ago',
      category: 'Technical Support',
      isHot: true
    },
    {
      title: 'Showcase: AI-powered content generator I built',
      author: 'Mike Johnson',
      replies: 18,
      likes: 67,
      timeAgo: '4 hours ago',
      category: 'Project Showcase',
      isHot: true
    },
    {
      title: 'Best practices for fine-tuning language models',
      author: 'Dr. Emily Rodriguez',
      replies: 34,
      likes: 89,
      timeAgo: '6 hours ago',
      category: 'Learning & Tutorials',
      isHot: false
    },
    {
      title: 'Remote AI Engineer position at TechCorp',
      author: 'TechRecruiter',
      replies: 12,
      likes: 28,
      timeAgo: '8 hours ago',
      category: 'Job Board',
      isHot: false
    },
    {
      title: 'Midjourney vs DALL-E 3 - Detailed comparison',
      author: 'Alex Thompson',
      replies: 41,
      likes: 92,
      timeAgo: '12 hours ago',
      category: 'AI Tools & Reviews',
      isHot: true
    }
  ];

  const topContributors = [
    { name: 'Sarah Chen', posts: 145, reputation: 2890, avatar: 'SC' },
    { name: 'Mike Johnson', posts: 132, reputation: 2650, avatar: 'MJ' },
    { name: 'Dr. Emily Rodriguez', posts: 89, reputation: 3200, avatar: 'ER' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Forum</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with AI enthusiasts, share insights, and collaborate on projects
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input placeholder="Search discussions..." className="pl-10 pr-4" />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Categories */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Forum Categories</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {categories.map((category, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{category.name}</CardTitle>
                          <Badge className={category.color}>
                            {category.posts} posts
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Trending Discussions</h2>
                  <Button>
                    <MessageCircle size={16} className="mr-2" />
                    New Post
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {trendingTopics.map((topic, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{topic.category}</Badge>
                              {topic.isHot && (
                                <Badge className="bg-red-500 text-white">
                                  🔥 Hot
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-lg leading-tight hover:text-blue-600">
                              {topic.title}
                            </CardTitle>
                            <CardDescription className="mt-2 flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <User size={14} />
                                {topic.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={14} />
                                {topic.timeAgo}
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MessageCircle size={16} />
                            {topic.replies} replies
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart size={16} />
                            {topic.likes} likes
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Stats */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp size={20} />
                    Community Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Members</span>
                      <span className="font-semibold">50,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Posts</span>
                      <span className="font-semibold">125,890</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Today</span>
                      <span className="font-semibold text-green-600">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">New This Week</span>
                      <span className="font-semibold text-blue-600">1,234</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Contributors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topContributors.map((contributor, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {contributor.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{contributor.name}</div>
                          <div className="text-xs text-gray-600">
                            {contributor.posts} posts • {contributor.reputation} rep
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityForum;
