import React from "react";
import { Box, HStack, Input, AspectRatio } from "native-base";
import foodData from "../json/food.json";
import SearchList from "../Search/SearchList";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Image } from "react-native-svg";

const SearchScreen = ({ navigation }) => {
  return (
    <Box>
      <SearchList list={foodData.findList} navigation={navigation} />
    </Box>
  );
};

export default SearchScreen;
