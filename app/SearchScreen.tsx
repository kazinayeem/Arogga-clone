import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function SearchScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  }, []);

  return (
    <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
      <EvilIcons name="arrow-left" size={28} onPress={() => router.back()} />
      <TextInput
        ref={searchInputRef}
        value={search}
        onChangeText={setSearch}
        placeholder="Search here..."
        style={{
          flex: 1,
          padding: 10,
          borderBottomWidth: 1,
          borderColor: "#ccc",
        }}
      />
    </View>
  );
}
