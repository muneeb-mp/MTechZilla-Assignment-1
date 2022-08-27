import React from "react";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { auth } from "./Firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const SignInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(
          "Name - " + res.user.displayName + ", Email - " + res.user.email
        );
        {
          navigate("/timer");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      h="100vh"
    >
      <Heading mb="3rem">Sign in to Access Pomodoro Timer</Heading>
      <HStack>
        <Button
          colorScheme="messenger"
          leftIcon={<FaGoogle />}
          onClick={SignInUser}
        >
          Sign in with Google
        </Button>
      </HStack>
    </Box>
  );
};

export default SignIn;
