
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle } from 'lucide-react';

const CreatePostDialog = ({ onPostCreated }: { onPostCreated?: () => void }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to create a post",
        variant: "destructive",
      });
      return;
    }

    if (!title.trim() || !content.trim() || !category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await (supabase as any)
        .from('forum_posts')
        .insert({
          title: title.trim(),
          content: content.trim(),
          category,
          user_id: user.id,
          likes_count: 0,
          replies_count: 0
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Post created successfully!",
      });

      setOpen(false);
      setTitle('');
      setContent('');
      setCategory('');
      onPostCreated?.();
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "Error",
        description: "Failed to create post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <MessageCircle size={16} className="mr-2" />
          New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Post title *"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={150}
            />
          </div>
          
          <div>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select category *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General Discussion">General Discussion</SelectItem>
                <SelectItem value="AI Tools & Reviews">AI Tools & Reviews</SelectItem>
                <SelectItem value="Learning & Tutorials">Learning & Tutorials</SelectItem>
                <SelectItem value="Project Showcase">Project Showcase</SelectItem>
                <SelectItem value="Job Board">Job Board</SelectItem>
                <SelectItem value="Technical Support">Technical Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Textarea
              placeholder="Post content *"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              required
              maxLength={2000}
            />
            <div className="text-xs text-gray-500 mt-1">
              {content.length}/2000 characters
            </div>
          </div>
          
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Creating...' : 'Create Post'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
