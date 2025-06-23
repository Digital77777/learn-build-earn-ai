
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Copy, Zap, RefreshCw } from 'lucide-react';

const CopyWriterTool = () => {
  const [contentType, setContentType] = useState('headline');
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('professional');
  const [generatedCopy, setGeneratedCopy] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const contentTypes = [
    { value: 'headline', label: 'Headlines' },
    { value: 'product', label: 'Product Description' },
    { value: 'email', label: 'Email Subject Lines' },
    { value: 'social', label: 'Social Media Posts' },
    { value: 'ad', label: 'Ad Copy' },
    { value: 'blog', label: 'Blog Introduction' },
  ];

  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'creative', label: 'Creative' },
    { value: 'formal', label: 'Formal' },
  ];

  const templates = {
    headline: [
      "Discover the Ultimate Solution for {topic}",
      "Transform Your {topic} in Just 30 Days",
      "The Secret to Mastering {topic} Revealed",
      "Why {topic} is More Important Than Ever",
      "The Complete Guide to {topic} Success"
    ],
    product: [
      "Experience premium quality with our {topic}. Featuring {keywords}, this product delivers exceptional results that exceed expectations.",
      "Revolutionize your approach to {topic} with our innovative solution. Built with {keywords} in mind, it's designed for modern professionals.",
      "Discover the perfect blend of style and functionality in our {topic}. With {keywords}, you get unmatched performance and reliability."
    ],
    email: [
      "🚀 Your {topic} transformation starts now",
      "Last chance: {topic} offer expires tonight",
      "Exclusive: {topic} secrets revealed inside",
      "Breaking: Major {topic} breakthrough announced",
      "Don't miss out on this {topic} opportunity"
    ],
    social: [
      "Just discovered this amazing approach to {topic}! Who else is interested in {keywords}? #trending",
      "Pro tip: The key to {topic} success is understanding {keywords}. What's your experience?",
      "Monday motivation: Your {topic} goals are within reach! Focus on {keywords} and watch the magic happen ✨"
    ],
    ad: [
      "Ready to excel at {topic}? Our proven system incorporating {keywords} has helped thousands achieve their goals. Start today!",
      "Stop struggling with {topic}. Our expert-designed solution focuses on {keywords} to deliver real results fast.",
      "Transform your {topic} game with our revolutionary approach. Built around {keywords}, it's the change you've been waiting for."
    ],
    blog: [
      "In today's competitive landscape, mastering {topic} has become essential. Whether you're focusing on {keywords} or exploring new strategies, this guide will provide you with actionable insights.",
      "Have you ever wondered what separates successful {topic} practitioners from the rest? The answer lies in understanding {keywords} and applying proven methodologies.",
      "The world of {topic} is evolving rapidly. With recent developments in {keywords}, professionals need to stay ahead of the curve to remain competitive."
    ]
  };

  const generateCopy = async () => {
    if (!topic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a topic",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const templateOptions = templates[contentType as keyof typeof templates];
      const randomTemplate = templateOptions[Math.floor(Math.random() * templateOptions.length)];
      
      let copy = randomTemplate
        .replace(/\{topic\}/g, topic)
        .replace(/\{keywords\}/g, keywords || 'key features');

      // Add tone adjustments
      if (tone === 'urgent') {
        copy = `⚡ URGENT: ${copy}`;
      } else if (tone === 'creative') {
        copy = `🎨 ${copy} ✨`;
      } else if (tone === 'friendly') {
        copy = `Hey there! ${copy} 😊`;
      }

      setGeneratedCopy(copy);
      
      toast({
        title: "Success",
        description: "Copy generated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate copy. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyCopy = () => {
    navigator.clipboard.writeText(generatedCopy);
    toast({
      title: "Copied",
      description: "Copy text copied to clipboard",
    });
  };

  const regenerate = () => {
    if (topic.trim()) {
      generateCopy();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            AI Copy Writer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Content Type</label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {contentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Tone</label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Topic/Product</label>
            <Input
              placeholder="e.g., fitness coaching, web design, productivity app..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Keywords (optional)</label>
            <Input
              placeholder="e.g., affordable, premium, innovative..."
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
          
          <Button onClick={generateCopy} disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Copy'
            )}
          </Button>

          {generatedCopy && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Generated Copy</CardTitle>
                  <div className="flex gap-2">
                    <Button onClick={regenerate} variant="outline" size="sm">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                    <Button onClick={copyCopy} variant="outline" size="sm">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm leading-relaxed">{generatedCopy}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CopyWriterTool;
