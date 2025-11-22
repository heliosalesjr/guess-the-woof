import React, { useRef } from 'react';
import Hero from './components/Hero';
import Game from './components/Game';
import LearnMore from './components/LearnMore';
import Footer from './components/Footer';

function App() {
  const gameRef = useRef(null);

  const scrollToGame = () => {
    gameRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Hero onPlayClick={scrollToGame} />
      <div ref={gameRef}>
        <Game />
      </div>
      <LearnMore />
      <Footer />
    </div>
  );
}

export default App;
