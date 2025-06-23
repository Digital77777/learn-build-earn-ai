
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Play, Clock, Users, Star, Search, BookOpen, Award, Filter } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const LearningHub = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [paths, setPaths] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const { user } = useAuth();

  const fetchData = async () => {
    try {
      const [coursesRes, pathsRes] = await Promise.all([
        supabase.from('learning_courses').select('*').order('created_at', { ascending: false }),
        supabase.from('learning_paths').select('*').order('created_at', { ascending: false })
      ]);

      if (coursesRes.error) throw coursesRes.error;
      if (pathsRes.error) throw pathsRes.error;

      setCourses(coursesRes.data || []);
      setPaths(pathsRes.data || []);
    } catch (error) {
      console.error('Error fetching learning data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categories = ['all', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Science'];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-lg">Loading courses...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        <div className="container mx-auto py-8 px-4">
          <Button 
            onClick={() => setSelectedCourse(null)} 
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
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
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
                  <CardTitle>{selectedCourse.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {selectedCourse.duration} minutes
                    </span>
                    <Badge variant="outline">{selectedCourse.category}</Badge>
                    <Badge variant="secondary">{selectedCourse.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{selectedCourse.description}</p>
                  <div className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: selectedCourse.content || '<p>Course content will be loaded here...</p>' }} />
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
                    
                    {selectedCourse.certification_available && (
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
                    <span className="font-medium">{selectedCourse.instructor || 'AI Expert'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{selectedCourse.duration} min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-medium">{selectedCourse.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium">{selectedCourse.category}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Hub</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master AI and machine learning with our comprehensive courses and learning paths
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  placeholder="Search courses..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === 'all' ? 'All' : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Paths */}
          {paths.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Paths</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paths.map((path) => (
                  <Card key={path.id} className="hover:shadow-lg transition-shadow duration-300">
                    {path.image_url && (
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                        <BookOpen size={48} className="text-blue-600" />
                      </div>
                    )}
                    <CardHeader>
                      <Badge className="mb-2 w-fit">{path.category}</Badge>
                      <CardTitle className="text-lg leading-tight">{path.title}</CardTitle>
                      <CardDescription>{path.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {path.total_duration} min
                        </span>
                        <Badge variant="outline">{path.difficulty}</Badge>
                      </div>
                      <Button className="w-full">Start Learning Path</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Courses */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Courses</h2>
            {filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No courses found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={() => setSelectedCourse(course)}>
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
                    
                    <CardHeader>
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
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearningHub;
