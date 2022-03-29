import React from "react";
import HomeData from "./HomeData";
import { FlatList } from "native-base";
const HomeList = ({ list, navigation }) => {
  const renderItem = ({ item }) => (
    <HomeData Home={item} navigation={navigation} />
  );
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};
export default HomeList;
