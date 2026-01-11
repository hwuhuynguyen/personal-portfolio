import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    SiNodedotjs,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiGo,
    SiExpress,
    SiDjango,
    SiFlask,
    SiFastapi,
    SiSpringboot,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiAmazon,
    SiGit,
    SiGithub,
    SiJenkins,
    SiGraphql,
    SiBitbucket,
    SiElasticsearch,
    SiReact,
    SiVuedotjs,
    SiFirebase,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Filter categories
const filterCategories = [
    'All',
    'Languages',
    'Frameworks',
    'Databases',
    'DevOps',
    'Tools',
];

// All skills with their categories for filtering
const skills = [
    // Languages
    { name: 'Java', icon: FaJava, color: '#ED8B00', category: 'Languages' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Languages' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Languages' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Languages' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Languages' },

    // Frameworks
    { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', category: 'Frameworks' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', category: 'Frameworks' },
    { name: 'Django', icon: SiDjango, color: '#092E20', category: 'Frameworks' },
    { name: 'Flask', icon: SiFlask, color: '#FFFFFF', category: 'Frameworks' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'Frameworks' },
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frameworks' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', category: 'Frameworks' },

    // Databases
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Databases' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Databases' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Databases' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Databases' },
    { name: 'Elasticsearch', icon: SiElasticsearch, color: '#F9A825', category: 'Databases' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Databases' },

    // DevOps
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'DevOps' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900', category: 'DevOps' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939', category: 'DevOps' },

    // Tools
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
    { name: 'GitHub', icon: SiGithub, color: '#785959ff', category: 'Tools' },
    { name: 'Bitbucket', icon: SiBitbucket, color: '#2496ED', category: 'Tools' },

];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
    exit: {
        scale: 0.8,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredSkills = activeFilter === 'All'
        ? skills
        : skills.filter(skill => skill.category === activeFilter);

    return (
        <section
            id="skills"
            className="section-padding bg-dark-50 dark:bg-dark-900"
            ref={ref}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building scalable, secure, and high-performance
                        backend systems and APIs.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {filterCategories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === category
                                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white border-transparent shadow-lg shadow-primary-500/25'
                                : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 border-dark-200 dark:border-dark-700 hover:border-primary-500/50 hover:text-primary-500 dark:hover:text-primary-400'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="group"
                            >
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-dark-800/80 hover:bg-dark-100 dark:hover:bg-dark-700 transition-all duration-300 border border-dark-200 dark:border-dark-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-sm hover:shadow-md dark:shadow-none">
                                    <skill.icon
                                        size={28}
                                        style={{ color: skill.color }}
                                        className="flex-shrink-0 group-hover:scale-110 transition-transform"
                                    />
                                    <span className="text-sm font-medium text-dark-700 dark:text-dark-200 truncate">
                                        {skill.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
