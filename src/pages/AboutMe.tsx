import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SidebarTreePanel from '../components/about/SidebarTreePanel';
import CodeEditorViewer from '../components/about/CodeEditorViewer';
import ProfileWidget from '../components/about/ProfileWidget';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-terminal-bg bg-terminal-glow font-mono flex flex-col">
      <Navigation />
      <div className="flex-1 flex">
        {/* Left Sidebar - File Explorer */}
        <div className="w-1/4 border-r border-terminal-comment/20">
          <SidebarTreePanel />
        </div>
        
        {/* Middle Section - Code Editor Content */}
        <div className="flex-1 border-r border-terminal-comment/20">
          <CodeEditorViewer />
        </div>
        
        {/* Right Panel - Widget/Code Snippet */}
        <div className="w-1/3">
          <ProfileWidget />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
