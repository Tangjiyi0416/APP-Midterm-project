import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Button,
  Linking,
} from "react-native";
// import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import foodData from "../json/food.json";
const Starbar = (props) => {
  if (props.star == 1) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 2) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 3) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 4) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"gray"} size={18} />
      </View>
    );
  } else if (props.star == 5) {
    return (
      <View style={styles.starFlex}>
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
        <MaterialCommunityIcons name="star" color={"#FCAA87"} size={18} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  starFlex: {
    flexDirection: "row",
  },
});

export default Starbar;
