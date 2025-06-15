import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Aspiring Data Scientist & Software Developer';
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:satyajeet.singh12005@gmail.com';
  };

  const handleResumeClick = () => {
    // Replace with your actual resume URL
    window.open('/myResume.pdf', '_blank');
  };

  return (
    <div 
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-terminal-comment font-mono text-lg text-gray-300">Hi all. I am</p>
            <h1 className="text-6xl md:text-7xl font-bold text-white font-mono">
              Satyajeet Singh
            </h1>
            <p className="text-2xl md:text-3xl font-mono text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              &gt; {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleEmailClick}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-mono rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out flex items-center gap-2 group"
            >
              <Mail size={20} className="group-hover:animate-bounce" />
              <span className="relative overflow-hidden">
                Contact Me
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </span>
            </button>
            <button 
              onClick={handleResumeClick}
              className="px-6 py-3 bg-transparent border-2 border-white/30 text-white font-mono rounded-lg hover:bg-white/10 hover:border-white/50 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out flex items-center gap-2 group"
            >
              <FileText size={20} className="group-hover:animate-pulse" />
              <span className="relative overflow-hidden">
                Resume
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </span>
            </button>
          </div>

          {/* Links Section */}
          <div className="space-y-3 font-mono text-sm">
            <div className="text-gray-400">// you can also find me on these platforms</div>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:satyajeet.singh12005@gmail.com" 
                className="text-cyan-300 hover:text-cyan-200 flex items-center gap-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-cyan-400">const</span>{' '}
                <span className="text-blue-300">email</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-green-300">"satyajeet.singh12005@gmail.com"</span>
                <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://github.com/opsatya" 
                className="text-cyan-300 hover:text-cyan-200 flex items-center gap-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-cyan-400">const</span>{' '}
                <span className="text-blue-300">github</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-green-300">"github.com/opsatya"</span>
                <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.linkedin.com/in/satyjeet-singh/" 
                className="text-cyan-300 hover:text-cyan-200 flex items-center gap-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-cyan-400">const</span>{' '}
                <span className="text-blue-300">linkedin</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-green-300">"linkedin.com/in/satyajeet-singh"</span>
                <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;