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
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          登入您的帳號
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
         
        </Heading>

        <VStack space={3} mt="5" >
          <FormControl>
            <FormControl.Label>
              <Text  fontSize="18" fontWeight="600">電子郵件</Text>
              </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>
            <Text  fontSize="18" fontWeight="600">密碼</Text>
            </FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "14",
                fontWeight: "500",
                color:"#6200EE",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              忘記密碼
            </Link>
          </FormControl>
          <Button mt="2" colorScheme='violet' width="40%" alignSelf="center">
            <Text color={"white"} fontSize="14" fontWeight="600">登入</Text>
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
              <Text color="#6200EE" fontWeight={"medium"} fontSize="14" ml={2}>
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
