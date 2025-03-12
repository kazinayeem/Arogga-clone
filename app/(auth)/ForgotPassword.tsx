import AuthButton from "@/components/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useHeaderHeight } from "@react-navigation/elements";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export default function ForgotPassword() {
  const [toggle, settoggle] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const headerHeight = useHeaderHeight();
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: headerHeight,
        flex: 1,
        padding: 10,
      }}
    >
      <View className="px-6 ">
        <Text className="text-2xl font-bold text-black">
          Forgot Your Password?
        </Text>
        <Text className="text-base text-gray-500 mt-2 leading-relaxed">
          Enter your email address, and we will send you a link to reset your
          password.
        </Text>
      </View>
      <View className="flex self-center w-[100%] h-14 flex-row items-center justify-between border border-gray-200 rounded-full bg-[#F9FAFB] px-4 py-1">
        <TouchableOpacity
          onPress={() => settoggle(true)}
          className={`w-[50%] justify-center items-center h-full rounded-full ${
            toggle ? "bg-white" : "bg-[#F9FAFB]"
          }`}
        >
          <Text className={toggle ? "text-black" : "text-green-400"}>
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => settoggle(false)}
          className={`w-[50%] justify-center items-center h-full rounded-full ${
            !toggle ? "bg-white" : "bg-[#F9FAFB]"
          }`}
        >
          <Text className={!toggle ? "text-black" : "text-green-400"}>
            Phone
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex mt-5 flex-row items-center border border-gray-200 gap-3 rounded-full bg-[#F9FAFB] px-4 py-2">
        <FontAwesome
          name={toggle ? "envelope" : "phone"}
          size={20}
          color="#199A8E"
        />
        <TextInput
          placeholder={toggle ? "Enter your email" : "Enter your phone"}
          value={toggle ? email : phone}
          className="flex-1 bg-transparent px-3 text-gray-700 placeholder-gray-400"
          onChangeText={(text) => (toggle ? setEmail(text) : setPhone(text))}
          keyboardType={toggle ? "email-address" : "phone-pad"}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType={toggle ? "emailAddress" : "telephoneNumber"}
          returnKeyType="done"
        />
      </View>
      <View className="flex mt-10 w[100%] ">
        <AuthButton
          onPress={() => {
            router.push({
              pathname: "/(auth)/OtpScreen",
              params: { email, phone },
            });
          }}
          color="white"
          title="Send Reset Link"
        />
      </View>
    </View>
  );
}
