import React from 'react';

const CodeEditorViewer = () => {
  return (
    <div className="p-6 text-terminal-text overflow-auto">
      <div className="space-y-4">
        {/* Comment-style header */}
        <div className="text-terminal-comment">
          <div className="text-sm">/**</div>
          <div className="text-lg text-terminal-keyword ml-2">* About Satyajeet Singh</div>
          <div className="text-sm ml-2">* Aspiring Data Scientist & Software Developer</div>
          <div className="text-sm">*/</div>
        </div>

        {/* Bio Section */}
        <div className="space-y-3">
          <div className="text-terminal-string">
            <span className="text-terminal-keyword">[</span>Background<span className="text-terminal-keyword">]</span> 
            <span className="text-terminal-text ml-2">Passionate about transforming data into actionable insights and building scalable web applications.</span>
          </div>
          
          <div className="text-terminal-string">
            <span className="text-terminal-keyword">[</span>Focus<span className="text-terminal-keyword">]</span> 
            <span className="text-terminal-text ml-2">Specializing in machine learning, data engineering, and modern web development.</span>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="mt-6 space-y-4">
          <div className="text-terminal-keyword">// Core Technologies</div>
          <div className="ml-4 space-y-2">
            <div className="flex items-center">
              <span className="text-terminal-variable">•</span>
              <span className="text-terminal-text ml-2">Languages: Python, JavaScript, SQL, Java</span>
            </div>
            <div className="flex items-center">
              <span className="text-terminal-variable">•</span>
              <span className="text-terminal-text ml-2">Data Science: pandas, NumPy, scikit-learn, PyTorch</span>
            </div>
            <div className="flex items-center">
              <span className="text-terminal-variable">•</span>
              <span className="text-terminal-text ml-2">Web Development: React.js, Node.js, HTML/CSS</span>
            </div>
            <div className="flex items-center">
              <span className="text-terminal-variable">•</span>
              <span className="text-terminal-text ml-2">Cloud & DevOps: AWS, Docker, Kubernetes</span>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-6 space-y-3">
          <div className="text-terminal-keyword">// Currently Working On</div>
          <div className="ml-4">
            <div className="text-terminal-comment">
              <span className="text-terminal-string">const</span> 
              <span className="text-terminal-text"> currentProjects = </span>
              <span className="text-terminal-keyword">[</span>
            </div>
            <div className="ml-6 space-y-1">
              <div className="text-terminal-string">"Deep Learning for Computer Vision",</div>
              <div className="text-terminal-string">"Real-time Data Pipeline with Apache Airflow",</div>
              <div className="text-terminal-string">"Full Stack ML Applications"</div>
            </div>
            <div className="text-terminal-keyword">];</div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-6 space-y-3">
          <div className="text-terminal-keyword">// Learning & Growth</div>
          <div className="ml-4">
            <div className="text-terminal-comment">
              <span className="text-terminal-string">const</span> 
              <span className="text-terminal-text"> learningPath = </span>
              <span className="text-terminal-keyword">{'{'}</span>
            </div>
            <div className="ml-6 space-y-1">
              <div>
                <span className="text-terminal-string">machineLearning:</span>
                <span className="text-terminal-variable"> ["Transformers", "LLMs", "CNNs"]</span>,
              </div>
              <div>
                <span className="text-terminal-string">dataEngineering:</span>
                <span className="text-terminal-variable"> ["ETL Pipelines", "BigQuery", "Airflow"]</span>,
              </div>
              <div>
                <span className="text-terminal-string">cloudComputing:</span>
                <span className="text-terminal-variable"> ["AWS Services", "Kubernetes", "CI/CD"]</span>
              </div>
            </div>
            <div className="text-terminal-keyword">{'}'}</div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mt-6 space-y-3">
          <div className="text-terminal-keyword">// Beyond Code</div>
          <div className="ml-4 text-terminal-comment">
            <p>When I'm not analyzing data or building applications, I enjoy</p>
            <p>exploring the latest AI research, contributing to open-source</p>
            <p>projects, and experimenting with new machine learning frameworks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorViewer;