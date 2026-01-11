import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaJava } from 'react-icons/fa';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { GiBrain, GiDatabase, GiRadioTower } from 'react-icons/gi';
import {
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiGraphql,
    SiDocker,
    SiSocketdotio,
    SiSpring,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiMysql,
    SiKubernetes,
    SiRabbitmq,
    SiBitbucket,
    SiApache,
    SiGithub,
    SiPython,
    SiFlask,
} from 'react-icons/si';

const projects = [
    {
        title: 'IOC CQK - Military Equipment Management System',
        description:
            'The Military Equipment Management System streamlines the tracking, maintenance, and management of military assets. It features real-time sensor data tracking, automated alerts, and detailed reporting, ensuring equipment is always operational and ready for deployment. The system enhances operational efficiency, reduces downtime, and improves transparency through an intuitive interface for managing inventory and maintenance schedules.',
        detailedDescription:
            'This is a comprehensive solution designed to streamline the tracking, management, and maintenance of military assets and equipment. The system allows military personnel to efficiently manage inventory, monitor the condition of equipment, schedule maintenance, and track usage across various units. Key features include real-time sensors data tracking, automated alerts for abnormal data, and detailed reporting for decision-making. This also provides an intuitive interface for users to input and access critical information regarding the lifecycle of military assets, ensuring that equipment is always operational and ready for deployment. The system enhances transparency, improves operational efficiency, and reduces downtime by ensuring that all equipment is maintained and serviced according to pre-defined schedules.',
        technologies: [
            { name: 'Java', icon: FaJava },
            { name: 'Spring Boot', icon: SiSpring },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'React', icon: SiReact },
            { name: 'Next', icon: SiNextdotjs },
            { name: 'MySQL', icon: SiMysql },
            { name: 'Kubernetes', icon: SiKubernetes },
            { name: 'AI Integration', icon: GiBrain },
            { name: 'IoT Integration', icon: GiRadioTower },
        ],
        features: [
            'Realtime Sensor Data Tracking',
            'Automated Alerts for Abnormal Data',
            'Reduced Downtime',
            'Intuitive Interface for Users to Input and Access Critical Information',
            'Detailed Reporting for Decision-Making',
            'Enhanced Operational Efficiency',
        ],
        challenges: [
            'Real-time monitoring integration from IoT sensors',
            'AI integration for anomaly detection',
            'Performance optimization for real-time data processing',
        ],
        outcomes: [
            'Shortened project delivery time',
            'Achieved 99.9% uptime',
            '24/7 real-time monitoring',
        ],
        role: 'Fullstack Developer',
        github: null,
        demo: null,
        image: '🛒',
    },
    {
        title: 'IOC BXD - Intelligence Operation Center of the Ministry of Construction',
        description:
            'The Intelligence Operation Center of the Ministry of Construction is an IT system designed to optimize the management and coordination of construction projects. It uses advanced technologies to track progress, manage resources, and ensure quality, while supporting decision-making and sustainable development strategies.',
        detailedDescription:
            // 'Built a production-ready e-commerce backend API that handles thousands of concurrent users. The system implements a microservices architecture with separate services for authentication, product catalog, cart management, and payment processing. Integrated with Stripe for secure payment handling and implemented comprehensive error handling and logging.',
            'The Intelligence Operation Center of the Ministry of Construction is an information technology system designed to collect, analyze, and process data related to activities in the country. The center aims to optimize the management, monitoring, and coordination of construction projects, improve management efficiency, enhance decision-making capabilities, and support sustainable development strategies for the country. The system utilizes advanced technologies to track project progress, manage resources, and ensure security quality.',
        technologies: [
            { name: 'Java', icon: FaJava },
            { name: 'Spring Boot', icon: SiSpring },
            { name: 'MySQL', icon: SiMysql },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'Redis', icon: SiRedis },
            { name: 'Docker', icon: SiDocker },
            { name: 'Kubernetes', icon: SiKubernetes },
            { name: 'Data Integration', icon: GiDatabase },
        ],
        features: [
            'Real-time Updates',
            'Team Workspaces',
            'Task Labels & Filters',
            'Activity Logging',
            'Email Notifications',
            'File Attachments',
            'Task Dependencies',
            'Custom Workflows',
        ],
        challenges: [
            'Implementing efficient real-time synchronization across multiple clients',
            'Designing flexible permission system for team hierarchies',
            'Optimizing complex filtering queries with multiple parameters',
        ],
        outcomes: [
            'Supported 500+ active teams',
            'Handled 1M+ tasks created',
            'Achieved sub-100ms API response times',
        ],
        role: 'Backend Developer',
        github: null,
        demo: null,
        image: '📋',
    },
    {
        title: 'Multi-tenant Intelligence Operation Center System',
        description:
            'The Multi-tenant Intelligence Operation Center (IOC) System allows multiple organizations to manage and monitor their operations on a single platform. It collects and analyzes real-time data, provides customized reports, ensures data security, and supports decision-making and incident management. The system is scalable, allowing easy integration of new tenants while maintaining high performance.',
        detailedDescription:
            'The Multi-tenant Intelligence Operation Center (IOC) System is designed to manage and monitor multiple tenants (organizations or departments) within a single platform. It allows each tenant to customize its interface, reports, and management features while maintaining full independence. The system collects and analyzes real-time data from various sources such as IoT sensors, surveillance cameras, and communication networks, providing actionable insights and alerts. It ensures data security by allowing each tenant to set their own access permissions and privacy settings. Additionally, the system enhances decision-making by offering intelligent analytics and forecasts, optimizes resource allocation, and supports efficient incident management and coordination across tenants. With scalability and resource distribution, the system can easily expand to accommodate new tenants while maintaining high performance and security.',
        technologies: [
            { name: 'Java', icon: FaJava },
            { name: 'Spring Boot', icon: SiSpring },
            { name: 'MySQL', icon: SiMysql },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'Redis', icon: SiRedis },
            { name: 'Docker', icon: SiDocker },
            { name: 'Kubernetes', icon: SiKubernetes },
            { name: 'Data Integration', icon: GiDatabase },
            { name: 'Apache Camel', icon: SiApache },
        ],
        features: [
            'Multi-tenant Management',
            'Customizable Interface',
            'Realtime Data Analysis',
            'Actionable Insights',
            'Data Security',
            'Intelligent Analytics',
            'Resource Optimization',
            'Incident Management',
        ],
        challenges: [
            'Implementing secure authentication and authorization',
            'Handling API rate limits and failures gracefully',
            'Managing data security and privacy',
        ],
        outcomes: [
            'Support for multiple tenants',
            'Customizable interface for each tenant',
            'Real-time data analysis',
            'Actionable insights and alerts',
            'Data security and privacy',
            'Intelligent analytics and forecasts',
            'Resource optimization',
            'Incident management and coordination',
        ],
        role: 'Backend Engineer',
        github: null,
        demo: null,
        image: '💬',
    },
    {
        title: 'HDSAISON - Online Loan Application Platform Business',
        description:
            'A platform that enables users to apply for loans, submit personal information, select loan options, and sign contracts online, streamlining the process and improving accessibility. It also allows businesses to manage and track loan applications, offering data-driven insights for decision-making.',
        detailedDescription:
            'Developed and implemented an online loan application platform, enabling users to apply for loans, submit personal information, select loan options, and sign contracts online. This streamlined process improved accessibility and saved time by eliminating the need for in-person visits to banks. Additionally, the platform helps businesses manage online loan applications, track application statuses, and analyze loan performance to make data-driven decisions.',
        technologies: [
            { name: 'Java', icon: FaJava },
            { name: 'Spring Boot', icon: SiSpring },
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'RabbitMQ', icon: SiRabbitmq },
            { name: 'Docker', icon: SiDocker },
            { name: 'Bitbucket', icon: SiBitbucket },
        ],
        features: [
            'Online Loan Application Platform',
            'Personal Information Submission',
            'Loan Options Selection',
            'Contract Signing',
            'Application Management',
            'Status Tracking',
            'Performance Analysis',
        ],
        challenges: [
            'Implementing secure authentication and authorization',
            'Handling API rate limits and failures gracefully',
        ],
        outcomes: [
            'Online Loan Application Platform',
            'Personal Information Submission',
            'Loan Options Selection',
            'Contract Signing',
            'Application Management',
            'Status Tracking',
            'Performance Analysis',
        ],
        role: 'Backend Developer',
        github: null,
        demo: null,
        image: '🌤️',
    },
    {
        title: 'BookRec - Bookstore with Recommendation System',
        description:
            'Built a comprehensive e-commerce platform for selling books, featuring an AI-based recommendation system to personalize user experiences and boost sales. The system allows users to browse, purchase, and receive tailored book suggestions, while providing admins with tools to manage products, orders, and performance analytics.',
        detailedDescription:
            'Built a full-featured e-commerce web application for selling books, integrated with an AI- based recommendation system to enhance user engagement and maximize sales. The system allows users to browse, purchase, and receive personalized book suggestions while providing administrators with powerful tools for managing products, orders, and performance metrics.',
        technologies: [
            { name: 'Java', icon: FaJava },
            { name: 'Spring Boot', icon: SiSpring },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'React', icon: SiReact },
            { name: 'Next', icon: SiNextdotjs },
            { name: 'Python', icon: SiPython },
            { name: 'Flask', icon: SiFlask },
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'AI Integration', icon: GiBrain },
        ],
        features: [
            'Online Bookstore',
            'Personalized Recommendations',
            'Order Management',
            'Performance Analytics',
        ],
        challenges: [
            'Implementing secure authentication and authorization',
            'Handling API rate limits and failures gracefully',
        ],
        outcomes: [
            'Online Bookstore',
            'Personalized Recommendations',
            'Order Management',
            'Performance Analytics',
        ],
        role: 'Fullstack Developer',
        github: null,
        demo: null,
        image: '🔗',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <section
                id="projects"
                className="section-padding bg-dark-50 dark:bg-dark-900"
                ref={ref}
            >
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
                            A showcase of backend projects demonstrating API design, database
                            architecture, and system scalability.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setSelectedProject(project)}
                                className="group relative bg-white dark:bg-dark-800/50 rounded-2xl overflow-hidden border border-dark-200 dark:border-dark-700 card-hover cursor-pointer"
                            >
                                {/* Project Image/Icon */}
                                <div className="relative h-48 bg-gradient-to-br from-primary-500 via-purple-500 to-accent-400 flex items-center justify-center overflow-hidden">
                                    <motion.span
                                        className="text-7xl"
                                        animate={{
                                            scale: hoveredIndex === index ? 1.2 : 1,
                                            rotate: hoveredIndex === index ? 10 : 0,
                                        }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        {project.image}
                                    </motion.span>

                                    {/* Overlay with links */}
                                    <motion.div
                                        className="absolute inset-0 bg-dark-900/80 flex items-center justify-center gap-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {project.github && <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FiGithub className="text-white" size={24} />
                                        </motion.a>}
                                        {project.demo && <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FiExternalLink className="text-white" size={24} />
                                        </motion.a>}
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-dark-500 dark:text-dark-400 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-1 px-2 py-1 bg-dark-100 dark:bg-dark-700 rounded-md text-xs text-dark-600 dark:text-dark-300"
                                            >
                                                <tech.icon size={14} />
                                                <span>{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-1">
                                        {project.features.slice(0, 3).map((feature) => (
                                            <span
                                                key={feature}
                                                className="text-xs text-primary-600 dark:text-primary-400"
                                            >
                                                #{feature.replace(/\s+/g, '')}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-800 rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-dark-100 dark:bg-dark-700 rounded-full hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors"
                            >
                                <FiX size={24} className="text-dark-600 dark:text-dark-300" />
                            </button>

                            {/* Header with Icon */}
                            <div className="relative h-48 bg-gradient-to-br from-primary-500 via-purple-500 to-accent-400 flex items-center justify-center">
                                <span className="text-8xl">{selectedProject.image}</span>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {/* Title and Role */}
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-dark-800 dark:text-white mb-2">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                                        {selectedProject.role}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-dark-700 dark:text-dark-200 mb-3">
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.technologies.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-2 px-4 py-2 bg-dark-100 dark:bg-dark-700 rounded-lg"
                                            >
                                                <tech.icon size={20} />
                                                <span className="font-medium text-dark-700 dark:text-dark-200">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Detailed Description */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-dark-700 dark:text-dark-200 mb-3">
                                        About the Project
                                    </h3>
                                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                                        {selectedProject.detailedDescription}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-dark-700 dark:text-dark-200 mb-3">
                                        Key Features
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        {selectedProject.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-2 text-dark-600 dark:text-dark-300"
                                            >
                                                <span className="text-primary-500">✓</span>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Challenges */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-dark-700 dark:text-dark-200 mb-3">
                                        Challenges Overcome
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedProject.challenges.map((challenge, idx) => (
                                            <li
                                                key={idx}
                                                className="flex gap-3 text-dark-600 dark:text-dark-300"
                                            >
                                                <span className="text-accent-500 font-bold">•</span>
                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Outcomes */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-dark-700 dark:text-dark-200 mb-3">
                                        Outcomes & Impact
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedProject.outcomes.map((outcome, idx) => (
                                            <li
                                                key={idx}
                                                className="flex gap-3 text-dark-600 dark:text-dark-300"
                                            >
                                                <span className="text-green-500 font-bold">→</span>
                                                <span>{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    {selectedProject.github && <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-dark-800 dark:bg-dark-700 text-white rounded-lg hover:bg-dark-700 dark:hover:bg-dark-600 transition-colors"
                                    >
                                        <FiGithub size={20} />
                                        <span>View on GitHub</span>
                                    </a>}
                                    {selectedProject.demo && <a
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                                    >
                                        <FiExternalLink size={20} />
                                        <span>View Live Demo</span>
                                    </a>}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
