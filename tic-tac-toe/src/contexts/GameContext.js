import React, { createContext, useState, useReducer } from 'react';

import types from 'prop-types';

import GameReducer, {INITIAL_STATE} from "./GameReducer"


export const GameContext = createContext();

export default function GameContextProvider({ children }) {

  const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE)


  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: types.node.isRequired
}
