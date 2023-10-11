import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useClickCounter from "./useCount";

export default function Buttons() {
  const { clickCountBlue, incrementClickCountBlue } = useClickCounter();
  const { clickCountGreen, incrementClickCountGreen } = useClickCounter();

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        color="success"
        onClick={incrementClickCountGreen}
      >
        green
      </Button>
      <Button variant="contained" onClick={incrementClickCountBlue}>
        blue
      </Button>
      <p>Blue Button Click:{clickCountBlue}</p>
      <p>green Button Click:{clickCountGreen}</p>
    </Stack>
  );
}
