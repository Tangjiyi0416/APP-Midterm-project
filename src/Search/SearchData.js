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
    <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "#FFFAE1" }}>
      <HStack alignSelf="center" mb={3}>
        <Pressable onPress={() => navigation.navigate("SectionScreen", Search)}>
          {/* <AspectRatio w="320" h="200" mt={5} alignSelf="center"> */}

          <Image
            _dark={{ source: { uri: Search.photo2 } }}
            _light={{ source: { uri: Search.photo } }}
            // source={a ? { uri: Search.photo } : { uri: Search.photo2 }}
            alt="store"
            borderRadius={10}
            w={300}
            h={150}
            mt={5}
          />
          {/* </AspectRatio> */}
        </Pressable>
      </HStack>
    </Box>
  );
};

export default SearchData;
