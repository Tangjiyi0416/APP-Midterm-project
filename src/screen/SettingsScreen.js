import React from "react";
import { Box } from "native-base";
import ListItem from "../Settings/ListItem";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SettingsScreen = ({ navigation }) => {
  return (
    <Box mt="1">
      <ListItem
        title="登入/註冊"
        navigation={navigation}
        destination="LoginScreen"
        icon="icon1"
      />
      <ListItem title="個人資料" navigation={navigation} icon="icon2" />
      <ListItem title="字體大小" navigation={navigation} icon="icon3" />
      <ListItem title="語言轉換" navigation={navigation} icon="icon4" />
      <ListItem
        title="深淺主題"
        navigation={navigation}
        destination="DisplaySetting"
        icon="icon5"
      />
    </Box>
  );
};

export default SettingsScreen;
