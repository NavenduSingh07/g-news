import React from "react";
import { Stack, Card, CardHeader, Image, Box, Heading } from "@chakra-ui/react";
import { useTheme } from "../Context/ThemeContext";

const CardComponent = ({ imageSrc, header, source, date, url, author }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const openNewTab = () => {
    window.open(url, "_blank");
  };

  return (
    <Card borderWidth="" borderRadius="sm" bgColor={ isDarkMode ? '#222' : '#fff'} color={ isDarkMode ? '#fff' : '#333' } >
      <Stack direction="row" spacing={4}>
        <Box  width={{ base: "100%", md: "25%", lg: "25%" }}  padding={{ base: "11px", md: "31px", lg: "40px" }}>
          <Image
            width={{ base: "350px", md: "444px", lg: "350px" }}
            borderRadius="sm"
            src={imageSrc}
            alt="Card image"
          />
        </Box>
        <Box
        width={{ base: "100%", md: "75%", lg: "75%" }}
          flexGrow={1}
          paddingTop={{ base: "9px", md: "32px", lg: "50px" }}
          onClick={openNewTab}
        >
          <Heading
            color={"grey"}
            display={{ base: "none", md: "block", lg: "block" }}
            fontSize={"15px"}
          >{`by ${source} | ${Date(date).split(" ")[0]} ${
            Date(date).split(" ")[1]
          } ${Date(date).split(" ")[2]} | ${author || ""}`}</Heading>
          <Heading
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "black",
            }}
            style={{}}
            fontSize={{ base: "14px", md: "5px", lg: "30px" }}
          >
            {header}
          </Heading>
        </Box>
      </Stack>
    </Card>
  );
};

export default CardComponent;
