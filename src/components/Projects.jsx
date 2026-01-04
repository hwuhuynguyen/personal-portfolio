import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
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
        ],
        github: 'https://github.com',
        demo: 'https://api-docs.example.com',
        image: '🛒',
    },
    {
        title: 'Task Management API',
        description:
            'Backend service for a task management application with real-time updates, team collaboration, and advanced task filtering. Implements Redis for caching and real-time notifications.',
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
        ],
        github: 'https://github.com',
        demo: null,
        image: '📋',
    },
    {
        title: 'Real-time Chat Backend',
        description:
            'Scalable WebSocket-based chat application backend supporting private messaging, group chats, file sharing, and message history with end-to-end encryption support.',
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
        ],
        github: 'https://github.com',
        demo: null,
        image: '💬',
    },
    {
        title: 'Weather Data Aggregator',
        description:
            'A microservice that aggregates weather data from multiple third-party APIs, normalizes the data, and serves it through a unified RESTful endpoint with caching for improved performance.',
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
        ],
        github: 'https://github.com',
        demo: 'https://weather-api.example.com',
        image: '🌤️',
    },
    {
        title: 'API Gateway Service',
        description:
            'A GraphQL-based API Gateway that unifies multiple microservices, handling authentication, rate limiting, and request routing. Built with Docker for easy deployment and scaling.',
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
        ],
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

    return (
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
                            className="group relative bg-white dark:bg-dark-800/50 rounded-2xl overflow-hidden border border-dark-200 dark:border-dark-700 card-hover"
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
    );
}
