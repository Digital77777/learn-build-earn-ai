
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Clock, Users, BookOpen, Award } from 'lucide-react';

const LearningHub = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: 'Deep Learning Specialization by Andrew Ng',
      instructor: 'DeepLearning.AI',
      duration: '12 hours',
      students: 125000,
      rating: 4.9,
      progress: 0,
      level: 'Intermediate',
      videoId: 'PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0',
      topics: ['Neural networks', 'CNNs', 'RNNs', 'sequence models'],
      price: 'Free'
    },
    {
      title: 'CS50\'s Introduction to AI with Python',
      instructor: 'Harvard CS50',
      duration: '8 hours',
      students: 85000,
      rating: 4.8,
      progress: 0,
      level: 'Beginner',
      videoId: 'PLhQjrBD2T382_R182iC2gNZI9HzWFMC_8',
      topics: ['Search algorithms', 'ML', 'neural networks', 'NLP'],
      price: 'Free'
    },
    {
      title: 'MIT Introduction to Deep Learning',
      instructor: 'MIT OpenCourseWare',
      duration: '10 hours',
      students: 65000,
      rating: 4.9,
      progress: 0,
      level: 'Intermediate',
      videoId: 'PLkDaE6sCZn6F6wUI9tvS_Gw1vaFAx6rd6',
      topics: ['Deep learning theory', 'TensorFlow', 'applications'],
      price: 'Free'
    },
    {
      title: 'Machine Learning Full Course',
      instructor: 'Simplilearn',
      duration: '10 hours',
      students: 95000,
      rating: 4.7,
      progress: 0,
      level: 'Beginner',
      videoId: 'GwIo3gDZCVQ',
      topics: ['Supervised ML', 'unsupervised ML', 'real-world projects'],
      price: 'Free'
    },
    {
      title: 'AI for Everyone (Non-technical)',
      instructor: 'Andrew Ng',
      duration: '6 hours',
      students: 150000,
      rating: 4.8,
      progress: 0,
      level: 'Beginner',
      videoId: 'PLkDaE6sCZn6F6wUI9tvS_Gw1vaFAx6rd6',
      topics: ['AI strategy', 'applications', 'ethics'],
      price: 'Free'
    },
    {
      title: 'Neural Networks from Scratch',
      instructor: 'Sentdex',
      duration: '15 hours',
      students: 45000,
      rating: 4.6,
      progress: 0,
      level: 'Intermediate',
      videoId: 'PLQVvvaa0QuDdttJXlLtAJxJetJcqmqlQq',
      topics: ['Coding neural networks', 'Python implementation'],
      price: 'Free'
    },
    {
      title: 'Practical Deep Learning for Coders',
      instructor: 'Fast.ai',
      duration: '20 hours',
      students: 75000,
      rating: 4.9,
      progress: 0,
      level: 'Intermediate',
      videoId: 'PLfYUBJiXbdtSL3ajtG6lbiFdlIP_hjWlG',
      topics: ['Vision', 'NLP', 'tabular models', 'PyTorch'],
      price: 'Free'
    },
    {
      title: 'Artificial Intelligence Full Course',
      instructor: 'freeCodeCamp',
      duration: '6 hours',
      students: 120000,
      rating: 4.7,
      progress: 0,
      level: 'Beginner',
      videoId: 'JMUxmLyrhSk',
      topics: ['AI principles', 'ML', 'search', 'logic', 'NLP'],
      price: 'Free'
    },
    {
      title: 'AI for Robotics',
      instructor: 'Sebastian Thrun (Udacity)',
      duration: '12 hours',
      students: 35000,
      rating: 4.8,
      progress: 0,
      level: 'Intermediate',
      videoId: 'PLAwxTw4SYaPnMwH3z3tqsI_eVmSRk8fZb',
      topics: ['Path planning', 'localization', 'filtering'],
      price: 'Free'
    },
    {
      title: 'Build an AI Startup',
      instructor: 'Latent Space',
      duration: '4 hours',
      students: 25000,
      rating: 4.5,
      progress: 0,
      level: 'All Levels',
      videoId: '5xvF0jNNmT4',
      topics: ['AI tools', 'product building', 'startup strategy'],
      price: 'Free'
    }
  ];

  const learningPaths = [
    {
      title: 'AI Fundamentals Path',
      courses: 5,
      duration: '2-4 months',
      skills: ['Python', 'ML Basics', 'Neural Networks', 'Ethics']
    },
    {
      title: 'Deep Learning Specialist Path', 
      courses: 4,
      duration: '3-6 months',
      skills: ['TensorFlow', 'PyTorch', 'CNNs', 'RNNs']
    },
    {
      title: 'AI Business Leader Path',
      courses: 3,
      duration: '1-3 months', 
      skills: ['Strategy', 'Ethics', 'Business Applications', 'Leadership']
    }
  ];

  const handleWatchCourse = (course) => {
    setSelectedCourse(course);
  };

  const closeVideoPlayer = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Video Player Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">{selectedCourse.title}</h3>
              <Button variant="outline" onClick={closeVideoPlayer}>
                Close
              </Button>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedCourse.videoId}?autoplay=1`}
                title={selectedCourse.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedCourse.topics.map((topic, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-600">Instructor: {selectedCourse.instructor}</p>
            </div>
          </div>
        </div>
      )}
      
      <main className="py-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Hub</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master AI skills with free, high-quality courses from top universities and experts
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured AI Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play size={48} className="text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click to Watch</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        {course.price}
                      </Badge>
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

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {course.topics.map((topic, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" onClick={() => handleWatchCourse(course)}>
                      <Play size={16} className="mr-2" />
                      Watch Course
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
