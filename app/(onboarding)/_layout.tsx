import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      {/* Onboarding page */}
      <Stack.Screen name="Slider" options={{ headerShown: false }} />
      <Stack.Screen name="AuthScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
