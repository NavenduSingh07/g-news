import React from "react";
import { Button, HStack, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useTheme } from "../Context/ThemeContext";

const Pagination = ({ onPrev, onNext }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <HStack spacing={4} align="center" justify="center">
      <Button  _hover={{border:"none", bgColor:"none"}} bgColor={ isDarkMode ? '#222' : '#fff'} color={ isDarkMode ? '#fff' : '#333' } leftIcon={<Icon as={ChevronLeftIcon} />}>Previous</Button>
      <Button   _hover={{border:"none", bgColor:"none"}}  bgColor={ isDarkMode ? '#222' : '#fff'} color={ isDarkMode ? '#fff' : '#333' } rightIcon={<Icon as={ChevronRightIcon} />}>Next</Button>
    </HStack>
  );
};

export default Pagination;
