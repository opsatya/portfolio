import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, FolderOpen, File, Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const ContactSidebarPanel = () => {
  const [expandedSections, setExpandedSections] = useState({
    contactInfo: true,
    socials: true,
    messageForm: false
  });

  const [selectedFile, setSelectedFile] = useState('_contact-info');

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const contactFiles = [
    { id: '_contact-info.json', name: '_contact-info', icon: File },
    { id: '_socials.ts', name: '_socials', icon: File },
    { id: '_message-me.tsx', name: '_message-me', icon: File }
  ];

  return (
    <div className="p-4 text-terminal-text">
      <div className="space-y-2">
        {/* Contact Info Section */}
        <Collapsible open={expandedSections.contactInfo} onOpenChange={() => toggleSection('contactInfo')}>
          <CollapsibleTrigger className="flex items-center w-full text-left hover:text-terminal-keyword transition-colors">
            {expandedSections.contactInfo ? 
              <ChevronDown size={14} className="mr-1" /> : 
              <ChevronRight size={14} className="mr-1" />
            }
            {expandedSections.contactInfo ? 
              <FolderOpen size={16} className="mr-2 text-terminal-string" /> : 
              <Folder size={16} className="mr-2 text-terminal-string" />
            }
            <span className="text-sm font-medium">contact-info</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-6 space-y-1">
            {contactFiles.map((file) => (
              <div 
                key={file.id}
                onClick={() => setSelectedFile(file.id)}
                className={`flex items-center py-1 px-2 rounded cursor-pointer transition-all ${
                  selectedFile === file.id 
                    ? 'text-terminal-text bg-white/10' 
                    : 'text-terminal-comment hover:text-terminal-text hover:bg-white/5'
                }`}
              >
                <file.icon size={12} className="mr-2 text-terminal-variable" />
                <span className="text-xs">{file.name}</span>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Quick Links Section */}
        <Collapsible open={expandedSections.socials} onOpenChange={() => toggleSection('socials')}>
          <CollapsibleTrigger className="flex items-center w-full text-left hover:text-terminal-keyword transition-colors">
            {expandedSections.socials ? 
              <ChevronDown size={14} className="mr-1" /> : 
              <ChevronRight size={14} className="mr-1" />
            }
            {expandedSections.socials ? 
              <FolderOpen size={16} className="mr-2 text-terminal-string" /> : 
              <Folder size={16} className="mr-2 text-terminal-string" />
            }
            <span className="text-sm font-medium">quick-links</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-6 space-y-1">
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <Mail size={12} className="mr-2 text-terminal-link" />
              <span className="text-xs">email</span>
            </div>
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <Github size={12} className="mr-2 text-terminal-purple" />
              <span className="text-xs">github</span>
            </div>
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <Linkedin size={12} className="mr-2 text-terminal-keyword" />
              <span className="text-xs">linkedin</span>
            </div>
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <MessageSquare size={12} className="mr-2 text-terminal-string" />
              <span className="text-xs">send-message</span>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default ContactSidebarPanel;