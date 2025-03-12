import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="Login"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Login",
          headerShadowVisible: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          animation: "fade_from_bottom",
        }}
      />

      <Stack.Screen
        name="SignUp"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Sign Up",
          headerShadowVisible: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{
          headerTitleAlign: "center",
          headerTitle: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Verify OTP",
          headerShadowVisible: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
}
