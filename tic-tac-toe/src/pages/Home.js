import React from 'react';

import GameContext from '../contexts/GameContext';
import Board from '../components/Board';
import './Home.css';

function Home() {
  return (
    <GameContext>
      <Board />
    </GameContext>
  );
}

export default Home;
