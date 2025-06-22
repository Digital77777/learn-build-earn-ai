
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Clock, Users, BookOpen, Award } from 'lucide-react';

const LearningHub = () => {
  const courses = [
    {
      title: 'AI Fundamentals for Beginners',
      instructor: 'Dr. Sarah Chen',
      duration: '8 hours',
      students: 12500,
      rating: 4.9,
      progress: 0,
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop',
      price: 'Free'
    },
    {
      title: 'Machine Learning with Python',
      instructor: 'Prof. Marcus Rodriguez',
      duration: '15 hours',
      students: 8300,
      rating: 4.8,
      progress: 65,
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop',
      price: 'Premium'
    },
    {
      title: 'Deep Learning & Neural Networks',
      instructor: 'Dr. Emily Johnson',
      duration: '20 hours',
      students: 5200,
      rating: 4.9,
      progress: 0,
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop',
      price: 'Premium'
    }
  ];

  const learningPaths = [
    {
      title: 'AI Developer Path',
      courses: 12,
      duration: '3-6 months',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps']
    },
    {
      title: 'Data Scientist Path', 
      courses: 15,
      duration: '4-8 months',
      skills: ['Statistics', 'R', 'SQL', 'Visualization']
    },
    {
      title: 'AI Product Manager Path',
      courses: 8,
      duration: '2-4 months', 
      skills: ['Strategy', 'Ethics', 'Business', 'Leadership']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Hub</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master AI skills with interactive courses, tutorials, and hands-on projects
            </p>
          </div>

          {/* Learning Paths */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Paths</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {learningPaths.map((path, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{path.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <BookOpen size={16} />
                        {path.courses} courses
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {path.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Skills you'll learn:</h4>
                      <div className="flex flex-wrap gap-1">
                        {path.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Start Learning Path</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Courses */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={course.price === 'Free' ? 'bg-green-500' : 'bg-blue-500'}>
                        {course.price}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 rounded-t-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                        <Play size={16} className="mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2">{course.level}</Badge>
                        <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                        <CardDescription className="mt-2">{course.instructor}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {course.students.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award size={16} />
                        {course.rating}
                      </span>
                    </div>

                    {course.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}

                    <Button className="w-full">
                      {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearningHub;
