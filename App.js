import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WindowScreen from "./app/screens/WindowScreen";
import TopScreen from "./app/screens/TopScreen";
import Cards from "./app/screens/Cards";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";

export default function App() {
  return (
    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   <Cards
    //     image={require("./app/assets/jacket.jpg")}
    //     title={"Red Jacket Zara"}
    //     price={"$100"}
    //   />
    // </View>
    // <TopScreen />
    <MessageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
