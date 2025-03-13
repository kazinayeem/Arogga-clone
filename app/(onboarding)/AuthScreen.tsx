import AuthButton from "@/components/Button";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Image
        source={require("@/assets/images/mainlogo.png")}
        tintColor={"#199A8E"}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Let's Get Started</Text>
      <Text style={styles.subtitle}>
        Create an account to get started with the app. It’s quick and easy.
      </Text>

      <View style={styles.buttonContainer}>
        <AuthButton
          title="Login"
          onPress={() => {
            router.navigate("/(auth)/Login");
          }}
        />
        <AuthButton
          title="Sign Up"
          onPress={() => {
            router.navigate("/(auth)/SignUp");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "50%",
    height: "50%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    width: "80%",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
