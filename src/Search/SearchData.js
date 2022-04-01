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
    <Box>
      <VStack w="80%" alignSelf="center">
        <Input
          placeholder="Search"
          //   variant="filled"
          //   bg="#EC9976"
          //   width="80%"
          h={50}
          borderRadius="10"
          py="1"
          px="2"
          borderWidth="0"
          InputLeftElement={
            <MaterialCommunityIcons name="magnify" color={"gray"} size={30} />
          }
        />
      </VStack>
    </Box>
  );
};

export default SearchData;
