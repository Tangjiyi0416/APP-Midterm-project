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
    <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "#FFFAE1" }}>
      <HomeList list={foodData.restaurantList} navigation={navigation} />
    </Box>
  );
};

export default HomeScreen;
