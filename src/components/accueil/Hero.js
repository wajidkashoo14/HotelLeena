import {
  Flex,
  Spacer,
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

// React-slick for adding a carousel
import Slider from "react-slick";

// React-reveal for text zoom animation
import Zoom from "react-reveal/Zoom";

export default function Hero() {
  const [slider, setSlider] = useState(null);

  // Slider / Carousel settings
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Carousel card entries
  const cards = [
    {
      title: "Hotel Leena",
      text: "Where comfort meets elegance.",
      image: "./defaultBcg.jpg",
    },
    {
      title: "Hotel Leena",
      text: "Where comfort meets elegance.",
      image: "./room-9.jpeg",
    },
    {
      title: "Hotel Leena",
      text: "Where comfort meets elegance.",
      image: "./room-3.jpeg",
    },
  ];

  return (
    <Box
      position="relative"
      height={[420, 450, 500]}
      width="full"
      maxW="1200px"
      overflow="hidden"
      mt={[-65, -65, -65]}
      mb={[16, 2, 0]}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="./css/slick.min.css"
      />
      <link rel="stylesheet" type="text/css" href="./css/slick.theme.min.css" />
      <Flex>
        <IconButton
          aria-label="left-arrow"
          position="relative"
          color="white"
          bg="none"
          top={[345, 225, 250]}
          px={[4, 6, 6, 6, 6, 6]}
          py={[2, 4, 4, 4, 4, 4]}
          mx={2}
          zIndex={2}
          opacity={0.7}
          _hover={{
            textColor: "primary",
            fontWeight: "extrabold",
          }}
          _active={{
            transform: "scale(0.98)",
          }}
          _focus={{}}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrow size="40px" />
        </IconButton>
        <Spacer />
        <IconButton
          aria-label="right-arrow"
          position="relative"
          color="white"
          bg="none"
          top={[345, 225, 250]}
          px={[4, 6, 6, 6, 6, 6]}
          py={[2, 4, 4, 4, 4, 4]}
          mx={2}
          zIndex={2}
          opacity={0.7}
          _hover={{
            textColor: "primary",
            fontWeight: "extrabold",
          }}
          _active={{
            transform: "scale(0.98)",
          }}
          _focus={{}}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrow size="40px" />
        </IconButton>
      </Flex>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={[420, 400, 500]}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Stack
              spacing={6}
              w="full"
              maxW="full"
              position="relative"
              top={[185, 200, 225]}
              transform="translate(0, -50%)"
              background="rgba(0, 0, 0, 0.35)"
              padding="12rem 1rem"
              text-align="center"
              text-transform="capitalize"
              letter-spacing="1px"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            >
              <Zoom cascade>
                <Stack alignItems="center">
                  <Heading
                    as="i"
                    color="gray.100"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    _hover={{
                      color: "white",
                    }}
                    _active={{
                      color: "white",
                    }}
                  >
                    {card.title}
                  </Heading>
                  <Text
                    as="i"
                    color="gray.100"
                    fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  >
                    {card.text}
                  </Text>
                </Stack>
              </Zoom>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
