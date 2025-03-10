import AuthButton from "@/components/Button";
import CustomModal from "@/components/CustomModal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitform = () => {
    const errormessage: { email: string; password: string } = {
      email: "",
      password: "",
    };
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
    setError({
      email: "",
      password: "",
    });
    setModalVisible(true);
    console.log(
      "Form submitted with email:",
      email,
      "and password  :",
      password
    );
  };

  const headerHeight = useHeaderHeight();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View
      className="flex-1 flex justify-between bg-white px-6"
      style={{ marginTop: headerHeight }}
    >
      {/* Input Fields */}
      <CustomModal
        title="Yeah! Welcome Back"
        description="You have successfully logged in to your account."
        btnaction={() => {
          console.log("Modal button clicked");
        }}
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <View className="mt-10 space-y-4 flex flex-col gap-5">
        <View
          className={`flex flex-row items-center border  rounded-xl bg-[#F9FAFB] px-4 py-1 ${
            error.email ? "border-red-500" : "border-[#E5E7EB]"
          }`}
        >
          <AntDesign
            name="mail"
            size={20}
            color={`${error.email ? "red" : "#E5E7EB"}`}
            className="mr-2"
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            className="flex-1 text-base"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            returnKeyType="next"
          />
        </View>

        <View
          className={`flex flex-row items-center border  rounded-xl bg-[#F9FAFB] px-4 py-1 ${
            error.password ? "border-red-500" : "border-[#E5E7EB]"
          }`}
        >
          <AntDesign
            name="lock"
            size={20}
            color={`${error.email ? "red" : "#E5E7EB"}`}
            className="mr-2"
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="flex-1 text-base"
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
        {/* forgot passowrd */}
        <View className="flex mt-2">
          <TouchableOpacity className="flex flex-row items-center justify-end">
            <Text className="text-green-500">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <View className="mt-6">
          <AuthButton
            onPress={submitform}
            color="white"
            title="Login"
            icon={<AntDesign name="arrowright" size={24} color="white" />}
          />
        </View>
      </View>
      {/* do u haave an account */}
      <View className="flex mt-2">
        <TouchableOpacity className="flex flex-row items-center justify-center">
          <Text className="text-gray-500">Don't have an account?</Text>
          <Text className="text-green-500 ml-1">
            <Link href="/(auth)/SignUp">Sign Up</Link>
          </Text>
        </TouchableOpacity>
      </View>

      {/* -----------or--------- */}
      <View className="flex flex-row items-center justify-center mt-4">
        <View className="flex-1 border border-gray-300 h-[1px]" />
        <Text className="mx-2 text-xl text-gray-500">or</Text>
        <View className="flex-1 border border-gray-300 h-[1px]" />
      </View>

      {/* Social Login Buttons */}
      <View className="mt-8 space-y-3 mb-16">
        <AuthButton
          onPress={() => {
            console.log("Apple login clicked");
          }}
          backgroundColor="white"
          color="black"
          borderColor="gray-300"
          icon={<AntDesign name="google" size={25} color="#4285F4" />}
          title="Login with Google"
        />
        <AuthButton
          backgroundColor="white"
          color="black"
          borderColor="gray-300"
          onPress={() => {
            console.log("Apple login clicked");
          }}
          icon={<AntDesign name="apple1" size={25} color="#A2AAAD" />}
          title="Login with Apple"
        />
        <AuthButton
          onPress={() => {
            console.log("Apple login clicked");
          }}
          backgroundColor="white"
          color="black"
          borderColor="gray-300"
          icon={<AntDesign name="facebook-square" size={25} color="blue" />}
          title="Login with Facebook"
        />
      </View>
    </View>
  );
}
