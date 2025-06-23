
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Heart, User, Clock } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  likes_count: number;
  replies_count: number;
  created_at: string;
  user_profiles: {
    username: string;
    avatar_url: string;
  } | null;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
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
  );
};

export default PostCard;
