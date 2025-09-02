import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageCircle, Heart, Share2, 
  TrendingUp, Calendar, UserPlus, Award 
} from 'lucide-react';

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for detecting deepfake videos',
      author: 'Dr. Sarah Chen',
      avatar: '👩‍🔬',
      replies: 23,
      likes: 45,
      time: '2 hours ago',
      category: 'Detection'
    },
    {
      id: 2,
      title: 'New AI model for sentiment analysis',
      author: 'Alex Rodriguez',
      avatar: '👨‍💻',
      replies: 18,
      likes: 32,
      time: '5 hours ago',
      category: 'Research'
    },
    {
      id: 3,
      title: 'Community guidelines update',
      author: 'VANTA Team',
      avatar: '🤖',
      replies: 67,
      likes: 89,
      time: '1 day ago',
      category: 'Announcements'
    }
  ];

  const members = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Researcher',
      avatar: '👩‍🔬',
      contributions: 145,
      badges: ['Expert', 'Mentor']
    },
    {
      name: 'Alex Rodriguez',
      role: 'Security Analyst',
      avatar: '👨‍💻',
      contributions: 89,
      badges: ['Active Member']
    },
    {
      name: 'Maria Johnson',
      role: 'Data Scientist',
      avatar: '👩‍💼',
      contributions: 76,
      badges: ['Helpful', 'Rising Star']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <Users className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Community Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with experts, share knowledge, and collaborate on AI security solutions
        </p>
      </motion.div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Users, label: 'Members', value: '5.2K', growth: '+12%' },
          { icon: MessageCircle, label: 'Discussions', value: '1.8K', growth: '+8%' },
          { icon: Heart, label: 'Contributions', value: '12.5K', growth: '+15%' },
          { icon: Award, label: 'Experts', value: '150', growth: '+5%' }
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
            <div className="text-xs text-green-600 font-medium">{stat.growth}</div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'discussions', label: 'Discussions', icon: MessageCircle },
            { id: 'members', label: 'Members', icon: Users },
            { id: 'events', label: 'Events', icon: Calendar }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-h-[40px] ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Content based on active tab */}
      {activeTab === 'discussions' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Discussions</h2>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 mt-4 sm:mt-0"
              >
                Start Discussion
              </motion.button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-all duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{discussion.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 hover:text-primary-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            by {discussion.author} • {discussion.time}
                          </p>
                        </div>
                        <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                          {discussion.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{discussion.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{discussion.likes}</span>
                        </div>
                        <button className="flex items-center space-x-1 hover:text-primary-600">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'members' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Top Contributors</h2>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 mt-4 sm:mt-0 flex items-center space-x-2"
            >
              <UserPlus className="h-4 w-4" />
              <span>Invite Members</span>
            </motion.button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-all duration-200"
              >
                <div className="text-4xl mb-3">{member.avatar}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {member.badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-gray-500">
                  {member.contributions} contributions
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  View Profile
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'events' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Events</h2>
          
          <div className="space-y-4">
            {[
              {
                title: 'AI Security Webinar',
                date: 'March 15, 2024',
                time: '2:00 PM EST',
                attendees: 150,
                type: 'Online'
              },
              {
                title: 'Community Meetup',
                date: 'March 22, 2024',
                time: '6:00 PM EST',
                attendees: 45,
                type: 'In-Person'
              },
              {
                title: 'Research Showcase',
                date: 'April 5, 2024',
                time: '10:00 AM EST',
                attendees: 200,
                type: 'Hybrid'
              }
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-600">
                      {event.date} at {event.time}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>{event.attendees} attending</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    Join Event
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Community Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Guidelines</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Be Respectful',
              description: 'Treat all community members with respect and kindness'
            },
            {
              title: 'Share Knowledge',
              description: 'Contribute your expertise and help others learn'
            },
            {
              title: 'Stay On Topic',
              description: 'Keep discussions relevant to AI security and related topics'
            }
          ].map((guideline, index) => (
            <div key={guideline.title} className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{guideline.title}</h3>
              <p className="text-gray-600 text-sm">{guideline.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CommunitySection;
