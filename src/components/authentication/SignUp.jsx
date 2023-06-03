import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [showCP, setshowCP] = useState(false);
  const [showP, setshowP] = useState(false);
  const [username, setusername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [dp, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const HandleSubmit = async () => {
    setLoading(true);
    if (!username || !email || !password || !confirmPassword) {
      toast({
        title: "Please Fill all the Fields!",
        status: "Warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        status: "Warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        { username, email, password},
        config
      );

      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userdetail", JSON.stringify(data));
      setLoading(false);
      history.push("/");
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  const handleShowClickp = () => {
    setshowP(!showP);
  };
  const handleShowClickCP = () => {
    setshowCP(!showCP);
  };
  return (
    <VStack spacing={4}>
      <FormControl id="username">
        <FormLabel></FormLabel>
        <Input
          placeholder=" username"
          onChange={(e) => setusername(e.target.value)}
        />
      </FormControl>
      <FormControl id="Email">
        <FormLabel></FormLabel>
        <Input
          placeholder=" Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="Password">
        <FormLabel></FormLabel>
        <InputGroup>
          <Input
            type={showP ? "text" : "password"}
            placeholder=" Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputRightElement width="4.5rem" height="100%">
            <Button onClick={handleShowClickp}>
              {showP ? "HIDE" : "SHOW"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="ConfirmPassword">
        <FormLabel></FormLabel>
        <InputGroup>
          <Input
            type={showCP ? "text" : "password"}
            placeholder=" ConfirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <InputRightElement width="4.5rem" height="100%">
            <Button onClick={handleShowClickCP}>
              {showCP ? "HIDE" : "SHOW"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        onClick={HandleSubmit}
        width="100%"
        colorScheme="pink"
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
