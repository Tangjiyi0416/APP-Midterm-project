import React, { useState } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  StatusBar,
  extendTheme,
  useColorMode,
  Image,
  AspectRatio,
} from "native-base";
import { TouchableOpacity } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

// import {
//   AnimatedTabBarNavigator,
//   DotSize, // optional
//   TabElementDisplayOptions, // optional
//   TabButtonLayout, // optional
//   IAppearanceOptions, // optional
// } from "react-native-animated-nav-tab-bar";

import HomeScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";
import SearchScreen from "../screen/SearchScreen";
import SectionScreen from "../screen/SectionScreen";
import SettingsScreen from "../screen/SettingsScreen";
import DisplaySettingScreen from "../screen/DisplaySettingScreen";
import LoginScreen from "../screen/LoginScreen";
import SignUpScreen from "../screen/SignUpScreen";

import { lightTheme, darkTheme } from "../Theme";

import foodData from "../json/food.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//const Tab = AnimatedTabBarNavigator();

const Navigation = () => {
  const { colorMode } = useColorMode();
  const MyTheme = colorMode == "light" ? lightTheme : darkTheme;
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        barStyle={colorMode == "light" ? "dark-content" : "light-content"}
        backgroundColor={colorMode == "light" ? "white" : "black"}
      />
      <MyTabs />
    </NavigationContainer>
  );
};

const MyTabs = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colors.light400,
        tabBarActiveTintColor: "#9a53ff",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "首頁",

          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          headerShown: false,
          title: "搜尋",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="feature-search-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "最愛",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cards-heart"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "設定",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const SettingsStack = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "設定",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "深淺主題",
          headerShadowVisible: false,
          headerTintColor: colorMode == "light" ? "black" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "登錄",
          headerShadowVisible: false,
          headerTintColor: colorMode == "light" ? "black" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: "註冊",
          headerShadowVisible: false,
          headerTintColor: colorMode == "light" ? "black" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const { colorMode } = useColorMode();
  const [Like, setLike] = useState(false);
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
          headerShadowVisible: false,

          // headerShown: false,
          title: "國北人今天想來點什麼？",

          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 14,
          },
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.name,
          // headerShown: false,
          headerTintColor: colorMode == "light" ? "black" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => setLike(!Like)}>
              {Like ? (
                <MaterialCommunityIcons
                  name="cards-heart"
                  color={"red"}
                  size={30}
                />
              ) : (
                <MaterialCommunityIcons
                  name="heart-outline"
                  color={"gray"}
                  size={30}
                />
              )}
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const SearchStack = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          // title: "國北人今天想來點什麼？",

          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 14,
          },
        }}
      />
      <Stack.Screen
        name="SectionScreen"
        component={SectionScreen}
        options={({ route }) => ({
          title: route.params.name,
          // headerShown: false,
          headerShadowVisible: false,
          headerTintColor: colorMode == "light" ? "black" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: "white",
          },
        })}
      />
      <Stack.Screen
        name="Section"
        component={SectionScreen}
        options={({ route }) => ({
          title: route.params.name,
          // headerShown: false,
          headerShadowVisible: false,
          // headerTintColor: colorMode == "light" ? "black" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: "white",
          },
        })}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ route }) => ({
          // title: route.params.name,
          // headerShown: false,
          headerShadowVisible: false,
          // headerTintColor: colorMode == "light" ? "black" : "white",
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
            color: "white",
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
