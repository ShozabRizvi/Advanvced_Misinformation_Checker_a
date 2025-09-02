import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Shield, GraduationCap, BarChart, 
  Settings, Users, AlertTriangle, Zap, X 
} from 'lucide-react';

const MobileSidebar = ({ isOpen, onClose }) => {
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed left-0 top-16 h-screen w-80 bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <SidebarItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                    delay={index * 0.1}
                    onClick={onClose}
                  />
                ))}
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

const SidebarItem = ({ icon: Icon, label, href, delay, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 group"
  >
    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
    <span className="font-medium">{label}</span>
  </motion.a>
);

export default MobileSidebar;
