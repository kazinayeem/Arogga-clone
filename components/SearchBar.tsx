import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";

export default function SearchBar() {
  const [search, setSearch] = React.useState<string>("");
  return (
    <View style={styles.searchContainer}>
      <EvilIcons name="search" size={25} color="gray" />
      <TextInput
        onFocus={() => {
          router.navigate("/SearchScreen");
        }}
        value={search}
        onChangeText={setSearch}
        placeholder="Search for health solution"
        style={styles.searchInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    color: "#333",
  },
});
