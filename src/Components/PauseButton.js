import { Button } from "@chakra-ui/react";
import { GrPause } from "react-icons/gr";

const PauseButton = ({ pauseTimer }) => {
  return (
    <Button
      leftIcon={<GrPause />}
      colorScheme="green"
      variant="outline"
      onClick={pauseTimer}
    >
      Pause
    </Button>
  );
};

export default PauseButton;
