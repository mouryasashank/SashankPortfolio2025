import { useState, useEffect } from 'react';
import { BlogPost } from '../types';

// Mock Medium API integration
export const useMediumPosts = (username: string = 'mouryasashank') => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // Mock API call - in real implementation, you'd call Medium's API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - replace with actual Medium API integration
        const mockPosts: BlogPost[] = [
          {
            id: '1',
            title: 'Building Scalable ML Pipelines with MLflow and Kubernetes',
            description: 'A comprehensive guide to deploying machine learning models at scale using modern MLOps practices.',
            thumbnail: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=300',
            publishedDate: '2024-02-15',
            readTime: '8 min read',
            url: 'https://medium.com/@mouryasashank/building-scalable-ml-pipelines'
          },
          {
            id: '2',
            title: 'Deep Learning for Medical Image Analysis: A Practical Approach',
            description: 'Exploring how deep learning transforms medical diagnosis through computer vision.',
            thumbnail: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=300',
            publishedDate: '2024-01-20',
            readTime: '12 min read',
            url: 'https://medium.com/@mouryasashank/deep-learning-medical-analysis'
          },
          {
            id: '3',
            title: 'Conversational AI in Healthcare: Challenges and Solutions',
            description: 'Understanding the complexities of implementing chatbots in healthcare settings.',
            thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300',
            publishedDate: '2023-12-10',
            readTime: '10 min read',
            url: 'https://medium.com/@mouryasashank/conversational-ai-healthcare'
          },
          {
            id: '4',
            title: 'The Future of Edge AI: Deploying Models at the Edge',
            description: 'Exploring the potential and challenges of running AI models on edge devices.',
            thumbnail: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=300',
            publishedDate: '2023-11-15',
            readTime: '7 min read',
            url: 'https://medium.com/@mouryasashank/future-edge-ai'
          },
          {
            id: '5',
            title: 'Data Privacy in Machine Learning: Best Practices',
            description: 'Essential strategies for maintaining data privacy while building effective ML models.',
            thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300',
            publishedDate: '2023-10-20',
            readTime: '9 min read',
            url: 'https://medium.com/@mouryasashank/data-privacy-ml'
          }
        ];
        
        setPosts(mockPosts);
      } catch (err) {
        setError('Failed to fetch blog posts');
        console.error('Error fetching Medium posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [username]);

  return { posts, loading, error };
};