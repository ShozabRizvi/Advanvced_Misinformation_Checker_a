import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, BarChart, Zap, Users, 
  PlayCircle, CheckCircle, Star 
} from 'lucide-react';

const HomeSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <Brain className="h-20 w-20 mx-auto mb-4 animate-pulse" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            VANTA AI Platform
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 font-light">
            Intelligence Beyond Limits - Advanced AI-driven platform for security and misinformation detection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 min-h-[56px]"
            >
              <PlayCircle className="h-6 w-6" />
              <span>Get Started</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200 min-h-[56px]"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { number: '99.9%', label: 'Accuracy Rate' },
          { number: '24/7', label: 'Monitoring' },
          { number: '1M+', label: 'Analyses Daily' },
          { number: '50+', label: 'Languages' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200"
          >
            <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Shield,
            title: 'Advanced Security',
            description: 'Multi-layered protection against misinformation and security threats with real-time monitoring.',
            color: 'text-blue-600'
          },
          {
            icon: Brain,
            title: 'AI Processing',
            description: 'Cutting-edge machine learning algorithms for intelligent data analysis and pattern recognition.',
            color: 'text-purple-600'
          },
          {
            icon: BarChart,
            title: 'Smart Analytics',
            description: 'Comprehensive analytics dashboard with actionable insights and detailed reporting capabilities.',
            color: 'text-green-600'
          },
          {
            icon: Zap,
            title: 'Real-time Processing',
            description: 'Lightning-fast processing of information with instant results and notifications.',
            color: 'text-yellow-600'
          },
          {
            icon: Users,
            title: 'Collaborative Platform',
            description: 'Built for teams with advanced collaboration tools and user management systems.',
            color: 'text-red-600'
          },
          {
            icon: Star,
            title: 'Premium Support',
            description: '24/7 expert support with dedicated account management and technical assistance.',
            color: 'text-indigo-600'
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            whileHover={{ y: -4, shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
          >
            <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of organizations using VANTA AI to protect against misinformation and enhance their security posture.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2 min-h-[56px]"
        >
          <CheckCircle className="h-6 w-6" />
          <span>Start Free Trial</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HomeSection;
