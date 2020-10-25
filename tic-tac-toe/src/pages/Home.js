import React, { useState, useCallback, useMemo } from 'react';

import GameContext from '../contexts/GameContext';
import Board from '../components/Board';
import './Home.css';
import { useFetch } from '../utils/useFetch';
import { useCountRender } from '../utils/useCountRender';


function Home() {
  const [count, setCount] = useState(0);

  const { data } = useFetch(
    'https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json'
  );

  // useCountRender();
  const getLongestWord= useCallback((array) => {
    if (!array) {
      return [];
    }
    let longestWord = '';
    console.log("teste");

    JSON.parse(array).forEach((sentence) => {
      sentence.split(' ').forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    });

    
    return longestWord;
  }, [])

  const longestWord = useMemo(() => getLongestWord(data), [data, getLongestWord])

  const handleClick = useCallback((n) => {
    setCount((c) => c + n);
  }, [setCount]);

  return (
    <>
      {/* <GameContext> */}
      <button onClick={handleClick}>{count}</button>
      <Board handleClick={handleClick} count={count} />
      {/* </GameContext>   */}
      <div>{longestWord}</div>
    </>
  );
}

export default Home;
