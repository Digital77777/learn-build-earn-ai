
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Users, Calendar, Video, Mic } from 'lucide-react';

interface Stream {
  id: string;
  title: string;
  description: string;
  category: string;
  is_live: boolean;
  viewers_count: number;
  scheduled_for: string | null;
  created_at: string;
  user_profiles: {
    username: string;
    avatar_url: string;
  } | null;
}

interface StreamCardProps {
  stream: Stream;
  isLive?: boolean;
}

const StreamCard = ({ stream, isLive = false }: StreamCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
          <Play size={48} className="text-blue-600" />
        </div>
        
        {isLive ? (
          <>
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
          </>
        ) : (
          <div className="absolute top-4 right-4">
            <Badge className="bg-blue-500">
              {stream.scheduled_for ? 'Scheduled' : 'Draft'}
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="flex-grow">
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
        {stream.scheduled_for && !isLive && (
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Calendar size={16} />
            {new Date(stream.scheduled_for).toLocaleDateString()}
          </div>
        )}
        
        <Button className={`w-full ${isLive ? '' : 'variant-outline'}`}>
          {isLive ? (
            <>
              <Video size={16} className="mr-2" />
              Watch Live
            </>
          ) : (
            <>
              <Mic size={16} className="mr-2" />
              Set Reminder
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default StreamCard;
