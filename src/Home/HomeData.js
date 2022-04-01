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
    
    <Box mx="auto" mb="15">
      {/* <HStack>
        <Image />
        <Image />
      </HStack> */}
      <VStack>
        <AspectRatio w="350" h="250" >
          <Image source={{ uri: Home.photo }} borderRadius="10" alt="store"  />
        </AspectRatio>
        <Text fontSize={20} fontWeight={'bold'}>{Home.name}</Text>
        <Text color={'#808080'}>{Home.address}</Text>
        <HStack>
        <Starbar star={Home.star}/>
        <Text>{Home.star}.0 <Text color={"gray"} >/ 5.0</Text></Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HomeData;
