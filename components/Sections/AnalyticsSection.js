import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, TrendingUp, Users, Shield, 
  Calendar, Download, RefreshCw 
} from 'lucide-react';

const AnalyticsSection = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [loading, setLoading] = useState(false);

  // Mock data - replace with real data
  const analyticsData = {
    totalAnalyses: 15420,
    accuracy: 96.8,
    threatsBlocked: 342,
    activeUsers: 1250
  };

  const refreshData = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <BarChart className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Analytics Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive insights and analytics for your AI-powered security platform
        </p>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <div className="flex flex-wrap gap-2">
          {[
            { label: '7 Days', value: '7d' },
            { label: '30 Days', value: '30d' },
            { label: '90 Days', value: '90d' },
            { label: '1 Year', value: '1y' }
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => setTimeRange(range.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                timeRange === range.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={refreshData}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: BarChart,
            title: 'Total Analyses',
            value: analyticsData.totalAnalyses.toLocaleString(),
            change: '+12%',
            changeType: 'positive'
          },
          {
            icon: TrendingUp,
            title: 'Accuracy Rate',
            value: `${analyticsData.accuracy}%`,
            change: '+0.3%',
            changeType: 'positive'
          },
          {
            icon: Shield,
            title: 'Threats Blocked',
            value: analyticsData.threatsBlocked.toLocaleString(),
            change: '+8%',
            changeType: 'positive'
          },
          {
            icon: Users,
            title: 'Active Users',
            value: analyticsData.activeUsers.toLocaleString(),
            change: '+15%',
            changeType: 'positive'
          }
        ].map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <metric.icon className="h-8 w-8 text-primary-600" />
              <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                metric.changeType === 'positive' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {metric.change}
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {metric.value}
            </div>
            <div className="text-sm text-gray-600">{metric.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Threat Detection Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Threat Detection Over Time</h3>
          <div className="h-64 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Chart visualization would go here</p>
              <p className="text-sm">Integration with Chart.js or similar library</p>
            </div>
          </div>
        </motion.div>

        {/* User Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Activity</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>User activity chart</p>
              <p className="text-sm">Real-time user engagement metrics</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200"
      >
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              {
                type: 'threat',
                message: 'Potential misinformation detected and blocked',
                time: '5 minutes ago',
                severity: 'high'
              },
              {
                type: 'analysis',
                message: 'Completed verification of 127 information pieces',
                time: '15 minutes ago',
                severity: 'normal'
              },
              {
                type: 'user',
                message: '23 new users joined the platform',
                time: '1 hour ago',
                severity: 'normal'
              },
              {
                type: 'system',
                message: 'System maintenance completed successfully',
                time: '2 hours ago',
                severity: 'low'
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.severity === 'high' ? 'bg-red-500' :
                  activity.severity === 'normal' ? 'bg-blue-500' : 'bg-gray-400'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyticsSection;
