import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const GameOver = ({ points, isWon, retry, reset }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Game {isWon ? "Win!" : "Over!"}
      </Typography>
      <Typography variant="h4">Points: {points}</Typography>
      <div>
        <Button size="large" onClick={retry}>
          Retry
        </Button>
        <Button size="large" onClick={reset}>
          Reset
        </Button>
      </div>
    </Box>
  );
};
