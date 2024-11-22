import React from "react";
import { Image, StyleSheet, View } from "react-native";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function TopScreen(props) {
  return (
    <View style={{ backgroundColor: "#000" }}>
      <View style={ch.box1}>
        <MaterialCommunityIcons name="close" color={"white"} size={40} />
      </View>
      <View style={ch.box2}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={"white"}
          size={40}
        />
      </View>
      <Image
        resizeMode="contain"
        style={ch.main}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const ch = StyleSheet.create({
  box1: {
    position: "absolute",

    top: 50,
    left: 40,
  },
  box2: {
    position: "absolute",

    top: 50,
    right: 40,
  },
  main: {
    width: "100%",
    height: "100%",
  },
});

export default TopScreen;
