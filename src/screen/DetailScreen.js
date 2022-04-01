import React from "react";
import { Linking } from "react-native";
import Starbar from "../star/starabr";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
} from "native-base";
const DetailScreen = ({ route }) => {
  const {
    star,
    name,
    address,
    phone,
    time,
    photo,
    sar,
    title,
    food1,
    food1Money,
    food2,
    food2Money,
    food3,
    food3Money,
  } = route.params;
  return (
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
          <MaterialCommunityIcons name="map-marker" color={"black"} size={25} />
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
      </Box>
    </Box>
  );
};
export default DetailScreen;
