
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactSidebarPanel from '../components/contact/ContactSidebarPanel';
import ContactCodeViewer from '../components/contact/ContactCodeViewer';
import ContactFormWidget from '../components/contact/ContactFormWidget';

const Contact = () => {
  return (
    <div className="min-h-screen bg-terminal-bg bg-terminal-glow font-mono flex flex-col">
      <Navigation />
      <div className="flex-1 flex">
        {/* Left Sidebar - File Explorer */}
        <div className="w-1/4 border-r border-terminal-comment/20">
          <ContactSidebarPanel />
        </div>
        
        {/* Middle Section - Code Editor Content */}
        <div className="flex-1 border-r border-terminal-comment/20">
          <ContactCodeViewer />
        </div>
        
        {/* Right Panel - Contact Form */}
        <div className="w-1/3">
          <ContactFormWidget />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;