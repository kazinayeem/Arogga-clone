import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  borderColor?: string;
}

export default function AuthButton({
  title,
  onPress,
  color = "#FFFFFF",
  backgroundColor = "#199A8E",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  borderColor,
}: AuthButtonProps) {
  return (
    <TouchableOpacity
      className={`m-auto  w-[85%] h-16 rounded-full items-center justify-center mb-2 flex-row flex ${
        borderColor ? "border" : ""
      }`}
      style={{ backgroundColor }}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <View className="flex-row items-center">
          {icon && iconPosition === "left" && (
            <View className="mr-2">{icon}</View>
          )}
          <Text className="font-semibold text-xl" style={{ color }}>
            {title}
          </Text>
          {icon && iconPosition === "right" && (
            <View className="ml-2">{icon}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}
