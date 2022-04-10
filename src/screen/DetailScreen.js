import React, { useState } from "react";
import { Linking, TouchableOpacity } from "react-native";
import Starbar from "../star/starabr";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
      <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "#FFFAE1" }}>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{ uri: photo }}
            alt="store"
            //   borderRadius={10}
            //   blurRadius={6}
            opacity={80}
          />
        </AspectRatio>

        <Box>
          <HStack mt={30} ml={10}>
            <Box justifyContent="flex-end">
              <Text fontSize={24}>{name}</Text>
            </Box>
          </HStack>
          <Box pb={1}>
            <HStack ml={10} mb={5}>
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
          <HStack ml={10} mb={2}>
            <MaterialCommunityIcons name="map-marker" color={"red"} size={25} />
            <Text ml={3} fontSize={18}>
              {address}
            </Text>
          </HStack>
          <HStack ml={10} mb={2}>
            <MaterialCommunityIcons name="phone" color={"gray"} size={25} />
            <Text ml={3} fontSize={20}>
              {phone}
            </Text>
          </HStack>
          <HStack ml={10} mb={2}>
            <MaterialCommunityIcons
              name="clock-time-eight"
              color={"gray"}
              size={25}
            />
            <Text ml={3} fontSize={20}>
              {time}
            </Text>
          </HStack>
          <HStack ml={10} mb={2}>
            <MaterialIcons name="restaurant-menu" color={"gray"} size={25} />
            <Pressable onPress={() => Linking.openURL(url)}>
              <Text ml={3} fontSize={20}>
                {menu}
              </Text>
            </Pressable>
          </HStack>
        </Box>

        <Box mt={50}>
          <HStack ml={10} mb={2}>
            <Box justifyContent="flex-end" pb={1.5}>
              <MaterialCommunityIcons name="star" color={"#FCAA87"} size={28} />
            </Box>

            <Text ml={1} fontSize={20}>
              {title}
            </Text>
          </HStack>
          <Box ml={10} mb={5}>
            <Text ml={3} fontSize={16} fontWeight={"bold"}>
              {food1}
            </Text>
            <HStack mr={130}>
              <Text ml={3} mr={3} fontSize={14}>
                {food1des}
              </Text>
              <Image source={{ uri: food1img }} w={90} h={90} alt="food" />
            </HStack>
          </Box>
          <Box ml={10} mb={5}>
            <Text ml={3} fontSize={16} fontWeight={"bold"}>
              {food2}
            </Text>
            <HStack mr={130}>
              <Text ml={3} mr={3} fontSize={14}>
                {food2des}
              </Text>
              <Image source={{ uri: food2img }} w={90} h={90} alt="food" />
            </HStack>
          </Box>
          <Box ml={10} mb={5}>
            <Text ml={3} fontSize={16} fontWeight={"bold"}>
              {food3}
            </Text>
            <HStack mr={130}>
              <Text ml={3} mr={3} fontSize={14}>
                {food3des}
              </Text>
              <Image source={{ uri: food3img }} w={90} h={90} alt="food" />
            </HStack>
          </Box>
        </Box>
        <Box>
          <HStack ml={10} mb={2}>
            <Box justifyContent="flex-end" pb={1.5}>
              <MaterialCommunityIcons
                name="comment-text"
                color={"#FCAA87"}
                size={25}
              />
            </Box>
            <Box>
              <Text ml={3} fontSize={20}>
                {comment}
              </Text>
            </Box>
          </HStack>
          <Box alignItems="center" w="100%">
            <TextArea
              h={200}
              placeholder="想要說些什麼？"
              w="80%"
              maxW="400"
              mb={10}
              borderColor={"#949494"}
              borderRadius={10}
              bg="white"
            />
          </Box>
          <Pressable
            onPress={() => Toast.show({ description: "已送出" }) }
            width="30%"
            height={30}
            alignSelf="center"
            mb={10}
            bg="#A1917A"
            borderRadius={10}
          >
            <Center>
              <Text color={"white"} fontSize="14" fontWeight="600" pt={1}>
                確認送出
              </Text>
            </Center>
          </Pressable>
        </Box>
      </Box>
    </ScrollView>
  );
};
export default DetailScreen;
