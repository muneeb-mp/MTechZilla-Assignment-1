import {
  Stack,
  Alert,
  AlertIcon,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProgressCircle from "./ProgressCircle";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";

const Timer = () => {
  const navigate = useNavigate();

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isTimerOn, setIsTimerOn] = useState(false);
  let timer;

  useEffect(() => {
    if (isTimerOn) {
      timer = setInterval(() => {
        setSeconds(seconds - 1);

        if (seconds === 0) {
          if (minutes !== 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 59;
            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  });

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const startTimer = () => {
    setIsTimerOn(true);
  };

  const pauseTimer = () => {
    setIsTimerOn(false);
  };

  const resetTimer = () => {
    if (!displayMessage) {
      setMinutes(25);
      setSeconds(0);
      setIsTimerOn(false);
    } else {
      setMinutes(5);
      setSeconds(0);
      setIsTimerOn(false);
    }
  };

  const logoutUser = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        h="100vh"
      >
        <Heading mb={5}>Pomodoro Timer</Heading>
        <div className="message">
          {displayMessage && (
            <Alert status="success" mb={5} variant="left-accent">
              <AlertIcon />
              Break time! New session starts in:
            </Alert>
          )}
        </div>
        <ProgressCircle
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
          displayMessage={displayMessage}
        />
        <Stack direction="row" spacing={4} mt={8}>
          {isTimerOn ? (
            <PauseButton pauseTimer={pauseTimer} />
          ) : (
            <PlayButton startTimer={startTimer} />
          )}
          <ResetButton resetTimer={resetTimer} />
        </Stack>
        <Button
          colorScheme="green"
          variant="solid"
          onClick={logoutUser}
          mt={10}
        >
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Timer;
