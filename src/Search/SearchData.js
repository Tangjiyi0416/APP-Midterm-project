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
    <Box mt={5}  >
      <VStack ml={50} >
        <Pressable onPress={() => navigation.navigate("SectionScreen", Search)}>
          <AspectRatio  w="300" h="150" >
            <Image
              source={{ uri: Search.photo }}
              alt="store"
              borderRadius={10}
              w="300" h="150"
              
            />
          </AspectRatio>
        </Pressable>
      </VStack>
    </Box>
  );
};

export default SearchData;
