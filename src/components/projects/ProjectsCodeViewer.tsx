import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, FolderOpen, File, ExternalLink, Github, Code2, Database, Globe } from 'lucide-react';

const ProjectsCodeViewer = () => {
  const [expandedSections, setExpandedSections] = useState({
    projects: true
  });
  
  const [selectedProject, setSelectedProject] = useState('_asl-detection');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const projects = [
    { 
      id: '_asl-detection', 
      name: '_asl-detection',
      title: 'ASL Detection System',
      status: '✓Completed',
      type: 'Machine Learning',
      duration: '3 months',
      description: 'Developed a real-time American Sign Language (ASL) recognition system using OpenCV and PyTorch, enabling seamless communication for the hearing impaired.',
      details: [
        'Achieved 90% accuracy by training a custom CNN model on a comprehensive dataset of ASL gestures',
        'Deployed on AWS EC2 with Docker and Flask, featuring an intuitive web interface for real-time translation'
      ],
      stack: ['Python', 'PyTorch', 'OpenCV', 'Flask', 'AWS', 'Docker'],
      githubUrl: 'https://github.com/username/asl-detection',
      liveUrl: 'https://asl-detection-demo.herokuapp.com'
    },
    { 
      id: '_algorithmic-trading-bot', 
      name: '_algorithmic-trading-bot',
      title: 'Algorithmic Trading Bot',
      status: '✓ Completed',
      type: 'FinTech',
      duration: '2 months',
      description: 'Engineered a sophisticated trading bot leveraging RSI and moving average indicators to automate and optimize stock market strategies.',
      details: [
        'Conducted extensive backtesting on 5 years of historical market data with comprehensive visualization using Matplotlib',
        'Implemented a rule-based decision engine that demonstrated consistent returns in simulated trading environments'
      ],
      stack: ['Python', 'Pandas', 'YFinance', 'Matplotlib', 'Numpy'],
      githubUrl: 'https://github.com/username/algorithmic-trading-bot',
      liveUrl: null
    },
    { 
      id: '_llm-from-scratch', 
      name: '_llm-from-scratch',
      title: 'LLM From Scratch',
      status: '🔄 In Progress',
      type: 'AI/ML',
      duration: '4 months',
      description: 'Building a transformer-based language model from the ground up to deeply understand the architecture powering modern AI.',
      details: [
        'Developed custom tokenizer and implemented multi-head attention mechanisms from first principles',
        'Trained on diverse public datasets to generate coherent and contextually relevant text'
      ],
      stack: ['Python', 'PyTorch', 'Transformers', 'NumPy', 'HuggingFace'],
      githubUrl: 'https://github.com/username/llm-from-scratch',
      liveUrl: null
    },
    { 
      id: '_student-dashboard', 
      name: '_student-dashboard',
      title: 'Student Analytics Dashboard',
      status: '✓ Completed',
      type: 'Data Visualization',
      duration: '1.5 months',
      description: 'Created an interactive dashboard providing actionable insights into student performance metrics and attendance trends.',
      details: [
        'Leveraged SQL for efficient data processing and integration across multiple academic terms',
        'Deployed on Heroku with automated CI/CD pipeline for seamless updates and maintenance'
      ],
      stack: ['Python', 'Plotly Dash', 'PostgreSQL', 'Heroku', 'Docker'],
      githubUrl: 'https://github.com/username/student-dashboard',
      liveUrl: 'https://student-analytics-dashboard.herokuapp.com'
    },
    { 
      id: '_paytm-clone', 
      name: '_paytm-clone',
      title: 'Digital Payment Platform',
      status: '✓ Completed',
      type: 'Full Stack',
      duration: '2 months',
      description: 'Built a secure digital payment platform with real-time transaction processing and user authentication.',
      details: [
        'Implemented React.js frontend with responsive design for optimal mobile experience',
        'Developed RESTful APIs using Express.js and MongoDB, with end-to-end encryption for security',
        'Containerized application with Docker for consistent deployment across environments'
      ],
      stack: ['React', 'Express.js', 'MongoDB', 'Docker', 'JWT'],
      githubUrl: 'https://github.com/username/paytm-clone',
      liveUrl: 'https://digital-payment-platform.vercel.app'
    },
    { 
      id: '_cinema-sync', 
      name: '_cinema-sync',
      title: 'Cinema Sync Platform',
      status: '✓ Completed',
      type: 'Real-time App',
      duration: '3 months',
      description: 'Pioneered a synchronized streaming platform enabling friends to watch videos together in real-time, regardless of location.',
      details: [
        'Integrated Google Drive API for seamless media access and streaming',
        'Engineered real-time chat and video synchronization using WebSockets',
        'Deployed with Docker for scalable containerization and easy deployment'
      ],
      stack: ['React', 'Node.js', 'Socket.io', 'Docker', 'Google API'],
      githubUrl: 'https://github.com/username/cinema-sync',
      liveUrl: 'https://cinema-sync-platform.netlify.app'
    },
    { 
      id: '_trading-website', 
      name: '_trading-website',
      title: 'Cryptocurrency Trading Platform',
      status: '✓ Completed',
      type: 'Full Stack',
      duration: '2.5 months',
      description: 'Developed a high-performance cryptocurrency trading platform with real-time market data and advanced charting capabilities.',
      details: [
        'Built responsive frontend with React and real-time data visualization',
        'Implemented secure authentication and transaction processing',
        'Optimized database queries for handling high-frequency trading data'
      ],
      stack: ['React', 'Flask', 'PostgreSQL', 'Redis', 'WebSocket'],
      githubUrl: 'https://github.com/username/trading-website',
      liveUrl: 'https://crypto-trading-platform.vercel.app'
    },
    { 
      id: '_bookstore-ecommerce', 
      name: '_bookstore-ecommerce',
      title: 'Modern E-commerce Platform',
      status: '✓ Completed',
      type: 'E-commerce',
      duration: '3 months',
      description: 'Designed and deployed a full-featured online bookstore with secure payment processing and admin dashboard.',
      details: [
        'Developed with MERN stack for optimal performance and scalability',
        'Integrated Stripe payment processing with secure checkout flow',
        'Created comprehensive admin dashboard for inventory and order management'
      ],
      stack: ['React', 'Express.js', 'MongoDB', 'Stripe', 'JWT'],
      githubUrl: 'https://github.com/username/bookstore-ecommerce',
      liveUrl: 'https://modern-bookstore.netlify.app'
    }
  ];

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <div className="min-h-screen bg-terminal-bg bg-terminal-glow font-mono flex">
      {/* Sidebar */}
      <div className="w-64 bg-terminal-sidebar border-r border-terminal-comment/20">
        <div className="p-4">
          <div className="space-y-2">
            <div className="flex items-center w-full text-left">
              <button 
                onClick={() => toggleSection('projects')}
                className="flex items-center hover:text-terminal-keyword transition-colors"
              >
                {expandedSections.projects ? 
                  <ChevronDown size={14} className="mr-1" /> : 
                  <ChevronRight size={14} className="mr-1" />
                }
                {expandedSections.projects ? 
                  <FolderOpen size={16} className="mr-2 text-terminal-string" /> : 
                  <Folder size={16} className="mr-2 text-terminal-string" />
                }
                <span className="text-sm font-medium">projects</span>
              </button>
            </div>
            
            {expandedSections.projects && (
              <div className="ml-6 space-y-1">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project.id)}
                    className={`flex items-center py-2 px-3 rounded cursor-pointer transition-all ${
                      selectedProject === project.id
                        ? 'text-terminal-text bg-terminal-keyword/20'
                        : 'text-terminal-comment hover:text-terminal-text hover:bg-white/5'
                    }`}
                  >
                    <File size={12} className="mr-2 text-terminal-purple" />
                    <span className="text-xs">{project.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Projects List */}
        <div className="w-full overflow-y-auto p-6 bg-terminal-bg/90">
          {/* Comment-style header */}
          <div className="text-terminal-comment mb-6">
            <div className="text-sm">/**</div>
            <div className="text-lg text-terminal-keyword ml-2">* My Projects</div>
            <div className="text-sm ml-2">* A collection of my development work</div>
            <div className="text-sm">*/</div>
          </div>

          <h2 className="text-xl font-bold mb-6 text-terminal-keyword">// project-cards</h2>
          
          {/* Grid layout with 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={`group rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedProject === project.id
                    ? 'border-terminal-keyword/50 bg-terminal-keyword/10'
                    : 'border-terminal-comment/20 hover:border-terminal-keyword/30 bg-white/5'
                }`}
              >
                {/* Image Placeholder - Replace with actual image */}
                <div className="h-48 bg-gradient-to-br from-terminal-keyword/20 to-terminal-string/20 flex items-center justify-center">
                  <div className="text-4xl font-mono text-terminal-keyword/50">
                    {project.name.split('-')[1]?.charAt(0).toUpperCase() || project.name.charAt(1).toUpperCase()}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-terminal-keyword">{project.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-terminal-comment/10 text-terminal-comment">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm mt-2 text-terminal-text/80 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 rounded-full bg-terminal-comment/10 text-terminal-comment"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-terminal-comment/10 text-terminal-comment">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details - Show as a sidebar on the right */}
        {selectedProjectData && (
          <div className="w-1/3 border-l border-terminal-comment/20 overflow-y-auto bg-terminal-sidebar/90 backdrop-blur-sm">
            <div className="p-6 flex flex-col h-full">
              <div className="space-y-6 flex-1">
                <div>
                  <h2 className="text-2xl font-bold text-terminal-keyword">{selectedProjectData.title}</h2>
                  <div className="flex items-center mt-2 space-x-4 text-sm text-terminal-comment">
                    <span>{selectedProjectData.type}</span>
                    <span>•</span>
                    <span>{selectedProjectData.duration}</span>
                    <span>•</span>
                    <span className="text-terminal-string">{selectedProjectData.status}</span>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-terminal-text/90">{selectedProjectData.description}</p>
                  
                  <h3 className="text-lg font-medium text-terminal-keyword mt-6 mb-3">Key Features:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-terminal-text/90">
                    {selectedProjectData.details.map((detail, index) => (
                      <li key={index} className="text-sm">{detail}</li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-medium text-terminal-keyword mt-6 mb-3">Tech Stack:</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProjectData.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full bg-terminal-comment/10 text-terminal-comment text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => window.open(selectedProjectData.githubUrl, '_blank')}
                      className="w-full text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center justify-center py-2 px-4 border border-blue-400/30 rounded hover:border-blue-300/50 hover:bg-blue-400/5"
                    >
                      <Github size={14} className="mr-2" />
                      <span>view-project-on-github</span>
                      <ExternalLink size={12} className="ml-2" />
                    </button>
                    
                    {selectedProjectData.liveUrl && (
                      <button 
                        onClick={() => window.open(selectedProjectData.liveUrl, '_blank')}
                        className="w-full text-green-400 hover:text-green-300 transition-colors text-sm flex items-center justify-center py-2 px-4 border border-green-400/30 rounded hover:border-green-300/50 hover:bg-green-400/5"
                      >
                        <Globe size={14} className="mr-2" />
                        <span>view-live-demo</span>
                        <ExternalLink size={12} className="ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsCodeViewer;