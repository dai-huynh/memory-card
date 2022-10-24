import { Grid } from "@mui/material";
import React from "react";
import { filterAnimeMangaData, filterCharData } from "../../api/filterData";
import { shuffleArray } from "../../utility/shuffleArray";
import { GameCard } from "./GameCard";

export const GameCards = ({ type, data, incPoints, gameOver }) => {
  let newData;

  if (type === "characters") newData = filterCharData(data);
  else newData = filterAnimeMangaData(data);

  return (
    <Grid justifyContent="center" container rowSpacing={4} columnSpacing={4}>
      {shuffleArray(
        newData.map((obj) => (
          <Grid item key={obj.name + obj.image}>
            <GameCard
              name={obj.name}
              image={obj.image}
              incPoints={incPoints}
              gameOver={gameOver}
            ></GameCard>
          </Grid>
        ))
      )}
    </Grid>
  );
};
