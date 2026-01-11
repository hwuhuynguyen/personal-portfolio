import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/hwuhuynguyen', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/huynguyenhuu', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:nguyenhuuhuya1@gmail.com', label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-dark-950 border-t border-dark-200 dark:border-dark-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <a href="#home" className="text-2xl font-bold gradient-text">Nguyen Huu Huy</a>
                        <p className="text-dark-500 dark:text-dark-400 mt-2">
                            Backend Software Engineer | Data Engineer | Solutions Architect
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-100 dark:bg-dark-800 rounded-full text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-dark-200 dark:hover:bg-dark-700 transition-all">
                                <link.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-dark-200 dark:border-dark-800 mt-8 pt-8 text-center">
                    <p className="text-dark-500 dark:text-dark-400 text-sm flex items-center justify-center gap-1">
                        © {new Date().getFullYear()} Nguyen Huu Huy. Made with <FiHeart className="text-red-500" /> and lots of ☕
                    </p>
                </div>
            </div>
        </footer>
    );
}
