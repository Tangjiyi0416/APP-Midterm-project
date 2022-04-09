import React from "react";
import {
  Text,
  HStack,
  Pressable,
  Box,
  Center,
  useColorMode,
  Switch,
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ListItem = ({ title, navigation, destination, icon }) => {
  if (icon == "icon1") {
    return (
      <Pressable
        onPress={() => {
          destination ? navigation.navigate(destination) : null;
        }}
      >
        <HStack _dark={{}} _light={{}} py="5">
          <Box ml={5} mr={15} mt={0.5}>
            <FontAwesome5 name="user-circle" color="#FCAA87" size={30} />
          </Box>
          <Text fontSize={20}>{title}</Text>
        </HStack>
      </Pressable>
    );
  } else if (icon == "icon2") {
    return (
      <Pressable
        onPress={() => {
          destination ? navigation.navigate(destination) : null;
        }}
      >
        <HStack _dark={{}} _light={{}} py="5" mt={5}>
          <Box ml={5} mr={15} mt={1}>
            <FontAwesome5 name="user-edit" color="#FCAA87" size={25} />
          </Box>
          <Text fontSize={20}>{title}</Text>
        </HStack>
      </Pressable>
    );
  } else if (icon == "icon3") {
    return (
      <Pressable
        onPress={() => {
          destination ? navigation.navigate(destination) : null;
        }}
      >
        <HStack _dark={{}} _light={{}} py="5" mt={5}>
          <Box ml={5} mr={15} mt={0.5}>
            <MaterialIcons name="text-fields" color="#FCAA87" size={30} />
          </Box>
          <Text fontSize={20}>{title}</Text>
        </HStack>
      </Pressable>
    );
  } else if (icon == "icon4") {
    return (
      <Pressable
        onPress={() => {
          destination ? navigation.navigate(destination) : null;
        }}
      >
        <HStack _dark={{}} _light={{}} py="5" mt={5}>
          <Box ml={5} mr={15} mt={0.5}>
            <MaterialCommunityIcons
              name="translate"
              color="#FCAA87"
              size={30}
            />
          </Box>
          <Text fontSize={20}>{title}</Text>
        </HStack>
      </Pressable>
    );
  } else if (icon == "icon5") {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      // <Pressable
      //   onPress={() => {
      //     destination ? navigation.navigate(destination) : null;
      //   }}
      // >
      <HStack _dark={{}} _light={{}}>
        <Box ml={5} mr={15}>
          <MaterialCommunityIcons
            name="alarm-light"
            color="#FCAA87"
            size={30}
          />
        </Box>
        <Text fontSize={20}>{title}</Text>
        <Box
          flex={1}
          // _dark={{ bg: "blueGray.900" }}
          // _light={{ bg: "blueGray.50" }}
        >
          <Center
            shadow={2}
            // width="80%"
            // height="20%"
            // mt="10"
            px="2"
            py="4"
            // _dark={{
            //   bg: "blueGray.800",
            //   borderColor: "blueGray.500",
            //   borderWidth: 0.6,
            // }}
            // _light={{ bg: "white" }}
            borderRadius="md"
            alignSelf="center"
          >
            <HStack space={8} alignItems="center">
              <Text fontSize="lg">
                {colorMode == "light" ? "淺色模式" : "深色模式"}
              </Text>
              <Switch
                name="light Mode"
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                accessibilityLabel="display-mode"
                accessibilityHint="light or dark mode"
                offTrackColor="indigo.300"
                onTrackColor="indigo.200"
                onThumbColor="indigo.500"
                offThumbColor="indigo.50"
              />
            </HStack>
          </Center>
        </Box>
      </HStack>
      // </Pressable>
    );
  } else {
    return null;
  }
};

export default ListItem;
