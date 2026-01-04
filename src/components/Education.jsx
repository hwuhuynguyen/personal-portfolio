import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiBadgeCheck, HiCalendar } from 'react-icons/hi';
import { SiUdemy, SiAmazon } from 'react-icons/si';

const education = {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    location: 'Ho Chi Minh City, Vietnam',
    period: '2019 - 2023',
    description: 'Focused on software engineering and distributed computing. Graduated with honors.',
    courses: ['Data Structures', 'Database Systems', 'Distributed Systems', 'Computer Networks', 'Software Engineering'],
};

const certifications = [
    { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023', icon: SiAmazon, color: '#FF9900' },
    { title: 'Advanced Node.js Development', issuer: 'Udemy', date: '2022', icon: SiUdemy, color: '#A435F0' },
    { title: 'MongoDB Database Administrator', issuer: 'MongoDB University', date: '2022', icon: HiBadgeCheck, color: '#47A248' },
    { title: 'Docker & Kubernetes Mastery', issuer: 'Udemy', date: '2023', icon: SiUdemy, color: '#A435F0' },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="education" className="section-padding bg-white dark:bg-dark-950" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-4">
                        Education & <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
                        My academic background and professional certifications.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} className="bg-dark-50 dark:bg-dark-800/50 rounded-2xl p-6 md:p-8 border border-dark-200 dark:border-dark-700">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-4 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl text-white">
                                <HiAcademicCap size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark-800 dark:text-white">{education.degree}</h3>
                                <p className="text-primary-600 dark:text-primary-400 font-semibold">{education.school}</p>
                                <div className="flex items-center gap-2 text-dark-500 text-sm mt-1">
                                    <HiCalendar /><span>{education.period}</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-dark-600 dark:text-dark-300 mb-6">{education.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {education.courses.map((course) => (
                                <span key={course} className="px-3 py-1 text-sm bg-dark-200 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded-full">{course}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} className="space-y-4">
                        {certifications.map((cert) => (
                            <div key={cert.title} className="bg-dark-50 dark:bg-dark-800/50 rounded-xl p-5 border border-dark-200 dark:border-dark-700 card-hover">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${cert.color}20` }}>
                                        <cert.icon size={24} style={{ color: cert.color }} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark-800 dark:text-white">{cert.title}</h4>
                                        <p className="text-sm text-dark-500">{cert.issuer} • {cert.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
