
import React from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "50,000+",
      label: "Active Learners",
      description: "Growing daily"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "10,000+",
      label: "AI Tools",
      description: "Curated & tested"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "500+",
      label: "Courses",
      description: "Expert-created"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "$2M+",
      label: "Earned",
      description: "By our community"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
