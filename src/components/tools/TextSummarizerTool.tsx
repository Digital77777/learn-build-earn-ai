
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Copy, FileText } from 'lucide-react';

const TextSummarizerTool = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const summarizeText = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to summarize",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Using Hugging Face's free summarization API
      const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: inputText,
          parameters: {
            max_length: 200,
            min_length: 50,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Summarization failed');
      }

      const result = await response.json();
      const summaryText = result[0]?.summary_text || result[0]?.generated_text || 'Unable to generate summary';
      setSummary(summaryText);
      
      toast({
        title: "Success",
        description: "Text summarized successfully!",
      });
    } catch (error) {
      // Fallback to simple word extraction
      const sentences = inputText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const keyWords = inputText.split(' ').filter(word => word.length > 5).slice(0, 20);
      const fallbackSummary = `Key points: ${keyWords.join(', ')}. The text contains ${sentences.length} main sentences covering these topics.`;
      setSummary(fallbackSummary);
      
      toast({
        title: "Summary Generated",
        description: "Generated basic summary (API unavailable)",
      });
    } finally {
      setLoading(false);
    }
  };

  const copySummary = () => {
    navigator.clipboard.writeText(summary);
    toast({
      title: "Copied",
      description: "Summary copied to clipboard",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            AI Text Summarizer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Text to Summarize</label>
            <Textarea
              placeholder="Paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={8}
              className="min-h-32"
            />
            <p className="text-sm text-gray-500 mt-1">
              Characters: {inputText.length}
            </p>
          </div>
          
          <Button onClick={summarizeText} disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Summarizing...
              </>
            ) : (
              'Generate Summary'
            )}
          </Button>

          {summary && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Summary</CardTitle>
                  <Button onClick={copySummary} variant="outline" size="sm">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{summary}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TextSummarizerTool;
