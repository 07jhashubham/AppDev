import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import color from "../config/color";
import AppButton from "../components/AppButton";
function WindowScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/chair.jpg")}
      style={style.background}
    >
      <View style={{ top: 70, position: "absolute", alignItems: "center" }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/logo-red.png")}
        />
        <Text style={{ fontSize: 25, fontWeight: "600", paddingVertical: 10 }}>
          Sell what you don't need
        </Text>
      </View>
      <View style={style.button}>
        <AppButton title={"Login"} />
        <AppButton title={"Register"} colors="secondry" />
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    padding: 20,
    width: "100%",
  },
});

export default WindowScreen;
