import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-dark-900/90 backdrop-blur-lg shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Nguyen Huu Huy
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                            whileTap={{ scale: 0.9 }}
                        >
                            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </motion.button>

                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-dark-600 dark:text-dark-300"
                            whileTap={{ scale: 0.9 }}
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-dark-900 border-t dark:border-dark-800"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
