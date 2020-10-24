import React, { createContext, useState } from 'react';

// import { Container } from './styles';

export const GameContext = createContext();

function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return <GameContext.Provider> {children} </GameContext.Provider>;
}

export default GameContextProvider;
