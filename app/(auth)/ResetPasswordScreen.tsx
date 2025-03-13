import AuthButton from "@/components/Button";
import CustomModal from "@/components/CustomModal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useHeaderHeight } from "@react-navigation/elements";
import { router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ResetPasswordScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [error, setError] = React.useState({
    password: "",
  });
  const headerHeight = useHeaderHeight();

  return (
    <View style={[styles.container, { marginTop: headerHeight }]}>
      <CustomModal
        title="Success"
        description="Your password has been reset successfully."
        btnaction={() => {
          router.replace("/(auth)/Login");
        }}
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Text style={styles.title}>Create New Password</Text>
      <Text style={styles.description}>
        Create your new password to access your account. Your password must be
        at least 8 characters
      </Text>

      <View style={styles.inputContainer}>
        <View
          style={[
            styles.inputWrapper,
            error.password ? styles.errorBorder : styles.defaultBorder,
          ]}
        >
          <AntDesign
            name="lock"
            size={20}
            color={error.password ? "red" : "#E5E7EB"}
            style={styles.icon}
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
            textContentType="password"
            returnKeyType="done"
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

        <View
          style={[
            styles.inputWrapper,
            error.password ? styles.errorBorder : styles.defaultBorder,
          ]}
        >
          <AntDesign
            name="lock"
            size={20}
            color={error.password ? "red" : "#E5E7EB"}
            style={styles.icon}
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry={!passwordVisible}
            textContentType="password"
            returnKeyType="done"
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

        <AuthButton
          onPress={() => {
            console.log("Reset Password clicked");
            setModalVisible(true);
          }}
          color="white"
          title="Reset Password"
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#6B7280", // Gray-500
    lineHeight: 22,
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginBottom: 12,
  },
  defaultBorder: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: "red",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
