import React from "react";
import { Box,VStack,Pressable,Text,AspectRatio,Image,HStack } from "native-base";
import foodData from "../json/food.json";
import HomeList from "../Home/HomeList";

const HomeScreen = ({ navigation }) => {
  return (
    <Box bg="#fff">
      <HStack mb={10} alignSelf="center" >
      <Pressable onPress={() => Linking.openURL(url)}  w={150} h={100} >
        <AspectRatio  mt={5}  w="150" h="100"  >
            <Image source={{ uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/Group%2077.png?raw=true" }} alt="store"  
            borderRadius={20} 
            borderWidth={2} 
            borderColor={"#EEEEEE"} ></Image>
          </AspectRatio>
      </Pressable>
      <Pressable onPress={() => Linking.openURL(url)}  w={150} h={100} >
        <AspectRatio  mt={5} w="150" h="100"  >
            <Image source={{ uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/Group%2078.png?raw=true" }} alt="store"  
            borderRadius={20} 
            borderWidth={2} 
            borderColor={"#EEEEEE"} ></Image>
          </AspectRatio>
      </Pressable>
      </HStack>
      <HomeList list={foodData.restaurantList} navigation={navigation} />
    </Box>
  );
};

export default HomeScreen;
