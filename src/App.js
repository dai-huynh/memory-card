import React from "react";
import "./index.css";
import { UserOptions } from "./components/UserOptions";
import { useState } from "react";
import { getUrl } from "./api/getUrl";
import { Box } from "@mui/material";
import Game from "./components/Game";

const App = () => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [url, setUrl] = useState();

  const startGame = (options) => {
    setUrl(() => getUrl(options));
    setIsGameStart(true);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      {!isGameStart ? (
        <UserOptions startGame={startGame}></UserOptions>
      ) : (
        <Game url={url}></Game>
      )}
    </Box>
  );
};

export default App;
