import { Experience, Project, Education, Publication, Skill } from '../types';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress';
  credentialUrl?: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'GCP Professional Data Engineer',
    issuer: 'Google Cloud',
    date: '2024',
    status: 'In Progress',
    icon: '☁️'
  },
  {
    id: '2',
    name: 'UiPath Certified Professional Automation Developer',
    issuer: 'UiPath',
    date: '2024',
    status: 'Completed',
    icon: '🤖'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'UVS InfoTech',
    logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    title: 'Data Scientist (AI/ML Engineer)',
    duration: 'September 2024 - Present',
    location: 'USA',
    description: [
      'Architected and delivered 6+ enterprise AI solutions for prestigious clients including UMMS, Elara Caring, and Wor-Wic Community College using multi-cloud architecture (Azure, AWS, GCP)',
      'Developed an innovative Agentic AI Alexa assistant with RAG pipeline, achieving 87% efficiency improvement and handling 2M+ monthly queries with 92% accuracy using Azure AI Search and GPT-4',
      'Built HIPAA-compliant real-time multilingual translation system using Telnyx and Google Gemini, reducing escalations by 40% with Prometheus/Grafana monitoring',
      'Implemented Generative AI powered Dialogflow CX agent for UMMS and Wor-Wic, achieving 30% support cost reduction and 18% satisfaction increase',
      'Led 5-member cross-functional team in multi-cloud MLOps deployment across Azure ML, AWS SageMaker, and GCP Vertex AI with CI/CD and A/B testing',
      'Developed comprehensive KPI dashboards using Power BI and Grafana for data-driven decision making'
    ],
    technologies: [
      'Azure AI', 'AWS', 'GCP', 'GPT-4', 'LangGraph', 'BERT', 
      'Dialogflow CX', 'Vertex AI', 'Google Gemini', 'UiPath',
      'Azure DevOps', 'Prometheus', 'Grafana', 'Power BI'
    ]
  },
  {
    id: '2',
    company: 'University of Maryland Baltimore County (UMBC)',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    title: 'AI Research Assistant',
    duration: 'August 2023 - May 2024',
    location: 'Baltimore, MD, USA',
    description: [
      'Developed ML models using LSTM and XGBoost for master\'s program enrollment forecasting, improving accuracy by 20%',
      'Implemented SQL-based ELT pipelines and Tableau dashboards for tracking forecast accuracy',
      'Reduced resource misallocation by 15% through data-driven insights',
      'Created feedback analysis pipelines achieving 15% increase in satisfaction metrics'
    ],
    technologies: ['Python', 'LSTM', 'XGBoost', 'SQL', 'Tableau', 'ETL']
  },
  {
    id: '3',
    company: 'Cognizant Technology Solutions',
    logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    title: 'Data Engineer',
    duration: 'February 2021 - August 2022',
    location: 'India',
    description: [
      'Developed speech-to-text model using Librosa and ResNet-CRNN achieving 95% accuracy, processing 10K+ weekly audio records',
      'Implemented AWS Lambda and Glue for automated data transformations in financial data processing',
      'Built scalable ELT pipelines improving data freshness by 40%',
      'Enhanced model stability by 15% through MLOps pipeline with drift monitoring and automated testing',
      'Collaborated with cross-functional teams to optimize release cycles and usability'
    ],
    technologies: ['AWS Lambda', 'AWS Glue', 'S3', 'Librosa', 'ResNet-CRNN', 'Pytest', 'MLOps']
  },
  {
    id: '4',
    company: 'SASTRA\'s Technology Business Incubator',
    logo: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    title: 'AI Research Assistant',
    duration: 'February 2019 - January 2021',
    location: 'India',
    description: [
      'Engineered autonomous UGV-based cotton harvester using YOLOv3 and SLAM, improving path efficiency by 20%',
      'Developed perception module using Python, MATLAB, and Arduino-IoT sensors, enhancing detection accuracy by 25%',
      'Implemented SQLite-based data logging and custom telemetry viewers for field performance analysis',
      'Published research at AgriTech symposiums and contributed to patent research drafts'
    ],
    technologies: ['YOLOv3', 'SLAM', 'Python', 'MATLAB', 'Arduino', 'IoT', 'SQLite', 'Git']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Agentic AI Alexa Assistant',
    description: 'Voice-enabled RAG pipeline for federal agency achieving 87% efficiency improvement in SOP lookups. Serves 2M+ monthly queries with 92% accuracy.',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Azure AI Search', 'GPT-4', 'LangGraph', 'BERT', 'Azure Web App'],
    githubUrl: 'https://github.com/mouryasashank',
    videoUrl: 'alexa_demo.mp4'
  },
  {
    id: '2',
    title: 'HIPAA-Compliant Real-time Language Translator',
    description: 'Multilingual phone call translation system using Telnyx and Google Gemini, reducing escalations by 40% with Prometheus monitoring.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Telnyx', 'Google Gemini', 'CCAI', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/mouryasashank'
  },
  {
    id: '3',
    title: 'Conversational AI for Healthcare & Education',
    description: 'Dialogflow CX conversational agent for UMMS and Wor-Wic Community College achieving 30% support cost reduction and 18% satisfaction increase.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Dialogflow CX', 'Vertex AI', 'UiPath', 'Firebase'],
    githubUrl: 'https://github.com/mouryasashank'
  },
  {
    id: '4',
    title: 'Speech-to-Text Disfluency Detection',
    description: 'ML model using Librosa and ResNet-CRNN achieving 95% accuracy, processing 10K+ weekly audio records on AWS serverless infrastructure.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Librosa', 'ResNet-CRNN', 'AWS Lambda', 'S3', 'MLOps'],
    githubUrl: 'https://github.com/mouryasashank'
  },
  {
    id: '5',
    title: 'Autonomous Cotton Harvester',
    description: 'UGV-based autonomous system using YOLOv3 and SLAM, improving path efficiency by 20% and detection accuracy by 25%.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['YOLOv3', 'SLAM', 'Python', 'MATLAB', 'Arduino', 'IoT'],
    githubUrl: 'https://github.com/mouryasashank'
  },
  {
    id: '6',
    title: 'Enrollment Forecasting System',
    description: 'LSTM and XGBoost models for university enrollment prediction with 20% accuracy improvement and Tableau dashboards.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['LSTM', 'XGBoost', 'SQL', 'Tableau', 'ETL'],
    githubUrl: 'https://github.com/mouryasashank'
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Maryland Baltimore County',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    degree: 'Master of Science',
    field: 'Data Science',
    duration: '2023 - 2024',
    location: 'Baltimore, MD, USA',
    description: 'Specialized in Machine Learning, Deep Learning, and AI applications. Research focus on predictive analytics and enrollment forecasting.'
  },
  {
    id: '2',
    institution: 'SASTRA Deemed University',
    logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=center',
    degree: 'Bachelor of Engineering',
    field: 'Electronics and Communication Engineering',
    duration: '2015 - 2019',
    location: 'India',
    description: 'Foundation in electronics, signal processing, and embedded systems. Research in autonomous systems and computer vision.'
  }
];

