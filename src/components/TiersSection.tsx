
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TiersSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your AI Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready to unlock advanced features and earning potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Freemium - Active */}
          <Card className="border-2 border-blue-500 shadow-lg relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
              Available Now
            </Badge>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">Freemium</CardTitle>
              <div className="text-4xl font-bold text-blue-600">$0</div>
              <CardDescription className="text-gray-600">Forever free access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  AI Tools Directory (Limited)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Learning Hub (Basic)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  AI Streams (Public)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Marketplace (Browse)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Community Forum
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  AI Assistant (Basic)
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Basic - Coming Soon */}
          <Card className="border-2 border-gray-300 opacity-75 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500">
              Coming Soon
            </Badge>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">Basic</CardTitle>
              <div className="text-4xl font-bold text-gray-600">$29</div>
              <CardDescription className="text-gray-600">Per month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Everything in Freemium
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Advanced AI Tools Access
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Premium Learning Content
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Marketplace Selling Rights
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Priority Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Earning Opportunities
                </li>
              </ul>
              <Button className="w-full" variant="outline" disabled>
                Notify Me
              </Button>
            </CardContent>
          </Card>

          {/* Pro - Coming Soon */}
          <Card className="border-2 border-gray-300 opacity-75 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
              Coming Soon
            </Badge>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">Pro</CardTitle>
              <div className="text-4xl font-bold text-gray-600">$99</div>
              <CardDescription className="text-gray-600">Per month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Everything in Basic
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Unlimited AI Tools Access
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  White-label Solutions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Advanced Analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Custom AI Assistant
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Maximum Earning Potential
                </li>
              </ul>
              <Button className="w-full" variant="outline" disabled>
                Notify Me
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TiersSection;
