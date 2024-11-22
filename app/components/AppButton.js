import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import color from "../config/color";
function AppButton({ title, onPress, colors = "primary" }) {
  return (
    <TouchableOpacity
      style={[style.button, { backgroundColor: color[colors] }]}
      onPress={onPress}
    >
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: color.white,
  },
});

export default AppButton;
