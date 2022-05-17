import React, { useState } from "react";
import { Linking, TouchableOpacity,ShadowOffset } from "react-native";
import Starbar from "../star/starabr";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  Center,
  ScrollView,
  Box,
  AspectRatio,
  Text,
  Heading,
  Image,
  Button,
  HStack,
  Pressable,
  TextArea,
  Toast,
  Divider 
} from "native-base";
import { opacity } from "react-native-reanimated/src/reanimated2/Colors";
const DetailScreen = ({ route }) => {
  const {
    star,
    name,
    address,
    phone,
    time,
    photo,
    menu,
    title,
    food1,
    food1des,
    food1img,
    food2,
    food2des,
    food2img,
    food3,
    food3des,
    food3img,
    comment,
    url,
  } = route.params;

  return (
    <ScrollView>
      <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "white" }}>
          <Image
            source={{ uri: photo }}
            alt="store"
            w="100%" h="300"
          />
         <Center position= "absolute" alignSelf={"center"} mt={250}>
            <Box bg={"#FFFAE1"} w={300} h={100} borderRadius={20}  justifyContent={"center"} 
            shadowColor={"#000"}
            shadowOpacity={0.25}
            shadowRadius={3.84} 
            shadowOffset={
              {width: 6},
              {height: 6}
            }
            >
            <HStack mt={30} justifyContent="center">
            <Box >
              <Text fontSize={24}>{name}</Text>
            </Box>
          </HStack>
          <Box pb={1} alignSelf={"center"} >
            <HStack  mb={5}>
              <Starbar star={star} />
              <Text>
                {star != null ? (
                  <Text>
                    {star}.0 <Text color={"#808080"}>/ 5.0</Text>
                  </Text>
                ) : null}
              </Text>
            </HStack>
          </Box>
            </Box>
       </Center>
        <Box>
         
          <HStack ml={8} mb={3}  mt={20} >
            <MaterialCommunityIcons name="map-marker" color={"red"} size={25} />
            <Text ml={2} fontSize={20}>
              {address}
            </Text>
          </HStack>
          <Divider h={0.5} w="83%" alignSelf="flex-end" bg={"#A1917A"}></Divider>
          <HStack ml={8} mb={3}  mt={5}>
            <Entypo name="old-phone" color={"#1CDA3A"} size={25} />
            <Text ml={3} fontSize={20}>
              {phone}
            </Text>
          </HStack>
          <Divider h={0.5} w="83%" alignSelf="flex-end" bg={"#A1917A"}></Divider>
          <HStack ml={8} mb={3}  mt={5}>
            <AntDesign
              name="rest"
              color={"#DAA51C"}
              size={25}
            />
            <Text ml={3} fontSize={20}>
              {time}
            </Text>
          </HStack>
          <Divider h={0.5} w="83%" alignSelf="flex-end" bg={"#A1917A"}></Divider>
          <HStack ml={8} mb={3}  mt={5}>
            <MaterialIcons name="restaurant-menu" color={"#A447C5"} size={25} />
            <Pressable onPress={() => Linking.openURL(url)}>
              <Text ml={3} fontSize={20}>
                {menu}
              </Text>
            </Pressable>
          </HStack>
          <Divider h={0.5} w="83%" alignSelf="flex-end" bg={"#A1917A"}></Divider>
        </Box>
      </Box>
    </ScrollView>
  );
};
export default DetailScreen;
