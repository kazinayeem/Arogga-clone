import AuthButton from "@/components/Button";
import CustomModal from "@/components/CustomModal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456789");
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const submitform = () => {
    setModalVisible(true);
    const errormessage = { email: "", password: "" };
    if (!email) {
      errormessage.email = "Email is required";
    }
    if (!password) {
      errormessage.password = "Password is required";
    }
    if (Object.keys(errormessage).length > 0) {
      setError(errormessage);
      return;
    }
    setError({ email: "", password: "" });

    console.log("Form submitted with email:", email, "and password:", password);
  };

  const headerHeight = useHeaderHeight();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 24,
        marginTop: headerHeight,
      }}
    >
      <CustomModal
        title="Yeah! Welcome Back"
        description="You have successfully logged in to your account."
        btnaction={() => {
          setModalVisible(false);
          router.push("/(home)/Home");
        }}
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "#F9FAFB",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderColor: error.email ? "red" : "#E5E7EB",
          }}
        >
          <AntDesign
            name="mail"
            size={20}
            color={error.email ? "red" : "#E5E7EB"}
            style={{ marginRight: 8 }}
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ flex: 1, fontSize: 16 }}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            returnKeyType="next"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "#F9FAFB",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderColor: error.password ? "red" : "#E5E7EB",
            marginTop: 16,
          }}
        >
          <AntDesign
            name="lock"
            size={20}
            color={error.password ? "red" : "#E5E7EB"}
            style={{ marginRight: 8 }}
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ flex: 1, fontSize: 16 }}
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

        <TouchableOpacity style={{ marginTop: 8, alignSelf: "flex-end" }}>
          <Link href="/(auth)/ForgotPassword" style={{ color: "#199A8E" }}>
            Forgot Password?
          </Link>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 24 }}>
        <AuthButton
          onPress={submitform}
          color="white"
          title="Login"
          icon={<AntDesign name="arrowright" size={24} color="white" />}
        />
      </View>

      <View style={{ marginTop: 16, alignItems: "center" }}>
        <Text style={{ color: "gray" }}>Don't have an account?</Text>
        <Link href="/(auth)/SignUp" style={{ color: "#199A8E", marginLeft: 4 }}>
          Sign Up
        </Link>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        <Text style={{ marginHorizontal: 8, fontSize: 18, color: "gray" }}>
          or
        </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
      </View>

      <View style={{ marginTop: 24, marginBottom: 64 }}>
        <AuthButton
          onPress={() => console.log("Google login clicked")}
          backgroundColor="white"
          color="black"
          borderColor="gray"
          icon={<AntDesign name="google" size={25} color="#4285F4" />}
          title="Login with Google"
        />
        <AuthButton
          onPress={() => console.log("Apple login clicked")}
          backgroundColor="white"
          color="black"
          borderColor="gray"
          icon={<AntDesign name="apple1" size={25} color="#A2AAAD" />}
          title="Login with Apple"
        />
        <AuthButton
          onPress={() => console.log("Facebook login clicked")}
          backgroundColor="white"
          color="black"
          borderColor="gray"
          icon={<AntDesign name="facebook-square" size={25} color="blue" />}
          title="Login with Facebook"
        />
      </View>
    </View>
  );
}
