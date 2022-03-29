import React from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "native-base";
import { extendTheme, useColorMode } from "native-base";

import HomeScreen from "../screen/HomeScreen";

import { lightTheme, darkTheme } from "../Theme";

import foodData from "../json/food.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  // const { colorMode } = useColorMode();
  // const MyTheme = colorMode == 'light' ? lightTheme : darkTheme;
  // return (
  //   <NavigationContainer theme={MyTheme} >
  //     <StatusBar
  //       barStyle={
  //         colorMode == "light" ? "dark-content" : "light-content"
  //       }
  //       backgroundColor={
  //         colorMode == "light" ? "white" : "black"
  //       }
  //     />
  //     <MyTabs />
  //   </NavigationContainer>
  // );
};

// const HomeStack = () => {
//   const { colorMode } = useColorMode();

//   return (
//     <Stack.Navigator
//     // screenOptions={{
//     //   headerShown: false
//     // }}
//     >
//       <Stack.Screen
//         name="Home"
//         component={AlbumScreen}
//         options={{
//           title: albumData.albumTitle,
//           headerTitleStyle: {
//             fontWeight: "400",
//             fontSize: 20,
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

export default Navigation;
