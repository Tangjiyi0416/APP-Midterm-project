import { useState } from "react";
import { Platform } from "react-native";
import {
  ScrollView,
  FormControl,
  useColorMode,
  VStack,
  Text,
  Input,
  WarningOutlineIcon,
  KeyboardAvoidingView,
  Center,
  Box,
  Heading,
  Link,
  Button,
  HStack,
} from "native-base";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const LoginScreen = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Center
      w="100%"
      _dark={{ bg: "#3F382E" }}
      _light={{ bg: "#FFFAE1" }}
      h="100%"
      >
      <Box  w="80%" justifyContent={"center"} >
        <Text fontSize={20} fontWeight="bold" >登入您的帳號</Text>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        ></Heading>

        <VStack space={3} mt="5">
          <FormControl.Label>
            <Text fontSize="18" fontWeight="600">
              電子郵件
            </Text>
          </FormControl.Label>
          <FormControl bg={"#EDEDEF"} >
            <Input />
          </FormControl>
          <FormControl.Label>
            <Text fontSize="18" fontWeight="600">
              密碼
            </Text>
          </FormControl.Label>
          <FormControl bg={"#EDEDEF"} >
            <Input type="password" />
          </FormControl>
          <Link
            _text={{
              fontSize: "14",
              fontWeight: "500",
              color: "#FCAA87",
            }}
            alignSelf="flex-end"
            mt="1"
          >
            忘記密碼
          </Link>
          <Button
            mt="2"
            width="40%"
            alignSelf="center"
            _dark={{ bg: "#FFFAE1" } }
            _light={{ bg: "#A1917A" }}
          
            borderRadius={10}
          >
            <Text  fontSize="14" fontWeight="600"
            _dark={{ color: "black" }}
            _light={{ color: "white" }}>
              登入
            </Text>
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="14"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              尚未有帳號
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("SignUpScreen");
              }}
            >
              <Text color="#FCAA87" fontWeight={"medium"} fontSize="14" ml={2}>
                註冊
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
