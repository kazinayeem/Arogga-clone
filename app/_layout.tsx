import { Stack } from "expo-router";
import "react-native-reanimated";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack initialRouteName="(home)">
      <Stack.Screen
        name="(home)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(onboarding)"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          animation: "flip",
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          animation: "flip",
        }}
      />

      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
