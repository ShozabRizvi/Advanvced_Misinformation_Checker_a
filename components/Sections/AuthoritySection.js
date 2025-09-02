import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Crown, Users, FileText, 
  CheckCircle, Clock, Settings, Shield 
} from 'lucide-react';

const AuthoritySection = () => {
  const [selectedRole, setSelectedRole] = useState('admin');

  const roles = [
    {
      id: 'admin',
      name: 'System Administrator',
      description: 'Full system access and control',
      permissions: ['Full Access', 'User Management', 'System Settings', 'Security Controls'],
      users: 3,
      color: 'text-red-600 bg-red-100'
    },
    {
      id: 'moderator',
      name: 'Content Moderator',
      description: 'Content review and moderation privileges',
      permissions: ['Content Review', 'Report Management', 'User Warnings', 'Basic Analytics'],
      users: 12,
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      id: 'analyst',
      name: 'Security Analyst',
      description: 'Security monitoring and analysis',
      permissions: ['Threat Analysis', 'Security Reports', 'Alert Management', 'Investigation Tools'],
      users: 8,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 'auditor',
      name: 'Compliance Auditor',
      description: 'Audit and compliance oversight',
      permissions: ['Audit Logs', 'Compliance Reports', 'Policy Review', 'Data Export'],
      users: 5,
      color: 'text-green-600 bg-green-100'
    }
  ];

  const recentActions = [
    {
      action: 'User permissions updated',
      user: 'Admin Smith',
      target: 'john.doe@example.com',
      time: '5 minutes ago',
      type: 'permission'
    },
    {
      action: 'Security policy modified',
      user: 'Admin Johnson',
      target: 'Data Protection Policy',
      time: '1 hour ago',
      type: 'policy'
    },
    {
      action: 'Audit report generated',
      user: 'Auditor Wilson',
      target: 'Monthly Compliance Report',
      time: '3 hours ago',
      type: 'audit'
    },
    {
      action: 'Threat investigation completed',
      user: 'Analyst Brown',
      target: 'Incident #2024-0342',
      time: '6 hours ago',
      type: 'investigation'
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
        <Crown className="h-16 w-16 text-primary-600 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Authority Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Manage system authorities, user roles, and administrative functions
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Users, label: 'Authority Users', value: '28', change: '+2' },
          { icon: Shield, label: 'Active Policies', value: '15', change: '+1' },
          { icon: FileText, label: 'Audit Logs', value: '1.2K', change: '+45' },
          { icon: Clock, label: 'Pending Reviews', value: '7', change: '-3' }
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
            <div className="text-xs text-green-600 font-medium">{stat.change}</div>
          </motion.div>
        ))}
      </div>

      {/* Role Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Authority Roles</h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 mt-4 sm:mt-0"
          >
            Add New Role
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedRole(role.id)}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                selectedRole === role.id
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${role.color}`}>
                <Crown className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{role.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{role.description}</p>
              <div className="text-sm text-gray-500">
                {role.users} active users
              </div>
            </motion.div>
          ))}
        </div>

        {/* Role Details */}
        {selectedRole && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-gray-200 rounded-lg p-6 bg-gray-50"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {roles.find(r => r.id === selectedRole)?.name} Permissions
              </h3>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200"
              >
                <Settings className="h-4 w-4" />
                <span>Configure</span>
              </motion.button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-3">
              {roles.find(r => r.id === selectedRole)?.permissions.map((permission) => (
                <div key={permission} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">{permission}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Recent Administrative Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Administrative Actions</h2>
        
        <div className="space-y-4">
          {recentActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  action.type === 'permission' ? 'bg-blue-100' :
                  action.type === 'policy' ? 'bg-purple-100' :
                  action.type === 'audit' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {action.type === 'permission' && <Users className="h-4 w-4 text-blue-600" />}
                  {action.type === 'policy' && <Shield className="h-4 w-4 text-purple-600" />}
                  {action.type === 'audit' && <FileText className="h-4 w-4 text-green-600" />}
                  {action.type === 'investigation' && <Zap className="h-4 w-4 text-red-600" />}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{action.action}</h4>
                  <p className="text-sm text-gray-600">
                    by {action.user} • Target: {action.target}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500">{action.time}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* System Controls */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Emergency Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-red-50 border border-red-200 rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-red-100 rounded-full">
              <Zap className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-red-900">Emergency Controls</h3>
          </div>
          <p className="text-red-800 text-sm mb-4">
            Critical system controls for emergency situations
          </p>
          <div className="space-y-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-all duration-200 text-sm"
            >
              Emergency Lockdown
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-red-100 hover:bg-red-200 text-red-800 py-2 rounded-lg font-medium transition-all duration-200 text-sm"
            >
              Incident Response
            </motion.button>
          </div>
        </motion.div>

        {/* System Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-green-50 border border-green-200 rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-full">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-900">System Health</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Security Status', status: 'Operational', color: 'green' },
              { label: 'Database', status: 'Healthy', color: 'green' },
              { label: 'API Services', status: 'Online', color: 'green' },
              { label: 'Monitoring', status: 'Active', color: 'green' }
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center">
                <span className="text-sm text-gray-700">{item.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full bg-${item.color}-100 text-${item.color}-800`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthoritySection;
