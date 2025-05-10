import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'UVS InfoTech',
      role: 'AI Specialist & Data Scientist',
      period: 'Sep 2024 - Present | Laurel, MD',
      logo: '/assets/uvs-logo.png',
      achievements: [
        'Built an Alexa Skill with Azure AI Search, achieving 95% query resolution accuracy.',
        'Deployed a Dialogflow CX-based AI agent, reducing staff needs by 30%.',
        'Developed a multilingual translation system with 90% accuracy, cutting delays by 40%.',
      ],
    },
    {
      company: 'UMBC',
      role: 'AI Research Assistant',
      period: 'Aug 2023 - May 2024 | Baltimore, MD',
      logo: '/assets/umbc-logo.png',
      achievements: [
        'Led predictive modeling for enrollment trends, improving data utilization by 20%.',
        'Optimized data processing with Snowflake, boosting student satisfaction by 15%.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Professional Journey</h2>
        <div className="relative border-l-4 border-purple-600 pl-6 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="absolute -left-2 w-4 h-4 bg-purple-600 rounded-full"></div>
              <img src={exp.logo} alt={`${exp.company} Logo`} className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}, {exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-300">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;