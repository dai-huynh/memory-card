import React from "react";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Box } from "@mui/material";
import Game from "./components/Game/Game";
import { UserOptions } from "./components/Form/UserOptions";

const queryClient = new QueryClient();

const App = () => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [options, setOptions] = useState();

  const startGame = (options) => {
    setOptions(options);
    setIsGameStart(true);
  };

  const endGame = () => {
    setIsGameStart(!isGameStart);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      color="white"
    >
      {!isGameStart ? (
        <UserOptions startGame={startGame}></UserOptions>
      ) : (
        <QueryClientProvider client={queryClient}>
          <Game endGame={endGame} options={options}></Game>
        </QueryClientProvider>
      )}
    </Box>
  );
};

export default App;
