
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Download, Eye, BarChart3 } from 'lucide-react';

const PresentationMakerTool = () => {
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('business');
  const [slideCount, setSlideCount] = useState('5');
  const [content, setContent] = useState('');
  const [slides, setSlides] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const audiences = [
    { value: 'business', label: 'Business/Corporate' },
    { value: 'academic', label: 'Academic/Educational' },
    { value: 'sales', label: 'Sales/Marketing' },
    { value: 'technical', label: 'Technical/Engineering' },
    { value: 'general', label: 'General Audience' },
  ];

  const generatePresentation = async () => {
    if (!topic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a presentation topic",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const slideTemplates = {
        business: [
          { title: 'Executive Summary', content: 'Key objectives and outcomes' },
          { title: 'Current Situation', content: 'Market analysis and challenges' },
          { title: 'Proposed Solution', content: 'Our approach and methodology' },
          { title: 'Implementation Plan', content: 'Timeline and milestones' },
          { title: 'Expected Results', content: 'ROI and success metrics' }
        ],
        academic: [
          { title: 'Introduction', content: 'Research question and hypothesis' },
          { title: 'Literature Review', content: 'Previous studies and findings' },
          { title: 'Methodology', content: 'Research approach and methods' },
          { title: 'Results', content: 'Key findings and data' },
          { title: 'Conclusion', content: 'Implications and future work' }
        ],
        sales: [
          { title: 'Problem Statement', content: 'Customer pain points' },
          { title: 'Our Solution', content: 'Product benefits and features' },
          { title: 'Success Stories', content: 'Case studies and testimonials' },
          { title: 'Pricing & Packages', content: 'Investment options' },
          { title: 'Next Steps', content: 'Call to action' }
        ],
        technical: [
          { title: 'Technical Overview', content: 'System architecture' },
          { title: 'Implementation Details', content: 'Technologies and frameworks' },
          { title: 'Performance Metrics', content: 'Benchmarks and optimization' },
          { title: 'Security & Compliance', content: 'Safety measures' },
          { title: 'Deployment Strategy', content: 'Rollout plan' }
        ],
        general: [
          { title: 'Introduction', content: 'Welcome and overview' },
          { title: 'Key Points', content: 'Main topics and themes' },
          { title: 'Examples', content: 'Real-world applications' },
          { title: 'Benefits', content: 'Value and advantages' },
          { title: 'Summary', content: 'Key takeaways' }
        ]
      };

      const baseSlides = slideTemplates[audience as keyof typeof slideTemplates];
      const numSlides = parseInt(slideCount);
      
      const generatedSlides = baseSlides.slice(0, numSlides).map((slide, index) => ({
        id: index + 1,
        title: slide.title.replace(/\b\w/g, l => l.toUpperCase()),
        content: content || slide.content,
        backgroundColor: ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-teal-500'][index % 5],
        textColor: 'text-white'
      }));

      // Add title slide
      const titleSlide = {
        id: 0,
        title: topic,
        content: `Presented to ${audience} audience`,
        backgroundColor: 'bg-gradient-to-br from-blue-600 to-purple-600',
        textColor: 'text-white'
      };

      setSlides([titleSlide, ...generatedSlides]);
      
      toast({
        title: "Success",
        description: "Presentation generated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate presentation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const downloadPresentation = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${topic}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; }
          .slide { width: 100vw; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px; box-sizing: border-box; }
          .slide h1 { font-size: 3em; margin-bottom: 20px; text-align: center; }
          .slide p { font-size: 1.5em; text-align: center; max-width: 800px; }
          .bg-blue-500 { background: #3b82f6; }
          .bg-green-500 { background: #10b981; }
          .bg-purple-500 { background: #8b5cf6; }
          .bg-orange-500 { background: #f97316; }
          .bg-teal-500 { background: #14b8a6; }
          .text-white { color: white; }
        </style>
      </head>
      <body>
        ${slides.map(slide => `
          <div class="slide ${slide.backgroundColor} ${slide.textColor}">
            <h1>${slide.title}</h1>
            <p>${slide.content}</p>
          </div>
        `).join('')}
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topic.replace(/\s+/g, '-').toLowerCase()}-presentation.html`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            AI Presentation Maker
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Presentation Topic</label>
              <Input
                placeholder="e.g., Digital Marketing Strategy"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Audience Type</label>
              <Select value={audience} onValueChange={setAudience}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {audiences.map((aud) => (
                    <SelectItem key={aud.value} value={aud.value}>
                      {aud.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Number of Slides</label>
              <Select value={slideCount} onValueChange={setSlideCount}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 slides</SelectItem>
                  <SelectItem value="5">5 slides</SelectItem>
                  <SelectItem value="7">7 slides</SelectItem>
                  <SelectItem value="10">10 slides</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Additional Content (optional)</label>
            <Textarea
              placeholder="Add specific points or content you want to include..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
            />
          </div>
          
          <Button onClick={generatePresentation} disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Presentation'
            )}
          </Button>

          {slides.length > 0 && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button onClick={downloadPresentation} variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download HTML
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {slides.map((slide) => (
                  <Card key={slide.id} className={`${slide.backgroundColor} ${slide.textColor} border-0`}>
                    <CardContent className="p-6 h-48 flex flex-col justify-center">
                      <h3 className="text-lg font-bold mb-2 text-center">{slide.title}</h3>
                      <p className="text-sm text-center opacity-90">{slide.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PresentationMakerTool;
