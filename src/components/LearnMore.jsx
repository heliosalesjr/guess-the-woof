import React from 'react';

const LearnMore = () => {
    return (
        <section id="learn-more" className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Learn More</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-indigo-600 mb-3">About Guess The Woof</h3>
                        <p className="text-gray-600">
                            From technical inspirations to meaningful actions, explore the ideas and resources behind Guess The Woof.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-indigo-600 mb-3">Powered by Dog API</h3>
                        <p className="text-gray-600">
                            The game utilizes the amazing Dog API, a free and open-source resource for all things dog-related.
                            It's a perfect fit for dog lovers and developers alike.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-indigo-600 mb-3">Built on Research</h3>
                        <p className="text-gray-600">
                            The Dog API is built on top of the Stanford Dogs Dataset, combining advanced research with practical applications,
                            featuring over 120 breeds and thousands of pictures.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-indigo-600 mb-3">Support Local Animals</h3>
                        <p className="text-gray-600">
                            Use this game as inspiration to help animals in your area. Volunteer, donate, or adopt to make a difference
                            for local shelters and stray animals. They need you!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnMore;
