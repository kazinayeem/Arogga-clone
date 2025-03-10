import AuthButton from "@/components/Button";
import { router } from "expo-router";
import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function AuthScreen() {
  return (
    <View className="flex-1 flex w-full m-auto bg-white items-center justify-center">
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Image
        source={require("@/assets/images/mainlogo.png")}
        alt="logo"
        tintColor={"#199A8E"}
        className="w-1/2 h-1/2"
        resizeMode="contain"
      />

      <Text className="text-3xl font-bold text-black mb-5">
        Let's Get Stated
      </Text>
      <Text className="text-lg text-gray-400 mb-5 text-center w-4/5">
        Create an account to get started with the app. It’s quick and easy.
      </Text>

      {/* */}
      <View className="flex flex-col w-full justify-between px-5 mb-5">
        <TouchableOpacity
          className="bg-[#199A8E] m-auto w-[85%] h-16 rounded-full items-center justify-center mb-2"
          activeOpacity={0.7}
        >
          <Text className="font-semibold text-white text-xl">
            Continue with Apple
          </Text>
        </TouchableOpacity>
        <AuthButton
          title="Login"
          onPress={() => {
            router.navigate("/(auth)/Login");
          }}
        />
        <AuthButton
          title="Sign Up"
          onPress={() => {
            console.log("Button pressed");
          }}
        />
      </View>
    </View>
  );
}
