import { Button } from "@chakra-ui/react";
import { GrPlay } from "react-icons/gr";

const PlayButton = ({ startTimer }) => {
  return (
    <Button
      leftIcon={<GrPlay />}
      colorScheme="green"
      variant="outline"
      onClick={startTimer}
    >
      Play
    </Button>
  );
};

export default PlayButton;
