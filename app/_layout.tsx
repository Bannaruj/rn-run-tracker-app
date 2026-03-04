import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f7501e",
        },
        headerTitleStyle: {
          fontFamily: "Kanit_700Bold",
          fontSize: 20,
          color: "#fff",
        },
        headerTintColor: "#fff", //ปุ่มBackสีขาว
        headerBackButtonDisplayMode: "minimal", // ซ่อนข้อความบนปุ่มBack
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="run" options={{ title: "RunTracker" }} />
      <Stack.Screen name="add" options={{ title: "เพิ่มรายการวิ่ง" }} />
      <Stack.Screen name="[id]" options={{ title: "รายละเอียดการวิ่ง" }} />
    </Stack>
  );
}
