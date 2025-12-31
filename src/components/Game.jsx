import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { FaPaw } from 'react-icons/fa';
import { useGame } from '../context/GameContext';

const Game = () => {
    const {
        currentDog,
        options,
        score,
        gameState,
        selectedOption,
        imageLoaded,
        countdown,
        sessionState,
        timeLeft,
        startGame,
        resetGame,
        startNewRound,
        handleOptionClick,
        handleImageLoad,
    } = useGame();

    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [copied, setCopied] = useState(false);

    const getFeedbackMessage = () => {
        if (score < 5) return "Good start! Keep practicing to become a dog expert.";
        if (score <= 10) return "Great job! You know your breeds well!";
        return "Woof-tastic! You are a master of dog breeds!";
    };

    const handleShare = () => {
        const text = `www.guessthewoof.com`;
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    if (sessionState === 'waiting') {
        return (
            <section id="game" className="py-20 px-4 bg-white min-h-[700px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('/bone-pattern.png')", backgroundSize: "100px" }}></div>
                <div className="max-w-2xl relative z-10">
                    <FaPaw className="text-indigo-600 text-6xl mx-auto mb-6 animate-bounce" aria-hidden="true" />
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Time Attack Mode</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        You have <span className="font-bold text-indigo-600">60 seconds</span> to guess as many dog breeds as you can.
                        Are you ready to prove your expertise?
                    </p>
                    <button
                        onClick={startGame}
                        className="bg-indigo-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition duration-300 text-xl"
                    >
                        Start Challenge
                    </button>
                </div>
            </section>
        );
    }

    if (sessionState === 'finished') {
        return (
            <section id="game" className="py-20 px-4 bg-white min-h-[700px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('/bone-pattern.png')", backgroundSize: "100px" }}></div>
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={false}
                    numberOfPieces={500}
                    style={{ position: 'fixed', top: 0, left: 0, zIndex: 50, pointerEvents: 'none' }}
                />
                <div className="max-w-xl w-full bg-gray-50 p-8 rounded-3xl shadow-xl border-4 border-indigo-100 relative z-10">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Time's Up!</h2>
                    <p className="text-gray-500 mb-8">Let's see how you did...</p>

                    <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
                        <span className="block text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Final Score</span>
                        <span className="block text-6xl font-extrabold text-indigo-600">{score}</span>
                    </div>

                    <p className="text-xl font-bold text-gray-700 mb-8 px-4">
                        {getFeedbackMessage()}
                    </p>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleShare}
                            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2"
                        >
                            {copied ? 'Copied!' : 'Share with your friends'}
                        </button>

                        <button
                            onClick={resetGame}
                            className="bg-transparent border-2 border-indigo-600 text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition duration-300"
                        >
                            Play Again
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="game" className="py-16 px-4 bg-white min-h-[700px] flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('/bone-pattern.png')", backgroundSize: "100px" }}></div>
            {gameState === 'won' && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} />}

            <div className="max-w-4xl w-full text-center relative z-10">
                <div className="flex justify-between items-center mb-8 px-4">
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Score</span>
                        <span className="text-3xl font-extrabold text-indigo-600">{score}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Time</span>
                        <span role="timer" aria-label={`${timeLeft} seconds remaining`} className={`text-3xl font-extrabold ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-gray-700'}`}>
                            {timeLeft}s
                        </span>
                    </div>
                </div>

                {gameState === 'loading' ? (
                    <div className="flex justify-center items-center h-64">
                        <FaPaw className="text-indigo-600 text-6xl animate-bounce" aria-hidden="true" />
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <div className="mb-8 relative group min-h-[16rem] md:min-h-[20rem] flex items-center justify-center">
                            {!imageLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaPaw className="text-indigo-400 text-6xl animate-spin" aria-hidden="true" />
                                </div>
                            )}
                            <div className={`absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 ${!imageLoaded ? 'hidden' : ''}`}></div>
                            <img
                                src={currentDog?.imageUrl}
                                alt="Guess the dog"
                                onLoad={handleImageLoad}
                                className={`relative rounded-2xl shadow-xl w-full max-w-md h-64 md:h-80 object-cover border-4 border-white transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>

                        {imageLoaded && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl animate-fade-in-up">
                                {options.map((breed) => {
                                    let buttonStyle = "bg-white border-2 border-gray-200 text-gray-700 hover:border-indigo-500 hover:text-indigo-600";

                                    if (gameState !== 'playing') {
                                        if (breed.id === currentDog.id) {
                                            buttonStyle = "bg-green-500 border-green-500 text-white";
                                        } else if (breed.id === selectedOption?.id) {
                                            buttonStyle = "bg-red-500 border-red-500 text-white";
                                        } else {
                                            buttonStyle = "bg-gray-100 border-gray-100 text-gray-400";
                                        }
                                    }

                                    return (
                                        <button
                                            key={breed.id}
                                            onClick={() => handleOptionClick(breed)}
                                            disabled={gameState !== 'playing'}
                                            className={`py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${buttonStyle} shadow-sm`}
                                        >
                                            {breed.name}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {gameState !== 'playing' && imageLoaded && (
                            <div className="mt-10 animate-fade-in-up" aria-live="polite">
                                <p className={`text-xl font-bold mb-4 ${gameState === 'won' ? 'text-green-600' : 'text-red-600'}`}>
                                    {gameState === 'won' ? 'Correct! 🎉' : `Oops! It was a ${currentDog.name}.`}
                                </p>
                                <button
                                    onClick={() => startNewRound()}
                                    className="bg-indigo-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center mx-auto gap-2"
                                >
                                    Next Round {countdown !== null && `(${countdown}s)`}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Game;
