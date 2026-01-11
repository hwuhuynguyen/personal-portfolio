import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import {
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiDjango,
    SiPostgresql,
    SiRedis,
    SiFlask,
    SiSqlite,
    SiGraphql,
    SiDocker,
    SiSocketdotio,
    SiStripe,
} from 'react-icons/si';

const projects = [
    {
        title: 'E-Commerce API',
        description:
            'A comprehensive RESTful API for an e-commerce platform featuring user authentication, product management, cart functionality, and order processing with integrated Stripe payment gateway.',
        detailedDescription:
            'Built a production-ready e-commerce backend API that handles thousands of concurrent users. The system implements a microservices architecture with separate services for authentication, product catalog, cart management, and payment processing. Integrated with Stripe for secure payment handling and implemented comprehensive error handling and logging.',
        technologies: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express', icon: SiExpress },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'Stripe', icon: SiStripe },
        ],
        features: [
            'JWT Authentication',
            'Product CRUD',
            'Shopping Cart',
            'Payment Integration',
            'Order Tracking',
            'Email Notifications',
            'Admin Dashboard API',
            'Inventory Management',
        ],
        challenges: [
            'Handling concurrent cart updates and preventing race conditions',
            'Implementing idempotent payment processing',
            'Optimizing database queries for product search and filtering',
        ],
        outcomes: [
            'Successfully processed 10,000+ orders in first month',
            'Achieved 99.9% uptime',
            'Reduced API response time by 40% through caching',
        ],
        role: 'Full Stack Backend Developer',
        github: 'https://github.com',
        demo: 'https://api-docs.example.com',
        image: '🛒',
    },
    {
        title: 'Task Management API',
        description:
            'Backend service for a task management application with real-time updates, team collaboration, and advanced task filtering. Implements Redis for caching and real-time notifications.',
        detailedDescription:
            'Developed a scalable task management backend using Django REST Framework with PostgreSQL for data persistence and Redis for caching and real-time features. Implemented complex permission systems for team-based access control and real-time WebSocket connections for live updates.',
        technologies: [
            { name: 'Django', icon: SiDjango },
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'Redis', icon: SiRedis },
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
        github: 'https://github.com',
        demo: null,
        image: '📋',
    },
    {
        title: 'Real-time Chat Backend',
        description:
            'Scalable WebSocket-based chat application backend supporting private messaging, group chats, file sharing, and message history with end-to-end encryption support.',
        detailedDescription:
            'Built a high-performance real-time chat system using Socket.io and Node.js. Implemented horizontal scaling with Redis pub/sub for multi-server deployments. Features include typing indicators, read receipts, message reactions, and support for multimedia file sharing with automatic compression.',
        technologies: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Socket.io', icon: SiSocketdotio },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'Redis', icon: SiRedis },
        ],
        features: [
            'WebSocket Communication',
            'Group Chats',
            'File Uploads',
            'Message History',
            'Online Presence',
            'Typing Indicators',
            'Read Receipts',
            'Message Reactions',
        ],
        challenges: [
            'Scaling WebSocket connections across multiple servers',
            'Implementing efficient message delivery guarantees',
            'Managing file uploads and storage optimization',
        ],
        outcomes: [
            '10,000+ concurrent connections supported',
            'Sub-50ms message delivery latency',
            '99.95% message delivery success rate',
        ],
        role: 'Backend Engineer',
        github: 'https://github.com',
        demo: null,
        image: '💬',
    },
    {
        title: 'Weather Data Aggregator',
        description:
            'A microservice that aggregates weather data from multiple third-party APIs, normalizes the data, and serves it through a unified RESTful endpoint with caching for improved performance.',
        detailedDescription:
            'Created a weather data aggregation service that combines data from multiple weather APIs (OpenWeatherMap, WeatherAPI, etc.) to provide reliable and comprehensive weather information. Implemented intelligent caching strategies and fallback mechanisms to ensure high availability.',
        technologies: [
            { name: 'Flask', icon: SiFlask },
            { name: 'SQLite', icon: SiSqlite },
        ],
        features: [
            'Multi-API Aggregation',
            'Data Normalization',
            'Response Caching',
            'Rate Limiting',
            'Scheduled Updates',
            'Fallback Mechanisms',
            'Historical Data',
        ],
        challenges: [
            'Normalizing data from different API formats',
            'Handling API rate limits and failures gracefully',
            'Implementing efficient caching strategy',
        ],
        outcomes: [
            '1,000+ API requests per minute handled',
            '95% cache hit rate achieved',
            '99.9% uptime maintained',
        ],
        role: 'Backend Developer',
        github: 'https://github.com',
        demo: 'https://weather-api.example.com',
        image: '🌤️',
    },
    {
        title: 'API Gateway Service',
        description:
            'A GraphQL-based API Gateway that unifies multiple microservices, handling authentication, rate limiting, and request routing. Built with Docker for easy deployment and scaling.',
        detailedDescription:
            'Designed and implemented a GraphQL API Gateway that serves as a unified entry point for multiple microservices. Features include schema stitching, request batching, intelligent caching, and comprehensive monitoring. Containerized with Docker for easy deployment and horizontal scaling.',
        technologies: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'GraphQL', icon: SiGraphql },
            { name: 'Docker', icon: SiDocker },
            { name: 'Redis', icon: SiRedis },
        ],
        features: [
            'GraphQL Federation',
            'Service Discovery',
            'Load Balancing',
            'Request Caching',
            'Health Monitoring',
            'Schema Stitching',
            'Request Batching',
            'Error Tracking',
        ],
        challenges: [
            'Implementing efficient schema federation across services',
            'Managing authentication and authorization across microservices',
            'Optimizing GraphQL query performance',
        ],
        outcomes: [
            'Reduced API complexity by 60%',
            'Improved response times by 35%',
            'Unified 8 microservices under single gateway',
        ],
        role: 'Senior Backend Developer',
        github: 'https://github.com',
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
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FiGithub className="text-white" size={24} />
                                        </motion.a>
                                        {project.demo && (
                                            <motion.a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <FiExternalLink className="text-white" size={24} />
                                            </motion.a>
                                        )}
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
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-dark-800 dark:bg-dark-700 text-white rounded-lg hover:bg-dark-700 dark:hover:bg-dark-600 transition-colors"
                                    >
                                        <FiGithub size={20} />
                                        <span>View on GitHub</span>
                                    </a>
                                    {selectedProject.demo && (
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                                        >
                                            <FiExternalLink size={20} />
                                            <span>View Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
