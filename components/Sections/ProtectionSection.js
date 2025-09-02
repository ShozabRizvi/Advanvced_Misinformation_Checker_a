import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, AlertTriangle, 
  CheckCircle, XCircle, Settings, RefreshCw 
} from 'lucide-react';

const ProtectionSection = () => {
  const [protectionLevel, setProtectionLevel] = useState('high');
  const [scanning, setScanning] = useState(false);

  const protectionStats = {
    threatsBlocked: 1247,
    scansToday: 5420,
    uptime: 99.9,
    lastUpdate: '2 minutes ago'
  };

  const threats = [
    {
      type: 'Malicious Content',
      status: 'blocked',
      count: 45,
      severity: 'high',
      time: '5 mins ago'
    },
    {
      type: 'Phishing Attempt',
      status: 'blocked',
      count: 12,
      severity: 'medium',
      time: '15 mins ago'
    },
    {
      type: 'Suspicious Link',
      status: 'quarantined',
      count: 8,
      severity: 'low',
      time: '1 hour ago'
    }
  ];

  const runScan = () => {
    setScanning(true);
    setTimeout(() => setScanning(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <Shield className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Advanced Protection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real-time protection against misinformation, malicious content, and security threats
        </p>
      </motion.div>

      {/* Protection Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">Protection Active</h2>
              <p className="opacity-90">All systems operational</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={runScan}
            disabled={scanning}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 min-h-[48px]"
          >
            <RefreshCw className={`h-5 w-5 ${scanning ? 'animate-spin' : ''}`} />
            <span>{scanning ? 'Scanning...' : 'Run Scan'}</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Threats Blocked', value: protectionStats.threatsBlocked },
            { label: 'Scans Today', value: protectionStats.scansToday },
            { label: 'Uptime', value: `${protectionStats.uptime}%` },
            { label: 'Last Update', value: protectionStats.lastUpdate }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">
                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Protection Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Protection Level</h3>
        
        <div className="space-y-4">
          {[
            {
              id: 'low',
              name: 'Basic Protection',
              description: 'Essential security with minimal interference',
              features: ['Basic threat detection', 'Standard filtering']
            },
            {
              id: 'medium',
              name: 'Balanced Protection',
              description: 'Good security with reasonable performance',
              features: ['Advanced threat detection', 'Content analysis', 'Real-time scanning']
            },
            {
              id: 'high',
              name: 'Maximum Protection',
              description: 'Highest security with comprehensive monitoring',
              features: ['AI-powered detection', 'Deep content analysis', 'Proactive monitoring', 'Advanced filtering']
            }
          ].map((level) => (
            <motion.div
              key={level.id}
              whileHover={{ scale: 1.01 }}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                protectionLevel === level.id
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setProtectionLevel(level.id)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                  protectionLevel === level.id
                    ? 'border-primary-600 bg-primary-600'
                    : 'border-gray-300'
                }`}>
                  {protectionLevel === level.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{level.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{level.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {level.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Threats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Threat Activity</h3>
        
        <div className="space-y-4">
          {threats.map((threat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  threat.severity === 'high' ? 'bg-red-100' :
                  threat.severity === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <AlertTriangle className={`h-5 w-5 ${
                    threat.severity === 'high' ? 'text-red-600' :
                    threat.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{threat.type}</h4>
                  <p className="text-sm text-gray-600">{threat.count} instances • {threat.time}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  threat.status === 'blocked' ? 'bg-green-100 text-green-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {threat.status}
                </span>
                <div className={`p-1 rounded-full ${
                  threat.status === 'blocked' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  {threat.status === 'blocked' ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-yellow-600" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Protection Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: Shield,
            title: 'Real-time Protection',
            description: 'Continuous monitoring and instant threat detection across all channels',
            color: 'text-blue-600'
          },
          {
            icon: Lock,
            title: 'Data Encryption',
            description: 'End-to-end encryption for all sensitive data and communications',
            color: 'text-green-600'
          },
          {
            icon: Eye,
            title: 'Content Analysis',
            description: 'Advanced AI analysis of content for misinformation and malicious intent',
            color: 'text-purple-600'
          },
          {
            icon: AlertTriangle,
            title: 'Threat Intelligence',
            description: 'Global threat intelligence network for proactive protection',
            color: 'text-red-600'
          },
          {
            icon: Settings,
            title: 'Custom Rules',
            description: 'Configurable protection rules and policies for your organization',
            color: 'text-yellow-600'
          },
          {
            icon: RefreshCw,
            title: 'Auto Updates',
            description: 'Automatic security updates and threat definition refreshes',
            color: 'text-indigo-600'
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            whileHover={{ y: -4 }}
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

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-red-50 border border-red-200 rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600" />
          <h3 className="text-lg font-semibold text-red-900">Emergency Security Response</h3>
        </div>
        <p className="text-red-800 mb-4">
          If you detect a critical security threat or need immediate assistance, contact our emergency response team.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
        >
          Contact Emergency Team
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProtectionSection;
