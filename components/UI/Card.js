import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = true, ...props }) => (
  <motion.div
    whileHover={hover ? { y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" } : {}}
    className={`
      bg-white rounded-xl shadow-sm border border-gray-200 p-6
      ${hover ? 'transition-all duration-200' : ''}
      ${className}
    `}
    {...props}
  >
    {children}
  </motion.div>
);

export const GradientCard = ({ children, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className={`
      bg-gradient-to-br from-primary-500 to-primary-700 
      rounded-xl shadow-lg text-white p-6 ${className}
    `}
    {...props}
  >
    {children}
  </motion.div>
);
