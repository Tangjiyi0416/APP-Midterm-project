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
    <Box mx="auto" mb="8" bg="white">
      {/* <HStack>
        <Image />
        <Image />
      </HStack> */}

      <VStack>
        <Pressable onPress={() => navigation.navigate("DetailScreen", Home)}>
          <AspectRatio w="350" h="250">
            <Image source={{ uri: Home.photo }} alt="store" borderRadius={10} />
          </AspectRatio>
        </Pressable>

        <Text fontWeight="bold" fontSize="18">
          {Home.name}
        </Text>
        <Text color={"#808080"}>{Home.address}</Text>
        <HStack>
          <Starbar star={Home.star} />
          <Text>
            {Home.star != null ? (
              <Text>
                {Home.star}.0 <Text color={"#808080"}>/ 5.0</Text>
              </Text>
            ) : null}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HomeData;
