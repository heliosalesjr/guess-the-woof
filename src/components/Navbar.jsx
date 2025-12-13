import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NavLink = ({ onClick, children }) => {
    return (
        <motion.button
            onClick={onClick}
            className="group relative px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200"
            whileHover="hover"
            initial="initial"
            whileTap={{ scale: 0.95 }}
        >
            <motion.span
                variants={{
                    initial: { y: 0, color: '#374151' },
                    hover: { y: -2, color: '#4f46e5', transition: { type: 'spring', stiffness: 300 } }
                }}
                className="relative z-10 block font-bold"
            >
                {children}
            </motion.span>

            {/* Animated Underline */}
            <motion.span
                variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: {
                        scaleX: 1,
                        opacity: 1,
                        transition: { type: 'spring', stiffness: 300, damping: 20 }
                    }
                }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-full origin-center"
            />
            {/* Playground for other effects (e.g. background pill) can go here */}
        </motion.button>
    );
};

const Navbar = ({ onPlayClick, onLearnMoreClick, onAboutMeClick }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <motion.div
                            whileHover={{
                                rotate: [0, -20, 20, -10, 10, 0],
                                scale: 1.2,
                                transition: { duration: 0.6, ease: "easeInOut" }
                            }}
                            whileTap={{ scale: 0.8, rotate: -10 }}
                            className="text-indigo-600 text-3xl mr-2"
                        >
                            <FaPaw />
                        </motion.div>
                        <span className="font-extrabold text-xl tracking-tight text-gray-900 group-hover:text-indigo-800 transition-colors">
                            Guess The <span className="text-indigo-600 group-hover:text-purple-600 transition-colors">Woof!</span>
                        </span>
                    </div>

                    {/* Links Section */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <NavLink onClick={onPlayClick}>Play</NavLink>
                            <NavLink onClick={onLearnMoreClick}>Learn More</NavLink>
                            <NavLink onClick={onAboutMeClick}>About Me</NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Button - Keeping simplistic but adding basic interaction */}
                    <div className="block md:hidden">
                        <div className="flex items-baseline space-x-2">
                            <button onClick={onPlayClick} className="text-gray-700 hover:text-indigo-600 text-xs font-bold uppercase p-2">Play</button>
                            <button onClick={onLearnMoreClick} className="text-gray-700 hover:text-indigo-600 text-xs font-bold uppercase p-2">Learn</button>
                            <button onClick={onAboutMeClick} className="text-gray-700 hover:text-indigo-600 text-xs font-bold uppercase p-2">About</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
