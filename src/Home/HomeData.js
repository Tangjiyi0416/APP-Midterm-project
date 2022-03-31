import React from "react";
import {
  Box,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Image,
  Pressable,
} from "native-base";
import Starbar from "../star/starabr";
const HomeData = ({ Home, navigation }) => {
  return (
    <Box mx="auto">
      {/* <HStack>
        <Image />
        <Image />
      </HStack> */}
      <VStack>
        <AspectRatio w="350" h="250">
          <Image source={{ uri: Home.photo }} alt="store" />
        </AspectRatio>

        <Text fontWeight="bold" fontSize="18">
          {Home.name}
        </Text>
        <Text color={"#808080"}>{Home.address}</Text>
        {/* <starbar>{Home.star}</starbar> */}
      </VStack>
    </Box>
  );
};

export default HomeData;
