import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function OtpScreen() {
  const { email, phone } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg font-bold">Email: {email}</Text>
      <Text className="text-lg font-bold">Phone: {phone}</Text>
    </View>
  );
}