export const publications: Publication[] = [
  {
    id: '1',
    title: '3D CNN-Based Emotion Recognition Using Facial',
    description: 'Research on advanced emotion recognition techniques using 3D Convolutional Neural Networks for facial analysis.',
    coverImage: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedDate: '2022-04-15',
    authors: ['Teja K S S', 'Reddy T V', 'Sashank M', 'Revathi A'],
    journal: 'Springer',
    url: 'https://link.springer.com/chapter/example'
  }
];

export const skills: Skill[] = [
  // AI/ML
  { name: 'LLMs (BERT, GPT)', icon: '🧠', category: 'AI/ML' },
  { name: 'LangGraph/LangChain', icon: '🔗', category: 'AI/ML' },
  { name: 'RAG', icon: '📚', category: 'AI/ML' },
  { name: 'Computer Vision', icon: '👁️', category: 'AI/ML' },
  { name: 'PyTorch', icon: '🔥', category: 'AI/ML' },
  { name: 'TensorFlow', icon: '⚡', category: 'AI/ML' },
  { name: 'Hugging Face', icon: '🤗', category: 'AI/ML' },
  
  // Cloud
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Azure', icon: '💨', category: 'Cloud' },
  { name: 'GCP', icon: '🌐', category: 'Cloud' },
  { name: 'Dialogflow CX', icon: '💭', category: 'Cloud' },
  
  // MLOps
  { name: 'Docker', icon: '🐳', category: 'MLOps' },
  { name: 'Kubernetes', icon: '⚓', category: 'MLOps' },
  { name: 'CI/CD', icon: '🔄', category: 'MLOps' },
  { name: 'Airflow', icon: '🌬️', category: 'MLOps' },
  { name: 'Prometheus', icon: '📊', category: 'MLOps' },
  { name: 'Grafana', icon: '📈', category: 'MLOps' },
  
  // Frameworks & Tools
  { name: 'SQL & NoSQL', icon: '💾', category: 'Frameworks' },
  { name: 'MongoDB', icon: '🍃', category: 'Frameworks' },
  { name: 'Redis', icon: '⚡', category: 'Frameworks' },
  { name: 'Power BI', icon: '📊', category: 'Frameworks' },
  { name: 'Tableau', icon: '📈', category: 'Frameworks' }
];