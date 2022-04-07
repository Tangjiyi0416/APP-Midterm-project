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
    <Box mt={5}>
      <VStack alignSelf="center">
        <Pressable onPress={() => navigation.navigate("SectionScreen", Search)}>
          <AspectRatio w="350" h="250" mb={5}>
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
