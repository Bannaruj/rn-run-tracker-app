import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="home"
        options={{
          title: "Top 10 Bangkok coffee",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "#714503",
          },
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: "รายละเอียดร้าน",
          headerBackButtonDisplayMode: "minimal",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Kanit_400Regular",
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "#714503",
          },
        }}
      />
    </Stack>
  );
}
