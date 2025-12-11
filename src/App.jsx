import React, { useRef } from 'react';
import Hero from './components/Hero';
import Game from './components/Game';
import LearnMore from './components/LearnMore';
import Footer from './components/Footer';
import { GameProvider } from './context/GameContext';

function App() {
  const gameRef = useRef(null);

  const learnMoreRef = useRef(null);

  const scrollToGame = () => {
    gameRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Hero onPlayClick={scrollToGame} onLearnMoreClick={scrollToLearnMore} />
      <div ref={gameRef}>
        <GameProvider>
          <Game />
        </GameProvider>
      </div>
      <div ref={learnMoreRef}>
        <LearnMore />
      </div>
      <Footer />
    </div>
  );
}

export default App;
