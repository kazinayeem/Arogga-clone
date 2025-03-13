import AuthButton from "@/components/Button";
import { useHeaderHeight } from "@react-navigation/elements";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import OtpTextInput from "react-native-text-input-otp";

export default function OtpScreen() {
  const headerHeight = useHeaderHeight();
  const [otp, setOtp] = useState("");
  const { data } = useLocalSearchParams();

  return (
    <View style={[styles.container, { marginTop: headerHeight }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Verify Your Account</Text>
        <Text style={styles.subtitle}>
          Enter the OTP sent to your email or number {data}
        </Text>
      </View>

      <View style={styles.otpContainer}>
        <OtpTextInput otp={otp} setOtp={setOtp} digits={4} />
      </View>

      <View style={styles.buttonContainer}>
        <AuthButton
          title="Verify"
          onPress={() => {
            router.push({
              pathname: "/(auth)/ResetPasswordScreen",
              params: { email: data, otp: otp },
            });
          }}
        />

        <Text style={styles.resendText}>
          Didn’t receive the code? <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
    lineHeight: 22,
  },
  otpContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resendText: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 15,
  },
  resendLink: {
    color: "#16A34A",
    fontWeight: "bold",
  },
});
