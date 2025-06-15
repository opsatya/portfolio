
import React, { useState } from 'react';

const ContactCodeViewer = () => {
  const [activeTab, setActiveTab] = useState('_contact-info.json');

  const tabs = [
    { id: '_contact-info.json', label: '_contact-info.json' },
    { id: '_socials.ts', label: '_socials.ts' },
    { id: '_message-me.tsx', label: '_message-me.tsx' }
  ];

  const renderContactInfo = () => (
    <div className="p-6 text-sm leading-relaxed">
      <div className="text-terminal-comment mb-4">// _contact-info</div>
      <div className="space-y-1">
        <div className="text-terminal-text">{"{"}</div>
        <div className="ml-4">
          <span className="text-terminal-string">"name"</span>
          <span className="text-terminal-text">: </span>
          <span className="text-terminal-string">"satyajeet singh"</span>
          <span className="text-terminal-text">,</span>
        </div>
        <div className="ml-4">
          <span className="text-terminal-string">"email"</span>
          <span className="text-terminal-text">: </span>
          <span className="text-terminal-string">"satyajeet.singh12005@email.com"</span>
          <span className="text-terminal-text">,</span>
        </div>
        <div className="ml-4">
          <span className="text-terminal-string">"location"</span>
          <span className="text-terminal-text">: </span>
          <span className="text-terminal-string">"pune, Maharashtra"</span>
          <span className="text-terminal-text">,</span>
        </div>
        <div className="ml-4">
          <span className="text-terminal-string">"availableFor"</span>
          <span className="text-terminal-text">: </span>
          <span className="text-terminal-string">"freelance, full-time, collaborations"</span>
          <span className="text-terminal-text">,</span>
        </div>
        <div className="ml-4">
          <span className="text-terminal-string">"status"</span>
          <span className="text-terminal-text">: </span>
          <span className="text-terminal-variable">"available"</span>
        </div>
        <div className="text-terminal-text">{"}"}</div>
      </div>
    </div>
  );

  const renderSocials = () => (
    <div className="p-6 text-sm leading-relaxed">
      <div className="text-terminal-comment mb-4">// _socials.ts</div>
      <div className="space-y-1">
        <div>
          <span className="text-terminal-keyword">export</span>
          <span className="text-terminal-text"> </span>
          <span className="text-terminal-keyword">const</span>
          <span className="text-terminal-text"> socials = {"{"}</span>
        </div>
        <div className="ml-4">
          <span className="text-terminal-variable">github</span>
          <span className="text-terminal-text">: </span>
          <span className="text-terminal-string">"https://github.com/opsatya"</span>
          <span className="text-terminal-text">,</span>
        </div>
        <div className="ml-4">
          <span className="text-terminal-variable">linkedin</span>
          <span className="text-terminal-text">: </span>
          <span className="text-terminal-string">"https://www.linkedin.com/in/satyjeet-singh/"</span>
          <span className="text-terminal-text">,</span>
        </div>
        <div className="ml-4">
          <span className="text-terminal-variable">email</span>
          <span className="text-terminal-text">: </span>
          <span className="text-terminal-string">"satyajeet.singh12005@yourname.dev"</span>
        </div>
        <div className="text-terminal-text">{"}"}</div>
        <div className="mt-4 text-terminal-comment">
          {"/**"}
        </div>
        <div className="text-terminal-comment">
          {" * Feel free to reach out through any of these platforms!"}
        </div>
        <div className="text-terminal-comment">
          {" * I'm always open to discussing new opportunities"}
        </div>
        <div className="text-terminal-comment">
          {" * and interesting projects."}
        </div>
        <div className="text-terminal-comment">
          {" */"}
        </div>
      </div>
    </div>
  );

  const renderMessageForm = () => (
    <div className="p-6 text-sm leading-relaxed">
      <div className="text-terminal-comment mb-4">// _message-me.tsx</div>
      <div className="space-y-1">
        <div className="text-terminal-comment">{"/**"}</div>
        <div className="text-terminal-comment">{" * Want to work together or have a question?"}</div>
        <div className="text-terminal-comment">{" * Drop a message using the form on the right."}</div>
        <div className="text-terminal-comment">{" * I'll get back to you as soon as possible!"}</div>
        <div className="text-terminal-comment">{" */"}</div>
        
        <div className="mt-6 space-y-2">
          <div>
            <span className="text-terminal-keyword">interface</span>
            <span className="text-terminal-text"> </span>
            <span className="text-terminal-variable">ContactForm</span>
            <span className="text-terminal-text"> {"{"}</span>
          </div>
          <div className="ml-4">
            <span className="text-terminal-variable">name</span>
            <span className="text-terminal-text">: </span>
            <span className="text-terminal-keyword">string</span>
            <span className="text-terminal-text">;</span>
          </div>
          <div className="ml-4">
            <span className="text-terminal-variable">email</span>
            <span className="text-terminal-text">: </span>
            <span className="text-terminal-keyword">string</span>
            <span className="text-terminal-text">;</span>
          </div>
          <div className="ml-4">
            <span className="text-terminal-variable">message</span>
            <span className="text-terminal-text">: </span>
            <span className="text-terminal-keyword">string</span>
            <span className="text-terminal-text">;</span>
          </div>
          <div className="text-terminal-text">{"}"}</div>
          
          <div className="mt-4">
            <span className="text-terminal-keyword">const</span>
            <span className="text-terminal-text"> handleSubmit = (</span>
            <span className="text-terminal-variable">data</span>
            <span className="text-terminal-text">: </span>
            <span className="text-terminal-variable">ContactForm</span>
            <span className="text-terminal-text">) =&gt; {"{"}</span>
          </div>
          <div className="ml-4 text-terminal-comment">// Send message logic here</div>
          <div className="text-terminal-text">{"}"}</div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case '_contact-info.json':
        return renderContactInfo();
      case '_socials.ts':
        return renderSocials();
      case '_message-me.tsx':
        return renderMessageForm();
      default:
        return renderContactInfo();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-terminal-comment/20 bg-terminal-bg/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-mono transition-all border-r border-terminal-comment/20 ${
              activeTab === tab.id
                ? 'bg-terminal-bg text-terminal-text border-b-2 border-terminal-string'
                : 'text-terminal-comment hover:text-terminal-text hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContactCodeViewer;