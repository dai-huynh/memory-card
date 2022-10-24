import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";

export const DiffRadioBtns = () => {
  return (
    <RadioGroup defaultValue={"easy"} name="difficulty" row>
      <FormControlLabel
        value="easy"
        control={<Radio color="secondary" />}
        label={<Typography variant="h5">Easy</Typography>}
        labelPlacement="top"
      />
      <FormControlLabel
        value="medium"
        control={<Radio color="secondary" />}
        label={<Typography variant="h5">Medium</Typography>}
        labelPlacement="top"
      />
      <FormControlLabel
        value="hard"
        control={<Radio color="secondary" />}
        label={<Typography variant="h5">Hard</Typography>}
        labelPlacement="top"
      />
      <FormControlLabel
        value="impossible"
        control={<Radio color="secondary" />}
        label={<Typography variant="h5">Impossible</Typography>}
        labelPlacement="top"
      />
    </RadioGroup>
  );
};
