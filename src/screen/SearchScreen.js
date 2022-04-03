import React from "react";
import { Box, HStack, Input,AspectRatio } from "native-base";
import foodData from "../json/food.json";
import SearchList from "../Search/SearchList";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Image } from "react-native-svg";

const SearchScreen = ({ navigation }) => {
  return (
    
       <SearchList list={foodData.SearchList} navigation={navigation} /> 
     
  );
};

export default SearchScreen;
