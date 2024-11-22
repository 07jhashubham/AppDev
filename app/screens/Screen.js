import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={style.full}>{children}</SafeAreaView>;
}
const style = StyleSheet.create({
  full: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
