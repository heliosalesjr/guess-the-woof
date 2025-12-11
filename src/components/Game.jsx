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

    return (
        <section id="game" className="py-16 px-4 bg-white min-h-[600px] flex flex-col items-center justify-center relative">
            {gameState === 'won' && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} />}

            <div className="max-w-4xl w-full text-center">
                <div className="mb-8 flex justify-between items-center bg-gray-100 px-6 py-3 rounded-full max-w-xs mx-auto">
                    <span className="text-gray-600 font-bold">Score</span>
                    <span className="text-2xl font-extrabold text-indigo-600">{score}</span>
                </div>

                {gameState === 'loading' ? (
                    <div className="flex justify-center items-center h-64">
                        <FaPaw className="text-indigo-600 text-6xl animate-bounce" />
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <div className="mb-8 relative group min-h-[16rem] md:min-h-[20rem] flex items-center justify-center">
                            {!imageLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaPaw className="text-indigo-400 text-6xl animate-spin" />
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
                            <div className="mt-10 animate-fade-in-up">
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
