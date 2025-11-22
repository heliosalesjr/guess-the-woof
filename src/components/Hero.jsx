import React from 'react';

const Hero = ({ onPlayClick }) => {
    return (
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                    Guess The Woof!
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-indigo-100 max-w-2xl mx-auto">
                    Test your skills and see if you can recognize dog breeds by their looks!
                    A fun and interactive game for all dog lovers.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={onPlayClick}
                        className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-50 transition duration-300 transform hover:-translate-y-1"
                    >
                        Play
                    </button>
                    <a
                        href="#learn-more"
                        className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-600 transition duration-300"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
