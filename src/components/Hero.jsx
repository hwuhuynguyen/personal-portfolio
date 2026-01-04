import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-950 dark:via-dark-900 dark:to-primary-900/20"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary-400/30 dark:bg-primary-400/20 rounded-full"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                        }}
                        animate={{
                            y: [null, Math.random() * -500],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                    />
                ))}
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 dark:bg-primary-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="mb-8 mt-8 pt-8"
                    >
                        <div className="relative inline-block">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-accent-400 p-1 shadow-xl dark:glow">
                                <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center text-5xl md:text-6xl">
                                    👨‍💻
                                </div>
                            </div>
                            <motion.div
                                className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-dark-900"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-800 dark:text-white mb-4"
                    >
                        Hi, I'm{' '}
                        <span className="gradient-text">Nguyen Huu Huy</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-xl md:text-2xl lg:text-3xl text-dark-600 dark:text-dark-300 mb-6"
                    >
                        Backend Software Engineer & Solutions Architect
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        A backend developer with a passion for creating robust, scalable APIs
                        and server-side applications. I specialize in Java, Node.js, and databases
                        like PostgreSQL and MongoDB. I thrive in building the infrastructure that
                        powers modern web applications and strive to make them secure, efficient,
                        and maintainable.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <motion.a
                            href="#contact"
                            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-primary-500/25 transition-shadow flex items-center gap-2"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiMail /> Get in Touch
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="px-8 py-4 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-700 dark:text-white rounded-full font-semibold text-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiDownload /> View Projects
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center justify-center gap-6"
                    >
                        {[
                            { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
                            { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                            { icon: FiMail, href: 'mailto:huy@example.com', label: 'Email' },
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-full text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-md"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <a href="#skills" className="text-dark-400 dark:text-dark-400 hover:text-primary-600 dark:hover:text-white transition-colors">
                    <HiOutlineChevronDown size={32} />
                </a>
            </motion.div>
        </section>
    );
}
