import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

export function settingScreen() {
  return (
    <View style={styles.container}>
      <Text>No settings yet.</Text>
    </View>
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
