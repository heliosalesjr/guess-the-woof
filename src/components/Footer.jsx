import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Guess The Woof! All rights reserved.</p>
            <p className="mt-2 text-sm">Made with 💜 for dog lovers.</p>
        </footer>
    );
};

export default Footer;
