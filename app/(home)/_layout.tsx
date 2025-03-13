import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";
import React from "react";
export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
