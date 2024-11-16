import React from "react";
import { Image, StyleSheet, View } from "react-native";
import color from "../config/color";

function TopScreen(props) {
  return (
    <View style={{ backgroundColor: "#000" }}>
      <View style={ch.box1}></View>
      <View style={ch.box2}></View>
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
    height: 70,
    width: 70,
    top: 50,
    left: 40,
    backgroundColor: color.secondry,
  },
  box2: {
    position: "absolute",
    height: 70,
    width: 70,
    top: 50,
    right: 40,
    backgroundColor: color.primary,
  },
  main: {
    width: "100%",
    height: "100%",
  },
});

export default TopScreen;
