import { Button } from "@chakra-ui/react";
import { GrPowerReset } from "react-icons/gr";

const ResetButton = (props) => {
  return (
    <Button
      leftIcon={<GrPowerReset />}
      colorScheme="green"
      variant="outline"
      onClick={props.resetTimer}
    >
      Reset
    </Button>
  );
};

export default ResetButton;
