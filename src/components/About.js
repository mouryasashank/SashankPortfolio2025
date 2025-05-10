import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img src="/assets/headshot.jpg" alt="Mourya Sashank Sure" className="w-64 h-64 rounded-full mb-6 md:mb-0 md:mr-8" />
          <div>
            <p className="text-lg mb-4 text-gray-800 dark:text-gray-300">
              I’m a passionate AI Specialist and Data Scientist with over 3 years of experience crafting transformative solutions in Generative AI, Conversational AI, Computer Vision, and predictive analytics. My work has driven 95%+ model accuracy and up to 40% efficiency gains across healthcare, public services, and CRM.
            </p>
            <p className="text-lg mb-4 text-gray-800 dark:text-gray-300">
              Proficient in cloud platforms (AWS, Azure, GCP) and frameworks like PyTorch, TensorFlow, and Hugging Face, I excel at turning complex data into actionable insights with tools like Tableau and Power BI. My mission is to push the boundaries of AI to solve real-world challenges.
            </p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">Ready to shape the future of AI with me?</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;