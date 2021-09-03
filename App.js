import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { priceScreen } from "./components/pricescreen";
import { calcScreen } from "./components/calcscreen";
import { settingScreen } from "./components/settingscreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Price" component={priceScreen} />
        <Tab.Screen name="Calculator" component={calcScreen} />
        <Tab.Screen name="Settings" component={settingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
