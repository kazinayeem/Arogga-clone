import AuthButton from "@/components/Button";
import CustomModal from "@/components/CustomModal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useHeaderHeight } from "@react-navigation/elements";
import { router } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export default function ResetPasswordScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [error, setError] = React.useState({
    password: "",
  });
  const headerHeight = useHeaderHeight();
  return (
    <View
      className="flex flex-1 bg-white px-6"
      style={{
        backgroundColor: "white",
        marginTop: headerHeight,
        padding: 10,
      }}
    >
      <CustomModal
        title="Success"
        description="Your password has been reset successfully."
        btnaction={() => {
          router.replace("/(auth)/Login");
        }}
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Text className="text-3xl mb-5 font-bold text-black">
        Create New Password
      </Text>
      <Text className="text-base text-gray-500 leading-relaxed mb-5">
        Create your new password to access your account. Your password must be
        at least 8 characters
      </Text>

      <View className="flex flex-col mt-5 gap-7">
        <View
          className={`flex flex-row items-center border  rounded-full bg-[#F9FAFB] px-4 py-1 ${
            error.password ? "border-red-500" : "border-[#E5E7EB]"
          }`}
        >
          <AntDesign
            name="lock"
            size={20}
            color={`${error.password ? "red" : "#E5E7EB"}`}
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

        <View
          className={`flex flex-row items-center border  rounded-full bg-[#F9FAFB] px-4 py-1 ${
            error.password ? "border-red-500" : "border-[#E5E7EB]"
          }`}
        >
          <AntDesign
            name="lock"
            size={20}
            color={`${error.password ? "red" : "#E5E7EB"}`}
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
