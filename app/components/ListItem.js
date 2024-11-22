import React from "react";
import { View, Image, Text } from "react-native";

function ListItem(props) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
      <Image
        style={{ borderRadius: 35, width: 75, height: 75, marginRight: 20 }}
        source={props.image}
      />
      <View>
        <Text style={{ fontSize: 25 }}>{props.title}</Text>
        <Text style={{ color: "gray" }}>{props.subTitle}</Text>
      </View>
    </View>
  );
}

export default ListItem;
