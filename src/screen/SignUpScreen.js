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
  Button,
  Toast,
} from "native-base";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [nameIsError, setNameIsError] = useState(true);
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(true);
  const [adrs, setAdrs] = useState("");
  const [tel, setTel] = useState("");
  const [password, setpassword] = useState("");
  const [passwordIsError, setpasswordIsError] = useState(true);

  const { colorMode } = useColorMode();
  const formLabelStyle = {
    color: colorMode == "light" ? "muted.700" : "white",
    fontSize: "18",
    fontWeight: 600,
  };
  const focusInputStyle = {
    borderColor: colorMode == "light" ? "muted.700" : "white",
    fontSize: "16",
  };

  const nameRegex = /^[a-zA-Z]+\w*$/;
  const emailRegex = /\w{3,}@[a-zA-Z_]+\.[a-zA-Z]{2,5}/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  return (
    <ScrollView>
      <VStack space={2} mt={10} width="80%" alignSelf="center">
        <FormControl mb={5} isRequired isInvalid={nameIsError}>
          <FormControl.Label _text={formLabelStyle}>姓名</FormControl.Label>
          <Input
            variant="underlined"
            _focus={focusInputStyle}
            value={name}
            onChangeText={(text) => {
              setName(text);
              if (text.match(nameRegex)) setNameIsError(false);
              else setNameIsError(true);
            }}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            必須填寫有效名稱
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl mb={5} isRequired isInvalid={emailIsError}>
          <FormControl.Label _text={formLabelStyle}>電子郵件</FormControl.Label>
          <Input
            variant="underlined"
            _focus={focusInputStyle}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (text.match(emailRegex)) setEmailIsError(false);
              else setEmailIsError(true);
            }}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            必須填寫有效電子郵件
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl mb={5} isRequired isInvalid={passwordIsError}>
          <FormControl.Label _text={formLabelStyle}>密碼</FormControl.Label>
          <Input
            variant="underlined"
            _focus={focusInputStyle}
            value={password}
            onChangeText={(text) => {
              setpassword(text);
              if (text.match(passwordRegex)) setpasswordIsError(false);
              else setpasswordIsError(true);
            }}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            必須填寫有效密碼
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl mb={5} isRequired>
          <FormControl.Label _text={formLabelStyle}>住址</FormControl.Label>
          <Input
            variant="underlined"
            _focus={focusInputStyle}
            value={adrs}
            onChangeText={(text) => setAdrs(text)}
          />
        </FormControl>
        <FormControl mb={5} isRequired>
          <FormControl.Label _text={formLabelStyle}>電話號碼</FormControl.Label>
          <Input
            variant="underlined"
            _focus={focusInputStyle}
            value={tel}
            onChangeText={(text) => setTel(text)}
          />
        </FormControl>
        <Button
          onPress={() => Toast.show({ description: "已提交" })}
          mt="2"
          colorScheme="violet"
          width="60%"
          alignSelf="center"
          mb={5}
        >
          <Text color={"white"} fontSize="14" fontWeight="600">
            確認提交
          </Text>
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default SignUpScreen;
