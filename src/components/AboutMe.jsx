import React from 'react';
import { FaCode } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <section className="py-20 px-6 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="/me.png"
                                alt="Developer"
                                className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
                            />
                            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg text-indigo-600 z-10">
                                <FaCode className="text-xl" aria-hidden="true" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                <p className="text-white text-center text-sm font-semibold px-6">
                                    This is me and my dog, her name is Pamonha
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center md:justify-start gap-3">
                            Meet the Developer
                        </h2>

                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-sm border border-indigo-100 relative">
                            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
                                "I built this project to practice engineering and show my parents and in-laws that what I do can also be fun!"
                            </p>
                            <p className="text-gray-600">
                                Engineering isn't just about code and servers; it's about creating experiences that bring smiles to faces.
                                <span className="text-indigo-600 font-bold"> Guess The Woof </span> is a small window into that world of creativity and logic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
