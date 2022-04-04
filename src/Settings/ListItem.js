import React from 'react';
import { Text, HStack, Pressable, Box } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItem = ({ title, navigation, destination,icon }) => {
   if(icon=="icon1"){
    return (
        <Pressable
          onPress={() => {
            destination ? navigation.navigate(destination) : null;
          }}
        >
          <HStack
           
            _dark={{
                bg: "blueGray.900",
              }}
            _light={{ bg: "white" }}
                py="5"
                mt={5}
           >
           <Box ml={5} mr={15}>
               <FontAwesome5 name="user-circle" color="#EC9976" size={25} />
           </Box>
            <Text fontSize={20}>{title}</Text>
          </HStack>
        </Pressable>
      );
   }
   else if(icon=="icon2"){
    return (
        <Pressable
          onPress={() => {
            destination ? navigation.navigate(destination) : null;
          }}
        >
          <HStack
           _dark={{
            bg: "blueGray.900",
          }}
        _light={{ bg: "white" }}
            py="5"
            mt={5}
           >
           <Box ml={5} mr={15}>
               <FontAwesome5 name="user-edit" color="#EC9976" size={20} />
           </Box>
            <Text fontSize={20}>{title}</Text>
          </HStack>
        </Pressable>
      );
   }
   else if(icon=="icon3"){
    return (
        <Pressable
          onPress={() => {
            destination ? navigation.navigate(destination) : null;
          }}
        >
          <HStack
            _dark={{
                bg: "blueGray.900",
              }}
            _light={{ bg: "white" }}
                py="5"
                mt={5}
           >
           <Box ml={5} mr={15}>
               <MaterialIcons name="text-fields" color="#EC9976" size={25} />
           </Box>
            <Text fontSize={20}>{title}</Text>
          </HStack>
        </Pressable>
      );
   }
   else if(icon=="icon4"){
    return (
        <Pressable
          onPress={() => {
            destination ? navigation.navigate(destination) : null;
          }}
        >
          <HStack
            _dark={{
                bg: "blueGray.900",
              }}
            _light={{ bg: "white" }}
                py="5"
                mt={5}
           >
           <Box ml={5} mr={15}>
               <MaterialCommunityIcons name="translate" color="#EC9976" size={25} />
           </Box>
            <Text fontSize={20}>{title}</Text>
          </HStack>
        </Pressable>
      );
   }
   else if(icon=="icon5"){
    return (
        <Pressable
          onPress={() => {
            destination ? navigation.navigate(destination) : null;
          }}
        >
          <HStack
           _dark={{
            bg: "blueGray.900",
          }}
        _light={{ bg: "white" }}
            py="5"
            mt={5}
           >
           <Box ml={5} mr={15}>
               <MaterialCommunityIcons name="alarm-light" color="#EC9976" size={25} />
           </Box>
            <Text fontSize={20}>{title}</Text>
          </HStack>
        </Pressable>
      );
   }else {
    return null;
   }

  
}

export default ListItem;