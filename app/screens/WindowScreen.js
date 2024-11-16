import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import color from "../config/color";
function WindowScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/chair.jpg")}
      style={style.background}
    >
      <View style={{ top: 70, position: "absolute", alignItems: "center" }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/logo-red.png")}
        />
        <Text style={{ fontSize: 20 }}>Sell what you don't need</Text>
      </View>
      <View style={style.box1}></View>
      <View style={style.box2}></View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  box1: {
    width: "100%",
    height: 70,
    backgroundColor: color.secondry,
  },
  box2: {
    width: "100%",
    height: 70,
    backgroundColor: color.primary,
  },
});

export default WindowScreen;
