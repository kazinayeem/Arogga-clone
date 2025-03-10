import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import AuthButton from "./Button";

interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  btnaction: () => void;
  title?: string;
  description?: string;
}

export default function CustomModal({
  isVisible,
  onClose,
  title,
  description,
  btnaction,
}: CustomModalProps) {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View
        style={{
          width: "90%",
          height: "60%",
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          padding: 30,
        }}
      >
        <View style={{ marginBottom: 20, marginTop: 10, alignItems: "center" }}>
          <Ionicons
            name="checkmark-circle-outline"
            size={100}
            color={"#199A8E"}
          />
        </View>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 16, color: "gray", textAlign: "center" }}>
          {description}
        </Text>
        <AuthButton title="Continue" onPress={btnaction} color={"white"} />
      </View>
    </Modal>
  );
}
