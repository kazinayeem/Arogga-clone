import AuthButton from "@/components/Button";
import CustomModal from "@/components/CustomModal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function SignUp() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState({ name: "", email: "", password: "" });

  const submitform = () => {
    const errormessage = { email: "", password: "", name: "" };

    if (!email) errormessage.email = "Email is required";
    if (!password) errormessage.password = "Password is required";
    if (!name) errormessage.name = "Name is required";

    if (errormessage.email || errormessage.password || errormessage.name) {
      setError(errormessage);
      return;
    }

    setModalVisible(true);
    setError({ email: "", password: "", name: "" });
  };

  const headerHeight = useHeaderHeight();

  return (
    <View style={[styles.container, { marginTop: headerHeight }]}>
      <CustomModal
        title="Success!"
        description="You have successfully signed up."
        btnaction={() => router.push("/(tabs)")}
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <View style={styles.formContainer}>
        <View style={[styles.inputContainer, error.name && styles.errorBorder]}>
          <AntDesign
            name="user"
            size={20}
            color={error.name ? "red" : "#E5E7EB"}
          />
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder="Name"
          />
        </View>

        <View
          style={[styles.inputContainer, error.email && styles.errorBorder]}
        >
          <AntDesign
            name="mail"
            size={20}
            color={error.email ? "red" : "#E5E7EB"}
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View
          style={[styles.inputContainer, error.password && styles.errorBorder]}
        >
          <AntDesign
            name="lock"
            size={20}
            color={error.password ? "red" : "#E5E7EB"}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <AntDesign
              name={passwordVisible ? "eye" : "eyeo"}
              size={20}
              color="#E5E7EB"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            style={{ padding: 0, width: "10%" }}
            textStyle={{ textDecorationLine: "none" }}
            size={20}
            fillColor="#199A8E"
          />
          <Text style={styles.checkboxText}>
            I agree to the terms and conditions
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <AuthButton
            onPress={submitform}
            color="white"
            title="Sign Up"
            icon={<AntDesign name="arrowright" size={24} color="white" />}
          />
        </View>

        <TouchableOpacity style={styles.loginRedirect}>
          <Text style={styles.grayText}>Already have an account?</Text>
          <Text style={styles.greenText}>
            <Link href="/(auth)/Login">Login</Link>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 24,
  },
  formContainer: {
    marginTop: 40,
    gap: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: "#E5E7EB",
  },
  errorBorder: {
    borderColor: "red",
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  checkboxText: {
    marginLeft: 0,
    color: "#4B5563",
  },
  buttonContainer: {
    marginTop: 24,
  },
  loginRedirect: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  grayText: {
    color: "#6B7280",
  },
  greenText: {
    color: "#10B981",
    marginLeft: 4,
  },
});
