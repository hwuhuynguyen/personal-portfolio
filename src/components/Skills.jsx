import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillCategories = [
    {
        title: 'Backend Languages',
        skills: [
            { name: 'Java', icon: FaJava, color: '#ED8B00' },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'Go', icon: SiGo, color: '#00ADD8' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
            { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
            { name: 'Django', icon: SiDjango, color: '#092E20' },
            { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
            { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'Redis', icon: SiRedis, color: '#DC382D' },
        ],
    },
    {
        title: 'DevOps & Cloud',
        skills: [
            { name: 'Docker', icon: SiDocker, color: '#2496ED' },
            { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
            { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
            { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
        ],
    },
    {
        title: 'API & Tools',
        skills: [
            { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
            { name: 'Git', icon: SiGit, color: '#F05032' },
            { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building scalable, secure, and high-performance
                        backend systems and APIs.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="space-y-12"
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="bg-white dark:bg-dark-800/50 rounded-2xl p-6 md:p-8 shadow-lg dark:shadow-none border border-dark-200 dark:border-dark-700"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-dark-800 dark:text-white mb-6">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="group relative"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="flex flex-col items-center p-4 rounded-xl bg-dark-100 dark:bg-dark-700/50 hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-300 border border-transparent hover:border-primary-500/30">
                                            <skill.icon
                                                size={40}
                                                style={{ color: skill.color }}
                                                className="mb-3 group-hover:scale-110 transition-transform"
                                            />
                                            <span className="text-sm font-medium text-dark-600 dark:text-dark-300 text-center">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
