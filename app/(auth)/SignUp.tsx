import AuthButton from "@/components/Button";
import CustomModal from "@/components/CustomModal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
export default function SignUp() {
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitform = () => {
    const errormessage: { email: string; password: string; name: string } = {
      email: "",
      password: "",
      name: "",
    };
    if (!email) {
      errormessage.email = "Email is required";
    }
    if (!password) {
      errormessage.password = "Password is required";
    }
    if (!name) {
      errormessage.name = "Name is required";
    }
    if (Object.keys(errormessage).length > 0) {
      setError(errormessage);
      return;
    }
    setError({
      email: "",
      password: "",
      name: "",
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
            error.name ? "border-red-500" : "border-[#E5E7EB]"
          }`}
        >
          <AntDesign
            name="mail"
            size={20}
            color={`${error.name ? "red" : "#E5E7EB"}`}
            className="mr-2"
          />
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
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
          <TouchableOpacity className="flex flex-row items-center ">
            <BouncyCheckbox
              textStyle={{ textDecorationLine: "none" }}
              size={20}
              fillColor="#199A8E"
              unFillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 1 }}
              text="I agree to the terms and conditions"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <View className="mt-6">
          <AuthButton
            onPress={submitform}
            color="white"
            title="Sign Up"
            icon={<AntDesign name="arrowright" size={24} color="white" />}
          />
        </View>

        {/* dont hav an account text */}
        <View className="flex mt-2"></View>
        <TouchableOpacity className="flex flex-row items-center justify-center">
          <Text className="text-gray-500">Already have an account?</Text>
          <Text className="text-green-500 ml-1">
            <Link href="/(auth)/Login">Login</Link>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
