import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const ProgressCircle = ({ timerMinutes, timerSeconds, displayMessage }) => {
  return (
    <CircularProgress
      value={100}
      color={!displayMessage ? "tomato" : "green"}
      size="200px"
    >
      <CircularProgressLabel>
        {timerMinutes}:{timerSeconds}
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default ProgressCircle;
