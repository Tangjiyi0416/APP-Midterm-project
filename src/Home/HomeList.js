import React from "react";
import HomeData from "./HomeData";
import {
  Box,
  FlatList,
  SectionList,
  Text,
  VStack,
  HStack,
  Pressable,
  AspectRatio,
  Image,
  ScrollView,
  Linking,
  Button,
} from "native-base";
import { TouchableOpacity } from "react-native";
const HomeList = ({ list, navigation }) => {
  const renderItem = ({ item }) => (
    <HomeData Home={item} navigation={navigation} />
  );
  return (
    <Box
    // _dark={{ borderColor: "#51483C", borderWidth: 0.6 }}
    // _light={{ bg: "#FFFAE1", borderRadius: 6 }}
    >
      <FlatList
        ListHeaderComponent={
          <>
            <Box alignSelf="center" mt={5}>
              <Text>國北人今天想來點什麼？</Text>
            </Box>
            <HStack alignSelf="center">
              {/* <Button onPress={() => Toast.show({description: "已送出"})} mt="2"  width={150} h={100} mt={5} mr={5} mb={10}>
          <Image source={}></Image>
          <Text color={"white"} fontSize="14" fontWeight="600">抽獎活動</Text>
        </Button>
        <Button onPress={() => Toast.show({description: "已送出"})} mt="2" colorScheme='violet' width={150} h={100} mt={5} mb={10}>
          <Text color={"white"} fontSize="14" fontWeight="600">國北生活圈</Text>
        </Button> */}

              <TouchableOpacity w={150} h={100}>
                <Image
                  source={{
                    uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/抽籤.png?raw=true",
                  }}
                  w={150}
                  h={100}
                  borderRadius={20}
                  mr={10}
                  mt={10}
                  mb={5}
                  alt="Home-icon"
                  borderColor={"#C4C4C4"}
                  borderWidth={0.5}
                />
              </TouchableOpacity>
              <TouchableOpacity w={150} h={100}>
                <Image
                  source={{
                    uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/%E5%9C%8B%E5%8C%97%E7%94%9F%E6%B4%BB.png?raw=true",
                  }}
                  w={150}
                  h={100}
                  mt={10}
                  borderRadius={20}
                  alt="Home-icon"
                  borderColor={"#C4C4C4"}
                  borderWidth={0.5}
                />
              </TouchableOpacity>
            </HStack>
          </>
        }
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.photo}
      />
    </Box>
  );
};
export default HomeList;
