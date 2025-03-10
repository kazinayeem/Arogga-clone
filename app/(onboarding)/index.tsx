import { View, Text, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { Link, router } from "expo-router";

export default function Index() {
  // when load and change the status bar color to white
  useEffect(() => {
    StatusBar.setBackgroundColor("#199A8E");
    // setInterval(() => {
    //   router.push("/(onboarding)/Slider");
    // }, 1000);
    
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-[#199A8E]">
      <Image
        source={require("@/assets/images/mainlogo.png")}
        alt="logo"
        className="w-1/2 h-1/2"
        resizeMode="contain"
      />

      {/* next page */}
      <Link href="/(onboarding)/Slider">
        <View className="bg-white w-20 h-20 rounded-full items-center justify-center shadow-lg mt-10">
          <Text className="text-[#199A8E] text-xl font-bold">Next</Text>
        </View>
      </Link>
    </View>
  );
}
