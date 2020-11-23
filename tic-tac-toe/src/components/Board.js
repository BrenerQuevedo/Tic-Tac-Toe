import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import calculateWinner from "../utils/calculateWinner"; 
import GameContext from "../contexts/GameContext";
import Square from "./Square";

function Board() {
  
  const {
    state: { squares, history },
    dispatch,
  } = useContext(GameContext);
  
 
  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      dispatch({ type: 'UPDATE_WINNER', payload: winner });
    }
  }, [dispatch, history, squares]);


  return (
    <div className="board-container">
   
    <div className="board" >
      {squares.map((value, index) => (
        <Square value={value} index={index} key={uuidv4()} />
      ))}
    </div>

   
  </div>
  );
}

export default React.memo(Board);
