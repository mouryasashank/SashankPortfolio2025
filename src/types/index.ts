export interface Experience {
  id: string;
  company: string;
  logo: string;
  title: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  videoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  logo: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  description?: string;
}

export interface Publication {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  publishedDate: string;
  authors: string[];
  journal?: string;
  url?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedDate: string;
  readTime: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'AI/ML' | 'Cloud' | 'Frameworks' | 'MLOps';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType;
}