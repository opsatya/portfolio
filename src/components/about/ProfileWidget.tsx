import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { 
  Database, 
  Cpu, 
  Globe, 
  Code, 
  Server, 
  Container, 
  Cloud,
  GitBranch,
  Monitor,
  Terminal
} from 'lucide-react';

const ProfileWidget = () => {
  const [checkedSkills, setCheckedSkills] = useState({
    python: true,
    sql: true,
    javascript: true,
    java: false,
    pandas: true,
    numpy: true,
    scikit: false,
    pytorch: false,
    matplotlib: true,
    seaborn: false,
    etl: false,
    airflow: false,
    postgresql: true,
    bigquery: false,
    ml: false,
    cnn: false,
    transformers: false,
    llm: false,
    react: true,
    nodejs: false,
    html: true,
    css: true,
    api: false,
    docker: false,
    kubernetes: false,
    aws: false,
    cicd: false,
    jupyter: true,
    git: true,
    vscode: true,
    linux: false,
    colab: true
  });

  const handleSkillCheck = (skill: string) => {
    setCheckedSkills(prev => ({
      ...prev,
      [skill]: !prev[skill as keyof typeof prev]
    }));
  };

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { key: 'python', name: 'Python', icon: '🐍', color: 'text-green-400' },
        { key: 'sql', name: 'SQL', icon: '🗃️', color: 'text-blue-400' },
        { key: 'javascript', name: 'JavaScript', icon: '⚡', color: 'text-yellow-400' },
        { key: 'java', name: 'Java', icon: '☕', color: 'text-orange-600' }
      ]
    },
    {
      title: "Data Science",
      skills: [
        { key: 'pandas', name: 'pandas', icon: '🐼', color: 'text-blue-300' },
        { key: 'numpy', name: 'NumPy', icon: '🔢', color: 'text-cyan-400' },
        { key: 'scikit', name: 'scikit-learn', icon: '📊', color: 'text-orange-400' },
        { key: 'pytorch', name: 'PyTorch', icon: '🔥', color: 'text-red-500' },
        { key: 'matplotlib', name: 'Matplotlib', icon: '📈', color: 'text-purple-400' },
        { key: 'seaborn', name: 'Seaborn', icon: '🌊', color: 'text-blue-500' }
      ]
    },
    {
      title: "Data Engineering",
      skills: [
        { key: 'etl', name: 'ETL pipelines', icon: '🔄', color: 'text-green-500' },
        { key: 'airflow', name: 'Airflow', icon: '🌪️', color: 'text-cyan-300' },
        { key: 'postgresql', name: 'PostgreSQL', icon: '🐘', color: 'text-blue-600' },
        { key: 'bigquery', name: 'BigQuery', icon: '📊', color: 'text-red-400' }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { key: 'ml', name: 'Supervised Learning', icon: '🤖', color: 'text-purple-500' },
        { key: 'cnn', name: 'CNNs', icon: '🧠', color: 'text-pink-400' },
        { key: 'transformers', name: 'Transformers', icon: '🔄', color: 'text-indigo-400' },
        { key: 'llm', name: 'LLMs', icon: '💬', color: 'text-green-300' }
      ]
    },
    {
      title: "Web Dev & APIs",
      skills: [
        { key: 'react', name: 'React.js', icon: '⚛️', color: 'text-cyan-400' },
        { key: 'nodejs', name: 'Node.js', icon: '🚀', color: 'text-green-500' },
        { key: 'html', name: 'HTML/CSS', icon: '🎨', color: 'text-orange-500' },
        { key: 'api', name: 'RESTful APIs', icon: '🔗', color: 'text-yellow-300' }
      ]
    },
    {
      title: "Deployment & Infrastructure",
      skills: [
        { key: 'docker', name: 'Docker', icon: '🐳', color: 'text-blue-500' },
        { key: 'kubernetes', name: 'Kubernetes', icon: '⎈', color: 'text-blue-600' },
        { key: 'aws', name: 'AWS', icon: '☁️', color: 'text-orange-400' },
        { key: 'cicd', name: 'CI/CD', icon: '🔄', color: 'text-green-400' }
      ]
    },
    {
      title: "Tools",
      skills: [
        { key: 'jupyter', name: 'Jupyter', icon: '📓', color: 'text-orange-500' },
        { key: 'git', name: 'Git', icon: '📊', color: 'text-red-500' },
        { key: 'vscode', name: 'VSCode', icon: '💻', color: 'text-blue-400' },
        { key: 'linux', name: 'Linux', icon: '🐧', color: 'text-yellow-500' },
        { key: 'colab', name: 'Google Colab', icon: '🔬', color: 'text-yellow-400' }
      ]
    }
  ];

  return (
    <div className="p-6">
      <div className="bg-terminal-bg border border-terminal-comment/20 rounded-lg p-4 space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-terminal-keyword/20 rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="text-2xl">👨‍💻</span>
          </div>
          <div className="text-terminal-text">
            <div className="text-terminal-keyword">@opsatya</div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="text-terminal-keyword mb-4 text-sm">Technical Skills & Technologies:</div>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-terminal-string text-xs mb-2 font-semibold">{category.title}</div>
                <div className="space-y-2 ml-2">
                  {category.skills.map((skill) => (
                    <div key={skill.key} className="flex items-center space-x-3">
                      <Checkbox 
                        checked={checkedSkills[skill.key as keyof typeof checkedSkills]}
                        onCheckedChange={() => handleSkillCheck(skill.key)}
                        className="data-[state=checked]:bg-terminal-variable data-[state=checked]:border-terminal-variable"
                      />
                      <span className={`text-lg ${skill.color}`}>{skill.icon}</span>
                      <span className="text-terminal-text text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWidget;