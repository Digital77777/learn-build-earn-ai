
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Plus } from 'lucide-react';

const CreateStreamDialog = ({ onStreamCreated }: { onStreamCreated?: () => void }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [scheduledFor, setScheduledFor] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to create a stream",
        variant: "destructive",
      });
      return;
    }

    if (!title.trim() || !category) {
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
        .from('ai_streams')
        .insert({
          title: title.trim(),
          description: description.trim() || null,
          category,
          scheduled_for: scheduledFor ? new Date(scheduledFor).toISOString() : null,
          user_id: user.id,
          is_live: false,
          viewers_count: 0
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Stream created successfully!",
      });

      setOpen(false);
      setTitle('');
      setDescription('');
      setCategory('');
      setScheduledFor('');
      onStreamCreated?.();
    } catch (error) {
      console.error('Error creating stream:', error);
      toast({
        title: "Error",
        description: "Failed to create stream. Please try again.",
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
          <Plus size={16} className="mr-2" />
          Create Stream
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create AI Stream</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Stream title *"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={100}
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Stream description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              maxLength={500}
            />
          </div>
          
          <div>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select category *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tutorial">Tutorial</SelectItem>
                <SelectItem value="Workshop">Workshop</SelectItem>
                <SelectItem value="Discussion">Discussion</SelectItem>
                <SelectItem value="Panel">Panel</SelectItem>
                <SelectItem value="Masterclass">Masterclass</SelectItem>
                <SelectItem value="Demo">Demo</SelectItem>
                <SelectItem value="Q&A">Q&A Session</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Input
              type="datetime-local"
              placeholder="Schedule for (optional)"
              value={scheduledFor}
              onChange={(e) => setScheduledFor(e.target.value)}
              min={new Date().toISOString().slice(0, 16)}
            />
          </div>
          
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Creating...' : 'Create Stream'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateStreamDialog;
