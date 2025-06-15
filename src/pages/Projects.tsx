
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectsCodeViewer from '../components/projects/ProjectsCodeViewer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-terminal-bg bg-terminal-glow font-mono flex flex-col">
      <Navigation />
      <div className="flex-1 flex">
        {/* Middle Section - Code Editor Content */}
        <div className="flex-1 border-r border-terminal-comment/20">
          <ProjectsCodeViewer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
