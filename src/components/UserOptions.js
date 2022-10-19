import { maxCards } from "../utility/maxCards";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  FormLabel,
  Button,
  Switch,
} from "@mui/material";

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
