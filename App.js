import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { priceScreen } from "./components/pricescreen";
import { calcScreen } from "./components/calcscreen";
import { settingScreen } from "./components/settingscreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({ tabBarStyle: { backgroundColor: "lightgrey" } },
          { tabBarActiveTintColor: "black" })
        }
      >
        <Tab.Screen name="Price" component={priceScreen} />
        <Tab.Screen name="Calculator" component={calcScreen} />
        <Tab.Screen name="Settings" component={settingScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
