
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Lightbulb, Code, BookOpen, Briefcase } from 'lucide-react';

const AIAssistant = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hello! I'm your AI learning assistant. I'm here to help you with your AI journey. What would you like to know?",
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: "Thanks for your question! As an AI assistant, I can help you with learning paths, tool recommendations, project ideas, and technical guidance. What specific area would you like to explore?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const quickActions = [
    {
      icon: <BookOpen size={20} />,
      title: 'Learning Path',
      description: 'Get personalized course recommendations',
      prompt: 'I want to start learning AI from scratch. What learning path do you recommend?'
    },
    {
      icon: <Code size={20} />,
      title: 'Code Help',
      description: 'Get assistance with AI programming',
      prompt: 'I need help implementing a neural network in Python. Can you guide me?'
    },
    {
      icon: <Lightbulb size={20} />,
      title: 'Project Ideas',
      description: 'Discover AI project suggestions',
      prompt: 'What are some beginner-friendly AI projects I can build to improve my skills?'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Career Advice',
      description: 'Get AI career guidance',
      prompt: 'How can I transition into an AI career? What skills should I focus on?'
    }
  ];

  const handleQuickAction = (prompt) => {
    setMessage(prompt);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Assistant</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get personalized guidance and support for your AI learning journey
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-3">
              <Card className="h-[600px] flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="text-blue-600" size={24} />
                    AI Learning Assistant
                    <Badge className="ml-auto bg-green-100 text-green-800">Online</Badge>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {messages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-lg ${
                          msg.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <div className="flex items-start gap-2 mb-2">
                            {msg.type === 'bot' ? (
                              <Bot size={16} className="mt-1" />
                            ) : (
                              <User size={16} className="mt-1" />
                            )}
                            <span className="font-medium">
                              {msg.type === 'bot' ? 'AI Assistant' : 'You'}
                            </span>
                          </div>
                          <p>{msg.content}</p>
                          <p className={`text-xs mt-2 ${
                            msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {msg.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask me anything about AI..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage}>
                      <Send size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full h-auto p-4 flex flex-col items-start text-left"
                        onClick={() => handleQuickAction(action.prompt)}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {action.icon}
                          <span className="font-semibold text-sm">{action.title}</span>
                        </div>
                        <p className="text-xs text-gray-600">{action.description}</p>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>What I Can Help With</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Learning path recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Code debugging & optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Project idea generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Career guidance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Tool recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>Technical explanations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIAssistant;
