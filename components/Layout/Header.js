// src/components/Layout/Header.js
import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ isMobile, onMenuToggle, isMenuOpen }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-primary-600 to-primary-800 shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-white" />
            <h1 className="text-xl font-display font-bold text-white">
              VANTA AI
            </h1>
          </div>

          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-md text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}

          {/* Desktop navigation */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-8">
              <NavItem href="#home" label="Home" />
              <NavItem href="#verify" label="Verify" />
              <NavItem href="#education" label="Education" />
              <NavItem href="#analytics" label="Analytics" />
              <NavItem href="#settings" label="Settings" />
            </nav>
          )}
        </div>
      </div>
    </motion.header>
  );
};

const NavItem = ({ href, label }) => (
  <a
    href={href}
    className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {label}
  </a>
);

export default Header;
