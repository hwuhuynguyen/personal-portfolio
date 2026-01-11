import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Viettel Solutions',
        location: 'Da Nang, Vietnam',
        period: 'Sep 2025 - Present',
        description: [
            'Maintain the current system and it\'s technologies as well as migrating to new systems',
            'Implement new features, code refactoring and bug fixing & address technical issue',
            'Conduct integrations using Java, Apache Camel, Apache NiFi, handle data migration, and ensure seamless platform interoperability',
            'Develop RESTful APIs and microservices in Java Spring Boot for high-traffic applications',
            'Optimize database queries and implemented caching strategies, reducing response times by 30%',
            'Design and implement scalable message queue systems using Redis for async processing',
            'Collaborate closely with Product Managers, Designers, QAs, and Engineers to clarify requirements and align functional design',
            'Participate in code reviews and contributed to improving code quality standards',
            'Stay updated with Java features and best practices to enhance system performance and user experience'
        ],
        technologies: ['Java', 'Spring Boot', 'Apache Camel', 'Apache NiFi', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Jenkins'],
    },
    {
        title: 'Software Engineer',
        company: 'Axon Active',
        location: 'Da Nang, Vietnam',
        period: 'Feb 2025 - Jun 2025',
        description: [
            'Researched and learned Axon Ivy technology to implement the employee leave request application',
            'Developed an employee leave request application using Axon Ivy, optimizing the leave management process',
            'Implemented back-end logic in Java to handle leave request submission, approval workflows, and notifications',
            'Collaborated with Product Manager to ensure the application met user requirements and provided a seamless experience',
            'Conducted testing and debugging to ensure the application was robust and free of critical issues.'],
        technologies: ['Java', 'Axon Ivy', 'Git'],
    },
    {
        title: 'Backend Developer',
        company: 'SapotaCorp',
        location: 'Da Nang, Vietnam',
        period: 'Oct 2024 - Jan 2025',
        description: [
            'Worked on server-side logic using Spring Boot framework for enterprise web applications',
            'Built and optimized detailed data models for required information set, required information, product loan, product addons, contract templates',
            'Implemented logic to generate, store, and manage digital contracts in PDF format, reducing manual workload',
            'Ensured that CRUD operations functioned efficiently across multiple services, allowing seamless data management for administrators and end-users',
            'Participated in code reviews and contributed to improving code quality standards',
            'Collaborated with front-end developers and UI/UX designers to create a seamless user experience.'
        ],
        technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Bitbucket'],
    },
    {
        title: 'Software Developer',
        company: 'mgm technology & partners',
        location: 'Da Nang, Vietnam',
        period: 'Oct 2023 - Jan 2024',
        description: [
            'Implemented new features, code refactoring and bug fixing & address technical issue',
            'Participated in code reviews and contributed to improving code quality standards',
            'Collaborated closely with Product Managers, Designers, QAs, and Engineers to clarify requirements and align functional design',
            'Developed internal tools for sport tournament management',
        ],
        technologies: ['Java', 'Spring Boot', 'Typescript', 'React', 'PostgreSQL', 'Jenkins', 'Bitbucket'],
    },
    {
        title: 'Software Developer',
        company: 'PSCD Co., LTD',
        location: 'Da Nang, Vietnam',
        period: 'Feb 2023 - Oct 2023',
        description: [
            'Completed an internship as a Software Developer, focusing on building and enhancing web applications.',
            'Developed and maintained blog pages using Node.js and Express, ensuring smooth user experience and performance.',
            'Integrated a real-time chat feature into the blog platform, enhancing user engagement and communication.',
            'Worked with MySQL and MongoDB for storing and managing data effectively.',
            'Gained hands-on experience with full-stack development, including database design, server-side logic, and front-end integration.'
        ],
        technologies: ['Node.js', 'Express', 'Typescript', 'React', 'MySQL', 'MongoDB', 'Git'],
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="experience"
            className="section-padding bg-white dark:bg-dark-950"
            ref={ref}
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
                        My professional journey in backend development, building scalable
                        systems and APIs.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-accent-400" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-950 shadow-lg z-10" />

                            {/* Content */}
                            <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                                <motion.div
                                    className="bg-dark-50 dark:bg-dark-800/50 rounded-2xl p-6 md:p-8 shadow-lg dark:shadow-none border border-dark-200 dark:border-dark-700 card-hover"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-dark-800 dark:text-white">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mt-1">
                                                <HiBriefcase />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-2 text-dark-500 dark:text-dark-400 text-sm">
                                                <HiCalendar />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-dark-500 dark:text-dark-400 text-sm mt-1">
                                                <HiLocationMarker />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className="space-y-2 mb-6">
                                        {exp.description.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-dark-600 dark:text-dark-300"
                                            >
                                                <span className="text-primary-500 mt-1">▹</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block flex-1 md:w-1/2" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
