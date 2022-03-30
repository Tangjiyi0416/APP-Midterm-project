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
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const MyTabs = () => {
  // const { colors } = useTheme();
  // const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: " #EC9976",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"#EC9976"} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "Settings",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "Settings",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "Settings",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

// const SettingsStack = () => {
//   // const { colorMode } = useColorMode();

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           title: "Settings",
//           headerTitleStyle: {
//             fontWeight: "400",
//             fontSize: 20,
//           },
//         }}
//       />
//       <Stack.Screen
//         name="DisplaySetting"
//         component={DisplaySettingScreen}
//         options={{
//           title: "Display",
//           headerTintColor: colorMode == "light" ? "black" : "white",
//           headerTitleStyle: {
//             fontWeight: "400",
//             fontSize: 20,
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const HomeStack = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      {/* <Stack.Screen
        name="Search"
        component={searchScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="Search"
        component={searchScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="Search"
        component={searchScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      /> */}
    </Stack.Navigator>
  );
};

export default Navigation;
