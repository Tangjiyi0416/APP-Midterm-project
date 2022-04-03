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
} from "native-base";
const HomeList = ({ list, navigation }) => {
  const renderItem = ({ item }) => (
    <HomeData Home={item} navigation={navigation} />
  );
  return (
    <Box>
      <FlatList
        // ListHeaderComponent={
        //   <>
        //     <HStack mb={10} alignSelf="center">
        //       <Pressable onPress={() => Linking.openURL()} w={150} h={100}>
        //         <AspectRatio mt={5} w="150" h="100">
        //           <Image
        //             source={{
        //               uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/Group%2077.png?raw=true",
        //             }}
        //             alt="store"
        //             borderRadius={20}
        //             borderWidth={2}
        //             borderColor={"#EEEEEE"}
        //           ></Image>
        //         </AspectRatio>
        //       </Pressable>
        //       <Pressable onPress={() => Linking.openURL()} w={150} h={100}>
        //         <AspectRatio mt={5} w="150" h="100">
        //           <Image
        //             source={{
        //               uri: "https://github.com/Benson0409/APP-Midterm-project/blob/master/img/Group%2078.png?raw=true",
        //             }}
        //             alt="store"
        //             borderRadius={20}
        //             borderWidth={2}
        //             borderColor={"#EEEEEE"}
        //           ></Image>
        //         </AspectRatio>
        //       </Pressable>
        //     </HStack>
        //   </>
        // }
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.photo}
      />
    </Box>
  );
};
export default HomeList;
