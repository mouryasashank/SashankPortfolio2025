import { Experience, Project, Education, Publication, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'UVS Infotech',
    logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    title: 'Senior Data Scientist & Deep Learning Engineer',
    duration: '2022 - Present',
    location: 'Remote',
    description: [
      'Led development of enterprise AI solutions for healthcare and federal sectors',
      'Architected and deployed scalable ML pipelines processing 10M+ daily transactions',
      'Designed conversational AI systems using Dialogflow CX reducing support costs by 40%',
      'Implemented computer vision models for medical imaging analysis with 95% accuracy',
      'Mentored junior data scientists and established ML best practices across teams'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'GCP', 'AWS', 'Dialogflow CX', 'Kubernetes', 'MLflow'],
    videoUrl: 'uvs_demo.mp4'
  },
  {
    id: '2',
    company: 'Tech Innovations Inc',
    logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    title: 'Data Scientist',
    duration: '2020 - 2022',
    location: 'Baltimore, MD',
    description: [
      'Developed predictive models for customer churn analysis improving retention by 25%',
      'Built recommendation systems using collaborative filtering and deep learning',
      'Implemented real-time fraud detection systems with 99.2% accuracy',
      'Created automated reporting dashboards using Power BI and Tableau'
    ],
    technologies: ['Python', 'Scikit-learn', 'Apache Spark', 'SQL', 'Power BI', 'Docker']
  },
  {
    id: '3',
    company: 'Research Lab UMBC',
    logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    title: 'Graduate Research Assistant',
    duration: '2019 - 2021',
    location: 'Baltimore, MD',
    description: [
      'Conducted cutting-edge research in Natural Language Processing and Computer Vision',
      'Published 3 peer-reviewed papers in top-tier conferences',
      'Developed novel deep learning architectures for multimodal learning',
      'Collaborated with industry partners on funded research projects'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'NLTK', 'Jupyter', 'LaTeX']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Medical Diagnosis System',
    description: 'Deep learning model for automated medical image analysis with 95% accuracy in detecting anomalies from X-rays and CT scans.',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['TensorFlow', 'OpenCV', 'Python', 'Docker', 'GCP'],
    githubUrl: 'https://github.com/mouryasashank/medical-ai',
    liveUrl: 'https://medical-ai-demo.com',
    videoUrl: 'project_demo.mp4'
  },
  {
    id: '2',
    title: 'Conversational AI Chatbot',
    description: 'Enterprise-grade chatbot using Dialogflow CX and LangGraph for customer service automation across multiple domains.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Dialogflow CX', 'LangGraph', 'Python', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/mouryasashank/conversational-ai',
    liveUrl: 'https://chatbot-demo.com'
  },
  {
    id: '3',
    title: 'Real-time Object Detection Pipeline',
    description: 'YOLO-based object detection system for real-time video analysis with edge deployment capabilities.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['YOLO', 'OpenCV', 'TensorRT', 'Python', 'Kubernetes'],
    githubUrl: 'https://github.com/mouryasashank/object-detection',
    liveUrl: 'https://object-detection-demo.com'
  },
  {
    id: '4',
    title: 'MLOps Pipeline Framework',
    description: 'Comprehensive MLOps solution for model lifecycle management with automated training, validation, and deployment.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['MLflow', 'Kubeflow', 'Docker', 'Jenkins', 'AWS'],
    githubUrl: 'https://github.com/mouryasashank/mlops-framework'
  },
  {
    id: '5',
    title: 'Time Series Forecasting Platform',
    description: 'Advanced forecasting platform using LSTM and Transformer models for financial and business analytics.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['PyTorch', 'Pandas', 'FastAPI', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/mouryasashank/time-series-platform',
    liveUrl: 'https://forecasting-platform.com'
  },
  {
    id: '6',
    title: 'Natural Language Processing Suite',
    description: 'Comprehensive NLP toolkit with sentiment analysis, named entity recognition, and text summarization capabilities.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['spaCy', 'Transformers', 'FastAPI', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/mouryasashank/nlp-suite'
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Maryland, Baltimore County',
    logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    degree: 'Master of Science',
    field: 'Data Science',
    duration: '2019 - 2021',
    location: 'Baltimore, MD',
    description: 'Specialized in Machine Learning, Deep Learning, and Statistical Analysis. Thesis on "Advanced Neural Architectures for Multimodal Learning".'
  },
  {
    id: '2',
    institution: 'Sastra University',
    logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    degree: 'Bachelor of Engineering',
    field: 'Electronics and Communication Engineering',
    duration: '2015 - 2019',
    location: 'Thanjavur, India',
    description: 'Foundation in signal processing, digital systems, and communication technologies. Active in robotics and AI clubs.'
  }
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Advanced Neural Architectures for Multimodal Medical Image Analysis',
    description: 'A comprehensive study on combining computer vision and natural language processing for enhanced medical diagnosis accuracy.',
    coverImage: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedDate: '2023-03-15',
    authors: ['Mourya Sashank Sure', 'Dr. John Smith', 'Dr. Sarah Johnson'],
    journal: 'IEEE Transactions on Medical Imaging',
    url: 'https://ieeexplore.ieee.org/document/example'
  },
  {
    id: '2',
    title: 'Scalable MLOps Frameworks for Enterprise AI Deployment',
    description: 'Best practices and architectural patterns for deploying machine learning models at scale in enterprise environments.',
    coverImage: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedDate: '2022-11-20',
    authors: ['Mourya Sashank Sure', 'Dr. Michael Brown'],
    journal: 'Journal of Machine Learning Research',
    url: 'https://jmlr.org/papers/example'
  },
  {
    id: '3',
    title: 'Conversational AI for Healthcare: Challenges and Opportunities',
    description: 'An analysis of current challenges and future opportunities in implementing conversational AI systems within healthcare settings.',
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedDate: '2022-08-10',
    authors: ['Mourya Sashank Sure', 'Dr. Emily Davis', 'Dr. Robert Wilson'],
    journal: 'Nature Digital Medicine',
    url: 'https://nature.com/articles/example'
  }
];

