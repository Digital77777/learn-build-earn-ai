
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
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('ai_streams')
        .insert({
          title,
          description,
          category,
          scheduled_for: scheduledFor ? new Date(scheduledFor).toISOString() : null,
          user_id: user.id,
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
      toast({
        title: "Error",
        description: "Failed to create stream",
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create AI Stream</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Stream title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Stream description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tutorial">Tutorial</SelectItem>
              <SelectItem value="Workshop">Workshop</SelectItem>
              <SelectItem value="Discussion">Discussion</SelectItem>
              <SelectItem value="Panel">Panel</SelectItem>
              <SelectItem value="Masterclass">Masterclass</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="datetime-local"
            placeholder="Schedule for (optional)"
            value={scheduledFor}
            onChange={(e) => setScheduledFor(e.target.value)}
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Creating...' : 'Create Stream'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateStreamDialog;
