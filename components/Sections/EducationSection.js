import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Book, Video, FileText, 
  Users, Star, Clock, Play 
} from 'lucide-react';

const EducationSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'AI Security Fundamentals',
      description: 'Learn the basics of AI-powered security systems and threat detection.',
      duration: '4 hours',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1250,
      category: 'security',
      type: 'video'
    },
    {
      id: 2,
      title: 'Misinformation Detection Techniques',
      description: 'Advanced methods for identifying and combating misinformation.',
      duration: '6 hours',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 890,
      category: 'detection',
      type: 'interactive'
    },
    {
      id: 3,
      title: 'Data Analysis with AI',
      description: 'Comprehensive guide to analyzing data using artificial intelligence.',
      duration: '8 hours',
      difficulty: 'Advanced',
      rating: 4.7,
      students: 650,
      category: 'analysis',
      type: 'course'
    },
    {
      id: 4,
      title: 'Digital Literacy for Everyone',
      description: 'Essential digital skills for navigating the modern information landscape.',
      duration: '3 hours',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 2100,
      category: 'literacy',
      type: 'video'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'security', label: 'Security' },
    { id: 'detection', label: 'Detection' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'literacy', label: 'Digital Literacy' }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <GraduationCap className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Education & Training
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Enhance your knowledge with our comprehensive educational resources and training programs
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Book, label: 'Courses', value: '50+' },
          { icon: Users, label: 'Students', value: '10K+' },
          { icon: Star, label: 'Rating', value: '4.8' },
          { icon: Clock, label: 'Hours', value: '200+' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200"
          >
            <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-h-[40px] ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200"
          >
            <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="absolute top-4 left-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.difficulty}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white/20 backdrop-blur text-white px-2 py-1 rounded text-xs">
                  {course.type}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Start Learning
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning Paths */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Learning Paths</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Security Professional',
              description: 'Complete certification path for security professionals',
              courses: 12,
              duration: '40 hours'
            },
            {
              title: 'AI Specialist',
              description: 'Advanced AI and machine learning specialization',
              courses: 8,
              duration: '32 hours'
            },
            {
              title: 'Digital Citizen',
              description: 'Essential skills for safe digital participation',
              courses: 6,
              duration: '18 hours'
            }
          ].map((path, index) => (
            <div key={path.title} className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{path.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{path.description}</p>
              <div className="text-xs text-gray-500 mb-4">
                {path.courses} courses • {path.duration}
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-200">
                Start Path
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationSection;
