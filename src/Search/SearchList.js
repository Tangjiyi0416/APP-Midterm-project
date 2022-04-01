import React from "react";
import SearchData from "./SearchData";
import { FlatList, SectionList, Text } from "native-base";
const SearchList = ({ list, navigation }) => {
  const renderItem = ({ item }) => (
    <SearchData Search={item} navigation={navigation} />
  );
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};
export default SearchList;
