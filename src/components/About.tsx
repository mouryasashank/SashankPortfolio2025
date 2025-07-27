import React from 'react';
import { Github, Linkedin, BookOpen, ArrowRight } from 'lucide-react';
import { Timeline } from './Timeline';
import beachPhoto from '../assets/images/beach-photo.jpg';

export const About: React.FC = () => {
  const timelineItems = [
    {
      id: '1',
      title: 'Started AI Journey',
      date: '2018',
      description: 'Began exploring machine learning and deep learning during undergraduate studies at SASTRA University'
    },
    {
      id: '2',
      title: 'First Industry Experience',
      date: '2019',
      description: 'Joined SASTRA Technology Business Incubator - Built autonomous UGV cotton harvester using YOLOv3 and SLAM'
    },
    {
      id: '3',
      title: 'Data Engineering Role',
      date: '2021',
      description: 'Joined Cognizant - Developed speech-to-text models achieving 95% accuracy for disfluency detection'
    },
    {
      id: '4',
      title: 'Research & Publication',
      date: '2022',
      description: 'Published "3D CNN-Based Emotion Recognition" in Springer while pursuing MS at UMBC'
    },
    {
      id: '5',
      title: 'AI Research Assistant',
      date: '2023',
      description: 'UMBC Research - Built LSTM/XGBoost models for enrollment forecasting with 20% accuracy improvement'
    },
    {
      id: '6',
      title: 'Senior AI Engineer',
      date: '2024',
      description: 'UVS InfoTech - Leading enterprise AI solutions for federal agencies, healthcare, and education sectors'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mouryasashank/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/mouryasashank',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: BookOpen,
      label: 'Medium',
      url: 'https://medium.com/@mouryasashank',
      color: 'hover:text-green-600'
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
            Passionate AI/ML Engineer with a focus on building scalable, enterprise-grade solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Professionally, I specialize in delivering enterprise AI solutions across healthcare, 
                federal, and higher education sectors. With a strong foundation in both theoretical knowledge 
                and practical implementation, I bridge the gap between cutting-edge research and 
                real-world applications.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My expertise spans the full spectrum of the AI development lifecycle, from initial 
                problem formulation and data exploration to model deployment and monitoring in 
                production environments. I'm passionate about creating solutions that not only 
                perform well technically but also deliver measurable business value.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Open to relocation and eager for new challenges that push the boundaries of what's 
                possible with artificial intelligence and machine learning.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-blue-200/50 dark:border-blue-700/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {[
                  '3+ years of experience in AI/ML development',
                  'Published paper in top-tier journal',
                  'Led teams of 10+ data scientists and engineers',
                  'Deployed models processing 10M+ daily transactions',
                  'Expert in both cloud and edge AI deployments'
                ].map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 hover:shadow-lg transform hover:scale-110`}
                      title={link.label}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Timeline Section */}
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
                    src={beachPhoto}
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
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm text-green-800 dark:text-green-300 text-center">
                  ✅ <strong>Updated!</strong> Now showing your actual UVS InfoTech professional photos
                </p>
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
                      filter: 'brightness(1.05) saturate(1.1)',
                      transform: 'scale(1.4)'
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