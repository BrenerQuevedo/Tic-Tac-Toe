import React, { useContext } from 'react';
// import uuid from "uuid";

import GameContext from '../contexts/GameContext';

import { useCountRender } from '../utils/useCountRender';

function Board({ handleClick, count }) {
  

  useCountRender();
  const context = useContext(GameContext);
  return (
    <>
      <button
        style={{ width: 90, height: 30, backgroundColor: 'red', marginRight: 20}}
        onClick={() => handleClick(1)}
      >
        INCREMENT
      </button>
      {count}
    </>
  );
}

export default React.memo(Board);
