import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WindowScreen from "./app/screens/WindowScreen";
import TopScreen from "./app/screens/TopScreen";

export default function App() {
  return <TopScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
