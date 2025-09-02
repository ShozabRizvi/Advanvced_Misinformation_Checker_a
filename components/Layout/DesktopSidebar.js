import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, Shield, GraduationCap, BarChart, 
  Settings, Users, AlertTriangle, Zap 
} from 'lucide-react';

const DesktopSidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Shield, label: 'Verify Information', href: '#verify' },
    { icon: GraduationCap, label: 'Education', href: '#education' },
    { icon: Users, label: 'Community', href: '#community' },
    { icon: AlertTriangle, label: 'Protection', href: '#protection' },
    { icon: BarChart, label: 'Analytics', href: '#analytics' },
    { icon: Zap, label: 'Authority', href: '#authority' },
    { icon: Settings, label: 'Settings', href: '#settings' }
  ];

  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      className="w-80 bg-white shadow-lg h-screen overflow-y-auto border-r border-gray-200"
    >
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Navigation</h2>
          <p className="text-sm text-gray-600">AI-powered platform</p>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              delay={index * 0.1}
            />
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};

const SidebarItem = ({ icon: Icon, label, href, delay }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 group"
  >
    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
    <span className="font-medium">{label}</span>
  </motion.a>
);

export default DesktopSidebar;
