import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// Layout components
import Header from './components/Layout/Header';
import MobileSidebar from './components/Layout/MobileSidebar';
import DesktopSidebar from './components/Layout/DesktopSidebar';

// Import all your existing section components
import HomeSection from './components/Sections/HomeSection';
import VerifySection from './components/Sections/VerifySection';
import EducationSection from './components/Sections/EducationSection';
import CommunitySection from './components/Sections/CommunitySection';
import ProtectionSection from './components/Sections/ProtectionSection';
import AnalyticsSection from './components/Sections/AnalyticsSection';
import AuthoritySection from './components/Sections/AuthoritySection';
import SettingsSection from './components/Sections/SettingsSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Device detection
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  // Close sidebar when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Handle section navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast notifications */}
      <Toaster 
        position={isMobile ? "bottom-center" : "top-right"}
        toastOptions={{
          className: 'font-sans',
          duration: 4000,
        }}
      />

      {/* Header */}
      <Header 
        isMobile={isMobile}
        onMenuToggle={toggleSidebar}
        isMenuOpen={sidebarOpen}
      />

      <div className="flex">
        {/* Sidebar - Mobile */}
        {isMobile && (
          <MobileSidebar
            isOpen={sidebarOpen}
            onClose={closeSidebar}
          />
        )}

        {/* Sidebar - Desktop */}
        {!isMobile && <DesktopSidebar />}

        {/* Main content */}
        <motion.main
          className={`flex-1 transition-all duration-300 ${
            !isMobile ? 'ml-0' : ''
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 sm:p-6 lg:p-8">
            <SectionRenderer section={currentSection} />
          </div>
        </motion.main>
      </div>
    </div>
  );
};

// Section renderer to display current section
const SectionRenderer = ({ section }) => {
  const sections = {
    home: <HomeSection />,
    verify: <VerifySection />,
    education: <EducationSection />,
    community: <CommunitySection />,
    protection: <ProtectionSection />,
    analytics: <AnalyticsSection />,
    authority: <AuthoritySection />,
    settings: <SettingsSection />
  };

  return (
    <motion.div
      key={section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-7xl mx-auto"
    >
      {sections[section] || <HomeSection />}
    </motion.div>
  );
};

export default App;
