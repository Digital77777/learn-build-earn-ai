
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ImageGeneratorTool from './ImageGeneratorTool';
import TextSummarizerTool from './TextSummarizerTool';
import LanguageTranslatorTool from './LanguageTranslatorTool';
import CopyWriterTool from './CopyWriterTool';
import PresentationMakerTool from './PresentationMakerTool';

interface ToolInterfaceProps {
  toolName: string;
  onBack: () => void;
}

const ToolInterface = ({ toolName, onBack }: ToolInterfaceProps) => {
  const renderTool = () => {
    switch (toolName) {
      case 'AI Image Generator':
        return <ImageGeneratorTool />;
      case 'AI Text Summarizer':
        return <TextSummarizerTool />;
      case 'AI Language Translator':
        return <LanguageTranslatorTool />;
      case 'CopyCraft Free':
        return <CopyWriterTool />;
      case 'AI Presentation Maker':
        return <PresentationMakerTool />;
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle>{toolName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                This tool interface is coming soon. We're working on integrating more AI tools.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  Features that will be available:
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Interactive tool interface</li>
                  <li>• Real-time processing</li>
                  <li>• Export capabilities</li>
                  <li>• Usage analytics</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <Button onClick={onBack} variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Tools Directory
          </Button>
        </div>
        {renderTool()}
      </div>
    </div>
  );
};

export default ToolInterface;
