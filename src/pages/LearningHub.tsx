
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseViewer from '../components/learning/CourseViewer';
import CourseCard from '../components/learning/CourseCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, BookOpen } from 'lucide-react';
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
        (supabase as any).from('learning_courses').select('*').order('created_at', { ascending: false }),
        (supabase as any).from('learning_paths').select('*').order('created_at', { ascending: false })
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
    return <CourseViewer course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
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
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                      <BookOpen size={48} className="text-blue-600" />
                    </div>
                    <CardHeader>
                      <Badge className="mb-2 w-fit">{path.category}</Badge>
                      <CardTitle className="text-lg leading-tight">{path.title}</CardTitle>
                      <CardDescription>{path.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <BookOpen size={16} />
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
                  <CourseCard
                    key={course.id}
                    course={course}
                    onSelect={setSelectedCourse}
                  />
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
