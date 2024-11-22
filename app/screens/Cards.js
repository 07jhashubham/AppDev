import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import color from "../config/color";

function Cards(props) {
  return (
    <View
      style={{
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "#fff",
        marginTop: 20,
      }}
    >
      <Image style={{ width: "100%", height: 200 }} source={props.image} />
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20 }}>{props.title}</Text>
        <Text style={style.tp}>{props.price}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  tp: {
    color: color.primary,
    fontSize: 20,
    marginTop: 7,
    fontWeight: "bold",
  },
});

export default Cards;
