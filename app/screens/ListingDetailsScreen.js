import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import color from "../config/color";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={{ height: 300, width: "100%" }}
        source={require("../assets/jacket.jpg")}
      />
      <View style={style.compo}>
        <Text style={style.title}>Red Jacket Zara on Sale!</Text>
        <Text style={style.subTitle}>$100</Text>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title={"Justin Kumar"}
          subTitle={"5 Listing"}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  compo: {
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontWeight: "500",
    fontSize: 20,
    color: color.primary,
    paddingVertical: 10,
  },
});

export default ListingDetailsScreen;
