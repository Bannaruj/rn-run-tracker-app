import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
const runimg = require("@/assets/images/Run_icon.png");

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/run");
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image source={runimg} style={styles.img} />
      <Text style={styles.appname}>Run Tracker</Text>
      <Text style={styles.appthainame}>วิ้งเพื่อสุขภาพ</Text>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

  img: { width: 200, height: 200 },

  appname: {
    fontFamily: "Kanit_700Bold",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  appthainame: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
});
