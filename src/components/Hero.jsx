import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchRandomDogWithBreed } from '../utils/api';
import { FaPaw, FaRedo } from 'react-icons/fa';

const Hero = ({ onPlayClick, onLearnMoreClick }) => {
    const [dog, setDog] = useState(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [loading, setLoading] = useState(true);

    const loadDog = async () => {
        setLoading(true);
        setIsRevealed(false); // Reset reveal state on reload
        try {
            // Fetch a random dog that definitely has breed info
            // We might want to loop or retry in a real app if the API is strict, 
            // but for now we trust the endpoint or handle null.
            const data = await fetchRandomDogWithBreed();

            if (data) {
                setDog({
                    url: data.url,
                    name: data.name
                });
            }
        } catch (e) {
            console.error("Failed to load hero dog", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let ignore = false;

        // Wrap the original load logic to respect the ignore flag
        const initialLoad = async () => {
            setLoading(true);
            try {
                const data = await fetchRandomDogWithBreed();
                if (!ignore && data) {
                    setDog({
                        url: data.url,
                        name: data.name
                    });
                }
            } catch (e) {
                console.error(e);
            } finally {
                if (!ignore) setLoading(false);
            }
        };

        initialLoad();

        return () => {
            ignore = true;
        };
    }, []);

    const handleReveal = () => {
        if (!isRevealed) {
            setIsRevealed(true);
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white min-h-[70vh] flex items-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Column: Text & CTA */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-lg">
                                Guess The <br />
                                <span className="text-indigo-200">Woof!</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-indigo-100 max-w-lg mx-auto md:mx-0 leading-relaxed">
                                The ultimate challenge for dog lovers. Test your knowledge and master every breed!
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                        >
                            <button
                                onClick={onPlayClick}
                                className="bg-white text-indigo-700 font-black py-4 px-10 rounded-full shadow-xl hover:bg-indigo-50 hover:scale-105 transition duration-300 text-lg uppercase tracking-wide"
                            >
                                Play Now
                            </button>
                            <button
                                onClick={onLearnMoreClick}
                                className="bg-transparent border-4 border-indigo-300 text-indigo-100 font-bold py-3.5 px-10 rounded-full hover:bg-white/10 hover:border-white hover:text-white transition duration-300 text-lg"
                            >
                                Learn More
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: 6 }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className="relative w-72 h-72 md:w-96 md:h-96"
                        >
                            {/* Decorative background blob */}
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full rounded-[3rem] bg-indigo-500/30 blur-2xl transform rotate-12"></div>

                            {/* The Card */}
                            <motion.div
                                className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-800 cursor-pointer group"
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleReveal}
                            >
                                {/* Reload Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent card reveal click
                                        loadDog();
                                    }}
                                    className="absolute top-4 right-4 z-20 bg-white/90 p-3 rounded-full shadow-md text-indigo-600 hover:bg-white hover:scale-110 transition-all duration-200 group-hover:opacity-100 md:opacity-0 opacity-100"
                                    title="Load new dog"
                                >
                                    <FaRedo className={loading ? "animate-spin" : ""} />
                                </button>
                                {loading || !dog ? (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                                        <FaPaw className="text-6xl animate-bounce mb-2" />
                                        <span className="text-sm font-bold">Fetching a friend...</span>
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            src={dog.url}
                                            alt="Mystery Dog"
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Overlay Overlay */}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center p-4 text-center">
                                            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg transform transition-transform duration-300 w-full mb-2">
                                                {isRevealed ? (
                                                    <div className="animate-pop-in">
                                                        <p className="text-gray-500 text-xs uppercase font-bold mb-1">I am a</p>
                                                        <p className="text-indigo-600 text-xl md:text-2xl font-black leading-tight">
                                                            {dog.name}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p className="text-indigo-600 font-bold text-lg md:text-xl group-hover:hidden">
                                                            Do you know my breed?
                                                        </p>
                                                        <p className="hidden group-hover:block text-indigo-600 font-bold text-lg md:text-xl animate-pulse">
                                                            Click to find out!
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
