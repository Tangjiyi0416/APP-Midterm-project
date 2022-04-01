import React from "react";
import { Linking } from "react-native";
import Starbar from "../star/starabr";
import {
  Center,
  ScrollView,
  Box,
  AspectRatio,
  Text,
  Heading,
  Image,
  Button,
} from "native-base";
const DetailScreen = ({ route }) => {
  const {
    star,
    name,
    address,
    phone,
    tiime,
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
      {/* <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{ uri: photo }}
          alt="store"
          borderRadius={10}
          //   blurRadius={6}
          //   opacity={100}
        />
      </AspectRatio> */}
      <Box></Box>
    </Box>
  );
};
export default DetailScreen;
