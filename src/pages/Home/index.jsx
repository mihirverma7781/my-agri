import React, { useRef } from "react";
import Navstrip from "../../components/shared/NavStrip";
import Navbar from "../../components/shared/Navbar";

import { Heading, Text, Button, Flex, IconButton } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import "./home.css";
import Brandcard from "../../components/Brandcard/index ";
import Itemcard from "../../components/ItemCard";

const Home = () => {
  const scrollRef = useRef(null);
  const scrollCards = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };
  return (
    <div>
      <div className="header">
        <Navstrip />
        <Navbar />
      </div>
      <div className="home-parent">
        <div className="home-hero-content ">
          <div className="layout-container">
            <Heading fontSize={{ base: "42px", md: "64px" }} color={"green"}>
              Shopping And <br /> Department Store.
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              marginTop={"1rem"}
              marginBottom={"40px"}
            >
              Shopping is a bit if a relaxing hobby for me, which <br /> is
              sometimes troubling for bank balance.
            </Text>
            <Button
              size={"lg"}
              width={"150px"}
              colorScheme="green"
              className="btn-primary"
              rounded={"full"}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="layout-container home-shop-brand section-margin">
          <Heading size={"lg"} fontWeight={700}>
            Choose By Brand
          </Heading>
          <Flex wrap={"wrap"} gap={6} marginTop={10}>
            <Brandcard />
            <Brandcard />
            <Brandcard />
            <Brandcard />
            <Brandcard />
            <Brandcard />
            <Brandcard />
            <Brandcard />
          </Flex>
        </div>

        <div className="layout-container section-margin">
          <Heading size={"lg"} fontWeight={700}>
            Choose By Item
          </Heading>
          <Flex
            wrap={"wrap"}
            gap={6}
            rowGap={16}
            marginTop={10}
            justifyContent={"space-between"}
          >
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
          </Flex>
        </div>

        <div className="layout-container section-margin">
          <Flex justifyContent={"space-between"}>
            <Heading size={"lg"} fontWeight={700}>
              Choose By Arrivals
            </Heading>
            <Flex gap={2}>
              <IconButton
                colorScheme="gray"
                aria-label="wishlist"
                icon={<ChevronLeftIcon />}
                rounded={"full"}
                onClick={() => scrollCards(-300)}
              />
              <IconButton
                colorScheme="gray"
                aria-label="wishlist"
                icon={<ChevronRightIcon />}
                rounded={"full"}
                onClick={() => scrollCards(300)}
              />
            </Flex>
          </Flex>
          <div className="content-scroll" ref={scrollRef}>
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
