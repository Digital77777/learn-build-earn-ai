
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreatePostDialog from '../components/CreatePostDialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Heart, User, Clock, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const CommunityForum = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('forum_posts')
        .select(`
          *,
          user_profiles(username, avatar_url)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const categories = [
    { name: 'General Discussion', posts: posts.filter(p => p.category === 'General Discussion').length, color: 'bg-blue-100 text-blue-800' },
    { name: 'AI Tools & Reviews', posts: posts.filter(p => p.category === 'AI Tools & Reviews').length, color: 'bg-green-100 text-green-800' },
    { name: 'Learning & Tutorials', posts: posts.filter(p => p.category === 'Learning & Tutorials').length, color: 'bg-purple-100 text-purple-800' },
    { name: 'Project Showcase', posts: posts.filter(p => p.category === 'Project Showcase').length, color: 'bg-orange-100 text-orange-800' },
    { name: 'Job Board', posts: posts.filter(p => p.category === 'Job Board').length, color: 'bg-pink-100 text-pink-800' },
    { name: 'Technical Support', posts: posts.filter(p => p.category === 'Technical Support').length, color: 'bg-red-100 text-red-800' }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-lg">Loading forum...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Forum</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with AI enthusiasts, share insights, and collaborate on projects
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                placeholder="Search discussions..." 
                className="pl-10 pr-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
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

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
                  {user && <CreatePostDialog onPostCreated={fetchPosts} />}
                </div>
                
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">No posts found.</p>
                    {user && (
                      <CreatePostDialog onPostCreated={fetchPosts} />
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline">{post.category}</Badge>
                              </div>
                              <CardTitle className="text-lg leading-tight hover:text-blue-600">
                                {post.title}
                              </CardTitle>
                              <CardDescription className="mt-2 flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <User size={14} />
                                  {post.user_profiles?.username || 'Anonymous'}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock size={14} />
                                  {new Date(post.created_at).toLocaleDateString()}
                                </span>
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MessageCircle size={16} />
                              {post.replies_count || 0} replies
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart size={16} />
                              {post.likes_count || 0} likes
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
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
                      <span className="text-gray-600">Total Posts</span>
                      <span className="font-semibold">{posts.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Categories</span>
                      <span className="font-semibold">{categories.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Users</span>
                      <span className="font-semibold text-green-600">
                        {new Set(posts.map(p => p.user_id)).size}
                      </span>
                    </div>
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
