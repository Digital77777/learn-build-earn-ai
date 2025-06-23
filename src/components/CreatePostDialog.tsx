
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
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('forum_posts')
        .insert({
          title,
          content,
          category,
          user_id: user.id,
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
      toast({
        title: "Error",
        description: "Failed to create post",
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
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
          <Textarea
            placeholder="Post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            required
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Creating...' : 'Create Post'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
