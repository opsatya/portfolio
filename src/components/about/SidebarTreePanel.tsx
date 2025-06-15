import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, FolderOpen, File, Mail, Phone, GraduationCap } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const SidebarTreePanel = () => {
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    education: false,
    contacts: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  return (
    <div className="p-4 text-terminal-text">
      <div className="space-y-2">
        {/* Personal Info Section */}
        <Collapsible open={expandedSections.personalInfo} onOpenChange={() => toggleSection('personalInfo')}>
          <CollapsibleTrigger className="flex items-center w-full text-left hover:text-terminal-keyword transition-colors">
            {expandedSections.personalInfo ? 
              <ChevronDown size={14} className="mr-1" /> : 
              <ChevronRight size={14} className="mr-1" />
            }
            {expandedSections.personalInfo ? 
              <FolderOpen size={16} className="mr-2 text-terminal-string" /> : 
              <Folder size={16} className="mr-2 text-terminal-string" />
            }
            <span className="text-sm font-medium">personal-info</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-6 space-y-1">
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <File size={14} className="mr-2 text-terminal-variable" />
              <span className="text-sm">bio</span>
            </div>
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <File size={14} className="mr-2 text-terminal-variable" />
              <span className="text-sm">interests</span>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Education Section */}
        <Collapsible open={expandedSections.education} onOpenChange={() => toggleSection('education')}>
          <CollapsibleTrigger className="flex items-center w-full text-left hover:text-terminal-keyword transition-colors">
            {expandedSections.education ? 
              <ChevronDown size={14} className="mr-1" /> : 
              <ChevronRight size={14} className="mr-1" />
            }
            {expandedSections.education ? 
              <FolderOpen size={16} className="mr-2 text-terminal-string" /> : 
              <Folder size={16} className="mr-2 text-terminal-string" />
            }
            <span className="text-sm font-medium">education</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-6 space-y-1">
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <GraduationCap size={12} className="mr-2 text-terminal-purple" />
              <span className="text-xs">high-school</span>
            </div>
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <GraduationCap size={12} className="mr-2 text-terminal-purple" />
              <span className="text-xs">university</span>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Contacts Section */}
        <Collapsible open={expandedSections.contacts} onOpenChange={() => toggleSection('contacts')}>
          <CollapsibleTrigger className="flex items-center w-full text-left hover:text-terminal-keyword transition-colors">
            {expandedSections.contacts ? 
              <ChevronDown size={14} className="mr-1" /> : 
              <ChevronRight size={14} className="mr-1" />
            }
            {expandedSections.contacts ? 
              <FolderOpen size={16} className="mr-2 text-terminal-string" /> : 
              <Folder size={16} className="mr-2 text-terminal-string" />
            }
            <span className="text-sm font-medium">contacts</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-6 space-y-1">
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <Mail size={14} className="mr-2 text-terminal-link" />
              <span className="text-sm">email</span>
            </div>
            <div className="flex items-center py-1 px-2 text-terminal-comment hover:text-terminal-text hover:bg-white/5 rounded cursor-pointer transition-all">
              <Phone size={14} className="mr-2 text-terminal-variable" />
              <span className="text-sm">phone</span>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default SidebarTreePanel;