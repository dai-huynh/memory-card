import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { GameCards } from "./GameCards";

export const GameDisplay = ({ type, data, points, incPoints, gameOver }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        {points}
      </Typography>
      <GameCards
        type={type}
        data={data}
        points={points}
        incPoints={incPoints}
        gameOver={gameOver}
      ></GameCards>
    </Container>
  );
};
