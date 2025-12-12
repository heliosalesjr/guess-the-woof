import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = ({ onPlayClick, onLearnMoreClick, onAboutMeClick }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 20 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-indigo-600 text-3xl mr-2"
                        >
                            <FaPaw />
                        </motion.div>
                        <span className="font-extrabold text-xl tracking-tight text-gray-900">
                            Guess The <span className="text-indigo-600">Woof!</span>
                        </span>
                    </div>

                    {/* Links Section */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <button
                                onClick={onPlayClick}
                                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Play
                            </button>
                            <button
                                onClick={onLearnMoreClick}
                                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Learn More
                            </button>
                            <button
                                onClick={onAboutMeClick}
                                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                About Me
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button (Optional mostly for spacing on small screens if we expand later, 
                        but keeping it simple for now, links stack or hide? The prompt asked for specific links on right side)
                        For simplicity in this iteration, I'll ensure it respects flex layout, 
                        maybe add a small responsive tweak if needed, but 'hidden md:block' hides links on mobile.
                        I will make them visible on all screens for now since there are only 3 links.
                    */}
                    <div className="block md:hidden">
                        <div className="flex items-baseline space-x-2">
                            <button onClick={onPlayClick} className="text-gray-700 hover:text-indigo-600 text-xs font-bold uppercase">Play</button>
                            <button onClick={onLearnMoreClick} className="text-gray-700 hover:text-indigo-600 text-xs font-bold uppercase">Learn</button>
                            <button onClick={onAboutMeClick} className="text-gray-700 hover:text-indigo-600 text-xs font-bold uppercase">About</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
