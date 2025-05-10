import { motion } from 'framer-motion';

const Navbar = ({ toggleTheme, isDark }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white fixed w-full z-10 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mourya Sashank Sure</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:underline">{item.name}</a>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className="focus:outline-none">
              <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;