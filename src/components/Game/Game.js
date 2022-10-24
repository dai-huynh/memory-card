import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUrl } from "../../api/getUrl";
import { GameOver } from "./GameOver";
import { GameDisplay } from "./GameDisplay";

const Game = ({ endGame, options }) => {
  const [isGameDone, setIsGameDone] = useState(false);
  const [points, setPoints] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const url = getUrl(options);

  const fetchData = async () => {
    const res = await fetch(url);
    return res.json();
  };
  let { data, status } = useQuery(["data"], fetchData);

  const incPoints = () => {
    setPoints(() => points + 1);
    checkGameState();
  };

  const checkGameState = () => {
    if (points === options.maxCards - 1) {
      setIsWon(true);
      gameOver();
    }
  };

  const gameOver = () => {
    setIsGameDone(true);
  };

  const retry = () => {
    setPoints(0);
    setIsGameDone(false);
  };

  const reset = () => {
    endGame();
  };

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error {status}</div>;
  else {
    return !isGameDone ? (
      <GameDisplay
        type={options.type}
        cardCount={options.maxCards}
        data={data}
        points={points}
        incPoints={incPoints}
        gameOver={gameOver}
      ></GameDisplay>
    ) : (
      <GameOver
        points={points}
        isWon={isWon}
        retry={retry}
        reset={reset}
      ></GameOver>
    );
  }
};

export default Game;
