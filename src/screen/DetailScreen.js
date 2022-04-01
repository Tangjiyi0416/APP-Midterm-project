import React from "react";
import { Linking } from "react-native";
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
} from "native-base";
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
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{ uri: photo }}
            alt="store"
            //   borderRadius={10}
            //   blurRadius={6}
            //   opacity={100}
          />
        </AspectRatio>

        <Box>
          <HStack mt={30} ml={10} mb={5}>
            <Box justifyContent="flex-end">
              <Text fontSize={28}>{name}</Text>
            </Box>

            <Box justifyContent="flex-end" pb={1}>
              <HStack>
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
          </HStack>
          <HStack ml={10} mb={2}>
            <MaterialCommunityIcons name="map-marker" color={"red"} size={25} />
            <Text ml={3} fontSize={20}>
              {address}
            </Text>
          </HStack>
          <HStack ml={10} mb={2}>
            <MaterialCommunityIcons name="phone" color={"black"} size={25} />
            <Text ml={3} fontSize={20}>
              {phone}
            </Text>
          </HStack>
          <HStack ml={10} mb={2}>
            <MaterialCommunityIcons
              name="clock-time-eight"
              color={"black"}
              size={25}
            />
            <Text ml={3} fontSize={20}>
              {time}
            </Text>
          </HStack>
          <HStack ml={10} mb={2}>
            <MaterialIcons name="restaurant-menu" color={"black"} size={25} />
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
              <MaterialCommunityIcons name="star" color={"#FDAD35"} size={28} />
            </Box>

            <Text ml={3} fontSize={2}>
              {title}
            </Text>
          </HStack>
          <Box ml={10} mb={5}>
            <Text ml={3} fontSize={20} fontWeight={"bold"} color={"black"}>
              {food1}
            </Text>
            <HStack mr={130}>
              <Text ml={3} mr={3} fontSize={16}>
                {food1des}
              </Text>
              <Image source={{ uri: food1img }} w={90} h={90} alt="food" />
            </HStack>
          </Box>
          <Box ml={10} mb={5}>
            <Text ml={3} fontSize={20} fontWeight={"bold"}>
              {food2}
            </Text>
            <HStack mr={130}>
              <Text ml={3} mr={3} fontSize={16}>
                {food2des}
              </Text>
              <Image source={{ uri: food2img }} w={90} h={90} alt="food" />
            </HStack>
          </Box>
          <Box ml={10} mb={5}>
            <Text ml={3} fontSize={20} fontWeight={"bold"}>
              {food3}
            </Text>
            <HStack mr={130}>
              <Text ml={3} mr={3} fontSize={16}>
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
                color={"#EC9976"}
                size={25}
              />
            </Box>
            <Box>
              <Text ml={3} fontSize={26}>
                {comment}
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </ScrollView>
  );
};
export default DetailScreen;
