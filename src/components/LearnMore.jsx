import React from 'react';
import { motion } from 'framer-motion';
import { FaPaw, FaDatabase, FaGraduationCap, FaHeart } from 'react-icons/fa';

const LearnMore = () => {
    const cards = [
        {
            icon: <FaPaw className="text-3xl text-indigo-400" />,
            title: "About Guess The Woof",
            description: "From technical inspirations to meaningful actions, explore the ideas and resources behind Guess The Woof."
        },
        {
            icon: <FaDatabase className="text-3xl text-purple-400" />,
            title: "Powered by Dog API",
            description: "The game utilizes the amazing Dog API, a free and open-source resource for all things dog-related."
        },
        {
            icon: <FaGraduationCap className="text-3xl text-pink-400" />,
            title: "Built on Research",
            description: "The Dog API is built on top of the Stanford Dogs Dataset, combining advanced research with practical applications."
        },
        {
            icon: <FaHeart className="text-3xl text-red-400" />,
            title: "Support Local Animals",
            description: "Use this game as inspiration to help animals in your area. Volunteer, donate, or adopt to make a difference."
        }
    ];

    return (
        <section id="learn-more" className="relative py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Behind the <span className="text-indigo-200">Woof</span>
                    </h2>
                    <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-16">
                        Discover the technology, data, and passion that brings this game to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="aspect-square bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2.5rem] flex flex-col items-center justify-center text-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-xl group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="mb-6 flex items-center justify-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                {React.cloneElement(card.icon, { className: `${card.icon.props.className} text-4xl` })}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                                {card.title}
                            </h3>
                            <p className="text-indigo-100 text-sm leading-relaxed font-medium opacity-90">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearnMore;
