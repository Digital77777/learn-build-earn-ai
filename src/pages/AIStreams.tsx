
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateStreamDialog from '../components/CreateStreamDialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Users, Calendar, Clock, Mic, Video } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const AIStreams = () => {
  const [streams, setStreams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchStreams = async () => {
    try {
      const { data, error } = await supabase
        .from('ai_streams')
        .select(`
          *,
          user_profiles(username, avatar_url)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setStreams(data || []);
    } catch (error) {
      console.error('Error fetching streams:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStreams();
  }, []);

  const liveStreams = streams.filter(stream => stream.is_live);
  const upcomingStreams = streams.filter(stream => !stream.is_live);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-lg">Loading streams...</div>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Streams</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with live AI demonstrations, webinars, and expert discussions
            </p>
          </div>

          <div className="flex justify-center mb-8">
            {user && <CreateStreamDialog onStreamCreated={fetchStreams} />}
          </div>

          {/* Live Streams */}
          {liveStreams.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h2 className="text-2xl font-bold text-gray-900">Live Now</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {liveStreams.map((stream) => (
                  <Card key={stream.id} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                        <Play size={48} className="text-blue-600" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500 text-white">
                          🔴 LIVE
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-black/50 text-white">
                          <Users size={12} className="mr-1" />
                          {stream.viewers_count}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <Badge variant="outline" className="mb-2 w-fit">{stream.category}</Badge>
                      <CardTitle className="text-lg leading-tight">{stream.title}</CardTitle>
                      <CardDescription className="mt-2">
                        By {stream.user_profiles?.username || 'Anonymous'}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {stream.description && (
                        <p className="text-sm text-gray-600 mb-4">{stream.description}</p>
                      )}
                      <Button className="w-full">
                        <Video size={16} className="mr-2" />
                        Watch Live
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Streams */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {liveStreams.length > 0 ? 'Upcoming Streams' : 'All Streams'}
            </h2>
            
            {upcomingStreams.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No streams available yet.</p>
                {user && (
                  <CreateStreamDialog onStreamCreated={fetchStreams} />
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingStreams.map((stream) => (
                  <Card key={stream.id} className="hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                        <Play size={48} className="text-blue-600" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-500">
                          {stream.scheduled_for ? 'Scheduled' : 'Draft'}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <Badge variant="outline" className="mb-2 w-fit">{stream.category}</Badge>
                      <CardTitle className="text-lg leading-tight">{stream.title}</CardTitle>
                      <CardDescription className="mt-2">
                        By {stream.user_profiles?.username || 'Anonymous'}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {stream.description && (
                        <p className="text-sm text-gray-600 mb-4">{stream.description}</p>
                      )}
                      {stream.scheduled_for && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                          <Calendar size={16} />
                          {new Date(stream.scheduled_for).toLocaleDateString()}
                        </div>
                      )}
                      <Button variant="outline" className="w-full">
                        <Mic size={16} className="mr-2" />
                        Set Reminder
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIStreams;
