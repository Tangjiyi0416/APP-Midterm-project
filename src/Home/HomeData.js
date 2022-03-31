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
      <Text fontSize={14} >國北人今天想來點什麼呢？</Text>
        <AspectRatio w="350" h="250" >
          <Image source={{ uri: Home.photo }} alt="store"  />
        </AspectRatio>

        <Text fontSize={20} fontWeight={'bold'}>{Home.name}</Text>
        <Text color={'#808080'}>{Home.address}</Text>
        <Starbar star={Home.star}/>
      </VStack>
    </Box>
  );
};

export default HomeData;
