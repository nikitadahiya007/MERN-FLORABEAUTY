import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
const Login = () => {
  const history = useHistory();
  const toast = useToast();
  const [showP, setshowP] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const HandleSubmit = async () => {
    setLoading(true);
    if (!username || !password) {
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
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password },
        config
      );
      login(dispatch, { username, password });
      toast({
        title: "Login Successful",
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
        title: "Error occured",
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
  return (
    <VStack spacing={4}>
      <FormControl id="username">
        <FormLabel></FormLabel>
        <Input
          placeholder=" username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl id="Password">
        <FormLabel></FormLabel>
        <InputGroup>
          <Input
            type={showP ? "text" : "password"}
            placeholder=" Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <InputRightElement width="4.5rem" height="100%">
            <Button onClick={handleShowClickp}>
              {showP ? "HIDE" : "SHOW"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        isLoading={loading}
        onClick={HandleSubmit}
        width="100%"
        colorScheme="pink"
      >
        Login
      </Button>
      <></>
    </VStack>
  );
};

export default Login;
