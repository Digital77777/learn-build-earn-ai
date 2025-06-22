
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Researcher",
      image: "https://images.unsplash.com/photo-1494790108755-2616c851-ad0f?w=400&h=400&fit=crop&crop=face",
      content: "This platform transformed my AI journey. I went from complete beginner to landing my dream job in just 6 months.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: "The AI tools directory saved me countless hours. I found exactly what I needed for my projects instantly.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "Built my entire AI-powered startup using resources from this marketplace. The community support is incredible.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Thousands of AI Enthusiasts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a thriving community of learners, builders, and earners who are shaping the future of AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
