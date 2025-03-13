import AuthButton from "@/components/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useHeaderHeight } from "@react-navigation/elements";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ForgotPassword() {
  const [toggle, settoggle] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const headerHeight = useHeaderHeight();

  return (
    <View style={[styles.container, { marginTop: headerHeight }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Forgot Your Password?</Text>
        <Text style={styles.subtitle}>
          Enter your email address, and we will send you a link to reset your
          password.
        </Text>
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => settoggle(true)}
          style={[
            styles.toggleButton,
            toggle ? styles.activeTab : styles.inactiveTab,
          ]}
        >
          <Text
            style={[
              styles.toggleText,
              toggle ? styles.activeText : styles.inactiveText,
            ]}
          >
            Email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => settoggle(false)}
          style={[
            styles.toggleButton,
            !toggle ? styles.activeTab : styles.inactiveTab,
          ]}
        >
          <Text
            style={[
              styles.toggleText,
              !toggle ? styles.activeText : styles.inactiveText,
            ]}
          >
            Phone
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputWrapper}>
        <FontAwesome
          name={toggle ? "envelope" : "phone"}
          size={20}
          color="#199A8E"
        />
        <TextInput
          placeholder={toggle ? "Enter your email" : "Enter your phone"}
          value={toggle ? email : phone}
          style={styles.input}
          onChangeText={(text) => (toggle ? setEmail(text) : setPhone(text))}
          keyboardType={toggle ? "email-address" : "phone-pad"}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType={toggle ? "emailAddress" : "telephoneNumber"}
          returnKeyType="done"
        />
      </View>

      <View style={styles.buttonContainer}>
        <AuthButton
          onPress={() => {
            router.push({
              pathname: "/(auth)/OtpScreen",
              params: {
                data: toggle ? email : phone,
              },
            });
          }}
          color="white"
          title="Send Reset Link"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
    lineHeight: 22,
  },
  toggleContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    height: 56,
    borderRadius: 30,
    backgroundColor: "#F9FAFB",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 4,
  },
  toggleButton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 30,
  },
  activeTab: {
    backgroundColor: "white",
  },
  inactiveTab: {
    backgroundColor: "#F9FAFB",
  },
  toggleText: {
    fontSize: 16,
  },
  activeText: {
    color: "black",
    fontWeight: "bold",
  },
  inactiveText: {
    color: "#199A8E",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 25,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 40,
  },
});
