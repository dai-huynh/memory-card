import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import React, { useRef } from "react";

export const GameCard = ({ name, image, incPoints, gameOver }) => {
  const card = useRef(false);

  const handleClick = () => {
    if (!card.current) {
      card.current = true;
      incPoints();
    } else {
      gameOver();
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90%",
        padding: ".5rem",
        transition: "transform 750ms",
        willChange: "transform",
        cursor: "pointer",
        ":hover": { transform: "translateY(-10px)", transition: "1s" },
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        image={image}
        height="250"
        sx={{
          objectFit: "contain",
        }}
      />
      <CardContent sx={{ width: "150px", textAlign: "center" }}>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};
