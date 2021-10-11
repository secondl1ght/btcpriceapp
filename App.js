import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { priceScreen } from "./components/pricescreen";
import { calcScreen } from "./components/calcscreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ tabBarHideOnKeyboard: true }}
        tabBarOptions={{
          showLabel: false,
          style: {
            borderRadius: 15,
            ...styles.shadow,
            headerShown: "false",
            tabBarHideOnKeyboard: true,
          },
        }}
      >
        <Tab.Screen
          name="Price"
          component={priceScreen}
          options={{
            headerShown: "false",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("./assets/icons/price.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#F7931A" : "#000000",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#F7931A" : "#000000",
                    fontSize: 12,
                  }}
                >
                  PRICE
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Calculator"
          component={calcScreen}
          options={{
            headerShown: "false",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("./assets/icons/calc.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#F7931A" : "#000000",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#F7931A" : "#000000",
                    fontSize: 12,
                  }}
                >
                  CALCULATOR
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
