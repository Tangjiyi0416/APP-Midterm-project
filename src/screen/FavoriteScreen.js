import React from "react";
import {
  Box,
  HStack,
  Input,
  AspectRatio,
  Text,
  Image,
  Center,
  VStack,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const FavoriteScreen = ({ navigation }) => {
  return (
    <Box _dark={{ bg: "#3F382E" }} _light={{ bg: "#FFFAE1" }} h={"100%"}>
      <Box mt={5} alignSelf={"center"}>
        <Text fontSize={24} fontWeight="bold">
          您最愛的商家
        </Text>
      </Box>
      <Image
        source={{
          uri: "https://raw.githubusercontent.com/Benson0409/APP-Midterm-project/master/img/%E7%84%A1%E8%83%8C%E6%99%AF%E7%86%8A.png",
        }}
        width={210}
        height={220}
        opacity={60}
        alignSelf={"center"}
        mt={"50%"}
        alt="沒有收藏"
      />
      <Text alignSelf={"center"} fontSize={20} color={"#989898"}>
        尚未收藏
      </Text>
    </Box>
  );
};

export default FavoriteScreen;
