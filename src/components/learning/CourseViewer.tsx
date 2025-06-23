
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Award } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  difficulty: string;
  duration: number;
  instructor: string;
  certification_available: boolean;
}

interface CourseViewerProps {
  course: Course;
  onBack: () => void;
}

const CourseViewer = ({ course, onBack }: CourseViewerProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto py-8 px-4">
        <Button 
          onClick={onBack} 
          variant="outline" 
          className="mb-6"
        >
          ← Back to Courses
        </Button>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-black rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play size={64} className="mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">Video Player</p>
                      <p className="text-sm opacity-75">Course video would play here</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {course.duration} minutes
                  </span>
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge variant="secondary">{course.difficulty}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: course.content || '<p>Course content will be loaded here...</p>' }} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Info Sidebar */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                  
                  {course.certification_available && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <Award size={16} />
                      <span>Certificate Available</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Instructor</span>
                  <span className="font-medium">{course.instructor || 'AI Expert'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{course.duration} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level</span>
                  <span className="font-medium">{course.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{course.category}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseViewer;
