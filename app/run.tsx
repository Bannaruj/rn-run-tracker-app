import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Run() {
  return (
    <View style={styles.container}>
      <Text>Run</Text>
      <TouchableOpacity
        style={styles.floatingBtn}
        onPress={() => router.push("/add")}
      >
        <Ionicons name="add" size={14} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingBtn: {
    padding: 10,
    backgroundColor: "#f7501e",
    width: 50,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 60,
    right: 40,
    elevation: 5,
  },
  container: {
    flex: 1,
  },
});
