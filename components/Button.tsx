import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

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
      style={[
        styles.button,
        { backgroundColor },
        borderColor ? { borderWidth: 1, borderColor } : {},
      ]}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <View style={styles.contentContainer}>
          {icon && iconPosition === "left" && (
            <View style={styles.iconLeft}>{icon}</View>
          )}
          <Text style={[styles.text, { color }]}>{title}</Text>
          {icon && iconPosition === "right" && (
            <View style={styles.iconRight}>{icon}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: "100%",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    flexDirection: "row",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});
