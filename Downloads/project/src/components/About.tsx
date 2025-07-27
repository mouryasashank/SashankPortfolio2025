import React from 'react';
import { Github, Linkedin, BookOpen, ArrowRight } from 'lucide-react';
import { Timeline } from './Timeline';

export const About: React.FC = () => {
  const timelineItems = [
    {
      id: '1',
      title: 'Started AI Journey',
      date: '2018',
      description: 'Began exploring machine learning during undergraduate studies'
    },
    {
      id: '2',
      title: 'Graduate Studies',
      date: '2019',
      description: 'Enrolled in MS Data Science at UMBC, focusing on deep learning'
    },
    {
      id: '3',
      title: 'Research Breakthrough',
      date: '2020',
      description: 'Published first paper on multimodal learning architectures'
    },
    {
      id: '4',
      title: 'Industry Leadership',
      date: '2022',
      description: 'Joined UVS Infotech as Senior Data Scientist, leading AI initiatives'
    },
    {
      id: '5',
      title: 'Present Day',
      date: '2024',
      description: 'Continuing to push boundaries in enterprise AI solutions'
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
            Transforming data into intelligent solutions that make a real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Professionally, I specialize in delivering enterprise AI solutions across healthcare, 
                federal, and higher-ed sectors. With a strong foundation in both theoretical knowledge 
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
                  '5+ years of experience in AI/ML development',
                  '3 published papers in top-tier journals',
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
          </div>
        </div>
      </div>
    </section>
  );
};