import React from "react";
import {
  Box,
  VStack,
  Pressable,
  Text,
  AspectRatio,
  Image,
  HStack,
  ScrollView,
} from "native-base";
import foodData from "../json/food.json";
import HomeList from "../Home/HomeList";

const HomeScreen = ({ navigation }) => {
  return (
    <Box _dark={{ bg: "blueGray.900" }}>
      <HomeList list={foodData.restaurantList} navigation={navigation} />
    </Box>
  );
};

export default HomeScreen;
