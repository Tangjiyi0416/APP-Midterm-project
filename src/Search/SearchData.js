import React from "react";
import {
  Box,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Image,
  Pressable,
  Input,
  Heading,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Starbar from "../star/starabr";
const SearchData = ({ Search, navigation }) => {
  return (
    <Box bg={"white"} mb={5}>
      <VStack alignSelf="center">
        <Pressable onPress={() => navigation.navigate("SectionScreen", Search)}>
          <AspectRatio mt={3} w="320" h="200">
            <Image
              source={{ uri: Search.photo }}
              alt="store"
              borderRadius={10}
            />
          </AspectRatio>
        </Pressable>
      </VStack>
    </Box>
  );
};

export default SearchData;
