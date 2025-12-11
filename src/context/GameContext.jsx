import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchBreeds, fetchRandomDogImage } from '../utils/api';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [breeds, setBreeds] = useState([]);
    const [currentDog, setCurrentDog] = useState(null);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState('loading'); // loading, playing, won, lost
    const [selectedOption, setSelectedOption] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [countdown, setCountdown] = useState(null);

    useEffect(() => {
        const loadBreeds = async () => {
            const breedsData = await fetchBreeds();
            setBreeds(breedsData);
            startNewRound(breedsData);
        };
        loadBreeds();
    }, []);

    // Auto-advance timer
    useEffect(() => {
        let timer;
        if (countdown !== null && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (countdown === 0) {
            startNewRound();
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    const startNewRound = async (breedsData = breeds) => {
        if (breedsData.length === 0) return;

        setGameState('loading');
        setSelectedOption(null);
        setImageLoaded(false);
        setCountdown(null);

        // Pick correct breed
        const randomIndex = Math.floor(Math.random() * breedsData.length);
        const correctBreed = breedsData[randomIndex];

        // Pick 2 wrong options
        const wrongOptions = [];
        while (wrongOptions.length < 2) {
            const randomWrongIndex = Math.floor(Math.random() * breedsData.length);
            const wrongBreed = breedsData[randomWrongIndex];
            if (wrongBreed.id !== correctBreed.id && !wrongOptions.find(b => b.id === wrongBreed.id)) {
                wrongOptions.push(wrongBreed);
            }
        }

        // Shuffle options
        const allOptions = [correctBreed, ...wrongOptions].sort(() => Math.random() - 0.5);
        setOptions(allOptions);

        // Fetch image
        const image = await fetchRandomDogImage(correctBreed.id);
        if (image) {
            setCurrentDog({ ...correctBreed, imageUrl: image.url });
            setGameState('playing');
        } else {
            // Retry if image fetch fails
            startNewRound(breedsData);
        }
    };

    const handleOptionClick = (breed) => {
        if (gameState !== 'playing') return;

        setSelectedOption(breed);

        if (breed.id === currentDog.id) {
            setScore(score + 1);
            setGameState('won');
        } else {
            setGameState('lost');
        }

        // Start countdown
        setCountdown(5);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const value = {
        breeds,
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
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};