export const skills: Skill[] = [
  // AI/ML
  { name: 'TensorFlow', icon: '🧠', category: 'AI/ML' },
  { name: 'PyTorch', icon: '🔥', category: 'AI/ML' },
  { name: 'Scikit-learn', icon: '📊', category: 'AI/ML' },
  { name: 'OpenCV', icon: '👁️', category: 'AI/ML' },
  { name: 'YOLO', icon: '🎯', category: 'AI/ML' },
  { name: 'Transformers', icon: '🤖', category: 'AI/ML' },
  { name: 'LangGraph', icon: '🔗', category: 'AI/ML' },
  { name: 'spaCy', icon: '💬', category: 'AI/ML' },
  
  // Cloud
  { name: 'Google Cloud Platform', icon: '☁️', category: 'Cloud' },
  { name: 'Amazon Web Services', icon: '🌐', category: 'Cloud' },
  { name: 'Microsoft Azure', icon: '⚡', category: 'Cloud' },
  { name: 'Dialogflow CX', icon: '💭', category: 'Cloud' },
  
  // Frameworks
  { name: 'FastAPI', icon: '⚡', category: 'Frameworks' },
  { name: 'Django', icon: '🐍', category: 'Frameworks' },
  { name: 'React', icon: '⚛️', category: 'Frameworks' },
  { name: 'Node.js', icon: '💚', category: 'Frameworks' },
  
  // MLOps
  { name: 'MLflow', icon: '📈', category: 'MLOps' },
  { name: 'Kubeflow', icon: '🚀', category: 'MLOps' },
  { name: 'Docker', icon: '🐳', category: 'MLOps' },
  { name: 'Kubernetes', icon: '☸️', category: 'MLOps' },
  { name: 'Jenkins', icon: '🔧', category: 'MLOps' },
  { name: 'Git', icon: '📝', category: 'MLOps' }
];