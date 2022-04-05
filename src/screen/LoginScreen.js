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
          Welcome
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
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("SignUpScreen");
              }}
            >
              <Text color="indigo.500" fontWeight={"medium"} fontSize="sm">
                Sign Up
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
