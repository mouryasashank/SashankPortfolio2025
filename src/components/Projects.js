import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const Projects = () => {
  const projects = [
    {
      title: 'Interactive Alexa Skill',
      description: 'Voice-enabled AI agent using Azure AI Search and OpenAI, achieving 95% accuracy.',
      tech: 'Azure, BERT, JMeter, Pytest',
      video: '/assets/alexa-skill.mp4',
      github: 'https://github.com/mouryasashank',
      medium: 'https://mouryasashank.medium.com/',
    },
    {
      title: 'Conversational AI for Support',
      description: 'Dialogflow CX-based agent, reducing staff needs by 30% with 24/7 availability.',
      tech: 'Dialogflow CX, Vertex AI, UiPath',
      video: '/assets/conversational-ai.mp4',
      github: 'https://github.com/mouryasashank',
      medium: 'https://mouryasashank.medium.com/',
    },
    {
      title: 'Multilingual Translation',
      description: 'Real-time translation system with 90% accuracy using Dialogflow CX.',
      tech: 'Dialogflow CX, Telnyx, CCAI',
      video: '/assets/translation-system.mp4',
      github: 'https://github.com/mouryasashank',
      medium: 'https://mouryasashank.medium.com/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Innovative Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ReactPlayer
                url={project.video}
                width="100%"
                height="200px"
                muted={true}
                playing={false}
                loop={true}
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tech: {project.tech}</p>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" className="text-purple-600 hover:underline">GitHub</a>
                <a href={project.medium} target="_blank" className="text-purple-600 hover:underline">Medium</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;