
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getActiveTab = () => {
    switch (location.pathname) {
      case '/':
        return '_hello';
      case '/about':
        return '_about-me';
      case '/projects':
        return '_projects';
      case '/contact':
        return '_contact-me';
      default:
        return '_hello';
    }
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  const tabs = [
    { id: '_hello', label: '_hello', path: '/' },
    { id: '_about-me', label: '_about-me', path: '/about' },
    { id: '_projects', label: '_projects', path: '/projects' },
    { id: '_contact-me', label: '_contact-me', path: '/contact' }
  ];

  const handleTabClick = (tab: typeof tabs[0]) => {
    setActiveTab(tab.id);
    navigate(tab.path);
  };

  return (
    <nav className="relative z-10 px-6 py-4">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={`
              px-4 py-2 font-mono text-sm transition-all duration-200
              hover:bg-white/5 hover:text-terminal-keyword
              ${activeTab === tab.id 
                ? 'text-terminal-string border-b-2 border-terminal-string' 
                : 'text-terminal-comment hover:text-terminal-text'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
