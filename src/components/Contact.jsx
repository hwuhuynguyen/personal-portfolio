import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 1500));
        alert('Message sent! Thank you for reaching out.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="section-padding bg-dark-50 dark:bg-dark-900" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's collaborate to build something amazing.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
                        <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">Let's Connect</h3>
                        <p className="text-dark-600 dark:text-dark-300 mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:nguyenhuuhuya1@gmail.com" className="flex items-center gap-4 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg"><FiMail className="text-primary-600 dark:text-primary-400" size={20} /></div>
                                <span>nguyenhuuhuya1@gmail.com</span>
                            </a>
                            <a href="https://github.com/hwuhuynguyen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg"><FiGithub className="text-primary-600 dark:text-primary-400" size={20} /></div>
                                <span>github.com/hwuhuynguyen</span>
                            </a>
                            <a href="https://www.linkedin.com/in/huynguyenhuu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg"><FiLinkedin className="text-primary-600 dark:text-primary-400" size={20} /></div>
                                <span>linkedin.com/in/huynguyenhuu</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <FiUser className="absolute left-4 top-4 text-dark-400" />
                            <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-dark-800 dark:text-white placeholder-dark-400" />
                        </div>
                        <div className="relative">
                            <FiMail className="absolute left-4 top-4 text-dark-400" />
                            <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-dark-800 dark:text-white placeholder-dark-400" />
                        </div>
                        <div className="relative">
                            <FiMessageSquare className="absolute left-4 top-4 text-dark-400" />
                            <textarea placeholder="Your Message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-dark-800 dark:text-white placeholder-dark-400 resize-none" />
                        </div>
                        <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50">
                            {isSubmitting ? 'Sending...' : <><FiSend /> Send Message</>}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
