import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";

export const TypeRadioBtns = () => {
  return (
    <RadioGroup defaultValue={"anime"} name="type" row>
      <FormControlLabel
        value="anime"
        control={<Radio color="secondary" />}
        label={<Typography variant="h5">Anime</Typography>}
        labelPlacement="top"
      />
      <FormControlLabel
        value="characters"
        control={<Radio color="secondary" />}
        label={<Typography variant="h5">Characters</Typography>}
        labelPlacement="top"
      />
      <FormControlLabel
        value="manga"
        control={<Radio color="secondary" />}
        label={<Typography variant="h5">Manga</Typography>}
        labelPlacement="top"
      />
    </RadioGroup>
  );
};
