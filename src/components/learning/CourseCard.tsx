
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, Award } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  duration: number;
  instructor: string;
  certification_available: boolean;
  is_featured: boolean;
}

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

const CourseCard = ({ course, onSelect }: CourseCardProps) => {
  return (
    <Card 
      className="hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col"
      onClick={() => onSelect(course)}
    >
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
          <Play size={48} className="text-blue-600" />
        </div>
        {course.is_featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-yellow-500 text-white">Featured</Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="flex-grow">
        <Badge className="mb-2 w-fit">{course.category}</Badge>
        <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={16} />
            {course.duration} min
          </span>
          <Badge variant="outline">{course.difficulty}</Badge>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">
            By {course.instructor || 'AI Expert'}
          </span>
          {course.certification_available && (
            <Badge variant="secondary" className="text-xs">
              <Award size={12} className="mr-1" />
              Certificate
            </Badge>
          )}
        </div>
        
        <Button className="w-full">
          <Play size={16} className="mr-2" />
          Start Course
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
