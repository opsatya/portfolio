
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-4 border-t border-terminal-comment/20">
      <div className="flex justify-between items-center">
        {/* Left side - find me in */}
        <div className="flex items-center space-x-4">
          <span className="text-terminal-comment font-mono text-sm">find me in:</span>
          <div className="flex space-x-2">
            <a 
              href="https://www.linkedin.com/in/satyjeet-singh/" 
              className="p-2 text-terminal-comment hover:text-terminal-keyword transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/opsatya" 
              className="p-2 text-terminal-comment hover:text-terminal-keyword transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Right side - GitHub handle */}
        <div className="flex items-center space-x-2">
          <span className="text-terminal-comment font-mono text-sm">@opsatya</span>
          <a 
            href="https://github.com/opsatya" 
            className="p-2 text-terminal-comment hover:text-terminal-keyword transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
