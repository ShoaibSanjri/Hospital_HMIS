import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { GiButterflyWarning, GiHospitalCross } from "react-icons/gi";
import { Text } from "@chakra-ui/react";
import bgImg from "../../assets/bg-img.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <HStack width="100%" height={"100vh"} spacing={0}>
        <Box
          width="25%"
          height={"100%"}
          padding={"8"}
          backgroundColor={"teal.300"}
        >
          <VStack
            spacing={5}
            backdropBlur={"5px"}
            width={"100%"}
            height={"100%"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              fontSize={"6xl"}
              color={"red.500"}
              marginBottom={"20"}
            >
              <GiHospitalCross />
              <Text fontSize="6xl" color={"blue.400"} lineHeight={0.5}>
                HMIS
              </Text>
            </Box>
            <Input
              value={username}
              onChange={handleChangeUsername}
              placeholder="Username"
              size="md"
              width="85%"
            />
            <Input
              value={password}
              type="password"
              onChange={handleChangePassword}
              placeholder="Password"
              size="md"
              width="85%"
            />
            <Button colorScheme="blue">Login</Button>
          </VStack>
        </Box>
        <Box
          // backgroundImage="url('../../assets/bg-img.jpg')"
          backgroundImage={bgImg}
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center"}
          width={"75%"}
          height={"100%"}
          position={"relative"}
        >
          <Box backdropBlur={"5px"} width={"100%"} height={"100%"}>
            <Box
              position={"absolute"}
              top={"10%"}
              left={"10%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              <Box
                display={"flex"}
                // flexDirection={"column"}
                gap={"1rem"}
                alignItems={"center"}
                fontSize={"8xl"}
                color={"red.500"}
              >
                <GiHospitalCross />
                <Text
                  fontSize="7xl"
                  color={"blue.400"}
                  lineHeight={0.75}
                  // textDecoration={"underline"}
                >
                  HMIS
                </Text>
              </Box>
              <Text
                color={"red.500"}
                fontWeight={"bolder"}
                textTransform={"capitalize"}
                fontSize={"8xl"}
                lineHeight={1}
                noOfLines={2}
              >
                Hospiatl management information System
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack>
    </div>
  );
}

export default Login;
