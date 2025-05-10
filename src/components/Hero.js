import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/assets/headshot.jpg"
          alt="Mourya Sashank Sure"
          className="w-32 h-32 rounded-full mx-auto mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Mourya Sashank Sure
        </motion.h1>
        <motion.h2
          className="text-3xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          AI Visionary | Data Scientist | Transforming Industries
        </motion.h2>
        <motion.div className="space-x-4">
          <a href="#projects" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 animate-pulse">Discover My Work</a>
          <a href="/Sashank_Resume_Feb_16_2025.pdf" download className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600">Download Resume</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;