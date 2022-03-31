import React from "react";
import HomeData from "./HomeData";
import { FlatList, SectionList, Text } from "native-base";
const HomeList = ({ list, navigation }) => {
  const renderItem = ({ item }) => (
    <HomeData Home={item} navigation={navigation} />
  );
  console.warn(list);
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.photo}
    />
  );
};
export default HomeList;
