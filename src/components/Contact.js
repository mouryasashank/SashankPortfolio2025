import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    { href: 'mailto:mouryas1@umbc.edu', icon: 'fas fa-envelope', label: 'Email' },
    { href: 'https://linkedin.com/in/mouryasashank', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://github.com/mouryasashank', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://medium.com/@mouryasashank', icon: 'fab fa-medium', label: 'Medium' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Let’s Shape the Future of AI</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-300">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-300">Message</label>
              <textarea id="message" name="message" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-600" rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">Send Message</button>
          </motion.form>
          <div className="w-full md:w-1/2 text-center">
            <p className="text-lg mb-4 text-gray-800 dark:text-gray-300">Connect with me:</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  className="text-purple-600 hover:text-purple-800"
                  whileHover={{ scale: 1.2 }}
                >
                  <i className={`${link.icon} fa-2x`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;