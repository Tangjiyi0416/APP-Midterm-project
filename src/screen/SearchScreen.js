import React from "react";
import { Box } from "native-base";
import foodData from "../json/food.json";
import SearchList from "../Search/SearchList";

const SearchScreen = ({ navigation }) => {
  return (
    <Box>
      <SearchList list={foodData.SearchList} navigation={navigation} />
    </Box>
  );
};

export default SearchScreen;
