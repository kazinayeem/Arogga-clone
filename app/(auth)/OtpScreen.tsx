import AuthButton from "@/components/Button";
import { useHeaderHeight } from "@react-navigation/elements";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import OtpTextInput from "react-native-text-input-otp";
export default function OtpScreen() {
  const headerHeight = useHeaderHeight();
  const [otp, setOtp] = useState("");
  const { data } = useLocalSearchParams();

  return (
    <View
      className="flex flex-1 "
      style={{
        backgroundColor: "white",
        marginTop: headerHeight,
        padding: 10,
      }}
    >
      <View className="flex p-5 justify-center mt-5">
        <Text className="text-3xl font-bold text-black">
          Verify Your Account
        </Text>
        <Text className="text-base text-gray-500 leading-relaxed">
          Enter the OTP sent to your email or number {data}
        </Text>
      </View>
      <View className="flex items-center justify-center mt-5">
        <OtpTextInput otp={otp} setOtp={setOtp} digits={4} />
      </View>

      <View className="mt-5 flex items-center justify-center">
        <AuthButton
          title="Verify"
          onPress={() => {
            router.push({
              pathname: "/(auth)/ResetPasswordScreen",
              params: { email: data, otp: otp },
            });
          }}
        />

        <Text className="text-base text-gray-500 leading-relaxed mt-5">
          Didn’t receive the code?{" "}
          <Text className="text-green-400">Resend</Text>
        </Text>
      </View>
    </View>
  );
}
