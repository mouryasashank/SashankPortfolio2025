import React from 'react';
import { Github, Linkedin, BookOpen, ArrowRight } from 'lucide-react';
import { Timeline } from './Timeline';
import beachPhoto from '../assets/images/beach-photo2.jpg';

export const About: React.FC = () => {
  const timelineItems = [
    {
      id: '1',
      title: 'AI/ML Engineer',
      subtitle: 'UVS InfoTech',
      date: '2024-Present',
      location: 'USA',
      description: 'Leading enterprise AI solutions across federal, healthcare, and education sectors. Deployed systems serving 2M+ queries/month with 87% efficiency improvements.'
    },
    {
      id: '2',
      title: 'AI Research Assistant',
      subtitle: 'UMBC',
      date: '2023-2024',
      location: 'Baltimore, MD',
      description: 'Built ML models for enrollment forecasting, achieving 20% accuracy improvement. Developed Tableau dashboards and feedback analysis systems.'
    },
    {
      id: '3',
      title: 'Data Engineer',
      subtitle: 'Cognizant Technology Solutions',
      date: '2021-2022',
      location: 'India',
      description: 'Pioneered speech-to-text models with 95% accuracy. Built scalable ELT pipelines and MLOps infrastructure on AWS.'
    },
    {
      id: '4',
      title: 'AI Research Assistant',
      subtitle: 'SASTRA Technology Business Incubator',
      date: '2019-2021',
      location: 'India',
      description: 'Engineered autonomous UGV-based cotton harvester using YOLOv3 and SLAM. Published research and contributed to patent drafts.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about transforming complex challenges into intelligent solutions through cutting-edge AI/ML technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h3>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm an AI/ML Engineer with <strong>3+ years of hands-on experience</strong> building and deploying 
                production-grade AI systems that drive real business impact. My passion lies in bridging the gap 
                between cutting-edge research and practical enterprise solutions.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At <strong>UVS InfoTech</strong>, I've successfully delivered <strong>6+ enterprise AI solutions</strong> 
                across federal agencies, healthcare organizations, and educational institutions. My work has resulted 
                in serving <strong>2M+ voice queries per month</strong> and achieving <strong>87% latency reductions</strong> 
                in critical business processes.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in <strong>Conversational AI, Agentic AI, and Computer Vision</strong>, with deep expertise 
                in LLMs, RAG pipelines, and multi-cloud deployments. My technical foundation includes advanced work 
                with PyTorch, TensorFlow, and cloud platforms like AWS, Azure, and GCP.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://github.com/mouryasashank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mouryasashank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://medium.com/@mouryasashank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Medium
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              My Journey
            </h3>
            <Timeline items={timelineItems} />
            
            {/* Professional Gallery */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Professional Moments at UVS InfoTech
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src="/images/e4947897-0c0b-41e6-a0c8-a8203a7c4b59.JPG"
                    alt="UVS InfoTech team collaboration"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                      Team Collaboration
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src="/images/AF9A417D-6E57-49C4-99B4-7FC6E4385649.JPG"
                    alt="UVS InfoTech team meeting"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                      Team Meeting
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src="/images/23EBE628-D0A5-4864-B32B-FF66BA563393.JPG"
                    alt="UVS InfoTech workspace"
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                      Innovation Lab
                    </div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 col-span-2 lg:col-span-3">
                  <img
                    src="/images/IMG_9530.JPG"
                    alt="UVS InfoTech team celebration"
                    className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                      Professional Moments @ UVS InfoTech
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Moments */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Life Outside Work
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={beachPhoto}
                    alt="Sashank enjoying time at the beach"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      objectPosition: '50% 30%',
                      filter: 'brightness(1.05) saturate(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-medium">Beach Moments</p>
                      <p className="text-sm opacity-90">Balancing work and life by the ocean</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏖️</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Work-Life Balance
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      When I'm not building AI solutions, you'll find me exploring beaches, 
                      enjoying nature, and finding inspiration for innovative ideas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};