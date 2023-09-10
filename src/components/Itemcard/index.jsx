import React from "react";
import { Flex, Box, Image, IconButton, Button, Text } from "@chakra-ui/react";
import { HeartIcon } from "../../utils/Icons";
import { Rating } from "@smastrom/react-rating";

const Itemcard = ({scroll}) => {
  return (
    <Flex direction={"column"} flex={1} minWidth={"300px"} shadow={"sm"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"300px"}
        bg={"gray.100"}
        roundedTopLeft={"xl"}
        roundedTopRight={"xl"}
        position={"relative"}
      >
        <Image
          maxHeight={"200px"}
          maxWidth={"200px"}
          margin={"auto"}
          src="https://cdn.discordapp.com/attachments/1088144051150274578/1150359318198226975/Rectangle_1-removebg-preview.png"
        />
        <IconButton
          position={"absolute"}
          top={3}
          right={3}
          bg={"white"}
          aria-label="wishlist"
          icon={<HeartIcon />}
          rounded={"full"}
        />
      </Flex>
      <Flex
        marginTop={3}
        direction={"column"}
        gap={2}
        paddingX={4}
        paddingY={2}
        paddingBottom={6}
        roundedBottomRight={"xl"}
        roundedBottomLeft={"xl"}
        shadow={"lg"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={"18px"} fontWeight={600}>
            Amul Gold Doodh 1Lt
          </Text>
          <Text fontSize={"18px"} fontWeight={600}>
            1.5$
          </Text>
        </Flex>
        <Text fontSize={"14px"}>Organic Cotton, fairtrade certified</Text>
        <Flex>
          <Rating
            value={4}
            readOnly={true}
            isDisabled={true}
            style={{
              maxWidth: "100px",
              marginRight: ".5rem",
            }}
          />
          4.2
        </Flex>
        <Flex
          justifyContent={"space-between"}
          gap={3}
          marginTop={4}
          wrap={"wrap"}
        >
          <Button
            variant="outline"
            colorScheme="green"
            flex={1}
            rounded={"full"}
          >
            Add to Cart
          </Button>
          <Button colorScheme="green" flex={1} rounded={"full"}>
            Buy Now
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Itemcard;
