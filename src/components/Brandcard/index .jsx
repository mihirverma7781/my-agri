import React from "react";
import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
const Brandcard = ({ image, alt, heading, content }) => {
  return (
    <Flex
      alignItems={"center"}
      minWidth={"300px"}
      // maxWidth={"320px"}
      gap={3}
      paddingX={4}
      paddingY={4}
      bg={"gray.100"}
      rounded={"md"}
      wrap={"wrap"}
      flex={1}
    >
      <Box height={"64px"} width={"64px"}>
        <Image
          height={"100%"}
          width={"100%"}
          objectFit={"cover"}
          rounded={"full"}
          src="https://bit.ly/dan-abramov"
          alt="test"
        />
      </Box>
      <Flex direction={"column"} gap={1}>
        <Heading size={"md"} fontWeight={500}>
          Staples
        </Heading>
        <Text fontSize={"sm"}>Delivery in 24 hours</Text>
      </Flex>
    </Flex>
  );
};

export default Brandcard;
