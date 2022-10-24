import { maxCards } from "../../utility/maxCards";
import {
  Box,
  FormControl,
  FormControlLabel,
  Typography,
  FormLabel,
  Button,
  Switch,
} from "@mui/material";
import { TypeRadioBtns } from "./TypeRadioBtns";
import { DiffRadioBtns } from "./DiffRadioBtns";

export const UserOptions = ({ startGame }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    startGame({
      type: e.target.type.value,
      maxCards: maxCards[e.target.difficulty.value],
      isRandom: e.target.random.checked,
    });
  };

  return (
    <Box
      sx={{
        padding: 2,
        color: "white",
        backgroundColor: "#918ca9",
        borderRadius: "6px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormControl
          component="fieldset"
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <FormLabel>
            <Typography
              variant="h4"
              sx={{
                padding: 2,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Select Options
            </Typography>
          </FormLabel>
          <TypeRadioBtns></TypeRadioBtns>
          <DiffRadioBtns></DiffRadioBtns>
          <FormControlLabel
            control={<Switch color="secondary" name="random" />}
            label={<Typography variant="h5">Random?</Typography>}
            labelPlacement="top"
          />
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{ width: "100%" }}
          >
            Start
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
