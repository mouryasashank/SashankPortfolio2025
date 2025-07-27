import React from 'react';
import { Calendar, ExternalLink, Clock } from 'lucide-react';

export const BlogPosts: React.FC = () => {
  const mediumPosts = [
    {
      id: '1',
      title: 'Generative AI: The New Era',
      description: 'A comprehensive dive into the technical landscape of Generative AI, exploring its transformative potential and practical applications in modern technology.',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      publishedDate: '2023-07-01',
      readTime: '8 min read',
      url: 'https://medium.com/@mouryasashank'
    },
    {
      id: '2', 
      title: 'Convolutional Neural Networks',
      description: 'Understanding of Convolutional Neural Networks (CNN\'s|ConvNets) - Deep dive into the architecture and applications of CNNs in computer vision and image processing.',
      thumbnail: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      publishedDate: '2020-08-31',
      readTime: '10 min read',
      url: 'https://medium.com/@mouryasashank',
      claps: '39'
    },
    {
      id: '3',
      title: 'Variational AutoEncoders (VAEs)',
      description: 'For Complicated Distributions - Advanced exploration of VAEs and their applications in generative modeling and unsupervised learning.',
      thumbnail: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400',
      publishedDate: '2020-08-26',
      readTime: '12 min read',
      url: 'https://medium.com/@mouryasashank',
      claps: '39'
    },
    {
      id: '4',
      title: 'The Evolving Chatbots',
      description: 'Making Future - Exploring the evolution of conversational AI and chatbot technologies, from rule-based systems to modern AI-powered assistants.',
      thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      publishedDate: '2020-09-03',
      readTime: '8 min read',
      url: 'https://medium.com/@mouryasashank',
      claps: '90'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights and thoughts on AI, machine learning, and enterprise technology from my Medium blog
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mediumPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Medium
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  {post.claps && (
                    <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                      <span className="mr-1">👏</span>
                      <span>{post.claps}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                >
                  Read on Medium
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://medium.com/@mouryasashank"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Posts on Medium
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};