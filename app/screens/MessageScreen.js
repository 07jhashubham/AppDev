import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "./Screen";
import ListItemCom from "../components/ListItemCom";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    asset: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    asset: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    asset: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.asset}
            title={item.title}
            subTitle={item.description}
          />
        )}
        ItemSeparatorComponent={<ListItemCom />}
      />
    </Screen>
  );
}

export default MessageScreen;
